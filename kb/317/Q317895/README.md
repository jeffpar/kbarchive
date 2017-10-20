---
layout: page
title: "Q317895: MS02-018: Patch for Cross-Site Scripting in IIS Help File Search"
permalink: /kb/317/Q317895/
---

## Q317895: MS02-018: Patch for Cross-Site Scripting in IIS Help File Search

{% raw %}

	Article: Q317895
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A cross-site scripting (CSS) vulnerability exists in Internet Information
	Services (IIS) 5.0 and 5.1. Through this vulnerability, an attacker can send a
	request to an affected server that causes a Web page that contains script to be
	sent to another user. The script executes in the user's browser as though it
	comes from the third-party site, which lets the script run by using the security
	settings that are appropriate to the third-party Web site, and also permits the
	attacker to access any data that belongs to the site.
	
	This vulnerability can only be exploited if the user opens a Hypertext Markup
	Language (HTML) mail message or visited Web site of a malicious user. The code
	cannot be "injected" into an existing session.
	
	CAUSE
	=====
	
	This vulnerability occurs because a search facility that permits IIS Help files
	to be searched does not properly validate all inputs before using them.
	
	RESOLUTION
	==========
	
	- Internet Information Services 5.1
	- Internet Information Services 5.0
	
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
	
	MORE INFORMATION
	================
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS02-018.asp
	
	Additional query words: security_patch kbIIS400500510April2002Rollup
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
