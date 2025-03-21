
const VARIABLES = [
    { id: 'user_name', label: 'User Name', value: '{{user_name}}' },
      { id: 'company', label: 'Company', value: '{{company}}' },
      { id: 'email', label: 'Email Address', value: '{{email}}' },
      { id: 'date', label: 'Current Date', value: '{{date}}' },
      { id: 'subscription_plan', label: 'Subscription Plan', value: '{{subscription_plan}}' },
      { id: 'account_balance', label: 'Account Balance', value: '{{account_balance}}' },
      { id: 'support_phone', label: 'Support Phone', value: '{{support_phone}}' },
      { id: 'website_url', label: 'Website URL', value: '{{website_url}}' }

]

export function insertVariables(){
    const container = document.getElementById('variables-container');

    VARIABLES.forEach(variable =>{
        const node =document.createElement('div')
        node.classList.add('variable-node')

        const label =document.createElement('div')
        label.classList.add('variable-label')
        label.textContent = variable.label;

        const value =document.createElement('div')
        value.classList.add('variable-value')
        value.textContent = variable.value;

        node.appendChild(label)
        node.appendChild(value)
        container.appendChild(node)
    })
}