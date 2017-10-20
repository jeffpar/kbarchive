---
layout: page
title: "Q163616: Cannot Unlock Workstation If Password Change Cancelled"
permalink: /kb/163/Q163616/
---

## Q163616: Cannot Unlock Workstation If Password Change Cancelled

{% raw %}

	Article: Q163616
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user logs on interactively to a Windows NT computer using an account whose
	password is about to expire. Windows NT displays a dialog box notifying the user
	that the password will expire shortly and offers the option to change it. The
	user selects "Yes" to change the password, but in the Password Change dialog
	box, the user selects "Cancel." The logon script proceeds and the user's desktop
	appears as normal.
	
	However, if the workstation is subsequently locked, either interactively or by a
	secure screen saver, the logged on user will be unable to unlock the computer.
	Despite using the correct credentials, the following message is displayed:
	
	  The password is incorrect. Please retype your password. Letters in passwords
	  must be typed using the correct case. Make sure that Caps Lock is not
	  accidentally on.
	
	
	WORKAROUND
	==========
	
	Unlock the workstation using another administrative account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt security winlogon expired
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
