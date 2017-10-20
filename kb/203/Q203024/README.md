---
layout: page
title: "Q203024: SMS: Unable to Open a Collected File with Associated Program"
permalink: /kb/203/Q203024/
---

## Q203024: SMS: Unable to Open a Collected File with Associated Program

{% raw %}

	Article: Q203024
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbMMC kbInventory
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Resource Explorer in the Microsoft Systems Management Server
	Administrator Console to view files collected by Software Inventory, the files
	do not open with the associated program as expected.
	
	WORKAROUND
	==========
	
	For security purposes, Notepad is used to view collected files. To open a file
	with an associated program, right-click the selected file in Microsoft Windows
	Explorer, and then click Save As. After the file is saved to a new location, it
	can be opened by the program that is associated with that file type.
	
	MORE INFORMATION
	================
	
	Systems Management Server 2.0 allows administrators to specify files to collect
	from clients during the software inventory cycle. After they've been collected,
	you can view the files by opening Resource Explorer, clicking Software,
	right-clicking the selected file, and then clicking "All Tasks | View File".
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbMMC kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
