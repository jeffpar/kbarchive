---
layout: page
title: "Q242132: How to: Implement system policies on Windows 95 Clients."
permalink: /kb/242/Q242132/
---

## Q242132: How to: Implement system policies on Windows 95 Clients.

{% raw %}

	Article: Q242132
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement system policies on Microsoft Windows
	95-based client computers.
	
	MORE INFORMATION
	================
	
	To implement system policies on a Windows 95-based client computer, create a
	policy file in Windows 95, and then configure Windows 95 to use personal
	settings.
	
	NOTE: If you already have a policy file, make sure that its file name is
	Config.pol and the file is located in the Netlogon folder of either the primary
	domain controller or the backup domain controller.
	
	To create a policy file in Windows 95:
	
	1. Start System Policy Editor.
	
	2. On the File menu, click New File.
	
	3. Set policy options:
	
	  a. Double-click Default Computer, select the computer policy options, and
	     then click OK.
	
	  b. Double-click Default User, select the user policy options, and then click
	     OK.
	
	4. Save the policy file:
	
	  a. On the File menu, click Exit.
	
	  b. To save the changes, click Yes.
	
	  c. Save the file as Config.pol in the Netlogon folder of either the primary
	     domain controller or the backup domain controller. The Netlogon folder is
	     located in the following folder:
	
	  C:\Winnt\System32\Repl\Import\Scripts
	
	To configure Windows 95 to use personal settings after you create the policy
	file:
	
	1. In Control Panel, double-click Passwords.
	
	2. Click the Users Profiles tab.
	
	3. Click "Users Can Customize Their Preferences And Desktop Settings. Windows
	  Switches To Your Personal Settings Whenever You Log In", and then click OK.
	
	4. Click Close, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : winnt:4.0; :95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
