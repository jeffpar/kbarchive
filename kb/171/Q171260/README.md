---
layout: page
title: "Q171260: XFOR: Internal Windows NT Error When Starting DirSync Service"
permalink: /kb/171/Q171260/
---

## Q171260: XFOR: Internal Windows NT Error When Starting DirSync Service

{% raw %}

	Article: Q171260
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to start the Microsoft Exchange Server Directory Synchronization
	Service, you may receive the following error message:
	
	  Could not start the Microsoft Exchange Directory synchronization service
	  on <servername>. Error 2140: An internal Windows NT error occurred.
	
	RESOLUTION
	==========
	
	Give the Microsoft Exchange service account a minimum of Change Access to the
	root directory of the drive where Microsoft Exchange server is installed. To
	set, view, change, or remove directory access permissions, in My Computer,
	select the directory in question. Click the Security tab, and then click
	Permissions. Individual users or groups can then have their directory access
	permissions modified.
	
	
	MORE INFORMATION
	================
	
	This error may be generated if Microsoft Exchange Server is installed on an NTFS
	partition and the Exchange Server service account does not have at least Change
	Access in Directory Permissions to the root of that partition.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
