---
layout: page
title: "Q250413: XADM: Folder Replication Status Is Blank for Some Folders"
permalink: /kb/250/Q250413/
---

## Q250413: XADM: Folder Replication Status Is Blank for Some Folders

{% raw %}

	Article: Q250413
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view public folders in the Microsoft Exchange Server Administrator
	program, some public folders may have blank entries for the Last Received Time
	value. You can find the Last Received Time column in the Folder Replication
	Status window under the Public Information Store container or on the Folder
	Replication Status tab on a public folder's properties.
	
	MORE INFORMATION
	================
	
	When the Last Received Time column is blank on a server that contains a folder
	replica, it means that these folders are empty.
	
	When the Last Received Time column is blank on the folder's home server, it means
	that no posts have occurred in a folder replica.
	
	This behavior is by design. The Last Received Time column should show the time of
	the last received update for a public folder. Only posts to a folder update this
	column. Changes to folder properties do not affect the Last Received Time value.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
