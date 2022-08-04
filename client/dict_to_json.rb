require 'json'

default = open("../public/lists/dictonary.txt")
write_to = open("./src/dictonary.json", 'w')

arr = default.read.split(' ')

output = {}
arr.each do |word|
    if (word.length < 11 && !word[/[^a-z]/i]) 
        output[word.downcase] = word.downcase
    end
end

write_to.write(output.to_json)

write_to.close
default.close