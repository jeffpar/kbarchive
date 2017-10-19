---
layout: page
title: "Q69386: Avoiding Split Print Jobs on Banyan Vines and Windows 3.0"
permalink: /kb/069/Q69386/
---

## Q69386: Avoiding Split Print Jobs on Banyan Vines and Windows 3.0

	Article: Q69386
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When printing complex print jobs to a Banyan Vines network printer from Windows
	3.0, the output may be split into multiple jobs if the Banyan SETPRINT spool
	delay setting is not set correctly.
	
	The spool delay controls how long the network waits for additional print output
	before timing out and prematurely terminating the print job. Subsequent output
	would be placed in one or more other jobs. Also, if you are using temporarily
	downloaded soft fonts, only the text from the first portion of the job would
	print using the correct fonts.
	
	MORE INFORMATION
	================
	
	You may increase the spool delay by using the Banyan command
	
	     SETPRINT port "address" /D:nn
	
	where nn is the number of seconds for the spool delay. For example, to increase
	the delay to 15 seconds, use:
	
	     SETPRINT LPT1 "LASERII" /D:15
	
	Increase the spool delay until the job prints properly.
	
	Additional query words: 3.0 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
