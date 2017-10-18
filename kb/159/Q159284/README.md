---
layout: page
title: "Q159284: XADM: Client Operation Failed Accessing Categorized PF View"
permalink: kb/159/Q159284/
---

## Q159284: XADM: Client Operation Failed Accessing Categorized PF View

	Article: Q159284
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you access a Public Folder and the folder has an initial view that is
	categorized, the operation may fail with the following error message seen by the
	client:
	
	  Client Operation Failed
	
	If you press the F2 key while this error message is displayed, you will see the
	following error codes:
	
	  Microsoft Exchange Server Information Store - 1201 - [80004005 - FFFFFBFE]
	
	CAUSE
	=====
	
	When a categorized view is placed on a folder, each user that accesses it
	creates two columns in the JET database (public and private information stores)
	for storing the collapsed state of the row. There is hard-coded limit for the
	size of a JET record and the Information Store is surpassing that limit, causing
	the error.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following four workarounds:
	
	- After you close the error messages, change the view to the Personal, Normal
	  view.
	
	- Change the initial view on the folder to be normal or non-categorized.
	
	- Replicate the folder to more servers so fewer users will access the view on
	  each replica.
	
	- Reset the cached views as shown below.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS
	  \ParametersPublic\
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: Reset Views
	     Data Type: REG_DWORD
	     Value: 1 (hex)
	
	4. Quit Registry Editor.
	
	5. Stop and restart the Information Store service.
	
	6. Using the Exchange Server Administrator program, set the IS Maintenance
	  schedule (IS maintenance tab of the Server object) to run in the next
	  15-minute interval.
	
	Once the IS Maintenance interval initiates and performs the Reset Views
	operation, the value of Reset Views in the registry will be reset to 0. At this
	point the cached views in the Public Information Store will be cleared and users
	will not experience the "Client Operation Failed" error. Over time, if there is
	a high amount of usage on a folder replica and it is using a categorized view
	this problem may reoccur and the steps in this section may need to be repeated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in Microsoft Exchange Server
	version 5.0.
	
	MORE INFORMATION
	================
	
	The error code returned, FFFFFBFE, maps to 4294966270 in decimal and this maps
	to Error -1026 (0xfffffbfe) = JET_errRecordTooBig. A categorized view is defined
	as a view that has a column specified in the "Group By" field.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
