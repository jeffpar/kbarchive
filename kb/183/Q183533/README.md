---
layout: page
title: "Q183533: XWEB: Error Message: Microsoft VBScript Runtime Error 800a03e3"
permalink: /kb/183/Q183533/
---

## Q183533: XWEB: Error Message: Microsoft VBScript Runtime Error 800a03e3

{% raw %}

	Article: Q183533
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users access a computer running Microsoft Exchange Server version 5.5 from
	a Web browser, the following error message may be displayed:
	
	  Microsoft VBScript runtime error '800a03e3'
	  Unknown runtime error
	  /exchange/USA/lib/session.inc, line 300"
	
	CAUSE
	=====
	
	The users do not have the proper permission on the WebTemp directory of the
	Exchange Server computer.
	
	WORKAROUND
	==========
	
	To make sure that the users have Full Control permission on the WebTemp
	directory of the Exchange Server computer:
	
	1. In Windows Explorer, click the Exchange Server WebTemp directory
	  (%exchsrvr%WebTemp).
	
	2. Right-click the Exchange Server WebTemp directory (%exchsrvr%WebTemp), and
	  then click Properties.
	
	3. Click the Security tab.
	
	4. Click Permissions.
	
	5. Make sure that the users or the group to which the users belong has Full
	  Control permission.
	
	MORE INFORMATION
	================
	
	For additional information about additional resolutions to this problem, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173455 XWEB: OWA Returns Exchange Server Down Error Message
	
	  Q176245 XWEB: VBScript Error 800a03e3 When Accessing OWA Server 5.5
	
	  Q178656 XWEB: Vbscript Error When Attempting To Access A Mailbox
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
