---
layout: page
title: "Q117860: STOP Message May Appear When You Administer 3.5 Server"
permalink: kb/117/Q117860/
---

## Q117860: STOP Message May Appear When You Administer 3.5 Server

	Article: Q117860
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Windows NT 3.1 User Manager to administer a beta Windows
	NT Server 3.5, the following STOP message may appear:
	
	  User Manager for Domains
	  <STOP> A device attached to the system is not functioning.
	
	This message may appear only when you attempt to administer a Windows NT Server
	3.5 that is not a domain controller.
	
	CAUSE
	=====
	
	This message appears when the Windows NT 3.1 User Manager for Domains reads
	information incorrectly from the Registry of the Windows NT Server 3.5.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5. This problem has also been
	corrected in the latest U.S. Service Pack for Windows NT and Windows NT Advanced
	Server version 3.1. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt err msg blue trap
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
