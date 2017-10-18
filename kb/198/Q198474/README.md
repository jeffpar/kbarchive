---
layout: page
title: "Q198474: XWEB:Jscript Errors Refreshing Appointment in Outlook Web Access"
permalink: kb/198/Q198474/
---

## Q198474: XWEB:Jscript Errors Refreshing Appointment in Outlook Web Access

	Article: Q198474
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5,5.5SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Internet Explorer version 3.x for Windows 95 or Windows NT, and you
	attempt to refresh an appointment or meeting request in Outlook Web Access (OWA)
	by pressing the F5 key, you see the following error messages:
	
	  Microsoft JScript runtime error
	
	  In frame: command_fr
	
	  [Line: 27] Object doesn't support this property or method
	
	  Microsoft JScript runtime error
	
	  In frame: form_fr
	
	  [Line: 115] Object doesn't support this property or method
	
	This behavior does not occur with Internet Explorer version 4.x.
	
	WORKAROUND
	==========
	
	To work around this problem, close and reopen the appointment or meeting
	request.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5,5.5SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
