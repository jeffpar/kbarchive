---
layout: page
title: "Q136873: NET PASSWORD on Windows for Workgroups Causes Error 2453"
permalink: kb/136/Q136873/
---

## Q136873: NET PASSWORD on Windows for Workgroups Causes Error 2453

	Article: Q136873
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.51; :3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running Windows for Workgroups version 3.11, after you log on
	to your Windows NT 3.51 primary domain controller (PDC) that is in a different
	subnet and you issue the command:
	
	     NET PASSWORD /DOMAIN:<domain> <username> <old_password> <new_password>
	
	your password is not changed and the following error message appears:
	
	  Error 2453: Unable to find domain controller for this domain.
	
	CAUSE
	=====
	
	A problem with the NET PASSWORD command in Windows for Workgroups causes this
	command to not find the PDC if there are no backup domain controllers (BDC) in
	the same subnet as the Windows for Workgroups computer.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- If you want to use the NET PASSWORD command, install a BDC in the same subnet
	  as your computer running Windows for Workgroups.
	
	
	-or-
	
	Use the graphical user interface on your computer running Windows for
	Workgroups:
	
	- Run Control Panel and choose Network.
	
	- Choose Startup and then Set Password.
	
	- Type your old password in the Old Password field.
	
	- Type your new password in the New Password and the Confirm New Password
	  fields and choose OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32 for Windows
	for Workgroups version 3.11b. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 tcpip 3.11 3.11a 3.11b wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WINDOWS:3.11; winnt:3.51; :3.11,3.11a,3.11b
	
	=============================================================================
	
