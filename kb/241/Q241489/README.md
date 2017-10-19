---
layout: page
title: "Q241489: User Right Incorrectly Configured in SCE High-Security Template"
permalink: /kb/241/Q241489/
---

## Q241489: User Right Incorrectly Configured in SCE High-Security Template

	Article: Q241489
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0 on a computer configured as the primary domain
	controller (PDC) for a domain and then use the high-security template (Hisecdc4)
	in Security Configuration Editor (SCE) to predefine configurations, the "Access
	this computer from network" user right may not be assigned to the Account
	Operators, Administrators, Backup Operators, Print Operators, Server Operators,
	or Users groups as it should be.
	
	SCE does not return an error message or notify you of the incomplete
	configuration. You may not notice that this right is unassigned unless you check
	User Manager for Domains. However, if you configure the template again, it may
	assign the user rights correctly.
	
	CAUSE
	=====
	
	This behavior occurs because the configuration code for SCE is not setting the
	user rights properly.
	
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
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	SCE is part of the Security Configuration Tool Set. It is a stand-alone snap-in
	tool that you can use to define computer-independent security configurations,
	which are then saved as text-based .inf files.
	
	For additional information about the Security Configuration Tool Set and the role
	of SCE, please see the white papers at the following Microsoft Web site:
	
	  http://www.microsoft.com/Windows/server/Technical/security/
	
	Additional query words: security manager
	
	======================================================================
	Keywords          : kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
