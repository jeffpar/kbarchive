---
layout: page
title: "Q163484: XCLN: Schedule+ Import from Other Systems Gives Error"
permalink: /kb/163/Q163484/
---

## Q163484: XCLN: Schedule+ Import from Other Systems Gives Error

{% raw %}

	Article: Q163484
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you import data from foreign systems into a shared copy of Microsoft
	Schedule+, you may receive one of the following errors:
	
	  Error Accessing Internal Field Map
	
	  or
	
	  Unable to update system table
	
	MORE INFORMATION
	================
	
	To import data from foreign systems into Microsoft Schedule+, open the File
	menu, click Import, and then click Other Systems.
	
	CAUSE
	=====
	
	Microsoft Schedule+ needs read and write access to the Tables.itb file. This
	file is stored on the network when you are using a shared copy of Microsoft
	Schedule+ and you may not have read and write access to this file.
	
	WORKAROUND
	==========
	
	To correct this problem, your network administrator needs to grant you write
	access to this file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Schedule+, versions
	7.0 and 7.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: exchange xcln
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
