---
layout: page
title: "Q253210: XCLN: Error Message: Properties for This Information Service..."
permalink: /kb/253/Q253210/
---

## Q253210: XCLN: Error Message: Properties for This Information Service...

{% raw %}

	Article: Q253210
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,98
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to import a set of personal folders (.pst file) into
	Microsoft Outlook, you may receive the following error message:
	
	  Properties for this information service must be configured prior to use.
	
	This error message is followed another, which states:
	
	  File access is denied. You do not have the permissions required to access the
	  file "filename.pst".
	
	CAUSE
	=====
	
	The .pst file that you are trying to import has been marked as read-only.
	
	RESOLUTION
	==========
	
	To resolve this error, remove the read-only attribute from the personal folders
	file.
	
	MORE INFORMATION
	================
	
	For additional information about Personal Folders and read-only volumes, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q178756 XCLN: Read-Write Access Required to Open .PST and PAB Files
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
