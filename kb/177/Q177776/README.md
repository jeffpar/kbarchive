---
layout: page
title: "Q177776: XADM: How to Use the Mailbox Migration Utility"
permalink: kb/177/Q177776/
---

## Q177776: XADM: How to Use the Mailbox Migration Utility

	Article: Q177776
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- MSPRESS Microsoft BackOffice Resource Kit Part 2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Mailbox Migration Utility (Migrate.exe) from the BackOffice
	Resource Kit Part 2, certain steps must be performed to achieve the desired
	results.
	
	MORE INFORMATION
	================
	
	Procedure to Migrate Users
	--------------------------
	
	1. Create mailboxes and profiles on the destination server for the recipients
	  you are moving.
	
	2. Verify that your workstation is logged on using an account with at least
	  Administrator permissions at the Site, Organization, and Configuration levels
	  in the Exchange Administrator program.
	
	3. Create a profile on the workstation that can be modified by the Mailbox
	  Migration tool.
	
	4. On the Start menu, click Run.
	
	5. Click Browser to locate the Migrate.exe file and double-click the file name.
	
	6. In the Control File box, type the path name and file name of the recipient's
	  list file (.csv file) that contains the recipient's name and server. This is
	  the structure of the recipient's file:
	
	  <Display Name>,<Alias Name>,<Pilot Server
	  Name>,<Production Server Name><CRLF>
	
	  An example:
	
	  John Doe,JohnD,GW-PILOT1,GW-PROD1 Mary Smith,MarySm,GW-PILOT1,GW-PROD1
	
	  The file can contain any number of recipients and any combination of servers.
	
	7. Click Start.
	
	When the file is found, the Mailbox Migration tool begins processing the first
	recipient in the file.
	
	Functions
	---------
	
	For each recipient in the .csv file, the Mailbox Migration tool performs the
	following functions:
	
	- Modifies the migration profile so it can open your mailbox and create a new
	  .pst file on the workstation, and then logs on to this profile.
	
	- Copies all the messages and all subfolder trees in the mailbox Inbox folder
	  to the .pst Inbox folder.
	
	- Copies all the messages in the mailbox Sent Items folder to the .pst Sent
	  Items folder. You can ignore any subfolders, unless it is easier to copy
	  everything.
	
	- Copies all the other folders, subfolders, and messages that you have created
	  from the mailbox to the .pst file. Note that Custom Views, Filters, Rules,
	  and Permissions are not copied.
	
	- Logs off the profile.
	
	- Copies the folders and messages from the .pst to your mailbox on the
	  production server. Note that the Inbox of the new server is checked. If there
	  are any messages in this folder, the mailbox is not migrated and an error
	  message is generated. The Inbox is always the first folder migrated.
	
	- Deletes the .pst file.
	
	- If you click Stop, the Mailbox Migration tool continues to process the
	  current mailbox and then stops processing after the mailbox has been
	  migrated, or after the mailbox migration attempt fails because of errors.
	
	- Any errors that are generated in the process are written to an error log.
	  This error log is specified through the Mailbox Migration user interface.
	
	- When all mailboxes in the recipient list have been migrated, a message
	  appears stating that the system has completed the migration.
	
	The .csv file will look similar to this at the completion of the process:
	
	  SUCCESS,John Doe,JohnD,GW-PILOT1,GW-PROD1,Migrated No
	  Errors,5/10/96 10:05:00
	
	  -or-
	
	  FAILURE,Mary Smith,MarySm,GW-PILOT1,GW-PROD1,Error Copying
	  Messages,5/10/96 10:09:10
	
	If the Migration Mailbox tool fails for any reason, you can restart the tool from
	the same point by using the same recipient list. Each successful migration
	causes the entry to be deleted, therefore no duplication will occur.
	
	To migrate single users or groups of users that were not migrated because of
	errors, you can create recipient list files (.csv) and run the Mailbox Migration
	tool again.
	
	The purpose of the tool is to make a complete copy of the mailbox content from
	one server to another when these servers are in different sites and/or
	organizations. The utility does not assume that there is direct network
	connectivity between any two servers and its basic mechanism is to create a
	personal folder file (.pst) which contains the structure and messages of the
	mailbox to be copied. In addition, this tool is used to re-create rules and
	directory information.
	
	The Exchange Administrator Move Mailbox command allows you to move a mailbox only
	between servers within the same site, whereas the Mailbox Migration tool allows
	you to move mailboxes between sites and between recipient containers.
	
	For more information about using the Exchange Mailbox Migration tool, refer to
	the Microsoft Exchange Tools Help file (Exchtool.hlp), included with the
	Microsoft BackOffice Resource Kit Part 2.
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
