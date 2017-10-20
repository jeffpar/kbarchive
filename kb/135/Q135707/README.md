---
layout: page
title: "Q135707: Programs Run at Priority Level 15 May Cause Computer to Hang"
permalink: /kb/135/Q135707/
---

## Q135707: Programs Run at Priority Level 15 May Cause Computer to Hang

{% raw %}

	Article: Q135707
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application that is designed to run at Windows NT priority level 15 runs
	in a tight loop, the system may stop responding (hang).
	
	This problem does not affect the system security and/or data integrity. It does
	not allow someone to access your data, and it does not corrupt your data. It
	prevents the system from processing other tasks, and effectively hangs the
	system.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below, or wait for the next Windows NT service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	NOTE: This fix is to be applied only to computers with Service Pack 2 for Windows
	NT 4.0 installed.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/
	  hotfixes-postSP2/krnl-fix
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
