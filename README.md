# Writing better skills with text variations

Skills may appear boring if they use the same utterances over and over again. Some solutions have been described in the past to bring variation into responses. This text is intended to share my approach with you.

## Say hello to "unwrap()"

This is a piece of code I use in almost every skill I write:

    function unwrap(text) {
        var matches, options, random;
        var regEx = new RegExp(/{([^{}]+?)}/);
        while ((matches = regEx.exec(text)) !== null) {
            options = matches[1].split("|");
            random = Math.floor(Math.random() * options.length);
            text = text.replace(matches[0], options[random]);
        }
        return text;
    }

## What does it do?

The function "**unwrap**" randomly "unwraps" text variations defined in curly braces and separated by "|". 

## How to use it?

See the following examples to get an idea for what you can do with "**unwrap**".

1. Randomly choose between one of two given options:

        let randomSpeech = unwrap("{Hello|Hi");

2. You are not limited to two variants:

        let randomSpeech = unwrap("{Hello|Hi|Cheerio|How do you do?|Welcome|Nice to have you here}");

3. You can have multiple expressions within a string description:

        let randomSpeech = unwrap("{Hello|Hi} {my friend|again}");

4. One option can be left empty to make parts of the text truly optional:

        let randomSpeech = unwrap("{Hello|Hi} {|my friend}");

5. To make things more interesting expressions can be nested:

        let randomSpeech = unwrap("{Hello|Hi} {|my {|best} friend }");
    
    Especially this feature makes "**unwrap**" a very powerful tool.

6. Homework: Can you count how many different possible utterances are descibed within the following expression?

        let randomSpeech = unwrap("{{|I am{|so}} sorry {|about { that|this}}!  {Something went {|totally} wrong|this did not work{|as expected}}");
    
    

## Summary

Using this technique you have a very compact notation to define a lot of variations for your responses as a one liner.


 
