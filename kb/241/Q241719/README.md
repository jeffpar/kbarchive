---
layout: page
title: "Q241719: Incorrect Analysis Information for Security Options in SCE"
permalink: /kb/241/Q241719/
---

## Q241719: Incorrect Analysis Information for Security Options in SCE

	Article: Q241719
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbtool kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Security Configuration Editor (SCE) to edit a security template on
	a computer running Windows NT 4.0 and you save and import the configuration, an
	analysis of some security options may appear as "Matched" when they are not.
	
	The results of the analysis show that you have configured a security setting
	successfully when this is not the case. This situation occurs when you change
	the Legal Message text in the security template or other features in the local
	policy.
	
	CAUSE
	=====
	
	This behavior occurs because the Analysis program assumes that a match is
	configured when a registry key value for a configuration is missing.
	
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
	
	When you apply Windows NT 4.0 Service Pack 6, the Analysis program considers any
	missing registry entries as "Not Configured" and reflects the status as
	"Mismatched."
	
	For additional information about Microsoft Security Configuration tools, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/TechNet/win2000/win2ksrv/technote/securcon.asp
	
	Additional query words: scm manager
	
	======================================================================
	Keywords          : kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
