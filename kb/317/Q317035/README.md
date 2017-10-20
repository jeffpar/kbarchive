---
layout: page
title: "Q317035: MS02-018: Patch for Cross-Site Scripting in Redirect Response"
permalink: /kb/317/Q317035/
---

## Q317035: MS02-018: Patch for Cross-Site Scripting in Redirect Response

{% raw %}

	Article: Q317035
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
	
	A cross-site scripting (CSS) vulnerability exists in Internet Information Server
	(IIS) 4.0, Internet Information Services (IIS) 5.0, and IIS 5.1. Through this
	vulnerability, an attacker can send a request to an affected server that causes
	a Web page that contains script to be sent to another user. The script executes
	in the user's browser as though it comes from the third-party site, which lets
	the script run by using the security settings that are appropriate to the
	third-party Web site, and also permits the attacker to access any data that
	belongs to the site.
	
	This vulnerability can only be exploited if the user opens a Hypertext Markup
	Language (HTML) mail message or visited Web site of a malicious user. The code
	cannot be "injected" into an existing session.
	
	CAUSE
	=====
	
	This vulnerability occurs because a message that is returned when someone
	requests a Web page that has been moved to a new location does not properly
	validate all inputs before using them. Such a message is known as a redirect
	response.
	
	A successful attack can only be performed by using this message if the target of
	the attack is running a browser other than Microsoft Internet Explorer.
	
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
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information on how to install multiple hotfixes with only one
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
	

{% endraw %}
