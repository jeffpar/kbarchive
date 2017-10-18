---
layout: page
title: "Q146260: XCLN: Exchange Forms Designer Labels Can Be 255 Chars"
permalink: kb/146/Q146260/
---

## Q146260: XCLN: Exchange Forms Designer Labels Can Be 255 Chars

	Article: Q146260
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Electronic Forms Designer, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Forms layout environment it is possible to create a
	label field that has several lines. When you enter text into that field you will
	be able to enter up to 255 characters, anything that is entered after that point
	are discarded and are not shown in the text field of the label.
	
	CAUSE
	=====
	
	This is by design.
	
	The label field is limited to 255 characters in the label layout window. If you
	need to use more than 255 characters you should use a entry field that will
	allow you to specify a maximum character limit.
	
	NOTE: With the Label Field control, if you enter a contiguous 255 characters, the
	text will not wrap to the next line. The text that is entered in the label field
	must contain spaces for the label control to break the text to the next line.
	
	Additional query words: eforms label text limit
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword kbExchangeEForms kbExchangeEForms400
	Version           : 4.0 5.0
	
	=============================================================================
	
