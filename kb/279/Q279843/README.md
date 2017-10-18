---
layout: page
title: "Q279843: System Named Pipes Are Not Created with Appropriate Permissions"
permalink: kb/279/Q279843/
---

## Q279843: System Named Pipes Are Not Created with Appropriate Permissions

	Article: Q279843
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some system named pipes could behave in an unexpected manner and their
	functionality could be disrupted or broken. For example, errors could occur when
	you try to restart your computer or run "net use" commands. You may have to
	restart the computer (a "hard" boot, or hardware reset) to recover from such
	errors.
	
	CAUSE
	=====
	
	Some of the system named pipes are not created with proper protection. They are
	created with full permissions for everyone. This could allow a malicious user to
	open such a system named pipe and take control of it to cause undesirable
	behavior. For example, the malicious user could open such a named pipe with
	WRITE_DAC permissions and change the access control settings to deny everybody
	access to the named pipe. The malicious user could also inject bad data into the
	pipe or cause disruption of the service as mentioned in the "Symptoms" section
	of this article.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the Windows NT 4.0 Security Rollup Package. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	This resolution ensures that such named pipes in the system are created with the
	correct permissions.
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Microsoft Windows NT 4.0.
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
