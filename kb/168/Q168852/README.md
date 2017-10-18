---
layout: page
title: "Q168852: WD97: Nested Calculations Updated Incorrectly (International)"
permalink: kb/168/Q168852/
---

## Q168852: WD97: Nested Calculations Updated Incorrectly (International)

	Article: Q168852
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a nested U.S. field that is dependent on regional system settings
	for parsing the field, the field may generate a syntax error when the field is
	updated on a computer with non-U.S. regional system settings.
	
	CAUSE
	=====
	
	Some fields rely on certain regional settings. For example, the most common
	cause of this problem is if there exists a difference between the decimal symbol
	and the digit-grouping symbol.
	
	WORKAROUND
	==========
	
	To work around this problem, either change the regional settings to make the
	field work correctly, or edit the field so that it contains the correct
	symbols.
	
	To find or change the regional settings, follow these steps:
	
	1. On the Windows taskbar, click Start, point to Settings, and click Control
	  Panel.
	
	2. Double-click Regional Settings.
	
	3. Click the Number tab.
	
	The decimal symbol setting and the digit grouping symbol setting are located in
	this dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Certain regional settings are used when Microsoft Word 97 attempts to parse the
	field during the field update. Examples of these settings are Decimal Symbol and
	Digit Grouping Symbol.
	
	Decimal Symbol identifies the character that is used to indicate decimal values.
	In the U.S., this symbol is a decimal point, as in the following example:
	
	  12.5 (to indicate twelve and one-half)
	
	Digit Grouping Symbol identifies the character that is used to group the digits
	in large numbers. In the U.S., this symbol is a comma, as in the following
	example:
	
	  100,000 (one-hundred thousand)
	
	In certain types of nested fields, you receive a syntax error if you move a
	document from a computer using U.S. settings to a computer using non- U.S.
	settings.
	
	The following field will generate a syntax error if it is created on a computer
	using U.S. regional settings and then opened on a computer using non-U.S.
	regional settings:
	
	  {=sum{1,2,3} }
	
	On a computer with U.S. regional settings, the comma is used to separate the 1,
	2, and 3, indicating that they should be added together. On a computer with
	non-U.S. regional settings, such as Brazilian settings, the comma is used as a
	decimal symbol, making the field invalid.
	
	REFERENCES
	==========
	
	For more information about regional settings and Microsoft Word 97, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q135285 WD: Value Entered Does Not Match with the Specified Type
	
	  Q113185 WD: Cannot Use Some US-International Key Combinations in Word
	
	  Q81059 Err Msg: "! Invalid Character Setting" in Expression Field
	
	  Q151913 Decimal Character Appears as a Comma
	
	  Q150620 Error Message Changing the Default Language
	
	  Q116252 3/2 Currency Grouping Not Available in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
