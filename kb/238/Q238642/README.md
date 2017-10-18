---
layout: page
title: "Q238642: XADM: Troubleshooting the InterOrg Replication Utility"
permalink: kb/238/Q238642/
---

## Q238642: XADM: Troubleshooting the InterOrg Replication Utility

	Article: Q238642
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2,5.5
	Operating System(s): 
	Keyword(s): exc55 exc5sp2
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Microsoft Exchange Server InterOrg
	Replicator utility to share free and busy and public folder information. The
	InterOrg Replicator utility consists of two programs, the Microsoft Exchange
	Server Replication Configuration utility (Exscfg.exe), and the Microsoft
	Exchange Server Replication Service (Exssrv.exe). Using these programs, you can
	coordinate meetings, appointments, and contact information between members of
	two different Exchange Server organizations. Additionally, message types can
	automatically be converted to posts and added to public folders, which can then
	be replicated.
	
	Using a configuration file created by the Replication Configuration utility, the
	Replication Service continuously updates information from one server (designated
	as the publisher) to one or more Exchange Server computers (designated as
	subscribers). Schedule+ free and busy information is replicated from publisher
	to subscriber only. For this reason, you must have two free and busy sessions to
	bi-directionally update free and busy information. Public folders can be
	replicated from publisher to subscriber or bi-directionally. You can configure
	the replication frequency as well as message and folder replication logging, and
	how much processing power you want devoted to the replication process.
	
	MORE INFORMATION
	================
	
	There are a number of steps you can take if you encounter problems with the
	InterOrg Replicator tool.
	
	1. Enable logging on the Public Folders or Free/Busy Session Configuration tabs.
	
	2. Check the Ex00yymmdd.log and Ex01yymmdd.log log files for any errors.
	
	3. Use the application Event Viewer to make sure there are no errors. Configure
	  the Event Viewer with a 2-MB size, and configure it to wrap as needed.
	
	4. Verify that you have granted the appropriate permissions to root folders and
	  the ExchsyncSecurity Folder. If not, you will receive the following error
	  message.
	
	  Event ID 116
	  Source Exchsync
	  Type Error
	  Category None
	
	  Mailbox user (username) does not have enough security to replicate to server
	  [servername] on session 'Session Name'.
	
	  WARNING: Create subfolder access is not available to '[SERVERNAME]\Foldername,
	  skipping.
	  WARNING: Write access is not available to '[SERVERNAME]\ Foldername,
	  skipping.
	  WARNING: Write access is not available to '[SERVERNAME]\ Foldername \
	  Foldername,skipping.
	  WARNING: Read access is not available to '[SERVERNAME]\ Foldername, skipping.
	  WARNING: Read access is not available to '[SERVERNAME]\ Foldername \
	  Foldername, skipping.
	
	5. Verify that for each mailbox on the publisher server that you want to
	  replicate free and busy information to, a corresponding custom recipient
	  exists on the subscriber server. If none exists, create one. The SMTP address
	  of the mailbox is the unique key that is used to match mailboxes to custom
	  recipients. If a corresponding custom recipient does not exist, no free and
	  busy information will be published.
	
	6. If no free and busy information is displayed after you verify that the custom
	  recipients do exist, quit, and restart your client. This forces your free and
	  busy information to be written to the server. The next replication cycle will
	  then publish your free and busy information.
	
	REFERENCES
	==========
	
	For additional information about installing, configuring, and using the InterOrg
	Replicator tool, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q238573 XADM: Installing, Configuring, and Using the InterOrg Replicator Tool
	
	Additional query words: replicator replication interorg
	
	======================================================================
	Keywords          : exc55 exc5sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP2
	Version           : winnt:5.0 SP2,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
