---
layout: page
title: "Q192794: How to Apply System Policies to Terminal Server"
permalink: kb/192/Q192794/
---

## Q192794: How to Apply System Policies to Terminal Server

	Article: Q192794
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT system policies are designed to be used when a user logs on to a
	domain accounts database. With Windows Terminal Server, you may want to apply
	system policies to affect users who log on to the Terminal Server through the
	console or through the Terminal Server client.
	
	MORE INFORMATION
	================
	
	To implement a system policy to affect all Terminal Server users who log on to
	the console or through the Terminal Server client, do the following:
	
	1. Start System Policy Editor (Poledit.exe) and make the changes for your
	  policy.
	
	2. On the File menu, click Save As, and then save the policy file on your hard
	  disk. For example, save the file as:
	
	     c:\ntconfig.pol
	
	3. On the File menu, click Open Registry.
	
	4. Double-click Local Computer, double-click Network, double-click System
	  Policies Update, and then click the Remote Update check box to select it.
	
	5. In the Update Mode box, click Manual (Use Specific Path), type a path name in
	  the Path for Manual Update dialog box (for example, c:\ntconfig.pol), and
	  then click OK.
	
	NOTE: To display error messages if the policy file is not found when Windows NT
	starts, click the Display Error Message check box to select it.
	
	6. Save your policy to the location listed above as Ntconfig.pol, and then exit
	  Policy Editor.
	
	NOTE: When using Manual Update, you may name the policy file anything you would
	like; just be sure to enter it into the path in step 5 above.
	
	7. Restart Windows NT for the changes in the policy to take effect.
	
	TIP: Every person or computer that logs on after a policy is in place is subject
	to the policy. Therefore, it is a good idea to not edit the default user or
	computer until you are familiar with System Policies. A good idea to use is to
	make a test user/group account in "User Manager" and then make specific policy
	for this user/group in System Policy Editor. After you have the policy working
	properly, you can then transfer the policy to the production environment.
	
	The settings above modify the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Update
	path in the registry.
	
	Remote Update:
	Category: Network
	Subcategory: System Policies update
	Selection: Remote update
	
	Description: Controls how policies are applied to a Windows NT 4.0-based machine.
	With UpdateMode set to 1 (Automatic, the default), Windows NT makes a connection
	to the NETLOGON share of the validating domain controller in the user's context,
	and checks for the existence of the policy file, NTconfig.pol. With UpdateMode
	set to 2 (Manual), Windows NT reads the string specified in the NetworkPath
	value, and checks that path for the existence of the policy file (in this case,
	the policy file name should be included in the NetworkPath value). With
	UpdateMode set to 0 (Off), a policy file is not downloaded from any system, and
	therefore is not applied.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Update
	
	Registry Value Registry Data Description
	UpdateMode REG_DWORD Off = 0, Automatic=1; Manual=2
	NetworkPath REG_SZ Text of UNC path for manual update
	Verbose REG_DWORD Display error messages. Off = 0 or value not present; On = 1
	LoadBalance REG_DWORD Off = 0 or value not present; On = 1
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
