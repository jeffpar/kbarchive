---
layout: page
title: "Q180117: XADM: Recovering Deleted Items from a Public Folder"
permalink: /kb/180/Q180117/
---

## Q180117: XADM: Recovering Deleted Items from a Public Folder

{% raw %}

	Article: Q180117
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can recover deleted items from a public folder in much the same way that you
	recover deleted items from your private mailbox. Even though item recovery may
	be enabled and working successfully for your mailbox, it may not be enabled for
	any public folders you may have rights to.
	
	When you delete an item in a public folder, the item itself is not "hidden" and
	moved to the Deleted items folder as you may expect from the behavior exhibited
	by the private mailbox. The item itself is deleted "in place." It is merely
	hidden and remains in the public folder for the allotted interval of time set by
	the administrator for deleted items.
	
	MORE INFORMATION
	================
	
	To recover deleted items from a public folder:
	
	1. The Exchange Server administrator must enable recovery for the public
	  information store. This must be enabled separately from the item recovery
	  settings on the private information store. To enable recovery for the public
	  information store:
	
	  a. In the Exchange Server Administrator program, select the public
	     information store to highlight it.
	
	  b. On the File menu, click Properties, and change the Item Recovery settings
	     to something other than zero.
	
	2. Recovery must be enabled on the server that hosts the replica you are
	  connected to. Recovery may be enabled on one replica server, but not
	  necessarily the one to which you are connected.
	
	3. To recover the deleted item you must have full read/write/delete permissions
	  on the public folder. To do this, set permissions on the folder to Editor.
	
	4. Select the public folder from which the item was deleted.
	
	5. On the Tools menu in the Outlook client, click Recover Deleted Items.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
