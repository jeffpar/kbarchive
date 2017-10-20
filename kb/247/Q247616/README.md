---
layout: page
title: "Q247616: XADM: Error 1025 Appears Approximately Every 15 Seconds"
permalink: /kb/247/Q247616/
---

## Q247616: XADM: Error 1025 Appears Approximately Every 15 Seconds

{% raw %}

	Article: Q247616
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While your computer is running Microsoft Exchange Server 5.5, the following
	event may be logged in the Windows NT Event Viewer application event log every
	15 seconds or so:
	
	  Event ID: 1025
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: Transport
	  Description: An error occurred. Function name or description of problem:
	  EcGetRestriction
	
	CAUSE
	=====
	
	This behavior may occur when the data integrity of the information store has
	become corrupted.
	
	One possible cause of this problem is the number of times any particular search
	folder is added to and deleted from the ptagSearchBackLinks list, which is a
	list of information store folders in Exchange Server that is searched by the
	client. Search folders are at times added to the list more than once, but not
	all of the instances are deleted when the search is complete. This problem may
	occur when you perform a search on folders in the information store.
	
	RESOLUTION
	==========
	
	To resolve this issue, repair the damage by using the Isinteg utility with the
	-fix parameter on the information store. The command line for the Isinteg
	utility in Exchange Server 5.5 is the following:
	
	  isinteg -fix -pri -test alltests
	
	It is also possible to resolve this problem either using the isinteg -fix
	-pri-test search command, or by performing an offline defragmentation.
	
	To keep the problem from recurring, install the latest service pack for Exchange
	Server 5.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	5.5.This problem was corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5.
	
	For information on obtaining this service pack, query on the following word in
	the Microsoft Knowledge Base, without the spaces:
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	There are two types of folders: search folders and normal folders. Search
	folders are the folders that clients create when they perform a search of a
	folder and its subfolders. The search folder contains information such as the
	folders that are being searched, the messages that meet the search conditions,
	and so on.
	
	On the normal folders, there is a property called ptagSearchBackLinks that lists
	all of the search folders that reference this normal folder. When items in the
	folder change (when messages are added, modified, or deleted), the folder must
	notify the search folder through the ptagSearchBackLinks list.
	
	The problem occurs when these search folders are created (when the client runs a
	'Find' procedure), and the search folder is added to the ptagSearchBackLinks
	list more than once. However, when the search folders are deleted (when the
	client closes the 'Find' dialog box), the folders are not necessarily removed
	from the ptagSearchBackLinks list the same number of times that they were added.
	Consequently, when the items in the normal folders change, they attempt to
	notify a search folder that does not exist, generating Event ID 1025.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
