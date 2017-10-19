---
layout: page
title: "Q104558: Changing the Computer Name of a Windows NT Advanced Server"
permalink: /kb/104/Q104558/
---

## Q104558: Changing the Computer Name of a Windows NT Advanced Server

	Article: Q104558
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Changing computer names for Windows NT Advanced Server can only be
	done after the computer is synchronized.
	
	To change the name of a Controller or Server for Windows NT Advanced
	Server, do the following:
	
	1. Create a new Server Account with Server Manager on the Controller.
	
	2. From the computer that needs the computer name changed, change the name to
	  the new name.
	
	  The administrator will receive a message warning "Changing the computer name
	  without the domain administrator first changing its name on the domain will
	  result in domain accounts not being able to access or log on to this
	  computer. Are you sure?"
	
	  Choose Yes (if the computer account has been created on the Controller).
	
	3. Shut down and restart the Server with the name change.
	
	4. When you log on, you will receive the message "At least one service or driver
	  failed during system startup."
	
	  The event log will show that netlogon failed because it "Failed to
	  authenticate with the controller, a Windows NT Advanced Server for domain
	  XXXX" Event ID = 3210. Data code C0000022 Status_Access_Denied."
	
	  The administrator should start the Server Manager on the computer on which the
	  name was changed. The old computer name appears highlighted and the new name
	  is still unavailable (grayed out). This is a browser problem and has nothing
	  to do with netlogon failing to start on this computer.
	
	5. Select the new computer name that is unavailable and select Synchronize With
	  Domain Controller. At this point, it will start netlogon and synchronize the
	  database with the Controller correctly and the computer name will now be
	  highlighted in Server Manager.
	
	6. Delete the old computer (machine) account.
	
	Additional query words: prodnt rename
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ351 kbWinNTAdvServ350 kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
