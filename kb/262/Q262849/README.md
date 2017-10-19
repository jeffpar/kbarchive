---
layout: page
title: "Q262849: XADM: Exchange Server 5.5 Post-SP3 Mailbox Manager Fixes"
permalink: /kb/262/Q262849/
---

## Q262849: XADM: Exchange Server 5.5 Post-SP3 Mailbox Manager Fixes

	Article: Q262849
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3kbfixlist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the article numbers for Exchange Server 5.5 Mailbox Cleanup
	Agent (MBClean) bugs that have been fixed since Exchange Server 5.5 Service Pack
	3 was released. For information about how to obtain the fixes listed in this
	article, click the article number next to the title of the article about that
	issue to view the article in the Microsoft Knowledge Base.
	
	NOTE: Exchange Server fixes for a particular component are cumulative and contain
	all of the previous fixes for that component. Fixes with a particular version
	number contain all of the fixes that have an earlier version number.
	
	MORE INFORMATION
	================
	
	Mailbox Cleanup Agent fixes include the following files:
	
	+--------------------------------+
	| File name    | Current version | 
	+--------------------------------+
	| Mbclean.dll  | 5.5.2652.87     | 
	+--------------------------------+
	| Mbclean.exe  | 5.5.2652.93     | 
	+--------------------------------+
	| Mbcleanm.dll | 5.5.2652.87     | 
	+--------------------------------+
	
	Fixes Released on October 5, 2000
	---------------------------------
	
	The following files are modified:
	
	- Mbclean.dll added and incremented to version 5.5.2652.87
	- Mbclean.exe incremented to version 5.5.2652.93
	- Mbcleanm.dll added and incremented to version 5.5.2652.87
	
	The following fixes are included:
	
	  Q245979 XADM: Containers of Other Replicated Sites Are Displayed in Policies
	  Tab in Mailbox Manager Program
	
	  Q269442 XADM: Mailbox Manager Removes Future Appointment
	
	  Q245979 XADM: Mailbox Manager Stops Responding Cleaning a Container with
	  Hidden Mailboxes
	
	Fixes Released on June 14, 2000
	-------------------------------
	
	NOTE: The Mbclean.dll and Mbcleanm.dll files are not included with these fixes.
	These files are added later.
	
	The following files are modified:
	
	- Mbclean.exe incremented to version 5.5.2652.27
	
	The following fixes are included:
	
	  Q245694 XADM: Mailbox Manager Crashes When Any Excluded Mailbox Has No Proxy
	  Address
	
	  Q254091 XADM: Folder Names Become Question Marks in the Report Message from
	  MBClean
	
	  Q255768 XADM: Mbclean Report Messages Are Composed in German
	
	  Q256245 XADM: Mailbox Manager Deletes All Recurring Calendar Items
	
	  Q256879 XADM: Mbclean Stops Unexpectedly Because of Memory Corruption
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbfixlist
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
