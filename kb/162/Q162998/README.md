---
layout: page
title: "Q162998: XADM: Mailbox Is Empty Following Move Mailbox Command"
permalink: kb/162/Q162998/
---

## Q162998: XADM: Mailbox Is Empty Following Move Mailbox Command

	Article: Q162998
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Move Mailbox command in the Microsoft Exchange Administrator program is used
	to move a mailbox from one server in a Microsoft Exchange site to another. This
	command may appear to have completed successfully, but when the user logs into
	the mailbox, they no longer see mail received prior to moving the mailbox.
	
	MORE INFORMATION
	================
	
	The Move Mailbox command moves the mail from the private information store of
	the old server to the private information store of the new server. It then
	changes the Home Server attribute of the mailbox to the new server and
	replicates this information from the old server to the new server and all
	existing servers in the site. If the Home Server attribute is not updated or
	this information is not replicated to the new server before the user logs back
	into their mailbox, the condition above may occur.
	
	Steps to verify the Move Mailbox command moved the user's mail to the new
	server:
	
	1. Connect to the new server in the Exchange Administrator program.
	
	2. In the Properties of the private information store of the new server, verify
	  that the user is listed on the Mailbox Resources tab and that the number of
	  items reflects the amount of mail the user had prior to the move.
	
	Items to check to verify the Move Mailbox command failed to change the home
	server of the mailbox:
	
	- The mailbox is still listed in the Server Recipients container of the old
	  server and does not appear in the Server Recipients container of the new
	  server.
	
	- The General Property page of the mailbox lists the old server as the home
	  server.
	
	- The Exchange Client profile for that user shows the old server, and the
	  attempt to change it to the new server fails.
	
	After you confirm that the mail is located on the new server and the mailbox is
	located on the old server, follow these steps to move the mailbox to the new
	server:
	
	1. Access the mailbox on the old server with the Microsoft Exchange Client and
	  pull all new mail received since moving the mailbox to a personal folder.
	  Exit and log off the Microsoft Exchange Client.
	
	2. In the Exchange Administrator program, connect to the old server and
	  highlight the mailbox in the Server Recipients container of the old server.
	  Press the DELETE key to delete the mailbox.
	
	3. Wait until this change has propagated to all Microsoft Exchange Server
	  computers in the site.
	
	4. In the Exchange Administrator program, connect to the new server and perform
	  a DS/IS Consistency Adjustment on the new server. This should create the
	  directory entry for the mailbox on the new server.
	
	5. Verify the mailbox is created on the new server and located in the Server
	  Recipients container of the new server.
	
	6. If necessary, reassign the Windows NT account to the mailbox. This can be
	  done on the General tab of the mailbox's Property page.
	
	7. Change the Microsoft Exchange Client profile for the user to point to the new
	  server, and have the user access their mailbox. Old mail should be available.
	  New mail can then be dragged and dropped from the personal folder to the
	  Inbox.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
