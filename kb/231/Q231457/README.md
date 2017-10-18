---
layout: page
title: "Q231457: Malformed Request Causes LSA Service to Stop Responding"
permalink: kb/231/Q231457/
---

## Q231457: Malformed Request Causes LSA Service to Stop Responding

	Article: Q231457
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbProgramming kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A specially malformed request to the Microsoft Local Security Authority (LSA)
	service may be used to exploit a security vulnerability on a computer running
	Windows NT. A user can abuse this vulnerability to run a program and cause a
	denial of service attack that may cause the LSA service to stop responding
	(hang) and require you to restart the computer. You may also receive the
	following error message:
	
	  Sorry! The Microsoft Exchange Server is down or the HTTP service has been
	  disabled by an administrator. Please try your request again later.
	
	CAUSE
	=====
	
	Windows NT provides the ability to manage user privileges programmatically
	through the Local Security Authority (LSA) application programming interface
	(API). This API allows a program to query user names, modify privileges, and
	change other elements of the security policy, subject to the program's
	authorizations. Certain API methods do not correctly handle certain types of
	invalid arguments. If a call is made using a specially malformed argument, the
	LSA service may hang. The vulnerability is a denial of service threat only, and
	the LSA service can be restored by restarting the computer. This vulnerability
	cannot be used by unauthorized program to query or modify user information or
	privileges.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	NOTE: This fix can be installed on Windows NT 4.0 Service Pack 4 and Service Pack
	5.
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional security-related information about Microsoft products, please
	visit:
	
	  http://www.microsoft.com/security/
	
	Additional query words: MS99-020
	
	======================================================================
	Keywords          : kbProgramming kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
