---
layout: page
title: "Q92996: Local Printer Causes 1st Network Print Job to Disappear"
permalink: kb/092/Q92996/
---

## Q92996: Local Printer Causes 1st Network Print Job to Disappear

	Article: Q92996
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows for Workgroups server that is sharing a local printer, network
	print jobs may disappear from the Print Manager. If the local printer encounters
	an error, such as running out of paper, while printing a local job and other
	network jobs are queued, the Print Manager pauses and the first network job
	listed in the queue disappears. If more than one network job is waiting to
	print, the second and subsequent network print jobs are not affected. This error
	only occurs if the current print job is from the local machine.
	
	There is no way to recover a lost network print job; you must resend it to the
	printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 3.10 remote 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
