---
layout: page
title: "Q148174: NWCONV.EXE Does Not Give Correct Permissions"
permalink: /kb/148/Q148174/
---

## Q148174: NWCONV.EXE Does Not Give Correct Permissions

{% raw %}

	Article: Q148174
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use NWCONV.EXE to convert a Netware data a security to a Windows NT
	server with you may find the subdirectories do not have the correct security
	applied.
	
	For example, on a Netware server that has a volume root of "SYS" and several
	subdirectories:
	
	  SYS
	   \APPS
	     \TEST
	        \A
	        \B
	        \C
	        \D
	
	Where normal default perms reside on volume:
	
	  APPS  has a Group trustee with (R    F)
	  TEST  has a Group trustee with (RWCEMF)
	  A..D  through inheritance on TEST would also have(RWCEMF)
	
	After you run NWCONV.EXE, Windows NT has the following permissions:
	
	  APPS  has Group with RX  RX
	  TEST  has Group with RWXD RX
	  A..D  has group with RX RX
	
	The problem is that A..D have RX RX (not RWXD RWXD, which is what the permissions
	should be based on the Netware security prior to the NWCONV.EXE utility being
	run).
	
	WORKAROUND
	==========
	
	This issue can be worked around in two fashions:
	
	1. Remove any trustee assignments that restrict group assignments at the root.
	
	  -or-
	
	2. In file Manager, Security, on the Windows NT server, reset the file security
	  that you require.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
