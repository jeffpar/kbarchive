---
layout: page
title: "Q119269: Printing to AWFAX Printer Driver Does Not Send Fax"
permalink: /kb/119/Q119269/
---

## Q119269: Printing to AWFAX Printer Driver Does Not Send Fax

{% raw %}

	Article: Q119269
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kbatwork kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a fax through a shared network fax (that is, a fax modem not on
	the local machine) by printing to the Microsoft At Work PC Fax printer driver
	from within an application, the fax is not sent. No error message is displayed.
	
	CAUSE
	=====
	
	This problem occurs when you do not have a MAPI application running on both
	machines.
	
	RESOLUTION
	==========
	
	To correct this problem, start a MAPI application (for example, Microsoft Mail
	or Schedule Plus) on each workstation.
	
	
	Additional query words: pause 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
