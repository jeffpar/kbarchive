---
layout: page
title: "Q99095: How to Reset a Database Field to a Null Value in FoxPro"
permalink: /kb/099/Q99095/
---

## Q99095: How to Reset a Database Field to a Null Value in FoxPro

	Article: Q99095
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a 2.50b 2.60 | 2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a new database record is created in FoxPro, all database fields are set to
	a null value. You can test this by using the EMPTY() function on each field in a
	newly created record:
	
	     USE customer
	     APPEND BLANK
	     ? EMPTY(cno)     & Returns .T.
	     ? EMPTY(zip)     & Returns .T.
	
	The EMPTY() function is available in FoxPro versions 2.0 and later. The ISBLANK()
	function is available in FoxPro version 2.6. There is an important difference
	between the EMPTY() and ISBLANK() functions on logical and numeric fields.
	EMPTY() will return .T. if the field is blank, or if it contains the default
	values of zero for a numeric field or .F. for a logical field. ISBLANK() will
	return .T. if the numeric or logical field contains a null value and .F. if the
	field contains the default value.
	
	Sometimes you may want to reset a field to a null value after data has been
	entered in the field. For example, in a statistical program, you may want to
	edit a numeric score field so that it contains a null value for no answer and an
	answer of zero where the score was zero. See below for information on how to
	reset the various field types to null.
	
	MORE INFORMATION
	================
	
	FoxPro Versions 2.0 and 2.5x
	----------------------------
	
	Character or Memo Fields:
	
	To reset a character or memo field to a null value, replace the field with the
	null text string "":
	
	     REPLACE fieldname WITH ""
	
	Date Fields:
	
	To reset a date field to a null value, replace the date field with the null date
	string { / / }:
	
	     REPLACE fieldname WITH {  /  /  }
	
	Numeric Fields:
	
	A numeric field cannot be reset to a null value because the EMPTY() function
	returns .T. if a numeric field is blank or zero. To illustrate this behavior,
	issue the following command on an existing record when you are using a database
	that has date, numeric, and character fields:
	
	     SCATTER MEMVAR BLANK
	     GATHER MEMVAR FIELDS
	     ? EMPTY(numericfield)
	     BROWSE
	
	Note that the date and character fields have been blanked out. The numeric field
	contains a zero (0).
	
	To work around this limitation, do the following for numeric fields:
	
	1. For each numeric field in the database, create a corresponding logical field.
	
	2. Code the following logic into data entry/editing routines:
	
	  If the numeric field contains 0 as data, set the logical field to .T. If the
	  numeric field is to contain no value, set the logical field to .F.
	
	3. Use the logical field as a flag in FOR clauses for subsequent operations, as
	  follows
	
	        AVERAGE response TO memvar FOR notempty
	
	  where "response" is the numeric field and "notempty" is the corresponding
	  logical field.
	
	Logical Fields:
	
	Logical fields also cannot be reset to null, since both a blank and a .F. logical
	field will result in EMPTY(<logicalfield>) returning a value of .T.
	
	The technique used above for numeric fields can also be used for logical fields.
	When using this technique for logical fields, create a character field with a
	length of 1. This character field should contain T for true, F for False, or a
	space for empty.
	
	NOTE: A character field containing only spaces will always return .T. for the
	EMPTY() function.
	
	General Fields:
	
	The contents of a general field can be deleted by issuing the command:
	
	     APPEND GENERAL <generalfield>
	
	FoxPro Version 2.6
	------------------
	
	A new command, BLANK, has been added in version 2.6. The BLANK command allows a
	field or fields to be reset to a true null or empty value.
	
	1. To blank an entire record, issue the following command:
	
	        BLANK
	
	2. To blank selected fields, issue the following command:
	
	        BLANK FIELDS <field1>, <field>
	
	If you want, you can add a SCOPE clause to the BLANK command. The BLANK command
	will reset any field type to a true empty value. The BLANK command will
	automatically lock the current record if no SCOPE clause is issued or the entire
	database if a SCOPE clause is used.
	
	Visual FoxPro 3.0
	-----------------
	
	A .NULL value is available in Visual FoxPro. To set fields to null, replace the
	fields with .NULL.. To search for null values in fields use the ISNULL()
	function.
	
	For more information, see the FoxPro 2.0 "Commands & Functions" manual or the
	FoxPro 2.5 "Language Reference" manual. For information about the ISBLANK()
	function and the BLANK command, refer to the FoxPro version 2.6 Help file.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.00 2.50 2.50a 2.50b 2.60 | 2.5
	
	=============================================================================
	
