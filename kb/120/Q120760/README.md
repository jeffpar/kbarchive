---
layout: page
title: "Q120760: CA-ABSTRACT Outlines Don't Print to Remote Printers"
permalink: kb/120/Q120760/
---

## Q120760: CA-ABSTRACT Outlines Don't Print to Remote Printers

	Article: Q120760
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlines for Presents 1.5 CA-Abstract don't print to remote printers.
	
	CAUSE
	=====
	
	CA-Abstract drops the colon from the port identifier so that NExx: becomes NExx
	and is treated as a file name instead of a port.
	
	WORKAROUND
	==========
	
	Copy the print file to a printer when it is created.
	
	STATUS
	======
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
