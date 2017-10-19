---
layout: page
title: "Q126789: MHS: Err Msg: Outpost: General File I/O Error"
permalink: /kb/126/Q126789/
---

## Q126789: MHS: Err Msg: Outpost: General File I/O Error

	Article: Q126789
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When messages with attachments are received through the MHS Gateway, the
	following error may occur:
	
	  Outpost: Could not create Microsoft Mail mail item
	  Outpost: General file I/O error
	
	CAUSE
	=====
	
	This error message occurs when there is a problem with the subdirectories under
	MAILDATA\ATT.
	
	RESOLUTION
	==========
	
	To correct this problem, check the following:
	
	1. Rights of ATT subdirectories. This should be read/write, and the
	  subdirectories should not be marked as hidden.
	
	2. Check to make sure all 16 subdirectories exist under the ATT subdirectory
	  (AT0-AT9 and ATA-ATF). If any of these subdirectories does not exist, create
	  it by using the MS-DOS MKDIR command or by choosing the File Manager Create
	  Directory command.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
