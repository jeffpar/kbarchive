---
layout: page
title: "Q133076: Duplicate Entries in Fax Cover Page List"
permalink: /kb/133/Q133076/
---

## Q133076: Duplicate Entries in Fax Cover Page List

	Article: Q133076
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A single cover page may have multiple entries in the Fax Cover Sheets list. When
	this occurs, you can select only one of the duplicate entries.
	
	CAUSE
	=====
	
	This problem can occur if you add a cover page from a network resource. Editing
	and saving this cover page results in a reference to the local copy and a
	shortcut to the network copy.
	
	RESOLUTION
	==========
	
	To correct this problem, rename the shortcut to the network copy of the cover
	page in the Windows folder. To do so, type the following command at an MS-DOS
	prompt in the Windows directory:
	
	  " ren <shortcut name>.lnk <shortcut name>.xxx " (without the
	  quotation marks)
	
	NOTE: You should rename this file at an MS-DOS prompt to remove the .lnk
	extension.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
