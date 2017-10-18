---
layout: page
title: "Q242129: Event ID 12288 with Low Disk Space on Primary Domain Controller"
permalink: kb/242/Q242129/
---

## Q242129: Event ID 12288 with Low Disk Space on Primary Domain Controller

	Article: Q242129
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive Event ID 12288 on your Microsoft Windows NT 4.0 Service Pack
	3-based primary domain controller (PDC). The message lists the Security Accounts
	Manager as the source and indicates that the computer is out of disk space or
	other resources. Also, when you try to gain access to the User Rights command on
	the Policies menu in User Manager, you may receive the following error message:
	
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	This behavior can occur when there is not enough free disk space on the PDC.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the amount of free disk space on the PDC.
	
	Additional query words: resource
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
