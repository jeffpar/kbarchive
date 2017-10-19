---
layout: page
title: "Q225279: Unable to Start Internet Services Manager (HTML) Tool"
permalink: /kb/225/Q225279/
---

## Q225279: Unable to Start Internet Services Manager (HTML) Tool

	Article: Q225279
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbui
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open the Internet Services Manager (HTML), you may receive an
	error message stating that the page cannot be displayed.
	
	CAUSE
	=====
	
	This issue can occur after you edit the bandwidth throttling with the Internet
	Services Manager (HTML) tool by clicking to select the Enable Bandwidth
	Throttling check box, leaving the "Maximum network use" box blank, and then
	clicking OK.
	
	RESOLUTION
	==========
	
	To resolve this issue, reset bandwidth throttling to the default setting:
	
	1. Start Internet Services Manager (Microsoft Management Console).
	
	2. Double-click Internet Information Server, and then click the appropriate
	  server name.
	
	3. On the Action menu, click Properties.
	
	4. Type "1024" (without the quotation marks) in the "Maximum network use" box,
	  and then click Apply.
	
	5. Click to clear the Enable Bandwidth Throttling check box, and then click
	  Apply.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Internet Services Manager (HTML) does not check the "Maximum network use" box
	for a value between 1 and 32,768 when the box is left blank. These values are
	checked when editing this option either by individual Web site (in the
	ISM-HTML), or by server and Web site in the Internet Services Manager (Microsoft
	Management Console).
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbui 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
