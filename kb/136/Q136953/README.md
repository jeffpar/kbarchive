---
layout: page
title: "Q136953: Cannot Print PostScript with NT Gateway Services for NetWare"
permalink: /kb/136/Q136953/
---

## Q136953: Cannot Print PostScript with NT Gateway Services for NetWare

	Article: Q136953
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to a PostScript printer through a Microsoft Windows NT
	server that is configured for NT Gateway Services for NetWare, the printer
	briefly indicates that the print job is starting, but the document is not
	printed.
	
	CAUSE
	=====
	
	When a Windows NT server is configured for NT Gateway Services for NetWare, it
	add a non-PostScript banner page by default to each print job. The PostScript
	printer cannot print the banner page.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the Windows NT server so that it does not use
	a banner page.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
