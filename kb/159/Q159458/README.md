---
layout: page
title: "Q159458: XADM: Unable to Locate Rpcdce4.dll"
permalink: kb/159/Q159458/
---

## Q159458: XADM: Unable to Locate Rpcdce4.dll

	Article: Q159458
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Setup for the Mailbox Cleanup Agent from the Microsoft Exchange
	Server Technical Resource Kit, this error message is displayed:
	
	  Unable to locate Rpcdce4.dll.
	
	CAUSE
	=====
	
	The file Rpcdce4.dll is required in the <Winntroot>\System32 subdirectory.
	The file is not installed by default with Windows NT 3.51, and is not shipped on
	the Windows NT 4.0 compact disc.
	
	WORKAROUND
	==========
	
	Expand the file from the Windows NT 3.51 compact disc to the
	<Winntroot>\System32 directory.
	
	STATUS
	======
	
	This has been fixed in MBClean Version 1.4 that shipped in the BackOffice
	Resource Kit, Part One. This and other Microsoft Exchange tools in the
	BackOffice Resource Kit, Part One, can be download from the Microsoft Exchange
	4.0 Resource Kit page on http:/www.microsoft.com/exchange.
	
	
	Additional query words: 4.00 res kit tech cleanup mbclean MCA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
