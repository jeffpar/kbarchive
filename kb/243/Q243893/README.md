---
layout: page
title: "Q243893: XFOR: Can't Log On to MAPI Running Notes Application Converter"
permalink: /kb/243/Q243893/
---

## Q243893: XFOR: Can't Log On to MAPI Running Notes Application Converter

{% raw %}

	Article: Q243893
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Application Converter component (Mxdev.exe) of the Microsoft
	Exchange Application Converter for Lotus Notes, you get the following error
	message:
	
	  Could not logon to MAPI. Wrong password.
	
	CAUSE
	=====
	
	Microsoft Outlook is not installed on the system.
	
	RESOLUTION
	==========
	
	To resolve this problem, install Outlook on the system; it is a required
	component. Then run Mxdev.exe.
	
	MORE INFORMATION
	================
	
	For additional information about the system requirements of the Microsoft
	Exchange Application Converter for Lotus Notes, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q243885 XFOR: Overview of the Microsoft Exchange Application Converter for
	  Lotus Notes
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
