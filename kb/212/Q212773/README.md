---
layout: page
title: "Q212773: XFOR: CCMC Dirsync Error 14015"
permalink: kb/212/Q212773/
---

## Q212773: XFOR: CCMC Dirsync Error 14015

	Article: Q212773
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory synchronization between the Microsoft Exchange Server computer and the
	Lotus cc:Mail post office may fail with the following Event ID:
	
	  Event ID: 14015
	
	  Source: MSExchangeCCMC
	  Type: Error
	  Category: Dir-Synch
	  Description: MS exchange ccmc directory synchronization service return
	  ds_name_error, error 4693728
	
	CAUSE
	=====
	
	A previously deleted container has been included in directory synchronization
	(dirsync).
	
	WORKAROUND
	==========
	
	1. Verify under the Export Container tab that there is a deleted container
	  included in the export list. If you find a deleted container, remove it from
	  the list of exported containers.
	
	2. Run dirsync again. It should finish without errors.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
