---
layout: page
title: "Q106154: Microsoft Delete Tracker Cannot Undelete Zero-Byte Files"
permalink: /kb/106/Q106154/
---

## Q106154: Microsoft Delete Tracker Cannot Undelete Zero-Byte Files

	Article: Q106154
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Undelete Delete Tracking is enabled, you cannot undelete a zero-byte file.
	
	WORKAROUND
	==========
	
	You may be able to undelete the file by using the Undelete /DOS command as
	follows:
	
	1. Change to the directory that contains the deleted file.
	
	2. At the MS-DOS command prompt, type the following command and press ENTER:
	
	  " undelete *.* /dos" (without the quotation marks)
	
	If one of your applications (such as Lotus 1-2-3) uses a zero-byte file and you
	cannot undelete it, contact your software vendor for assistance in replacing the
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS Undelete versions 6.0,
	6.2, and 6.21. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.22 6.00 6.20 123 PCTRACKR.DEL
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
