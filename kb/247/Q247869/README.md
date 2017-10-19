---
layout: page
title: "Q247869: MS00-003: Local Procedure Call May Permit Unauthorized Account U"
permalink: /kb/247/Q247869/
---

## Q247869: MS00-003: Local Procedure Call May Permit Unauthorized Account U

	Article: Q247869
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.5
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Windows NT 4.0, it is possible for a malicious
	user to use a program that makes a specific local procedure call (LPC) to
	impersonate any other user who has local logon privileges and run any program,
	including programs that can run in the LocalSystem context. If the domain
	administrator's credentials are present on the computer, this could result in
	compromised security for the domain.
	
	RESOLUTION
	==========
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Q247869i.exe for Intel-based computers now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=17382)
	
	  DownloadDownload Q247869a.exe for Alpha-based computers now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=17383)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size        File name      Platform
	  -------------------------------------------------------
	  01/17/00   01:53p     952,960   Ntkrnlmp.exe   Intel
	  01/17/00   01:52p     932,672   Ntoskrnl.exe   Intel
	  12/02/99   01:32p   1,400,256   Ntkrnlmp.exe   Alpha
	  12/02/99   01:32p   1,372,032   Ntoskrnl.exe   Alpha
	  03/16/00   11:48a         682   Ms003.txt
	  02/21/00   10:31a       4,562   Readme.txt
	
	
	
	STATUS
	======
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition. This problem
	was first corrected in Windows NT Server 4.0, Terminal Server Edition Service
	Pack 6.
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT 4.0 Server and Workstation.
	
	MORE INFORMATION
	================
	
	For additional information about local procedure calls, see pages 95 and 119 of
	the Microsoft Windows NT Workstation 4.0 Resource Kit.
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/ms00-003.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	
	Additional query words: security_patch NtImpersonateClientOfPort LocalSystem
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ450
	Version           : :4.0,4.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
