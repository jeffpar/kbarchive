---
layout: page
title: "Q196048: WD97: Error Message in Place of BARCODE Field"
permalink: kb/196/Q196048/
---

## Q196048: WD97: Error Message in Place of BARCODE Field

	Article: Q196048
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error messages may appear in place of the POSTNET (POSTal Numeric
	Encoding Technique) barcode when you use the BARCODE field:
	
	- ZIP Code not valid!
	
	  -or-
	
	- No ZIP Code!
	
	CAUSE
	=====
	
	The BARCODE field generates this result in the following cases.
	
	Case 1
	------
	
	The BARCODE field in the mailing labels or envelopes mail merge main document
	refers to the wrong field.
	
	Case 2
	------
	
	The ZIP Code portion of the mailing address contains invalid characters, such as
	non-breaking hyphens, symbols, extra spaces, or other special characters.
	
	Case 3
	------
	
	The layout of the BARCODE field is incorrect.
	
	WORKAROUND
	==========
	
	Case 1
	------
	
	If the BARCODE field refers to the wrong field for the ZIP Code information, edit
	the BARCODE field and change the MERGEFIELD reference to the correct field name.
	Follow these steps to edit the BARCODE field:
	
	1. Select the "ZIP Code not valid" error.
	
	2. Display the field codes by pressing SHIFT+F9 (or click Options on the Tools
	  menu, click the View tab, select Field Codes, and then click OK). The
	  following field codes appear:
	
	  {BARCODE { MERGEFIELD address1} <P>
	  {MERGEFIELD zipcodefield} \u}
	
	  where "address1" is the field containing the street address or postal box
	  information, "<P>" represents a paragraph mark, and "zipcodefield" is
	  the field containing the ZIP Code information.
	
	3. Ensure that "zipcodefield" is the name of the field that contains the ZIP
	  Code information. If not, select it and replace it with the correct field
	  name.
	
	4. Toggle the field codes off by pressing SHIFT+F9 (or click Options on the
	  Tools menus, click the View tab, clear the Field Codes option box, and then
	  click OK).
	
	Case 2
	------
	
	If the data document contains invalid characters in the ZIP Code field, remove
	the invalid characters and replace them, if necessary, with valid characters.
	The only valid characters allowed in the ZIP Code field are numeric digits
	(arabic numerals) and a hyphen (dash) as the separator for the Zip+4.
	
	Press ALT+F9 to view the barcode field, or click Options on the Tools menu, click
	the View tab, and click to select the Field Codes check box.
	
	Case 3
	------
	
	The BARCODE field must span two lines (it must contain a paragraph mark) and must
	include quotation marks in the right places. If it does not meet these
	requirements, Word changes the last two digits of the barcode to 99.
	
	Incorrect BARCODE field:
	
	  {BARCODE "{ MERGEFIELD address1 } {MERGEFIELD zipcodefield }" \u }
	
	Correct BARCODE field
	
	  {BARCODE "{ MERGEFIELD address1 } <P>
	  {MERGEFIELD zipcodefield }" \u }
	
	where "<P>" represents a paragraph mark.
	
	If the BARCODE field is not formatted correctly, press ENTER to move the second
	half of the field onto the second line, and type the quotation marks.
	
	Press ALT+F9 to view the barcode field, or click Options on the Tools menu, click
	the View tab, and click to select the Field Codes check box.
	
	MORE INFORMATION
	================
	
	ZIP Code information referenced by the BARCODE field must be formatted as five
	numbers followed by a hyphen, followed by four numbers. The "ZIP Code not
	valid!" error occurs if the data does not match the above mentioned format or
	invalid characters are used. The only valid characters are arabic numerals and
	the hyphen character.
	
	NOTE: Since the BARCODE field reads the data from left to right, a space after
	the last digit of the ZIP Code does not generate this error.
	
	To view paragraph marks and other non-printing characters, click the Show/Hide
	button on the Standard Toolbar.
	
	For additional information about adding or creating a postal barcode in Microsoft
	Word or if the barcode produces the incorrect results, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q112252 Word Assigns a Delivery Point Bar Code (DPBC) of 99
	
	  Q126863 Delivery Point Bar Code Uses 99 in Last Two Digits of Address
	
	  Q105576 Position of Bar Codes is Certified by U.S. Postal Service
	
	Additional query words: barcode code mail merge valid zip 8.0 8.00 macword98 how to howto
	
	======================================================================
	Keywords          : kbdta kbfield winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
