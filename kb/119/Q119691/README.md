---
layout: page
title: "Q119691: How to Format Telephone Numbers with PICTURE Mask"
permalink: kb/119/Q119691/
---

## Q119691: How to Format Telephone Numbers with PICTURE Mask

	Article: Q119691
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c; MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2000
	
	2.5x 2.6x 3.00 | 2.5x 2.60 2.60a | 2.5x 2.60a
	WINDOWS        | MS-DOS          | MACINTOSH
	kbtool kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The format of the data entry @ ... GET edit region for a telephone number can be
	controlled programmatically with a mask defined using the PICTURE clause, or it
	can be controlled in the Screen Builder or Form Designer by specifying the
	picture in the Format edit region of the Field dialog box. The examples shown
	below illustrate both methods.
	
	MORE INFORMATION
	================
	
	The @ ... GET ... PICTURE clause provides the means of specifying a mask to
	control the format of data entered in a GET object in a window. The following
	paragraphs show examples of parameters of the clause that create a mask to
	control the format of a GET for entering a telephone number. These parameters
	provide all the customary nondata formatting characters (such as parentheses and
	dashes), but allow FoxPro to store only the numeric information so that the
	number is saved in just ten characters, either as a character field or as a
	numeric field. The parameters can be included either in a hard-coded "@ n.n GET
	<variable/field name> PICTURE ..." (without the quotation marks) command
	or they can be included in the Format box in the Field dialog box of FoxPro's
	Screen Builder.
	
	FoxPro 2.x for Windows Examples
	-------------------------------
	
	For example, if the telephone number is to appear on the screen as follows (these
	numbers are for example purposes only)
	
	  (213)123-1234
	
	the PICTURE clause should appear as follows:
	
	  PICTURE "@R (999)999-9999"
	
	The string to enter in the Format box in the Field dialog box is:
	
	  @R (999)999-9999
	
	Likewise, if the telephone number is to appear as follows
	
	  213/123-1234
	
	the mask should appear as follows:
	
	  @R 999/999-9999
	
	Visual FoxPro for Windows Examples
	----------------------------------
	
	For example, if the telephone number is to appear on the screen as follows (these
	numbers are for example purposes only)
	
	  (213)123-1234
	
	Set the Format property to "R" (without quotation marks) and the InputMask
	property to the following:
	
	  (999)999-9999
	
	Likewise, if the telephone number is to appear as follows
	
	  213/123-1234
	
	the Format property should be "R" (without quotation marks) and the InputMask
	should appear as follows:
	
	  999/999-9999
	
	Notes
	-----
	
	- The "@" symbol defines the characters following it as belonging to the
	  PICTURE clause.
	
	- The capital letter "R" and the space character following the "R" display a
	  format mask in an @ ... GET editing region. These mask characters are not
	  stored in the field when the @ ... GET editing region is exited.
	
	- The mask characters shown in the above examples, other than the digit 9, are
	  not stored in the table. These characters are skipped over when keys are
	  pressed during data entry.
	
	- The nines (9) in the mask allow only digits to be entered in character
	  fields; in numeric fields, they allow digits and signs to be entered. Since a
	  telephone number consists of digits but is seldom used in arithmetic
	  operations, the database field holding the number should be defined as a
	  character field. Only digits in the range from zero through nine are accepted
	  in the edit region.
	
	REFERENCES
	==========
	
	For additional PICTURE code options, see pages L3-33, L3-34, and L3-35 of the
	"Language Reference" for FoxPro for MS-DOS and Windows, or see page 47 of the
	"Language Reference" for FoxPro for Macintosh. Also refer to the online Help
	topic for the @ ... GET command.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.60a number format picture mask phone
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b,2.5c; MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
