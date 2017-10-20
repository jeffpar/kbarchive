---
layout: page
title: "Q99068: REXX Commands Syntax--an Abbreviated Listing"
permalink: /kb/099/Q99068/
---

## Q99068: REXX Commands Syntax--an Abbreviated Listing

{% raw %}

	Article: Q99068
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article provides an abbreviated list of REXX command syntax. For more
	detailed explanations consult the other REXX articles in the Microsoft Knowledge
	Base or various reference works on the REXX programming language.
	
	MORE INFORMATION
	================
	
	ABBREV(string, test_str, length)
	ABS(number)
	ARG var1 var2 var3 ... var20
	BEEP(frequency_in_hertz, duration_in_milliseconds)
	BITAND(string1, string2, pad)
	BITOR(string1, string2, pad)
	BITXOR(string1, string2, pad)
	B2X(binary-string)
	CALL name
	CALL ON [ERROR|FAILURE|HALT|NOTREADY] NAME routine_to_call
	CALL OFF [ERROR|FAILURE|HALT|NOTREADY]
	CENTER(string, final_length, pad_character_if_needed)
	CHARIN(file|input_stream|kbd, start_read, number_to_read)
	CHAROUT(output_stream|file|screen, data, start_write)
	CHARS(input_stream|file|kbd)
	COMPARE(string1, string2, pad)
	CONDITION (NAME|DESCRIPTION|INSTRUCTION|STATUS)
	COPIES(source_string, number)
	C2D(string, number)
	C2X(string)
	DATE(B|M|E|O|S|U|W)
	DELSTR(string, start_position, number_of_bytes_to_delete)
	DELWORD(string_of_words, start_word, #_of_words_to_delete)
	DIGITS()
	D2C(integer, final_string_length)
	D2X(integer, sign_extended_hex_result_to_this_length)
	DIRECTORY(drive:directory)
	DO n|var = start_value TO end_value |FOREVER ... END
	DO WHILE condition|UNTIL condition ... END
	DROP variable
	ENDLOCAL()
	ERRORTEXT(number)
	EXIT expression
	FILESPEC(requested_information, file_specification)
	FORM()
	FORMAT(number, integer, fraction, exp_digits, exp_trigger)
	FUZZ()
	IF condition THEN action ELSE action
	INSERT(source, target, start, length, pad_character)
	INTERPRET(expression)
	ITERATE name
	LASTPOS(find_this, target_string, search_backward_from_here)
	LEAVE name
	LEFT(of_this_string, for_this_length, pad_with_this_if_reqd)
	LENGTH(of_this_string)
	LINEIN(from_this_source, top_of_source?, number_of_lines)
	LINEOUT(to_this_target, this_data, top_of_target?)
	LINES(source)
	MAX(i, j, k, l, m, n ...)
	MIN(i, j, k, l, m, n ...)
	NOP
	NUMERIC DIGITS expression
	NUMERIC FORM [SCIENTIFIC|ENGINEERING]
	NUMERIC FUZZ  expression
	OVERLAY(source, target, start_point, length, pad_with_this)
	OPTIONS
	PARSE [UPPER] [options] [WITH] var1 var2 var3 ... var?
	POS(find_this, target_string, start_position)
	PROCEDURE [EXPOSE var1 var2]
	PULL var1 var2 ... var?
	PUSH var1 var2 ... var?
	QUEUE var1 var2 .. . var?
	QUEUED()
	RANDOM(minimum_value, maximum_value, seed_value)
	RETURN [expression]
	REVERSE(string)
	RIGHT(string, length, pad)
	SAY expression
	SELECT; WHEN condition THEN action; .. OTHERWISE action; END
	SETLOCAL()
	SIGN(number)
	SIGNAL [OFF condition|ON condition label|label]
	SOURCELINE(n)
	SPACE(string, n, pad_character)
	STREAM(I/O_stream, type_of_action, specific_command)
	STRIP(string,'L'|'T'|'B', optional_character_to_strip)
	SUBSTR(string, start_position, length, pad_with_this)
	SUBWORD(string, start_word, number_of_words)
	SYMBOL('var')
	TIME('C'|'E'|'H'|'L'|'M'|'R'|'S')
	TRACE(A|C|E|F|I|L|N|O|R)
	TRANSLATE(string, replace_with, replace_this)
	TRUNC(number, maximum_digits)
	VALUE(var, value_to_set, flag)
	VERIFY(string, reference_list, 'M'|'N', start_position)
	WORD(string, word_number)
	WORDINDEX(string, word_number)
	WORDLENGTH(string, word_number)
	WORDPOS(word|phrase, string, start_position)
	WORDS(string)
	XRANGE(start,end)
	X2B(hexstring)
	X2C(hexstring)
	X2D(hexstring, n)
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
