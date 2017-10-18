---
layout: page
title: "Q164309: Windows NT Client: Primary/Secondary WINS Servers Switch"
permalink: kb/164/Q164309/
---

## Q164309: Windows NT Client: Primary/Secondary WINS Servers Switch

	Article: Q164309
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT client has a primary and a secondary WINS server assigned, it
	may unnecessarily switch the secondary server to primary server.
	
	CAUSE
	=====
	
	Normally, a workstation should only move the secondary WINS server into the
	primary role if the primary WINS server does not respond to repeated name
	registration or name query attempts. However, a problem with Netbt.sys causes
	some workstations to switch when doing normal name refreshes.
	
	This switch can cause unnecessary wide area network (WAN) traffic if the WINS
	server defined as primary is a local computer, and the one defined as secondary
	is a remote computer or across a WAN link.
	
	RESOLUTION
	==========
	
	A new version of Netbt.sys has been created that no longer exhibits this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the Following word in
	the Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q173525 WINS Client May Switch Primary and Secondary WINS Servers
	
	  Q252511 Statically Configured WINS Client Switches Between Servers
	
	Additional query words: prodnt ipconfig order reversed
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
