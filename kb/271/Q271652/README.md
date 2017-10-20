---
layout: page
title: "Q271652: Patch for Malformed URL Vulnerability That Disables Web Server"
permalink: /kb/271/Q271652/
---

## Q271652: Patch for Malformed URL Vulnerability That Disables Web Server

{% raw %}

	Article: Q271652
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a patch that eliminates a security vulnerability in
	Internet Information Server (IIS). This vulnerability could enable a malicious
	user to send malformed URLs that prevent a Web server from being able to respond
	to requests for Web pages, FTP services, or any other services that are provided
	by IIS.
	
	NOTE: This vulnerability does not provide the opportunity to compromise any data
	on the server or compromise any administrative privileges on the server. You can
	place the server back in service by restarting the IIS service.
	
	You can find additional information about this vulnerability and the patch at the
	following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-063.asp
	
	Frequently asked questions about this vulnerability and the patch are available
	at the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/fq00-063.asp
	
	CAUSE
	=====
	
	The vulnerability is caused by a problem in Windows NT 4.0 that causes IIS to
	mishandle a particular type of invalid URL under certain conditions.
	
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
	
	  DownloadDownload Q271652i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=24403)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------------------
	  08/17/2000  07:43p  375,056  Kernel32.dll  x86
	  08/30/2000  07:07p  375,056  Kernel32.dll  x86 (Uniprocessor)
	
	  08/17/2000  08:42p  590,096  Kernel32.dll  Alpha
	  08/17/2000  08:42p  590,096  Kernel32.dll  Alpha (Uniprocessor)
	
	
	
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
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
