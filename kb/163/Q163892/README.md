---
layout: page
title: "Q163892: A Service May Not Set Hooks on 32-bit GUI Applications"
permalink: /kb/163/Q163892/
---

## Q163892: A Service May Not Set Hooks on 32-bit GUI Applications

{% raw %}

	Article: Q163892
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Microsoft Windows NT 4.0, a Win32 Service cannot set a
	hook on a 32-bit GUI application.
	
	CAUSE
	=====
	
	When an interactive service wants to hook a user's process, it is not allowed to
	because the desktop opened does not have the DF_ALLOWOTHERACCOUNTHOOK flag set.
	
	
	RESOLUTION
	==========
	
	A fix was developed such that if "Allow Service to Interact with Desktop" is
	set, the service is allow to set hooks on a user's process. This fix requires
	Microsoft Windows NT version 4.0 Service Pack 2 to be installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
