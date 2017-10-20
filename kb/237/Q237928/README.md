---
layout: page
title: "Q237928: XCLN: ErrMsg. w/Microsoft Mail Service: File Is Current in Use"
permalink: /kb/237/Q237928/
---

## Q237928: XCLN: ErrMsg. w/Microsoft Mail Service: File Is Current in Use

{% raw %}

	Article: Q237928
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up a Microsoft Mail Service for use with Outlook, you may receive
	the following error message when you attempt to send or receive mail from a
	Microsoft Mail postoffice or a Workgroup postoffice (WGPO):
	
	  File is currently in use.
	
	CAUSE
	=====
	
	Rights on the postoffice folder (such as Wgpo0000 for a Workgroup postoffice)
	are set to Read Only and the folder cannot be written to.
	
	RESOLUTION
	==========
	
	Change the rights on the postoffice folder to Full Access for everyone.
	
	MORE INFORMATION
	================
	
	Like a Microsoft Mail postoffice, a Workgroup postoffice is a "Store and
	Forward" flat file database. As a message is passed through the postoffice,
	files are constantly being created, modified, and deleted within the subfolders
	of the postoffice.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
