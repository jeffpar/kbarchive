---
layout: page
title: "Q195506: XADM: How to Recover When the System Drive Fails"
permalink: kb/195/Q195506/
---

## Q195506: XADM: How to Recover When the System Drive Fails

	Article: Q195506
	Product(s): Microsoft Exchange
	Version(s): WINNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps to recover when the system drive on a Microsoft
	Exchange Server computer fails and is unreadable.
	
	This article assumes that the drives containing the Exchange Server database
	files, transaction logs, and all other files are separate from the system drive,
	and are available.
	
	MORE INFORMATION
	================
	
	The steps for recovery are:
	
	1. Add a new hard disk.
	
	2. Reallocate the logical drive to the new drive.
	
	3. Restore the entire drive from backup (This includes the entire Windows NT
	  installation, the Windows NT registry, and all other files installed on the
	  system drive.)
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINNT:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
