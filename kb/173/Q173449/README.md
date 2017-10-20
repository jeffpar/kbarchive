---
layout: page
title: "Q173449: XWEB: Clicking on Outlook Bar Before View Totally Refreshes"
permalink: /kb/173/Q173449/
---

## Q173449: XWEB: Clicking on Outlook Bar Before View Totally Refreshes

{% raw %}

	Article: Q173449
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
	
	When you access Microsoft Exchange Server with Outlook Web Access (OWA), you may
	receive one of the following error messages:
	
	  Microsoft JScript runtime error
	  [Line: 49] Object doesn't support this property or method
	
	  -or-
	
	  Microsoft JScript runtime error
	  In frame: navbar_fr
	  [Line: 77] Object doesn't support this property or method
	
	These error messages can appear when you click on an item in the Outlook Bar
	before the view is rendered or refreshed.
	
	CAUSE
	=====
	
	Clicking on an item in the Outlook Bar, such as Calendar, can cause JScript
	errors. Dismissing the JScript errors will allow you to continue and access your
	mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: XCLN
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
