---
layout: page
title: "Q167807: XFOR: Lotus cc:Mail Connector Event ID 45"
permalink: kb/167/Q167807/
---

## Q167807: XFOR: Lotus cc:Mail Connector Event ID 45

	Article: Q167807
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During directory synchronization (dirsync) between Microsoft Exchange Server and
	a Lotus cc:Mail post office, the following error message may appear:
	
	  Event ID: 45
	  Source: MSExchangeCCMC
	  Type: Warning
	  Category: General
	  Descriptions: Optional configuration value is missing. The index of the
	  value is 2a. Default values are assumed.
	
	CAUSE
	=====
	
	This error message appears if the General logging level is set to Medium or
	higher. Dirsync and mail transfer continue to function properly.
	
	RESOLUTION
	==========
	
	This error does not affect the functionality of mail transfer or directory
	synchronization and can be ignored. The error type is incorrectly labeled as a
	warning.
	
	Additional query words: dir-synch dirsynch DX
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
