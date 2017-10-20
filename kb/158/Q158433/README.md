---
layout: page
title: "Q158433: Re-creating Admin Shares Causes Exception Error"
permalink: /kb/158/Q158433/
---

## Q158433: Re-creating Admin Shares Causes Exception Error

{% raw %}

	Article: Q158433
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you re-create administrative shares (ADMIN$, C$, D$) from Windows NT
	version 4.0 Server Manager, a general protection fault occurs with the following
	message:
	
	  services.exe
	  Exception: access violation (0xc0000005), Address: 0x77f64bc3
	
	CAUSE
	=====
	
	When you try to specify the permissions when re-creating the administrative
	shares through Server Manager, it causes an access violation in services.exe.
	
	MORE INFORMATION
	================
	
	Steps to reproduce the problem
	------------------------------
	
	1. Open Server Manager.
	
	2. Select Shared Directories from the Computer drop down list on the option bar.
	
	3. Stop sharing one of the admin shares (Admin$, C$, or D$).
	
	4. Re-create the admin share and specify the permissions.
	
	For example:
	
	1. Select ADMIN$ and select Stop Sharing.
	
	2. Click New Share, and put in ADMIN$ for the share name.
	
	3. Click the Permissions key, remove Everyone, and add Administrators.
	
	4. Click OK.
	
	RESOLUTION
	==========
	
	Do not set the permissions on the new administrative share. This problem does
	not appear if you do not try to specify the permissions for the newly created
	administrative share.
	
	NOTE: This problem does not exist in Windows NT 3.51. If you specify the
	permissions, Server Manager displays an informational pop-up window that
	states:
	
	  This has been shared for administrative purposes. The permissions cannot
	  be set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
