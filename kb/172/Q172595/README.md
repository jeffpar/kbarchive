---
layout: page
title: "Q172595: WinNT Err: Stop 0x0000007F in Netbt.sys Due to #INCLUDE"
permalink: /kb/172/Q172595/
---

## Q172595: WinNT Err: Stop 0x0000007F in Netbt.sys Due to #INCLUDE

{% raw %}

	Article: Q172595
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following STOP error message appears when your Windows NT 4.0 computer
	attempts to load the NetBIOS name table from its Lmhosts file:
	
	  STOP 0x0000007F (0x00000008,0x00000000,0x00000000,0x00000000)
	
	CAUSE
	=====
	
	The Lmhosts files that you are using contain recursive loops within the #INCLUDE
	statements.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to edit your Lmhosts files with a text
	editor to verify that the #INCLUDE statements do not loop.
	
	MORE INFORMATION
	================
	
	For example, Server1 has an Lmhosts file that contains the following entries:
	
	  1.2.3.4   Server2 #DOM:Domain
	  #INCLUDE \\Server2\public\lmhosts
	
	Server2 may have an Lmhosts file that contains the following entries:
	
	  2.3.4.1   Server3 #DOM:Domain
	  #INCLUDE \\Server3\public\lmhosts
	
	Server3 may have an Lmhosts file that contains the following entries:
	
	  3.4.1.2   Server1 #DOM:Domain
	  #INCLUDE \\Server1\public\lmhosts
	
	When your Windows NT computer attempts to parse the Lmhosts file, it successively
	refers to the next Lmhosts file through the #INCLUDE statement and, as in the
	example above, loops back to the original file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          : kbnetwork kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
