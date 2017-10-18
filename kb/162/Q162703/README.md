---
layout: page
title: "Q162703: XCLN: OST Synch Problem After Org Forms Library Deleted"
permalink: kb/162/Q162703/
---

## Q162703: XCLN: OST Synch Problem After Org Forms Library Deleted

	Article: Q162703
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 19-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to synchronize all folders from a client with an OST file, the
	following error message appears:
	
	  Synchronization with the offline folder file could not be completed.
	  Consult the synchronization log in the deleted items folder for details.
	
	Reviewing the synchronization log shows the following:
	
	  11:43:26 Synchronizing Organization Forms
	  11:43:27 Error synchronizing folder
	  11:43:27       [8004010F-501-0-521]
	  11:43:27       The client operation failed.
	  11:43:27       Microsoft Exchange Server Information Store
	  11:43:27 Done
	
	The following MAPI code may be displayed in the synchronization log for the same
	problem:
	
	8:20:20 Synchronizing Organization Forms
	Error synchronizing folder
	8:20:25 [80004005-507-0-522]
	8:20:25 The contents of this public folder are currently
	unavailable. Either the Microsoft Exchange Server computer servicing this 
	public folder is down or the public folder has not been  replicated to this 
	site. See your administrator.
	
	CAUSE
	=====
	
	This error generally occurs when the organizational forms library that has been
	created has been deleted and recreated after the OST has synchronized the
	library. The internal object ID of the new Organizational Forms library is
	different from the original; the offline folder store encounters problems trying
	to synchronize because it (the offline folder store) has the ID of the original.
	
	RESOLUTION
	==========
	
	To resolve the problem, verify the following:
	
	- If the default permissions on the organizational forms library is set to
	  None, the client will fail to synchronize. However, with these permissions,
	  the synchronization log will contain:
	
	     Error synchronizing folder
	     [80004005-501-0-540]
	     The client operation failed
	     Microsoft Exchange Information Store
	
	  The default permissions for the organizational forms should be Reviewer in
	  order to prevent the above error.
	
	- On all servers in the site that have mailboxes, verify that the Exchange
	  Services were stopped and restarted after the new org forms library became a
	  replica in the site.
	
	- On the client side, the org forms library will synch correctly on the second
	  logon and synchronization of all folders.
	
	Note: If the Organization Forms Folder has been deleted, you can recreate it
	using the Exchange Administrator program by clicking Forms Administrator on the
	Tools menu, and the clicking New.
	
	This can also occur in a situation where the replica of the original Organization
	forms library has been removed from the Public folder. As long as the original
	Organizational forms library has not been deleted, a replica can again be
	created in the site and the error message will disappear after the folder has
	been successfully replicated.
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
