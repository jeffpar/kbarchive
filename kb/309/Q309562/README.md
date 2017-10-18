---
layout: page
title: "Q309562: Proxy-to-Proxy Authentication Error after Installing IIS Patch"
permalink: kb/309/Q309562/
---

## Q309562: Proxy-to-Proxy Authentication Error after Installing IIS Patch

	Article: Q309562
	Product(s): Internet Information Server
	Version(s): 2.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the IIS security patch that is described in Q301625,
	proxy-to-proxy authentication that is based on NTLM may not work, and the
	following error message may be generated from a Microsoft Internet Explorer
	client:
	
	  Error 12201 A chained proxy server or array member requires proxy-to-proxy
	  authentication. Please contact your server administrator.
	
	  Event Log:
	  Event ID 139 Type Error
	  Source: WebproxyServer
	  Proxy Server IP address of upstream proxy requires proxy to proxy
	  authentication. Proxy server PXNT01 is not configured to do so.
	
	This error message may be generated if you have an array (or chain) of proxy
	servers, and the servers are configured to use NTLM authentication.
	
	CAUSE
	=====
	
	This problem is caused by a regression in one of the security hotfixes in IIS.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the NTLM authentication method between
	proxy servers in an array or chain.
	
	RESOLUTION
	==========
	
	IIS Version 5.0 on Microsoft Windows 2000 Server
	------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date           Version              Size     File name
	  ---------------------------------------------------------
	  10-28-2001     5.0.2195.4555 shp    333,072  Asp.dll
	  10-28-2001     5.0.2195.3649 shp    299,792  Fscfg.dll
	  10-28-2001     5.0.2195.4555 shp      8,464  Ftpctrs2.dll
	  10-28-2001     5.0.2195.4555 shp      6,416  Ftpmib.dll
	  10-28-2001     5.0.2195.4555 shp      9,488  Httpmib.dll
	  10-28-2001     5.0.2195.4555 shp     13,584  Infoadmn.dll
	  10-28-2001     5.0.2195.4555 shp    246,032  Infocomm.dll
	  10-28-2001     5.0.2195.4555 shp     62,736  Isatq.dll
	  10-28-2001     5.0.2195.3649 shp      3,584  Spmsg.dll
	  10-28-2001     5.0.2195.4555 shp      7,440  W3ctrs.dll
	  10-28-2001     5.0.2195.4560 shp    348,432  W3svc.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services 5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	For additional information on how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbAudDeveloper kbiis500 kbProxyServSearch kbProxyServ200
	Version           : :2.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
