function filterBy (filterValue, data) {
	const result = []
	for (const item of data) {
		const country = {
			name: item.name,
			people: []
		}
		for (const person of item.people) {
			const animals = person.animals.filter(animal => typeof animal.name === 'string' &&  animal.name.includes(filterValue))
			if (animals.length) {
				country.people.push({
					name: person.name,
					animals
				})
			}
		}
		if (country.people.length) {
			result.push(country)
		}
	}
	//console.log(JSON.stringify(result, null, 2))
	return result
}

function count (data) {
	const result = data.map(country => ({
		name: `${country.name} [${country.people.length}]`,
		people: country.people.map(person => ({
			name: `${person.name} [${person.animals.length}]`,
			animals: person.animals
		}))
	}))
	return result
}



const options = process.argv.filter(option => option.startsWith('--'))
							.reduce((options, entry) => {
								const [name, value = ''] = entry.split('=')
								options[name.substr(2)] = value.trim()
								return options
							}, {})

if (options.filter && options.filter.length) {
	const data = require('./data.json')
	filterBy(options.filter, data)
    console.log(JSON.stringify(filterBy(options.filter, data), null, 2))
}

if ('count' in options) {
	const data = require('./data.json')
	count(data)
    console.log(JSON.stringify(count(data), null, 2))
}

module.exports={filterBy, count}