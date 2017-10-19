---
layout: page
title: "Q192126: Add Workstation Fails with RestrictAnonymous"
permalink: /kb/192/Q192126/
---

## Q192126: Add Workstation Fails with RestrictAnonymous

	Article: Q192126
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error occurs when the Remoteboot service attempts to update the Access
	Control List (ACL) on new workstations in the Rpl files\Workstations folder. The
	service appears to be attempting an anonymous user connection to the PDC
	(Primary Domain Controller) to enumerate the SID (Security Identifier) for the
	Remote Boot workstation account to apply to the directory and fails because of
	the Restrict Anonymous setting. The following error message appears:
	
	  The following error occurred updating the file permissions for
	  workstation <xxxx>.
	  Windows NT error 0xc0000022
	
	CAUSE
	=====
	
	The machine account is created correctly using a valid account but, while
	accessing the ACL, it uses a null user name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	This only fails when the Remoteboot manager is run on a BDC or a member server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
