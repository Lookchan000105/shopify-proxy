export default async function handler(req, res) {
  const response = await fetch("https://modelmakertoys.com/admin/api/2023-01/products.json", {
    headers: {
      "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
