---
layout: page
title: "Q314339: MS02-018: Patch for AV in URL Error Handling Vulnerability"
permalink: kb/314/Q314339/
---

## Q314339: MS02-018: Patch for AV in URL Error Handling Vulnerability

	Article: Q314339
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3
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
	
	This vulnerability does not allow any data on the system to be compromised, nor
	does it enable the attacker to gain any rights on the system.
	
	Microsoft investigations to date suggest that this vulnerability only occurs in
	cases in which Front Page Server Extensions (FPSE) are installed on the system,
	although it is possible that it may also occur under other conditions.
	
	CAUSE
	=====
	
	This vulnerability occurs because IIS incorrectly handles the error condition
	that results when one of the ISAPI filters that FPSE installs receives a Uniform
	Resource Locator (URL) that exceeds the maximum permitted length. Although the
	problem is with IIS, and therefore can also occur in cases that involve
	additional Internet Server Application Programming Interface (ISAPI) filters,
	Microsoft investigations to date have not revealed any other cases in which this
	occurs.
	
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
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
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
	vulnerability in Microsoft Internet Information Services 5.0. This problem was
	first corrected in Windows 2000 Service Pack 3.
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For more information on these vulnerabilities, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS02-018.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIISCom kbIIS400500510April2002Rollup security_patch
	
	======================================================================
	Keywords          : kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
