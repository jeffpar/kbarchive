---
layout: page
title: "Q275567: MS00-091: Multiple NetBT Sessions May Hang Local Host"
permalink: kb/275/Q275567/
---

## Q275567: MS00-091: Multiple NetBT Sessions May Hang Local Host

	Article: Q275567
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbnetwork kbSecurity MSGRAPH kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerabilit
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a remote computer creates multiple TCP/IP connections with a local host
	and establishes a NetBIOS over TCP/IP (NetBT) session by using port 139, when
	the remote computer does not properly initiate a session closure for each open
	connection, the local host may stop responding (hang).
	
	Note that this issue does not affect computers that are running Microsoft Windows
	2000.
	
	RESOLUTION
	==========
	
	Windows NT 4.0; BackOffice Server 4.0 and 4.5; and BackOffice Small Business Server 4.0, 4.0a, and 4.5
	------------------------------------------------------------------------------------------------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following file is available for download from the Microsoft Download Center:
	
	  Intel-based computers:
	
	  DownloadDownload Q275567i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25114)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time     Size      File name   Platform
	  -----------------------------------------------------------
	  09/29/2000   09:05p   124,688   Netbt.sys   Intel
	  09/29/2000   09:04p   224,912   Netbt.sys   Alpha
	
	
	
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
	security vulnerability in Microsoft Windows NT 4.0 and Windows NT Server version
	4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	Disabling a computer's Server service (Windows NT) or File and Print Sharing
	(Windows 95 or Windows 98) can prevent the computer from being susceptible to
	this vulnerability.
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/ms00-091.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: security_patch kbtsesrp
	
	======================================================================
	Keywords          : kbnetwork kbSecurity MSGRAPH kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbAudDeveloper kbWin95search kbWin98search kbWin98SEsearch kbBackOfficeSearch kbSBServSearch kbZNotKeyword3 kbWin98 kbWin98SE kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0a,4.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
