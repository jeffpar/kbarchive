---
layout: page
title: "Q320374: MS02-018: Patch Available for Cross-site Scripting Vulnerability"
permalink: /kb/320/Q320374/
---

## Q320374: MS02-018: Patch Available for Cross-site Scripting Vulnerability

	Article: Q320374
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbenv kbSecurity kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A cross-site scripting (CSS) vulnerability exists in Internet Information
	Services (IIS) 5.0 and 5.1. Through this vulnerability, it could be possible for
	an attacker to send a request to an affected server that would cause a Web page
	that contains script to be sent to another user. The script would execute within
	the user's browser as though it had come from the third-party site. This would
	let it run by using the security settings that are appropriate to the
	third-party Web site, and provide the attacker with access to any data that the
	site owns.
	
	This vulnerability could only be exploited if the user opened an HTML mail
	message or visited a malicious user's Web site. The code cannot be "injected"
	into an existing session.
	
	CAUSE
	=====
	
	This vulnerability occurs because a customized message service in IIS does not
	properly validate all inputs before they are used. The customized message is
	what is returned when someone requests a Web page that does not exist on the
	server.
	
	Note that the default error message in IIS is unaffected by this vulnerability.
	
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
	
	For more information about this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS02-018.asp
	
	Additional query words: security_patch kbIIS400500510April2002Rollup
	
	======================================================================
	Keywords          : kbenv kbSecurity kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
