---
layout: page
title: "Q126868: error with how to setup event logging"
permalink: kb/126/Q126868/
---

## Q126868: error with how to setup event logging

	Article: Q126868
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Page 69 of the Microsoft SNA Server for Windows NT "Managing SNA Server" manual
	contains an error on how to specify event types and servers for event logging.
	Step one states:
	
	  Bring up Windows NT Event Viewer.
	
	WORKAROUND
	==========
	
	Step one should state:
	
	  Bring up SNA ADMIN.
	
	Refer to chapter 13 page 245 in the Administrators Guide for the correct steps on
	how to setup event logging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words: prodsna 2.10 one two 1 2 Options Menu choose Logs administrator
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
