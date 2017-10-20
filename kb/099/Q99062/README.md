---
layout: page
title: "Q99062: Using REXX Data Conversion Commands"
permalink: /kb/099/Q99062/
---

## Q99062: Using REXX Data Conversion Commands

{% raw %}

	Article: Q99062
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article lists the REXX programming language's data conversion capabilities
	and gives examples.
	
	MORE INFORMATION
	================
	
	DISCLAIMER: This article is provided for users capable of developing programs
	with the information presented; it is not an extensive treatment of the language
	but rather a quick reference to aid someone in writing simple routines.
	Microsoft cannot support programming efforts beyond reproducing and submitting
	problems with the language implementation itself. If you need further
	assistance, consult REXX references such as "The REXX Language, A Practical
	Approach to Programming" by M. F. Cowlishaw, Prentice-Hall, Englewood Cliffs,
	1985.
	
	Examples are given at the bottom of the listing. Braces ({}) are used to indicate
	comments.
	
	ABS(number) { returns its absolute value }
	
	BITAND(string1, string2, pad) { returns the bit-by-bit ANDing of string1 and
	string2, pad is ANDed with any remaining part of the longer string. }
	
	BITOR(string1, string2, pad) { same as BITAND only ORing is done, if pad is not
	specified then any remaining part of the longer string is returned unchanged. }
	
	BITXOR(string1, string2, pad) { same as BITOR for exclusive ORing. }
	
	B2X(binary-string) { Ex: B2X('11110001') returns F1. }
	
	C2D(string, number) { returns the integral value represented by the binary
	representation contained in 'string'. Example: C2D('0F'x) returns 15 and
	C2D('00010001'b) returns 17. Note that the data type must be specified. }
	
	C2X(string) { converts a string to its hexadecimal form. Example: C2X(a1) would
	return 4131. }
	
	DATATYPE(string, type) { either returns NUM or CHAR if the 'type' parameter is
	not specified or a 1 or zero (logical TRUE or FALSE) if the string type
	matches/mismatches the specified type. }
	
	D2C(integer, final_string_length) { converts a number (viewed as binary) to its
	character representation and, if a length is specified, right justifies the
	result in a string that size. }
	
	D2X(integer, sign_extended_hex_result_to_this_length) { converts a number (viewed
	as binary) to its hexadecimal representation and, if a length is specified, sign
	extends the result to that length. }
	
	X2B(hexstring) { returns the binary representation of hexstring. Example: X2B(f0)
	returns 11110000. }
	
	X2C(hexstring) { returns the character representation of hexstring. Example:
	X2C(416131) returns Aa1. }
	
	X2D(hexstring, n) { returns the decimal representation of hexstring. Example:
	x2D(ff) returns 255. If 'n' is not specified then hexstring is assumed to be
	unsigned; for behavior when it is specified see C2X. }
	
	Examples:
	
	ABS(-27.87)                     {returns 27.87}
	
	BITAND('123','321')             {returns '121'}
	BITAND('11110000'b,'01010101'b) {returns 'P'}
	BITAND('f0'x,'50'x)             {returns 'P'}
	BITAND('11110000','01010101')   {returns '01010000'}
	BITAND('12345','123','4')       {returns '12344'}
	BITAND('12345','123--','4')     {returns '123$%'}
	
	BITOR('123','321')              {returns '323'}
	BITOR('00001111'b,'00110011'b)  {returns '?'}
	BITOR('0f'x,'33'x)              {returns '?'}
	BITOR('11110000','01010101')    {retruns '11110101'}
	BITOR('12345','123','4')        {returns '12345'}
	BITOR('12345','123--','4')      {returns '123=='}
	
	BITXOR('10101010'b,'00001010'b) {returns '0'}
	
	B2X('11110000')                 {returns 'F0')
	
	C2D('a')                        {returns 97}
	C2D('A')                        {returns 65}
	C2D('1')                        {returns 49}
	
	C2X('a')                        {returns '61'}
	C2X('A')                        {returns '41'}
	C2X('1')                        {returns '31'}
	
	DATATYPE(1)                     {returns 'NUM'}
	DATATYPE('ABC')                 {returns 'CHAR'}
	x = 1
	y = 'dog'
	DATATYPE(x)                     {returns 'NUM'}
	DATATYPE(y)                     {returns 'CHAR'}
	DATATYPE(x,'NUM')               {returns '1'}
	DATATYPE(y,'NUM')               {returns '0'}
	
	D2C(65)                         {returns 'A'}
	D2C(97)                         {returns 'a'}
	D2C(49)                         {returns '1'}
	
	D2X(255)                        {returns 'FF'}
	
	X2B(ff)                         {returns '11111111'}
	
	X2C(41)                         {returns 'A'}
	
	X2D(41)                         {returns '65'}
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
