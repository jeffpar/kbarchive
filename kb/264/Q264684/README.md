---
layout: page
title: "Q264684: MS00-040: Patch for &quot;Remote Registry Access Authentication&quot; Vuln"
permalink: /kb/264/Q264684/
---

## Q264684: MS00-040: Patch for &quot;Remote Registry Access Authentication&quot; Vuln

	Article: Q264684
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a patch that eliminates a security vulnerability in
	Microsoft Windows NT 4.0. This vulnerability can allow access to the registry
	from a remote computer.
	
	The remote computer must be authenticated by a remote registry server before it
	can be processed. If a request is malformed in a specific fashion, the request
	is misinterpreted by the remote registry server, causing it not to work. Because
	the remote registry server runs within the Winlogon.exe system process in
	Windows NT 4.0, a problem in that process causes problems with the entire
	system.
	
	Only an authenticated user can run such a request. An anonymous (or null-session)
	connection cannot cause this problem. You can place an affected computer back in
	service by rebooting the computer.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following file is available for download from the Microsoft Download Center:
	
	  x86: DownloadDownload Q264684i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=23077)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  06/07/2000  09:20p  343,312  Rpcrt4.dll    x86
	  06/07/2000  09:20p  192,784  Winlogon.exe  x86
	
	  06/07/2000  09:19p  602,384  Rpcrt4.dll    Alpha
	  06/07/2000  09:19p  275,216  Winlogon.exe  Alpha
	
	
	
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
	security vulnerability in Windows NT 4.0 and Windows NT Server version 4.0,
	Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	For additional information about this issue, visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-040.asp
	
	Additional query words: security_patch kbtsesrp
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
