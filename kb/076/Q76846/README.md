---
layout: page
title: "Q76846: CHKDSK &#42;.&#42; Hangs on 1.44 MB Disk with Zero Byte File"
permalink: /kb/076/Q76846/
---

## Q76846: CHKDSK &#42;.&#42; Hangs on 1.44 MB Disk with Zero Byte File

	Article: Q76846
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CHKDSK *.* command, when executed on 3.5-inch 1.44 MB media containing a
	zero-byte file, stops (hangs) the system.
	
	WORKAROUND
	==========
	
	Deleting the zero-length file from the disk allows CHKDSK to run properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with MS-DOS version 5.0. We are
	researching this problem and and will post new information here as it becomes
	available.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
