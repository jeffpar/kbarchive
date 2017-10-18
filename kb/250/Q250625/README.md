---
layout: page
title: "Q250625: MS00-024: Default Registry Key Permissions May Allow Privilege E"
permalink: kb/250/Q250625/
---

## Q250625: MS00-024: Default Registry Key Permissions May Allow Privilege E

	Article: Q250625
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,4.5
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It may be possible for a malicious user to gain additional privileges on your
	Windows NT-based computer if the user can interactively log on to the computer.
	The unauthorized privileges include the ability to take the following actions:
	
	- Cause code to run in a local system context.
	
	- Cause code to run the next time another user logs on to the same computer.
	
	- Disable the security protection for a previously reported vulnerability.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q259496i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20330)
	
	  Alpha: DownloadDownload Q259496a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20331)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size    File name     Platform
	  ------------------------------------------------
	  04/11/00  08:19p  41,744  Regacl40.exe  Intel
	  04/12/00  03:43p  95,504  Regacl40.exe  Alpha
	
	
	
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
	security vulnerability in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	For related information about this problem, please visit the following Microsoft
	Web sites:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-008.asp
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-024.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: ACL security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNTW400sp5 kbWinNTW400sp3 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp4 kbWinNTS400sp2 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp6 kbAudDeveloper kbSBServSearch kbWinNTSEnt400SP6a kbWinNTW400SP6a kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ450 kbWinNTW400 kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp2 kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp3 kbWinNTS400sp1 kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp5 kbNTTermServSearch kbBackOfficeSearch
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,4.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
