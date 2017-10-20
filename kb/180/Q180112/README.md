---
layout: page
title: "Q180112: XADM: How To Export the Creation Date"
permalink: /kb/180/Q180112/
---

## Q180112: XADM: How To Export the Creation Date

{% raw %}

	Article: Q180112
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the Import/Export feature in the Microsoft
	Exchange Administrator program to export the creation date of directory objects
	such as mailboxes, custom recipients, and distribution lists.
	
	MORE INFORMATION
	================
	
	To export the creation date, follow theses steps:
	
	1. Create an export file (for example, Test.csv) with the following header:
	
	        Obj-Class, Directory Name, When-Created
	
	2. From the Administrator program, go to Tools and select Directory Export.
	
	3. For the export filename, select the file created in Step 1 (Test.csv).
	
	4. Select the desired container and export objects, and then click Export.
	
	The program should now export the creation date for each object in the selected
	container.
	
	Note: The date/time exported is in universal time and is not formatted; for
	example, 980120211543Z corresponds to 1/20/98 3:15PM CST.
	
	To export the date when an object was last changed, add "When- Changed" to the
	header of the export, and then export.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
