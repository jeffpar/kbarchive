---
layout: page
title: "Q271929: SS3:Referring URLs in Usage Analysis Truncated to 100 Characters"
permalink: kb/271/Q271929/
---

## Q271929: SS3:Referring URLs in Usage Analysis Truncated to 100 Characters

	Article: Q271929
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Usage Analysis reports show incomplete referring URLs.
	
	CAUSE
	=====
	
	The table and stored procedure that are involved in referring URLs are designed
	with a limit of 100 characters. During the Usage Analysis import process, the
	referring URLs are truncated to 100 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Site Server 3.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbAudDeveloper kbSiteServ300
	Version           : :3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
