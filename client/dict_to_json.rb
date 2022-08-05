require 'json'

dict_txt = open("../public/lists/dictonary.txt")
dict_json = open("./src/dictonary.json", 'w')

list = dict_txt.read.split(' ')

output = {}
list.each do |word|
    if (word.length < 11 && !word[/[^a-z]/i]) 
        output[word.downcase] = word.downcase
    end
end

dict_json.write(output.to_json)

dict_json.close
dict_txt.close