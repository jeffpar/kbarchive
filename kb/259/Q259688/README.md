---
layout: page
title: "Q259688: XADM: How to Use Exmerge to Extract Data from a Database"
permalink: /kb/259/Q259688/
---

## Q259688: XADM: How to Use Exmerge to Extract Data from a Database

	Article: Q259688
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Exmerge utility to extract user data from
	a Priv.edb database that has errors in it, such as error -1018 or error -1019,
	and then bring the data back into a new database on the same server.
	
	MORE INFORMATION
	================
	
	The Exmerge utility is available in the Microsoft BackOffice Resource Kit.
	
	You can only use the procedures in this article if the database is running.
	Remember that if there are errors in the database, some user data may be lost.
	Data loss depends on exactly where the errors are in the database. Also note
	that using the Exmerge utility results in loss the of single instance storage,
	which may result in a significant size increase in your database.
	
	This section describes the steps for a two-step Exmerge process. This is the
	typical choice for administrators because it allows more more control during the
	process.
	
	1. Log on as the Exchange 5.5 Service Account.
	
	2. Run the Exmerge utility, and then click Next.
	
	3. Click Two-Step Merge, and then click Next.
	
	4. Click "Step 1: Copy data to Personal Folders", and then click Next.
	
	5. Type the server name for the Exchange Server computer that has the errors,
	  and then click Options.
	
	6. On the Data tab, verify that the "User Messages and Folders", Associated
	  Folder Messages, and Folder Permissions check boxes are selected.
	
	  Note that the Items From Dumpster check box is for recoverable items that have
	  been deleted by users (when the Deleted Item Recovery option is enabled).
	  This option requires more space on the destination partition.
	
	7. On the Import Procedure tab, click the method that you want to use when you
	  import the data from the .pst files. The "Merge Data into the Target Store"
	  the option that is the most commonly used.
	
	8. On the Dates tab, verify that all dates are selected.
	
	9. Use all of the default settings on the other tabs, click OK, and then click
	  Next.
	
	10. The Exmerge utility connects to the information store and brings up all of
	  the users that are in the directory for that server. Click Select All,
	  verify that all the users are selected, and then click Next.
	
	11. At the prompt that asks you where you want the .pst files stored, click a
	  partition that has the necessary space for the .pst files. You can also
	  point the .pst files to another server if you do not have space on the local
	  drive. If this is the case, be sure to map a drive to the remote location.
	  If you copy the .pst files to another server, the time that it takes to run
	  the process increases substantially.
	
	12. Click Next. The process begins to export your data to the .pst file.
	
	After the export process is complete:
	
	1. Stop the information store service, and then rename all MDBDATA folders on
	  the server. The database may be on one partition and the log files may be on
	  another partition (you can move them to another server or rename them, but
	  Microsoft recommends that you maintain a copy of your original database and
	  log files until you have determined that this process has worked correctly).
	
	2. Start the information store service. This creates another Priv.edb database.
	
	3. Log on to your mailbox and send a message to all of the users that on the
	  server. This step is critical for the Exmerge utility process. To create the
	  mailboxes in the Priv.edb database tables, you must either send a message to
	  it, or you must open the mailbox.
	
	4. Run the Exmerge utility again, and then click Next.
	
	5. Click Two-Step Merge, and then click Step 2: Merge data from Personal
	  Folders.
	
	6. Type your server name, click Options, and then verify that the "User Messages
	  and Folders", "Associated Folder Messages", and "Folder Permissions" check
	  boxes are selected on the Data tab.
	
	7. Leave all of the default setting on the other tabs, click OK, and then click
	  Next.
	
	8. All of the mailboxes from the server that you specified appear in the list.
	  If they do not appear in the list, cancel out of the process, and then refer
	  to step 3 because someone did not receive the initial message.
	
	9. Click Select All, verify that all of the users are selected, and then click
	  Next.
	
	10. Point the directory to the location of the .pst files from step 1 of the
	  migration, and then click Next to run the process.
	
	After the Exmerge process is finished, your users may be asked the if they want
	the shortcuts to be changed when they log on after the data is brought back in.
	They should click Yes because the data has been brought back into a new Priv.edb
	database and all of the tables have been regenerated.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
