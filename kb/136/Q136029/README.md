---
layout: page
title: "Q136029: Err Msg: &quot;The Logon Server Could Not Be Found&quot; with RAS"
permalink: /kb/136/Q136029/
---

## Q136029: Err Msg: &quot;The Logon Server Could Not Be Found&quot; with RAS

	Article: Q136029
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Windows NT Workstation 3.5 RAS client joins a remote domain over a RAS link
	and then disconnects from the domain and becomes a RAS server, any Windows NT
	clients connecting to that RAS server receive the following error when
	attempting to access a shared resource:
	
	  The Logon Server Could Not Be Found
	
	CAUSE
	=====
	
	When Windows NT Workstation acts as a RAS server, it does not cache the
	credentials of the domain that it is remotely connected to. Instead, it caches
	the domain logon information and must search for the domain it was connected to.
	When the domain does not respond, the clients connected to the Workstation RAS
	server receive the "The Logon Server Could Not be Found" error.
	
	WORKAROUND
	==========
	
	Remove the Windows NT Workstation from the remote domain and add the computer to
	a workgroup of the same name.
	
	To remove a Windows NT Workstation from a domain:
	
	1. Run Control Panel and choose the Network icon.
	
	2. Choose the Change button next to Domain.
	
	3. Change from a Domain to a Workgroup with the same name.
	
	4. Choose OK from the Domain/Workgroup dialog box.
	
	5. Choose OK from the Network Settings dialog box.
	
	6. Restart Windows NT Workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Version 3.51.
	
	Additional query words: prodnt join
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search
	Version           : 3.50
	
	=============================================================================
	
