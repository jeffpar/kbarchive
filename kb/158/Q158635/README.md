---
layout: page
title: "Q158635: Netware Enabled User Unable to Logon to FPNW Server"
permalink: /kb/158/Q158635/
---

## Q158635: Netware Enabled User Unable to Logon to FPNW Server

	Article: Q158635
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A new domain user is created and the Maintain NetWare Compatible Login is
	checked. The user attempts, but is unable to log on to any File and Print
	Services for NetWare (FPNW) server in the domain. If the Maintain NetWare
	Compatible Login is unchecked, the user is able to log on to the domain
	successfully.
	
	One of several different error messages may appear on the users computer when
	they attempt to log on to an FPNW server:
	
	  The password or username you specified is not valid for this resource
	
	-or-
	
	  User has not been granted the requested logon type at this machine.
	
	CAUSE
	=====
	
	Everyone is not included in the "Access This Computer From Network" rights
	dialog box in User Manager for Domains.
	
	RESOLUTION
	==========
	
	To workaround the problem, perform the following steps:
	
	1. Start User Manager for Domains.
	
	2. Choose User Rights from the Policies menu.
	
	3. Select the "Access this computer from the network" right.
	
	4. Verify that "Everyone" is included.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
