---
layout: page
title: "Q152745: XADM: Cannot Delete Public Folders Using Administrator Program"
permalink: /kb/152/Q152745/
---

## Q152745: XADM: Cannot Delete Public Folders Using Administrator Program

{% raw %}

	Article: Q152745
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Public folders should always be deleted from a Microsoft Exchange client, not
	the Microsoft Exchange Administrator program. To delete a folder, you must be
	the owner of the folder. If you are an administrator and you need to delete a
	folder, add Owner permissions for yourself to the public folder, and then delete
	the public folder through the following procedure:
	
	1. From the Microsoft Exchange Administrator program, under Organization,
	  Folders, Public Folders, select the specific public folder that needs to be
	  deleted.
	
	2. Click Properties on the File menu.
	
	3. Click the General tab, and select Client Permissions.
	
	4. Add or change ownership of the public folder.
	
	Now log on to Exchange Server from an Exchange client using the account that now
	has ownership of the public folder, and delete the folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
