<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateInvoice } from '../utils/invoiceCalculator.js';

useHead({
	title: 'Nepal Invoice Generator - Free Invoice Maker',
	meta: [
		{
			name: 'description',
			content:
				'Create a professional invoice online for free. Add products or services, calculate totals, discount and VAT, and print your invoice.'
		}
	]
});

const businessName = ref('');
const businessAddress = ref('');
const businessPhone = ref('');

const customerName = ref('');
const customerAddress = ref('');
const customerPhone = ref('');

const invoiceNumber = ref('INV-001');
const invoiceDate = ref(new Date().toISOString().slice(0, 10));

const items = ref([
	{
		description: '',
		quantity: 1,
		rate: 0
	}
]);

const discount = ref(0);
const vatRate = ref(13);
const notes = ref('');

const invoice = computed(() =>
	calculateInvoice(items.value, discount.value, vatRate.value)
);

function addItem() {
	items.value.push({
		description: '',
		quantity: 1,
		rate: 0
	});
}

function removeItem(index) {
	if (items.value.length === 1) {
		return;
	}

	items.value.splice(index, 1);
}

function formatNumber(value) {
	return new Intl.NumberFormat('en-NP', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(value);
}

function resetInvoice() {
	businessName.value = '';
	businessAddress.value = '';
	businessPhone.value = '';

	customerName.value = '';
	customerAddress.value = '';
	customerPhone.value = '';

	invoiceNumber.value = 'INV-001';
	invoiceDate.value = new Date().toISOString().slice(0, 10);

	items.value = [
		{
			description: '',
			quantity: 1,
			rate: 0
		}
	];

	discount.value = 0;
	vatRate.value = 13;
	notes.value = '';
}

function printInvoice() {
	window.print();
}

async function downloadPdf() {
    const html2pdf = (await import('html2pdf.js')).default;
	const element = document.querySelector('.invoice-preview');

	if (!element) {
		return;
	}

	const options = {
		margin: 10,
		filename: `${invoiceNumber.value || 'invoice'}.pdf`,
		image: {
			type: 'jpeg',
			quality: 0.98
		},
		html2canvas: {
			scale: 2,
			useCORS: true
		},
		jsPDF: {
			unit: 'mm',
			format: 'a4',
			orientation: 'portrait'
		}
	};

	await html2pdf()
		.set(options)
		.from(element)
		.save();
}
</script>

<template>
	<main>
		<section class="hero invoice-hero">
			<div class="container">
				<p class="eyebrow">FREE TOOL FOR NEPAL</p>

				<h1>Invoice Generator</h1>

				<p class="hero-description">
					Create a professional invoice, calculate totals and VAT,
					and print it instantly.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="invoice-editor">
					<div class="invoice-section">
						<h2>Business Information</h2>

						<div class="invoice-form-grid">
							<div class="invoice-field">
								<label for="business-name">Business name</label>

								<input
									id="business-name"
									v-model="businessName"
									type="text"
									placeholder="Your business name"
								/>
							</div>

							<div class="invoice-field">
								<label for="business-phone">Phone</label>

								<input
									id="business-phone"
									v-model="businessPhone"
									type="text"
									placeholder="Phone number"
								/>
							</div>

							<div class="invoice-field invoice-full">
								<label for="business-address">Address</label>

								<input
									id="business-address"
									v-model="businessAddress"
									type="text"
									placeholder="Business address"
								/>
							</div>
						</div>
					</div>

					<div class="invoice-section">
						<h2>Customer Information</h2>

						<div class="invoice-form-grid">
							<div class="invoice-field">
								<label for="customer-name">Customer name</label>

								<input
									id="customer-name"
									v-model="customerName"
									type="text"
									placeholder="Customer name"
								/>
							</div>

							<div class="invoice-field">
								<label for="customer-phone">Phone</label>

								<input
									id="customer-phone"
									v-model="customerPhone"
									type="text"
									placeholder="Phone number"
								/>
							</div>

							<div class="invoice-field invoice-full">
								<label for="customer-address">Address</label>

								<input
									id="customer-address"
									v-model="customerAddress"
									type="text"
									placeholder="Customer address"
								/>
							</div>
						</div>
					</div>

					<div class="invoice-section">
						<h2>Invoice Details</h2>

						<div class="invoice-form-grid">
							<div class="invoice-field">
								<label for="invoice-number">Invoice number</label>

								<input
									id="invoice-number"
									v-model="invoiceNumber"
									type="text"
								/>
							</div>

							<div class="invoice-field">
								<label for="invoice-date">Invoice date</label>

								<input
									id="invoice-date"
									v-model="invoiceDate"
									type="date"
								/>
							</div>
						</div>
					</div>

					<div class="invoice-section">
						<div class="invoice-section-header">
							<h2>Items</h2>

							<button
								class="secondary-button"
								type="button"
								@click="addItem"
							>
								+ Add Item
							</button>
						</div>

						<div class="invoice-items">
							<div class="invoice-item-header">
								<span>Description</span>
								<span>Qty</span>
								<span>Rate</span>
								<span>Amount</span>
								<span></span>
							</div>

							<div
								v-for="(item, index) in items"
								:key="index"
								class="invoice-item-row"
							>
								<input
									v-model="item.description"
									type="text"
									placeholder="Product or service"
								/>

								<input
									v-model.number="item.quantity"
									type="number"
									min="0"
									step="any"
								/>

								<input
									v-model.number="item.rate"
									type="number"
									min="0"
									step="any"
								/>

								<strong>
									NPR {{ formatNumber(invoice.items[index].total) }}
								</strong>

								<button
									class="remove-item-button"
									type="button"
									@click="removeItem(index)"
								>
									Remove
								</button>
							</div>
						</div>
					</div>

					<div class="invoice-section">
						<h2>Charges</h2>

						<div class="invoice-form-grid">
							<div class="invoice-field">
								<label for="discount">Discount (NPR)</label>

								<input
									id="discount"
									v-model.number="discount"
									type="number"
									min="0"
									step="any"
								/>
							</div>

							<div class="invoice-field">
								<label for="vat-rate">VAT rate (%)</label>

								<input
									id="vat-rate"
									v-model.number="vatRate"
									type="number"
									min="0"
									step="any"
								/>
							</div>
						</div>
					</div>

					<div class="invoice-section">
						<label class="invoice-notes-label" for="invoice-notes">
							Notes / Payment Terms
						</label>

						<textarea
							id="invoice-notes"
							v-model="notes"
							rows="4"
							placeholder="Payment terms, bank details or other notes"
						></textarea>
					</div>
				</div>

				<div class="invoice-preview">
					<div class="invoice-preview-header">
						<div>
                            <div class="invoice-title-block">
                                <div class="invoice-label">INVOICE</div>

                                <h2>
                                    {{ businessName || 'Your Business Name' }}
                                </h2>
                            </div>

							<p v-if="businessAddress">
								{{ businessAddress }}
							</p>

							<p v-if="businessPhone">
								{{ businessPhone }}
							</p>
						</div>

						<div class="invoice-meta">
							<strong>{{ invoiceNumber }}</strong>
							<span>{{ invoiceDate }}</span>
						</div>
					</div>

					<div class="invoice-customer">
						<span>Bill To</span>

						<strong>
							{{ customerName || 'Customer Name' }}
						</strong>

						<p v-if="customerAddress">
							{{ customerAddress }}
						</p>

						<p v-if="customerPhone">
							{{ customerPhone }}
						</p>
					</div>

					<table class="invoice-table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Qty</th>
								<th>Rate</th>
								<th>Amount</th>
							</tr>
						</thead>

						<tbody>
							<tr
								v-for="(item, index) in invoice.items"
								:key="index"
							>
								<td>
									{{ item.description || 'Item' }}
								</td>

								<td>{{ item.quantity }}</td>

								<td>NPR {{ formatNumber(item.rate) }}</td>

								<td>
									NPR {{ formatNumber(item.total) }}
								</td>
							</tr>
						</tbody>
					</table>

					<div class="invoice-totals">
						<div>
							<span>Subtotal</span>
							<strong>
								NPR {{ formatNumber(invoice.subtotal) }}
							</strong>
						</div>

						<div>
							<span>Discount</span>
							<strong>
								− NPR {{ formatNumber(invoice.discount) }}
							</strong>
						</div>

						<div>
							<span>VAT ({{ invoice.vatRate }}%)</span>
							<strong>
								NPR {{ formatNumber(invoice.vatAmount) }}
							</strong>
						</div>

						<div class="invoice-grand-total">
							<span>Total</span>
							<strong>
								NPR {{ formatNumber(invoice.total) }}
							</strong>
						</div>
					</div>

					<div v-if="notes" class="invoice-notes">
						<strong>Notes</strong>
						<p>{{ notes }}</p>
					</div>
				</div>

                <div class="invoice-actions">
                    <button
                        class="reset-button"
                        type="button"
                        @click="resetInvoice"
                    >
                        Reset
                    </button>

                    <div class="invoice-export-actions">
                        <button
                            class="primary-button"
                            type="button"
                            @click="printInvoice"
                        >
                            Print Invoice
                        </button>

                        <button
                            class="primary-button"
                            type="button"
                            @click="downloadPdf"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>            
            </div>
		</section>
	</main>
</template>