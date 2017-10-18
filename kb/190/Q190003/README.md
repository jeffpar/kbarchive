---
layout: page
title: "Q190003: Error -1073741670(0xC0000098) Using the HTML Administrator"
permalink: kb/190/Q190003/
---

## Q190003: Error -1073741670(0xC0000098) Using the HTML Administrator

	Article: Q190003
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use the HTML version of the Internet Service Manager (also
	known as the HTML Administration, or HTMLA) one of the following errors is
	displayed in Internet Explorer:
	
	  -1073741670(0xC0000098)
	  -1073741670 (0xc000009a)
	
	CAUSE
	=====
	
	Windows is unable to contact the domain controller in order to validate your
	user session. This usually occurs when the connection to the domain controller
	is lost.
	
	WORKAROUND
	==========
	
	To work around this problem, reestablish the connection to the domain
	controller.
	
	MORE INFORMATION
	================
	
	Although you can log on to Windows NT using cached permissions, Internet
	Information Server (IIS) does not use them. IIS must communicate with the domain
	controller in order to validate the account.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
