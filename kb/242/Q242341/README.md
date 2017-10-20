---
layout: page
title: "Q242341: XWEB: Access Violation After Saving Changes to Appointment"
permalink: /kb/242/Q242341/
---

## Q242341: XWEB: Access Violation After Saving Changes to Appointment

{% raw %}

	Article: Q242341
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Outlook Web Access (OWA) to create a new appointment that contains
	double-byte character set (DBCS) characters in the Subject or Location field or
	in the appointment body, and then you repeatedly save changes to the
	appointment, an access violation may occur in the Inetinfo.exe file, and the
	following events may be logged in the application event log:
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: The application, exe\inetinfo.dbg, generated an application
	  error. The error occurred on <date> @ <time>. The exception
	  generated was c0000005 at address 77f54ac3 (RtlAllocateHeap).
	
	  Event ID: 5
	  Source: Active Server Pages
	  Description: Error: file <filename> unexpected error
	
	Note that the second event may be logged multiple times.
	
	CAUSE
	=====
	
	Insufficient memory is allocated to perform the operation on the Exchange Server
	computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Outlook Web Access
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: av
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
