---
layout: page
title: "Q248185: SID Enumeration Function in LSA May Not Handle Argument Properly"
permalink: /kb/248/Q248185/
---

## Q248185: SID Enumeration Function in LSA May Not Handle Argument Properly

{% raw %}

	Article: Q248185
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,1.1,4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT4sp6fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the LsaLookupSids() function in Windows NT Local Security Authority (LSA)
	is used to determine the Security Identifier (SID) associated with a particular
	user or group name, invalid or contradictory arguments passed to the function
	may not be handled correctly. The result may cause LSA to cease functioning
	properly and prevent the computer from working. You can restart an affected
	computer to put it back into service, but any work that was in progress at the
	time is lost.
	
	NOTE: This vulnerability does not affect computers running Microsoft Windows
	2000.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Q248183.exe for x86-based computers now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=16798)
	
	  DownloadDownload Q248183.exe for Alpha-based computers now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=16799)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name    Platform
	  ---------------------------------------------------
	  11/22/99   03:05p   284,808   Lsasrv.dbg   x86
	  11/22/99   03:05p   155,408   Lsasrv.dll   x86
	
	  11/22/99   03:05p    82,260   Lsasrv.dbg   Alpha
	  11/22/99   03:05p   253,712   Lsasrv.dll   Alpha
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition. This problem
	was first corrected in Windows NT Server 4.0, Terminal Server Edition Service
	Pack 6.
	
	MORE INFORMATION
	================
	
	LSA provides security services for Windows NT. Among other tasks, it
	authenticates all logon requests, adjudicates users' privileges, determines
	whether users can gain access to requested resources, and oversees the security
	auditing functions. The loss of the LSA service through this vulnerability
	essentially renders the computer unable to perform any useful work because all
	requests for services are denied by default.
	
	When a user makes a service request that calls LsaLookupSids(), Windows NT
	performs a security check to verify that the user has sufficient privileges
	before fulfilling the request. There is no capability through this vulnerability
	to bypass the security check. However, the computer stops responding before the
	check is made, so any user, regardless of privilege, could levy the request and
	cause the LSA to stop responding. Although it is possible to call LSA functions
	remotely, doing so requires NetBIOS. If you follow standard recommended security
	practices, NetBIOS should be filtered through a firewall, preventing an external
	request from reaching your computer.
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/ms99-057faq.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT4sp6fix kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch kbAudDeveloper kbClustServSearch kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ400 kbClustServ110
	Version           : winnt:1.0,1.1,4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
