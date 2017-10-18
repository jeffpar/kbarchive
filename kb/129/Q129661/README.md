---
layout: page
title: "Q129661: Fax Cover Page Editor Cannot Undo Multiple Text Entries"
permalink: kb/129/Q129661/
---

## Q129661: Fax Cover Page Editor Cannot Undo Multiple Text Entries

	Article: Q129661
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Fax Cover Page Editor has an Undo feature that lets you undo up to
	five tasks. However, you can undo only one task in a text box.
	
	For example, if you type "This is a test" (without the quotation marks) in a text
	box, delete the word "this," delete the word "test," then click Undo, you can
	undo only the last deletion. If you click Undo multiple times, the word "test"
	appears and disappears.
	
	MORE INFORMATION
	================
	
	The Fax Cover Page Editor uses the standard edit controls for text boxes. The
	standard edit controls support only one level of Undo. Other aspects of the Fax
	Cover Page Editor (such as graphic boxes) are not affected by this behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
