---
layout: page
title: "Q245072: Err Msg: The Referenced Account Is Locked Out and May Not Be..."
permalink: /kb/245/Q245072/
---

## Q245072: Err Msg: The Referenced Account Is Locked Out and May Not Be...

	Article: Q245072
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
	
	When you try to log on to a backup domain controller (BDC) that is running
	Microsoft Windows NT Server 4.0, you may not be able to do so, and you may
	receive the following error message:
	
	  The referenced account is locked out and may not be logged on to.
	
	Also, when you log on to the Microsoft Windows NT Server 3.51-based primary
	domain controller (PDC) on the same domain, and then try to connect to the BDC
	from the PDC, you may receive the same error message.
	
	CAUSE
	=====
	
	This behavior can occur if the PDC and the BDC are not correctly synchronized.
	
	RESOLUTION
	==========
	
	To resolve this issue, synchronize the PDC and the BDC:
	
	1. Log on to the domain using an account that has administrative privileges.
	
	2. In Server Manager, click the name of the BDC in the Computer box.
	
	3. On the Computer menu, click Synchronize With Primary Domain Controller, and
	  then click Yes to confirm the synchronization.
	
	4. In Event Viewer, check the system log in Event Viewer to make sure the
	  synchronization was successful.
	
	MORE INFORMATION
	================
	
	When you gain access to the BDC using an Administrator account, you may see an
	Event ID 7023 error message in Event Viewer. Event ID 7023 indicates that access
	was denied with the Netlogon service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
