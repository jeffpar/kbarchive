---
layout: page
title: "Q196164: XADM: Move Server Wizard Disk Space Requirements are Incorrect"
permalink: /kb/196/Q196164/
---

## Q196164: XADM: Move Server Wizard Disk Space Requirements are Incorrect

	Article: Q196164
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error messages are received when running the Microsoft Exchange
	Server Move Server Wizard extractor, Setupmvi.exe:
	
	  Setup could not find a drive with 11780 KB free disk space to install
	  the program. Please free up some space first and press RETRY or press
	  CANCEL to exit setup.
	
	  Extracting file failed. It is most likely caused by low memory (low disk
	  space for swapping file) or corrupted Cabinet file.
	
	Even if there is 11,780 KB of free disk space, the extract process will fail.
	
	WORKAROUND
	==========
	
	This problem has been reported to development. Currently, the only workaround is
	to free up enough disk space to meet the requirements listed below.
	
	Correct Disk Space Requirements:
	
	- The extract process works with 11,796 KB free of disk space.
	
	- The full installation of the Move Server Wizard works with 24,018 KB free of
	  disk space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Move Server Wizard component
	of Exchange Server 5.5.
	
	Additional query words: msw free space
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
