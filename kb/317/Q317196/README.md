---
layout: page
title: "Q317196: MS02-018: Patch for Service Denial Through FTP Status Request"
permalink: /kb/317/Q317196/
---

## Q317196: MS02-018: Patch for Service Denial Through FTP Status Request

{% raw %}

	Article: Q317196
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A denial of service vulnerability exists in Internet Information Server (IIS)
	4.0, Internet Information Services (IIS) 5.0, and IIS 5.1. By exploiting this
	vulnerability, an attacker can temporarily prevent a Web server from providing
	Web services.
	
	This vulnerability can only be exploited if the Web server is also configured to
	provide File Transfer Protocol (FTP) services. IIS 4.0 installs FTP services by
	default, but IIS 5.0 and 5.1 do not. The IIS Lockdown Tool disables FTP support
	by default.
	
	This vulnerability does not allow any data on the system to be compromised, nor
	does it enable the attacker to gain any rights on the system.
	
	CAUSE
	=====
	
	This vulnerability results because the FTP implementation in IIS 4.0, 5.0, and
	5.1 does not correctly handle a request for the status of the connection if the
	request has been malformed in a particular way. Receiving such a request results
	in the failure of the IIS service.
	
	RESOLUTION
	==========
	
	- Internet Information Services 5.1
	- Internet Information Services 5.0
	- Internet Information Server 4.0
	
	Internet Information Services 5.1
	---------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	Internet Information Services 5.0
	---------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	Internet Information Server 4.0
	-------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	STATUS
	======
	
	Internet Information Services 5.1
	---------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Services 5.1.
	
	Internet Information Services 5.0
	---------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Services 5.0.
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For more information on these vulnerabilities, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/securit y/bulletin/MS02-018.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information on how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIIS400500510April2002Rollup security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
