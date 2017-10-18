---
layout: page
title: "Q319688: MS02-018: Patch Available for Chunked Encoding Vulnerability"
permalink: kb/319/Q319688/
---

## Q319688: MS02-018: Patch Available for Chunked Encoding Vulnerability

	Article: Q319688
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A buffer overrun vulnerability exists in Internet Information Server (IIS) 4.0
	and Internet Information Services (IIS) 5.0. By sending a specially chosen
	request to an affected web server, an attacker could either disrupt Web services
	or gain the ability to run a program on the server. Such a program would run
	with full system privileges in IIS 4.0, and with fewer but nevertheless
	significant privileges in IIS 5.0.
	
	Customers who have used the IIS Lockdown Tool to configure their servers as
	static Web servers are already protected against this vulnerability. Likewise,
	the URLScan tool can be configured to block the vulnerability, and the affected
	mechanism itself can be disabled. However, because of the seriousness of the
	vulnerability, Microsoft recommends that all customers install the patch,
	including those who have already taken these steps.
	
	CAUSE
	=====
	
	This vulnerability results because of an arithmetic error in the Active Server
	Pages (ASP) functionality that enables data to be uploaded to a Web server by
	using chunked encoding. The error causes IIS to allocate a buffer of the wrong
	size to hold incoming data, with the result that the data could overrun the end
	of the buffer and neighboring system memory.
	
	RESOLUTION
	==========
	
	- Internet Information Services 5.0
	- Internet Information Server 4.0
	
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
	
	The vulnerability that is described in this article does not apply to Internet
	Information Services (IIS) 5.1. However, a variant of this vulnerability that
	affects IIS 4.0, 5.0, and 5.1 exists elsewhere in the chunked-encoding
	mechanism. This variant could be exploited in a similar manner as the preceding
	vulnerability, and would have the same scope.
	
	The update for these vulnerabilities is included in the "MS02-018: April 2002
	Cumulative Patch for Internet Information Services". For additional information
	about how to obtain this patch, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	For more information about these vulnerabilities, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS02-018.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIISCom security_patch kbIIS400500510April2002Rollup
	
	======================================================================
	Keywords          : kbenv kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
