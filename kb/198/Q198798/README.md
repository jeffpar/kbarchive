---
layout: page
title: "Q198798: XADM: Troubleshooting the InterOrg Synch Tool"
permalink: /kb/198/Q198798/
---

## Q198798: XADM: Troubleshooting the InterOrg Synch Tool

	Article: Q198798
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The InterOrg Synchronization tool is available in the Microsoft BackOffice
	Resource Kit, Second Edition. Microsoft Product Support Services (PSS) will use
	commercially reasonable efforts in addressing all support problems.
	
	The tool allows multiple Microsoft Exchange Server organizations to synchronize
	the contents of their directories.
	
	The connector works hierarchically, with a master service running in the master
	organization, and multiple requestor services running in the branch
	organizations. The Exchange Server computer of the master organization collects
	and distributes all of the directory changes from the branch organizations. The
	requestor service in each branch organization collects any changes that have
	occurred in the directory of that organization and exports these changes to the
	master service.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	There are a number of steps you can take if you encounter problems with the
	InterOrg Synchronization tool.
	
	1. Use the application event viewer to make sure that there are no errors.
	  Configure the event viewer with a 2-MB size, and configure it to wrap as
	  needed.
	
	2. Use Performance Monitor to review the number of threads the InterOrg process
	  uses. The InterOrg Synchronization service typically uses 11-20 Microsoft
	  Windows NT threads. If it is using only five threads, this typically means
	  that the service does not have a valid mailbox to log on with.
	
	3. Use the Exchange Client to view what the InterOrg service sends and receives.
	  Because the service uses an Exchange Server mailbox to send and receive
	  requests, it is sometimes possible to troubleshoot messaging problems in this
	  way. To do this, configure an Exchange Server profile that can open the
	  master and requestor mailboxes. Do not use the Master or Requestor profiles
	  directly, as this prevents the service from processing any messages.
	
	  After you configure the profile, open the Sent Items folder of each mailbox to
	  see what messages each service has sent to the other. In the Deleted Items
	  folder you can find the messages each service has received from the other.
	  Because the InterOrg service uses a Microsoft Access 97 compatible file
	  format, you can use Microsoft Access 97 to view the contents of the messages.
	  It is also a good idea to periodically erase the Sent Items and Deleted Items
	  folder of the Master and Requestor agent.
	
	4. If the InterOrg service does not process data even though it is correctly
	  configured, there may be a versioning problem with the ODBC drivers. In this
	  case, you can try reinstalling the ODBC drivers from the ValuPack\DataACCC
	  directory of the Microsoft Office 97 CD. The latest ODBC Drivers can be
	  obtained from the following location:
	
	  http://www.microsoft.com/downloads/
	
	5. Make sure you have not made any unsaved changes to the InterOrg service
	  configuration. For example, if you remove an export container from the
	  requestor service, make sure you close the InterOrg Configuration dialog box
	  prior to the next scheduled replication cycle. Note that container removal
	  only takes place during the scheduled replication cycle.
	
	6. Turn up Diagnostic logging on the tool from 2 to 5, and review the
	  application log for errors.
	
	  a. Start Registry Editor (Regedt32.exe) on both MASTER and REQUESTOR Servers.
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\_Exchange Inter-Org
	  Synch\Config
	
	  c. Change Logging from 2 to 5.
	
	  d. Quit Registry Editor.
	
	  e. Stop and restart the InterOrg Synch Tool service on Both the MASTER and
	     REQUESTOR Server computers for the settings to take effect.
	
	NOTE: The InterOrg Synch tool does not scale well above 10,000 users. If greater
	scalability is required, the user or the administrator should consider the
	Microsoft Metadirectory Services (Exchange Agent) for Replication.
	
	More information about this tool can be obtained from the following Microsoft Web
	sites:
	
	  http://www.microsoft.com/WINDOWS2000/guide/server/features/mms.asp
	
	  http://www.microsoft.com/technet/win2000/metadire.asp
	
	
	Additional query words: t-shoot tshot dirsynch Synch BORKIII GAL replication
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
