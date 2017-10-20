---
layout: page
title: "Q172780: XWEB: Error Attaching File with Web Client"
permalink: /kb/172/Q172780/
---

## Q172780: XWEB: Error Attaching File with Web Client

{% raw %}

	Article: Q172780
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to attach a file to a message using the Web client, the following
	message may be displayed if the computer running Internet Information Server
	(IIS) is not an Exchange Server computer:
	
	  HTTP/1.0 500 Server Error (The specified module could not be found.)
	
	CAUSE
	=====
	
	The attachment update is not registered.
	
	RESOLUTION
	==========
	
	To resolve the error, apply Exchange 5.0 Service Pack 1 to the computer running
	IIS, even though Exchange Server is not installed on this computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

{% endraw %}
