def create_list(length)
    main = open("./dictonary.txt")
    list = open("./#{length}.txt", 'w')

    arr = main.read.split(' ')

    output = []
    arr.each do |word|
        if (word.length == length.to_i && !word[/[^a-z]/i]) 
            output << word.downcase
        end
    end

    list.write(output.join("\n"))

    list.close
    main.close
end

create_list(ARGV.first)