---
layout: page
title: "Q155600: XFOR: Misleading Dialog During Restore Using NTBackup"
permalink: /kb/155/Q155600/
---

## Q155600: XFOR: Misleading Dialog During Restore Using NTBackup

{% raw %}

	Article: Q155600
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you restore a Microsoft Exchange Server on-line backup using the Windows NT
	NTBackup program, and you choose to restore both the Directory and the
	Information Store, you will be presented with a Restore Information dialog box
	that can be misleading.
	
	MORE INFORMATION
	================
	
	The Restore Information dialog box allows you to choose various options. If you
	are restoring both the Microsoft Exchange Directory and Information Store, you
	can scroll down to get the restore information for the Information Store and you
	can choose to restore the Information Store to another server.
	
	When the Restore Information dialog first appears, the Destination Server field
	cannot be changed. This is the Directory restore information. If you scroll
	down, you will then be able to change the Destination Server field. This is the
	Information Store restore information. This, in effect, allows you to restore
	the backup to restore the Directory to the original server (which is the only
	place a Directory can be restored), and to restore the Information Store to
	another server. If you don't look carefully at this dialog box, you can be
	misled into thinking that you can restore both the Directory and the Information
	Store to a different server, which is not the case.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
