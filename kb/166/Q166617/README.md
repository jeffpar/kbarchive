---
layout: page
title: "Q166617: XCLN: GPF in MSSPC16.DLL in Spanish Schedule+"
permalink: /kb/166/Q166617/
---

## Q166617: XCLN: GPF in MSSPC16.DLL in Spanish Schedule+

{% raw %}

	Article: Q166617
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you attempt to create a new Project using the Spanish version of Microsoft
	Schedule+, version 7.0, you might receive a General Protection Violation.
	
	MORE INFORMATION
	================
	
	To reproduce this problem in Windows For Workgroup 3.11 or Windows 3.1, follow
	these steps:
	
	1. Install the Spanish Microsoft Exchange Windows 3.x client, version 4.0.
	
	2. Upgrade it to Service Pack 2 and then Service Pack 3.
	
	3. Create a new profile.
	
	4. Start Microsoft Schedule+ and select the To Do tab. If you are running
	  Microsoft Schedule+ for the first time, create a new file.
	
	5. Open the Insert menu and Insert a New Project.
	
	6. In the Duration column, specify a duration. For example, 3 days.
	
	7. Click the Print button.
	
	At this point, you get a GPF in MSSPC16.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Spanish version of Microsoft
	Schedule+, version 7.0.
	
	
	This problem was corrected in the latest Microsoft Exchange 4.0 Spanish Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
