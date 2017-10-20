---
layout: page
title: "Q238573: XADM: Installing and Configuring InterOrg Replication Utility"
permalink: /kb/238/Q238573/
---

## Q238573: XADM: Installing and Configuring InterOrg Replication Utility

{% raw %}

	Article: Q238573
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This document describes how to use the Microsoft Exchange Server InterOrg
	Replication utility to share free and busy and public folder information. The
	InterOrg Replication utility consists of two programs, the Exchange Server
	Replication Configuration utility (Exscfg.exe) and the Exchange Server
	Replication Service (Exssrv.exe). Using these programs you can coordinate
	meetings, appointments, and contact information between members of two different
	Exchange Server organizations. Additionally, message types can automatically be
	converted to posts and added to public folders, which can then be replicated.
	
	By using a configuration file created by the Exchange Server Replication
	Configuration utility, the Exchange Server Replication Service continuously
	updates information from one server (designated as the publisher) to one or more
	Exchange Server computers (designated as subscribers). Schedule+ free and busy
	information is replicated from publisher to subscriber only. For this reason,
	you must have two free and busy sessions to bi-directionally update free and
	busy information. Public folders can be replicated from publisher to subscriber
	or bi-directionally. You can configure the replication frequency, as well as the
	logging of message and folder replication, and how much processing power you
	want devoted to the replication process.
	
	NOTE: For specific information about creating a session configuration file, see
	the Help file for the InterOrg Replication Configuration utility (Exscfg.exe).
	
	Multiple Exchange Server Organizations Within a Single Company:
	
	Multiple Exchange Server organizations may exist within a single company. This
	may occur when:
	
	- A merger or acquisition of a company that has a separate Exchange Server
	  organization takes place.
	
	- Servers are added to a different Exchange Server organization that may or may
	  not be merged with the parent organization.
	
	- Earlier versions of Exchange Server must share folder and free and busy
	  information with Exchange Server computers in different organizations using
	  Exchange Server version 5.5 or later.
	
	- Exchange Server computers are administered separately in different
	  organizations because of geographical constraints.
	
	If an Exchange Server topology that includes two or more organizations exists,
	you can use the Exchange Server InterOrg Replicator utility to share information
	until a permanent organizational architecture is established.
	
	Multiple Organizations That Span Companies:
	
	Sharing information between companies requires tight integration of network
	security and granular management of information sharing. The InterOrg Replicator
	utility allows for detailed management of intra-organizational content access
	and security for files transported outside of the Exchange Server organization
	security layer. The InterOrg Replicator utility does this by:
	
	- Limiting the interaction of other organizations to a specific folder or
	  folders.
	
	- Preventing administrators of other organizations from seeing the structure of
	  your public folder system, and preventing users who have not been granted
	  permission from replicating free and busy information.
	
	Security:
	
	Whenever information is accessed on an Exchange Server computer from another
	domain or organization, a security breach is possible. The InterOrg Replicator
	utility ensures that the privacy of the shared information is maintained while
	it is being duplicated between Exchange Server organizations. Additionally,
	secondary information, such as the number and names of folders on the opposite
	Exchange Server computer, is not available to either system administrator.
	
	MORE INFORMATION
	================
	
	System Requirements:
	
	Following are the system requirements for computers running the Replication
	Configuration utility and Replication Service:
	
	- Microsoft Windows NT version 4.0 Server with Service Pack 4 or later
	
	- Exchange Server version 5.0 Standard or Enterprise Edition with Service Pack
	  2 or later
	  - or -
	  Exchange Server version 5.5 Standard or Enterprise Edition with Service Pack 3
	  or later
	
	Network Requirements:
	
	- A Messaging Application Programming Interface (MAPI)-capable local area
	  network (LAN) connection between different Exchange Server organizations
	
	Setup and Installation
	----------------------
	
	Installing the InterOrg Replication utility for use with Exchange Server consists
	of the following steps, which are expanded on below:
	
	1. Preparing the publisher
	
	2. Preparing the subscribers
	
	3. Installing the InterOrg Replicator utility files
	
	4. Creating a configuration file
	
	5. Setting up the replication service
	
	Preparing the Publisher:
	
	The first step in configuring the InterOrg Replicator utility is preparing an
	Exchange Server computer to be a publisher. The publisher collects information
	from an Exchange Server organization, packages it, and sends it to subscriber
	Exchange Server computers outside of the Exchange Server organization, based on
	a schedule you create.
	
	To prepare the publisher, you must create a service account and mailbox for the
	utility to use during the replication process. You also must assign the
	appropriate permissions to that service account and mailbox, and create a public
	folder for the utility to use during replication.
	
	It is important to understand that the service account and mailbox that you
	create must be listed as an owner of each public folder and subfolder you want
	to replicate, on either the publisher or the subscriber. This enables the
	utility to replicate Anonymous and Default permissions from one organization to
	the other. Use Microsoft Outlook to change the ownership and the permissions of
	public folders.
	
	To prepare the publisher server for InterOrg Replication:
	
	1. Create a Windows NT account and an associated Exchange Server mailbox for the
	  utility to use as a service account.
	
	2. Using Outlook, add the service account mailbox that you created as an owner
	  for every top-level folder and subfolder you want to replicate.
	
	3. Using Outlook, create a public folder named ExchsyncSecurityFolder in the
	  root public folder. Grant Folder Visible permission to the service account
	  mailbox that you created. Do not specify any Default or Anonymous permissions
	  on this folder; it is used by the Replication Service for additional security
	  and must be present on both the publisher and subscriber servers.
	
	Preparing the Subscriber:
	
	A subscriber is an Exchange Server computer outside of your organization, where
	you want to replicate information using the InterOrg Replicator utility. To
	configure a subscriber, you must create a Windows NT account and an associated
	Exchange Server mailbox that the utility can use as a service account.
	Additionally, you must create the public folders that the utility needs for the
	replication process.
	
	To prepare the subscriber server for InterOrg Replication:
	
	1. Create a Windows NT account and an associated Exchange Server mailbox for the
	  utility to use as a service account.
	
	2. Using Outlook, create a top-level folder for every portion of the folder
	  hierarchy you are replicating. The utility creates subfolders automatically.
	
	3. Using Outlook, grant Publishing Editor permission for each top-level folder
	  to the service account mailbox that you created.
	
	4. Using Outlook, create a public folder named ExchsyncSecurityFolder off of the
	  root public folder. Grant Folder Visible permission to the service account
	  mailbox that you created. Do not specify any Default or Anonymous permissions
	  on this folder; it is used by the Replication Service for additional security
	  and must be present on both the publisher and subscriber servers.
	
	Installing the InterOrg Replicator Utility Files:
	
	The following files are located in the Server\Support\Exchsync\I386 folder on the
	Service Pack 3 compact disc:
	
	- Exscfg.exe, the Exchange Server Replication Configuration program
	
	- Exssrv.exe, the Exchange Server Replication Service
	
	The computer where the InterOrg Replicator utility is installed must be located
	in the same domain as either the publisher or the subscriber servers. The
	computer must have:
	
	- Windows NT version 4.0 with Service Pack 4 or later installed.
	
	- Outlook 98 or later installed.
	
	- Exchange Server version 5.5 with Service Pack 3 installed.
	
	To set up the InterOrg Replicator utility:
	
	1. Create a working directory for the utility to use (C:\Exchsync, for example).
	
	2. Copy the Exssrv.exe and Exscfg.exe files into your working directory.
	
	Creating a Configuration File:
	
	In order to set up replication, you must create a configuration file for the
	replication of free and busy information, as well as a configuration file for
	public folder replication.
	
	To create a configuration file for free and busy replication:
	
	1. Double-click the Exscfg.exe file.
	
	2. On the Session menu, click Add.
	
	3. In the Select Session Type box, click Schedule+ Free/Busy Replication, and
	  then type a display name for the session.
	
	4. In the Maximum Task Number box, enter the number of threads to be used for
	  replication.
	
	  NOTE: The number of threads should be less than or equal to the number of
	  sites you want to replicate free and busy information for.
	
	5. In the Schedule box, enter the time, day, and frequency for the replication
	  session.
	
	6. If you want the utility to write a log during the replication process, click
	  Logging, and then set the appropriate parameters.
	
	  NOTE: Log files report if the service starts or stops, any errors it
	  encounters, and statistical information for each session (for example, number
	  of messages and folders replicated).
	
	7. Type the publisher and subscriber server names, and the service account
	  mailboxes that you created for each.
	
	8. Click Advanced, and then type the Windows NT domain, service account, and
	  password for each of the publisher and subscriber accounts.
	
	9. Click OK to add the session to the configuration file, and then save.
	
	To create a configuration file for public folder replication:
	
	1. Double-click the Exscfg.exe file.
	
	2. On the Session menu, click Add.
	
	3. In the Select Session Type dialog box, click Public Folder Replication, and
	  then type a display name for the session.
	
	4. In the Maximum Task Number box, enter the number of threads you want to use
	  for replication.
	
	  NOTE: The number of threads should be less than or equal to the number of
	  sites you want to replicate information for. Using higher task number values
	  can negatively affect performance.
	
	5. In the Schedule box, enter the time, day, and frequency for the replication
	  session.
	
	6. If you want the utility to write a log during the replication process, click
	  Logging, and then set the appropriate parameters.
	
	  NOTE: Log files report if the service starts or stops, any errors it
	  encounters, and statistical information for each session (for example, number
	  of messages and folders replicated).
	
	7. Type the publisher and subscriber server names and the service account
	  mailboxes that you created for each.
	
	8. Click Advanced, and then type the Windows NT domain, service account, and
	  password for each of the publisher and subscriber accounts.
	
	9. Click Folder List to choose the folders that you want to replicate. In the
	  Session Folder List dialog box, select the folder or folder hierarchy on the
	  publisher that you want to replicate, and then select the destination folder
	  on the subscriber.
	
	10. Click the ">" button once to replicate public folder information only
	  from the publisher to the subscriber. Click it again to toggle
	  bi-directional replication.
	
	11. Click OK to add the session to the configuration file and save.
	
	Setting Up the Replication Service:
	
	Before you start the replication service, you must provide the program with some
	information that is needed for the replication process.
	
	1. Double-click the Exssrv.exe file. The first time you run the Exssrv.exe file,
	  click Install.
	
	2. Type the Windows NT account name and password from the service account and
	  mailbox that you created. You can use either the publisher service account or
	  the subscriber service account.
	
	3. Type the path and file name of the configuration file that you created.
	
	4. Specify whether or not you want the service to automatically start when you
	  turn on the computer.
	
	  After you have installed the service, click Start, or start it from the
	  Control Panel.
	
	NOTE: For each mailbox in the publisher server that you want to replicate free
	and busy information to, a corresponding custom recipient must exist on the
	subscriber server. The SMTP address of the mailbox is the unique key that is
	used to match mailboxes to custom recipients.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q238642 XADM: Troubleshooting the InterOrg Replication Utility
	
	  Q221767 XADM: Public Folder InterOrg Replication Does Not Work Across
	  Different Languages
	
	
	Additional query words: inter-org synchronization
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP2
	Version           : :5.5 SP2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
