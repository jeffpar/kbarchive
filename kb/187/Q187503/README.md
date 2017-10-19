---
layout: page
title: "Q187503: Very Long URL Passed to ASP May Cause Access Violation"
permalink: /kb/187/Q187503/
---

## Q187503: Very Long URL Passed to ASP May Cause Access Violation

	Article: Q187503
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 21-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a very long Uniform Resource Locator (URL), usually with hundreds of
	forward slash (/) characters, is passed to an Active Server Pages (ASP) page on
	the Web server, an access violation occurs.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the following fix.
	
	This fix should have the following time stamp:
	
	     04/10/98  07:49p               382,576 asp.dll (Intel)
	     04/10/98  08:04p               557,328 asp.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 3.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Contact
	Microsoft Technical Support for more information.
	
	
	
	Additional query words: violate hot fix qfe MapPath akz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
