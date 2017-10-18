---
layout: page
title: "Q155564: EXPAND Command Does Not Recognize Path with Spaces"
permalink: kb/155/Q155564/
---

## Q155564: EXPAND Command Does Not Recognize Path with Spaces

	Article: Q155564
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The EXPAND command does not work if the file you want to expand has spaces in
	its name. For example, the following command does not work:
	
	  expand /l c:\temp stuff <source>
	
	This command generates the following error message:
	
	  Can't open input file: temp
	
	RESOLUTION
	==========
	
	Enclose the entire path in quotation marks. For example, using the same command
	as above, you would type:
	
	  expand /l "c:\temp stuff" <source>
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
