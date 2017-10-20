---
layout: page
title: "Q198475: XWEB: Time Out Error Attaching File in Outlook Web Access"
permalink: /kb/198/Q198475/
---

## Q198475: XWEB: Time Out Error Attaching File in Outlook Web Access

{% raw %}

	Article: Q198475
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5,5.5SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Outlook Web Access (OWA) client, you may encounter an error
	message when trying to attach a large file. The size of the attachment may vary,
	and the error can occur with different size attachments because of system
	conditions such as resources, speed of the system, and so on. After selecting
	"Add Attachment Now," the animated icon appears as OWA attempts to add the file.
	Then the following error message appears:
	
	  error 'ASP 0113'
	  Script timed out
	
	  /exchange/USA/Forms/IPM/NOTE/cmpAtt.ASP
	
	  The maximum amount of time for a script to execute was exceeded. You can
	  change this limit by specifying a new value for the property
	  Server.ScriptTimeOut or by changing the value in the IIS administration
	  tools.
	
	After this error has occurred, the only choice is to close the browser window,
	and restart OWA.
	
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
	

{% endraw %}
