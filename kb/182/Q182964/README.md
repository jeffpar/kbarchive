---
layout: page
title: "Q182964: XADM: Unable to Access Others' Schedules"
permalink: /kb/182/Q182964/
---

## Q182964: XADM: Unable to Access Others' Schedules

{% raw %}

	Article: Q182964
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access schedule information for users on other servers in the
	same site, the following error message appears:
	
	  Unable to display the folder. Outlook could not be opened because a
	  location to send and receive mail could not be found.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. From the user's Exchange Server computer, in the Exchange Administrator
	  program, at Configuration / Servers / <server name> / Public
	  Information Store, add the Schedule+ Free/Busy folder to the right side of
	  the Instances tab.
	
	2. Perform an Update Now (refresh all items in the directory).
	
	MORE INFORMATION
	================
	
	If this is an isolated incident, that is, only a few users experience the
	problem, make sure you verify that the users are accessing their Calendar from
	their delivery location. If the users have messages delivered to their personal
	folder, and the personal folder has a Calendar item, then attempt to view
	Calendar information from the personal folder.
	
	If this problem is widespread, then you need to troubleshoot the Schedule+
	Free/Busy folder from the Exchange Administrator program.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
