---
layout: page
title: "Q196671: WD97: How to Format a Combination of 5- and 9-Digit ZIP Codes"
permalink: kb/196/Q196671/
---

## Q196671: WD97: How to Format a Combination of 5- and 9-Digit ZIP Codes

	Article: Q196671
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When your data document contains a mixture of five-digit and nine-digit ZIP
	Codes, you can use a field in Word to format ZIP Codes if they do not contain
	hyphens. This field is useful when your data comes from another data source and
	doesn't contain hyphens in the nine-digit ZIP Codes. This field operates whether
	the data document does or does not contain hyphens.
	
	MORE INFORMATION
	================
	
	Use the following field:
	
	  {IF {=ABS({MERGEFIELD zip \# "####'-'#####"}) }<> {MERGEFIELD zip}
	  {MERGEFIELD zip \# "#####'-'####"} {MERGEFIELD zip} }
	
	NOTES:
	
	To create the special field code braces, use the key combination CTRL+F9. Using
	the "{" and "}" keys on the keyboard does not work.
	
	Be sure that each record contains a ZIP Code; otherwise, an error message will
	appear for that record.
	
	You can change the merge field name from "ZIP" to something else, but nothing
	else in the formula can be changed.
	
	The formatting of the first merge field has four number signs followed by five
	number signs. This appears incorrect but is necessary for the calculation that
	takes place.
	
	
	Note that single quotation marks surround the hyphens.
	
	If you have created your data document using the Mail Merge Helper in Word, the
	default field name for the ZIP Code is "Postal_Code." Substitute "Postal_Code"
	for "zip" when creating the merge field.
	
	NOTE: This code may not work if the ZIP Code field is from a Microsoft Access
	data source and if that field is formatted as a number. If the ZIP Code starts
	with a 0, for example "01234," Word interprets it as "1234." To work around this
	behavior, format the ZIP Code fields as text (rather than as numbers) in
	Microsoft Access. Then ZIP Codes beginning with zero will be available in Word.
	
	How the Field Works
	-------------------
	
	Word does not include fields that count the number of characters in another
	field. So, to determine the number of digits in the ZIP field, the field
	construction above takes advantage of two facts: (1) when you format a numeric
	field to include a hyphen, the hyphen is treated by other fields as a
	subtraction sign; (2) numbers that begin with a zero are evaluated the same as
	numbers that don't begin with a zero. For example, "01234" is evaluated by Word
	as equal to "1234".
	
	The ZIP field is placed in the main document with a hyphen so that the formula
	can operate on it. Its absolute value is taken, which converts the number to a
	positive value. This new number is compared to the literal ZIP Code. If the
	numbers differ, it's a nine-digit code and this is printed, with formatting to
	keep any leading zeros. If the calculated number is different from the literal
	ZIP Code, the ZIP Code is printed as is.
	
	
	Additional query words: postal codes us u.s. post office Zipcode Code 4Plus 4 Plus four format switch merge printmerge mailmerge print mail 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
