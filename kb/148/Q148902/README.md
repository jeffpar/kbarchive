---
layout: page
title: "Q148902: Bookshelf 96-97: Copy To Causes Unexpected Behavior in Office"
permalink: /kb/148/Q148902/
---

## Q148902: Bookshelf 96-97: Copy To Causes Unexpected Behavior in Office

	Article: Q148902
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; Win95:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Office for Windows 95 Professional edition 
	- Microsoft Office for Windows 95, Standard edition 
	- Microsoft Office Professional for Windows 95 and Bookshelf 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Bookshelf Copy To command to copy information to an
	open Office Binder containing a Word, Excel, or PowerPoint section, you may
	experience some of the following unexpected system responses.
	
	Symptoms Defined by Product
	---------------------------
	
	Word Section:
	
	Copy To Word does nothing.
	
	Excel Section:
	
	When you copy information to the Current Location, nothing happens or you may
	receive the message:
	
	  Microsoft Excel!
	  Data on the Clipboard is not the same size and shape as the selected area.
	  Paste anyway?
	
	If you click OK, no information is pasted.
	
	When you copy to the end of a Sheet in Binder and then switch to the Excel
	document, you cannot edit the sheet. The Binder appears to be frozen or locked
	up.
	
	When you copy to a New Workbook, New Worksheet, or any other location, nothing
	happens.
	
	PowerPoint Section:
	
	When try the Copy To function, you receive the following message:
	
	  Microsoft PowerPoint!
	  Copy to PowerPoint not available in Binder.
	
	CAUSE
	=====
	
	The Bookshelf Copy To command does not work when a Binder section is open.
	
	RESOLUTION
	==========
	
	Do not use the Copy To command when a Binder is open.
	
	If you successfully copy to an Excel worksheet in a Binder, but you cannot edit
	or activate the worksheet, switch back to Bookshelf, and then return to the
	Binder. You can then edit the sheet.
	
	Additional query words: 96-97 multi media multimedia multi-media mmtitles kbmm bug hangs hanging hanged crashed crash crashes freeze frozen locked locked-up lock hang bombed bomb down
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbHomeMMsearch kbBookshelfSearch kbOffice95Search kbZNotKeyword3 kbBookShelf1996 kbBookShelf1997 kbOffice95ProBookshelf
	Version           : WINDOWS:; Win95:95
	
	=============================================================================
	
