---
layout: page
title: "Q234295: XADM: Changing Database Paths Using the Administrator Program"
permalink: kb/234/Q234295/
---

## Q234295: XADM: Changing Database Paths Using the Administrator Program

	Article: Q234295
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can manually move Exchange Server databases using the Exchange Server
	Administrator program, instead of moving them using Performance Optimizer.
	
	MORE INFORMATION
	================
	
	Use the following procedure to move Exchange Server databases:
	
	1. In the Exchange Server Administrator program, click the <server name>
	  object, and on the File menu, click Properties, and then click the Database
	  Paths tab.
	
	2. Select the database that you want to move, and click Modify. You can also
	  double-click on the selected database.
	
	3. Before you move the database, create the appropriate directory on the
	  destination drive. For example, if you want to move the Dir.edb file from the
	  C:\Exchsrvr\Dsadata folder to drive D, create the D:\Exchsrvr\Dsadata folder
	  first.
	
	4. After you modify all the database paths, click OK.
	
	5. The following message is displayed:
	
	  You have altered a server database path. In order to change the path the
	  corresponding service(s) will be stopped, the files will be moved, and then
	  the service(s) will be restarted.
	
	  Are you sure you want to alter the database path(s)?
	
	6. To proceed with the operation, click Yes, or to cancel, click No.
	
	NOTE: For performance reasons, Microsoft recommends that you use local hard disk
	drives on the computer and not network shared drives.
	
	Only perform this procedure if you are not implementing major changes. Examples
	of major changes include, but are not limited to, the following:
	
	- Adding or deleting a large amount of users.
	
	- Adding and deleting connectors.
	
	- Adding or removing hardware.
	
	Additional query words: Logs, registry
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
