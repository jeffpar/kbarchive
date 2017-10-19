---
layout: page
title: "Q298340: MS01-044: Patch Available for WebDAV Denial of Service"
permalink: /kb/298/Q298340/
---

## Q298340: MS01-044: Patch Available for WebDAV Denial of Service

	Article: Q298340
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP3Fix KbSECVulnerability KbSECBulletin KbSECHack kbWin2000sp3fi
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Information Services (IIS) 5.0, a denial of service vulnerability
	exists that an attacker could exploit to temporarily disrupt Web services on an
	IIS 5.0 server.
	
	Mitigating Factors:
	
	- The effect of an attack would be temporary. The server would automatically
	  resume normal service as soon as the malformed requests stopped arriving.
	
	- This vulnerability does not provide an attacker with any capability to carry
	  out WebDAV requests.
	
	- This vulnerability does not provide any capability to compromise data on the
	  server or gain administrative control over it.
	
	- This vulnerability only affects IIS 5.0.
	
	CAUSE
	=====
	
	This vulnerability occurs because of the way that WebDAV handles a particular
	type of very long, invalid request. The net effect is to cause an access
	violation that results in the failure of the IIS 5.0 process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time  Version        Size     File name
	  ------------------------------------------------------
	  12-May-2001  1815  5.0.2195.3608  246,032  Httpext.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Internet Information Services 5.0. This problem was first
	corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This patch also contains fixes for the problems described in the following
	Microsoft Knowledge Base article:
	
	  Q297860 IIS 5.0 Security and Post-Windows NT 4.0 SP5 IIS 4.0 Patch Rollup
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-044.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: security_patch kbWin2000srp1
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP3Fix KbSECVulnerability KbSECBulletin KbSECHack kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
