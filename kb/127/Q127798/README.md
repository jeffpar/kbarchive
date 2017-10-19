---
layout: page
title: "Q127798: Automap: Destination Ski Doesn't Install with Automap Pro"
permalink: /kb/127/Q127798/
---

## Q127798: Automap: Destination Ski Doesn't Install with Automap Pro

	Article: Q127798
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Destination Ski 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Automap Pro, Destination Ski does not install and generates the
	following error message:
	
	  This program is an add-on. You must specify the directory with AMW.EXE in it.
	
	RESOLUTION
	==========
	
	From the Destination Ski disk, open the file INSTALL.INF using a text editor,
	such as Windows Notepad. Delete the following entry:
	
	  Requires=AMW.EXE
	
	NOTE: A successful installation of Automap Pro versions 1.03, 1.06, 1.08, or 1.09
	is required before you can install Destination Ski.
	
	Additional query words: auto auto-map automap reference
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch
	Version           : :
	
	=============================================================================
	
