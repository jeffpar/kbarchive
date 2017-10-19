---
layout: page
title: "Q252869: XADM: Preventing Mail Loss When Move Mailbox Is Unsuccessful"
permalink: /kb/252/Q252869/
---

## Q252869: XADM: Preventing Mail Loss When Move Mailbox Is Unsuccessful

	Article: Q252869
	Product(s): Microsoft Exchange
	Version(s): 4.x,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you perform a Move Mailbox operation, the mailbox is displayed in the
	"mailbox resources" of both the source and destination servers. On the source
	server, the total kilobytes displayed is close to 0. On the destination server,
	the total kilobytes displayed is the correct amount of data.
	
	If you attempt to perform another Move Mailbox operation, the following error
	message is displayed:
	
	  A duplicate mailbox was found due to problems during a Move Mailbox
	  procedure. The duplicate mailbox has been deleted. Try again later. Microsoft
	  Exchange Server Information Store ID no: c1040b00
	
	The mailbox data on the destination server is deleted and the mail is lost.
	
	CAUSE
	=====
	
	During a Move Mailbox operation the mailbox data is moved to the destination
	server, but the directory object is not. This results in the data being homed on
	the destination server and the Mailbox Directory Object being stranded on the
	source server.
	
	If you attempt to move the mailbox a second time, the user's mailbox information
	is removed from the destination server's information store. The source server
	also removes the mailbox data because it detects the move as being successful.
	At this point, the user's mailbox information is lost.
	
	WORKAROUND
	==========
	
	Do not attempt a second Move Mailbox operation on the mailbox because you will
	lose all data. To work around the behavior, use the following steps.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Use the appropriate method:
	
	Method 1
	--------
	
	  a. On the source server, locate the Recipients container and click the
	     mailbox.
	
	  b. On the File menu, click Raw Properties.
	
	  c. Change the Home-MDB and Home-MTA attributes to reflect the destination
	     server.
	
	     NOTE: These names need to be in the following Distinguished Name (DN)
	     format:
	
	  /o=<Organization>/ou=<Site>/cn=Configuration/cn=Servers/cn=<ServerName>/cn=Microsoft
	  Private MDB
	  /o=<Organization>/ou=<Site>/cn=Configuration/cn=Servers/cn=<ServerName>/cn=Microsoft
	  MTA
	
	Method 2
	--------
	
	  a. On the source server, delete the server recipient for the mailbox.
	
	  b. On the destination server, re-create the mailbox that you deleted on the
	     source server and use the same Distinguished Name (DN).
	
	The user can now log on to the mailbox with no data loss.
	
	MORE INFORMATION
	================
	
	The first Move Mailbox operation did not work because during the Move Mailbox
	process, the Administrator program first copies the selected user's mailbox to
	the selected destination server (the Move Mailbox operation only works between
	servers in the same site). After the mailbox is successfully moved, the Move
	Mailbox function then issues a DS Sync command. During the synchronization
	process, the Administrator program passes the same source and destination server
	to the Move Mailbox function. As a result, the user's directory object is not
	moved.
	
	Additional query words: Moveuser RPC fail failed fails move user
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3 kbExchange400SP4 kbExchange400SP5
	Version           : :4.x,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
