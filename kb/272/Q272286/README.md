---
layout: page
title: "Q272286: Redirection Variable Fails When You Use a POST Method"
permalink: kb/272/Q272286/
---

## Q272286: Redirection Variable Fails When You Use a POST Method

	Article: Q272286
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to redirect a request to a URL through the Internet Information
	Server (IIS) Microsoft Management Console (MMC) Snap-in, if you use the *;!
	non-redirection variable and the POST method in an Active Server Pages (ASP)
	page, the browser stops responding (hangs) and eventually times-out.
	
	WORKAROUND
	==========
	
	To work around this problem, change the Form method from POST to GET.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	
	Additional query words: hang iis4 method post get
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
