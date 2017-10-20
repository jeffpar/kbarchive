---
layout: page
title: "Q114871: Bookshelf: QuickShelf GP Faults with PCTools Desktop"
permalink: /kb/114/Q114871/
---

## Q114871: Bookshelf: QuickShelf GP Faults with PCTools Desktop

{% raw %}

	Article: Q114871
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Bookshelf 1994 with Central Point's PCTools Desktop version 1.0 or
	2.0, you may receive a general protection (GP) fault when you try to move
	QuickShelf (or, in some cases, if you just click the QuickShelf title bar). The
	following error message may appear
	
	  QSHELF caused a General Protection Fault in module <unknown>
	  <Address>:QSHELF will close."
	
	where <Address> is a memory address, such as 2527:003FA.
	
	NOTE: Clicking or moving QuickShelf with PCTools on the system also causes the
	system to restart in some cases.
	
	RESOLUTION
	==========
	
	This can be corrected by adding "6=MSQSWClass" (without the quotation marks) to
	the [Desktop.Subclass.Exclude] section in the WNUSER.INI file (in the CPS\DATA
	directory) as shown below:
	
	     [Desktop.Subclass.Exclude]
	     1=PSFloatC
	     2=LauncherWClass
	     3=GWScopeWin
	     4=CIV
	     5=CIVDIALOG
	     6=MSQSWClass
	
	NOTE: Numbers 1 through 5 should already be there.
	
	WORKAROUND
	==========
	
	Other resolutions include the following:
	
	1. Use PROGMAN.EXE as your shell.
	
	  -or-
	
	2. Use Small Buttons in QuickShelf (this removes the ability to move
	  QuickShelf).
	
	For more information about PCTools, contact Central Point Software at (503)
	690-8080 or (503) 690-8090.
	
	PCTools is manufactured by Central Point Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 1994 multi media multimedia multi-media bshelf book shelf gpf pctw pc tools
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1994
	Version           : :1994 edition
	
	=============================================================================
	

{% endraw %}
