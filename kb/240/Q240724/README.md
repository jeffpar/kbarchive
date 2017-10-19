---
layout: page
title: "Q240724: TPU: Err Msg: Summary View Creation Failed"
permalink: /kb/240/Q240724/
---

## Q240724: TPU: Err Msg: Summary View Creation Failed

	Article: Q240724
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are connecting to a Team Workspace that contains a Team Folder
	Application (such as Discussion Forum, Document Library, Team Calendar, Team
	Contacts, or Team Tasks), any of the following error messages may appear in the
	Summary view for the program:
	
	  Summary view creation failed: Could not open the Public Folder store.
	
	  Summary view creation failed: Unknown Error
	
	  Summary view creation failed: Could not logon. Make sure your user account
	  has a default mail profile.
	
	CAUSE
	=====
	
	These error messages can be caused by any of the following situations:
	
	- Microsoft Outlook 2000 is not installed and configured on the client.
	
	- Outlook 2000 is installed, but a default mail profile has not yet been
	  created.
	
	- The Microsoft Exchange Server services are currently unavailable (down).
	
	- The physical public folder locations have been deleted from the public
	  folders on the Exchange server.
	
	- The currently logged-on user does not have a valid mailbox on the server
	  being connected to, or does not have permissions on the public folder in
	  which the Team Folder Applications are stored.
	
	RESOLUTION
	==========
	
	Verify the following items and correct as necessary:
	
	- Make sure Outlook 2000 is installed and properly configured.
	
	- Configure Outlook 2000 with a mail profile of a user with permissions to the
	  Team Folder Applications for the Team Workspace in question.
	
	- Verify that the Exchange Server services are started and working properly.
	
	- Verify that the public folder hierarchy in which the Team Folders
	  Applications are installed exists, and has not been renamed or deleted.
	
	- Check to make sure that the mail profile in use is connecting to the Exchange
	  server on which the Team Folders Applications exist.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
