---
layout: page
title: "Q198789: XADM: How to Install, Configure, and Use the InterOrg Tool"
permalink: kb/198/Q198789/
---

## Q198789: XADM: How to Install, Configure, and Use the InterOrg Tool

	Article: Q198789
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The InterOrg Synchronization tool is available in the Microsoft BackOffice
	Resource Kit, Second Edition. Microsoft Product Support Services will use
	commercially reasonable efforts in addressing all support problems. Please do
	not confuse the InterOrg Synchronization tool with the InterOrg Replication
	utility for public folders, which is available on the Microsoft Exchange Server
	version 5.5 Service Pack 2 compact disc.
	
	This tool allows multiple Microsoft Exchange Server organizations to synchronize
	the contents of their directories.
	
	The connector works hierarchically, with a master service running in the master
	organization, and multiple requestor services running in the branch
	organizations. The Exchange Server computer of the master organization collects
	and distributes all of the directory changes from the branch organizations.
	
	The requestor service in each branch organization collects any changes that have
	occurred in the directory of that organization and exports these changes to the
	master service. At the same time, the requestor receives the updated directory
	information from the master service. When the master agent receives updates from
	a requestor, the master agent creates a new entry and assigns it an Update
	Sequence Number (USN) that is greater than the USN for the last entry processed.
	Each requestor stores the largest master USN that it has received, so it
	requests only new entries to be posted to the global directory. The master and
	requestor services communicate using the Exchange Server Internet Mail Service.
	Therefore, you must have an SMTP infrastructure in place prior to configuring
	this service.
	
	Processing Events
	-----------------
	
	On a scheduled basis, the requestor service generates a mail message for the
	master service. This message includes any changes that have been made to the
	directory of the requestor organization, and the most recent (largest) master
	USN of the requestor. Note that the requestor exports only the directory
	information that is maintained on the General property page of an address book
	entry. That is, the requestor service does not export the information available
	in any of the custom attributes.
	
	When the master receives a mail message from a requestor, it updates the master
	database with the appropriate changes, and then sends a reply message to the
	requestor. The message to the requestor contains all updates to the master
	database that have a higher USN than the one that was sent by the requestor.
	Although the master agent processes all requestor messages immediately, changes
	may not replicate throughout the entire system for at least 24 hours.
	
	MORE INFORMATION
	================
	
	The InterOrg Synchronization tool is available in the BackOffice Resource Kit,
	Second Edition, under Administrative Tools.
	
	For best results please download and use MDAC Drivers version 2.1.2.4202.3 from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=10730
	
	These have been tested using the Latest InterOrg Synch Tool from Microsoft.
	
	Requirements for Installing the InterOrg Synchronization Tool
	-------------------------------------------------------------
	
	Before you install the InterOrg Synchronization tool, you must make sure that
	your server computers meet the following conditions:
	
	- Microsoft Windows NT version 4.0 Service Pack 3 or higher is installed.
	
	- Microsoft Exchange Server version 5.0 Service Pack 1 or higher is installed.
	
	- Microsoft Exchange Client version 5.0 or Microsoft Outlook is installed.
	
	- Two Exchange Server mailboxes have been created, one for the Master service
	  and one for the Requestor service. Even if your server is only configured as
	  a requestor, you need to create both mailboxes.
	
	- The servers are configured to communicate using SMTP.
	
	- You are logged on to Windows NT using the Exchange Server service account
	  when you install the InterOrg Synchronization tool.
	
	- You administer the InterOrg tool from the Exchange Server computer where the
	  tool was originally installed.
	
	- If there is a maximum mailbox size limit, you have increased it for the
	  Master and Requestor mailboxes. For troubleshooting purposes, the master and
	  requestor agents do not permanently erase the items in the Deleted Items and
	  Sent Items folders.
	
	Installing the InterOrg Synchronization Tool
	--------------------------------------------
	
	To install the InterOrg Synchronization tool, perform the following steps:
	
	1. Log on to the computer running Windows NT Server using the Exchange Server
	  service account.
	
	2. Insert the BackOffice Resource Kit, Second Edition, Tools and Utilities
	  compact disc into the CD-ROM drive.
	
	3. On the Autorun page, click "Install InterOrg Synchronization tool".
	
	4. In the Master Setup dialog box, specify the drive where you want to install
	  the tool.
	
	5. Choose whether or not to back up any files that are replaced.
	
	6. Specify the Exchange Server master agent mailbox alias name.
	
	7. Specify the requestor agent mailbox alias name.
	
	Configuring the InterOrg Synchronization Tool
	---------------------------------------------
	
	To configure the InterOrg Synchronization tool, perform the following steps:
	
	1. Configuring the Master and Requestor Mailboxes
	
	  After you install the InterOrg Synchronization tool, you must configure the
	  master and requestor mailboxes. To configure the mailboxes, perform the
	  following steps:
	
	  a. Use the Microsoft Exchange Server Administrator program to create two
	     mailboxes in your site for the master and requestor agents. You should use
	     Master and Requestor for the alias names.
	
	  b. Verify that the Exchange Server service account has account permissions to
	     the mailboxes.
	
	  c. Shut down the server, and then restart it.
	
	2. Configuring the Master and Requestor Services
	
	  After installation is complete, you must configure the master and requestor
	  services. To select the type of service that you want to configure, perform
	  the following steps:
	
	  a. Using the Exchange Server Administrator program, click the Configuration
	     container, and then click Add-Ins.
	
	  b. Double-click InterOrg Synchronization Manager.
	
	  c. In the Server Type properties page of the InterOrg Extension Properties
	     dialog box, click to select the service that you want to configure. To
	     configure a requestor service, click Requestor Exchange Server. To
	     configure a master service, click Master Exchange Server. If you are
	     configuring the Exchange Server computer for the master organization, you
	     should configure both services.
	
	  d. Click OK.
	
	  e. In the Exchange Server Administrator window, press the F5 key to view the
	     new add-in listings for the services you have selected. The master add-in
	     is displayed as InterOrg Master Configuration.
	
	  Note: When you configure the Exchange Server computer for the master
	  organization, install both the master and requestor services.
	
	3. Configuring the Master Service
	
	  To configure the master service, perform the following steps:
	
	  a. Using the Exchange Server Administrator program, click the Configuration
	     container, and then click Add-Ins.
	
	  b. Double-click InterOrg Master Configuration.
	
	  c. In the Master InterOrg Synchronization Properties dialog box, click the
	     Configuration tab.
	
	  d. In the Requestor E-mail Addresses box, type the e-mail addresses for all
	     valid requestor agents. This prevents users from creating rogue requestor
	     agents and participating in the InterOrg directory scheme illegitimately.
	     These addresses should be the SMTP addresses of the requestor services,
	     with one exception. The exception occurs if the master and requestor
	     service are both installed on the same Exchange Server computer (as is the
	     case for the master Exchange Server computer). In this case, instead of
	     the SMTP address, you must provide the Exchange Server Distinguished Name
	     (DN) of the requestor service. The DN resembles the following:
	
	  /o=ORG2/ou=Site2/cn=Recipients/cn=REQUESTOR.
	
	  e. In the E-mail Attachment box, type the maximum message size that the
	     master server can generate. This is especially useful if there are message
	     size limits on any of the requestor servers. Make sure that this number is
	     configured for the lowest common denominator on the system.
	
	4. Configuring a Requestor Service
	
	  To configure a requestor service, perform the following steps:
	
	  a. Using the Exchange Server Administrator program, click the Configuration
	     container, and then click Add-Ins.
	
	  b. Double-click InterOrg Requestor Configuration.
	
	  c. In the InterOrg Requestor Configuration Properties dialog box, there are
	     three properties pages that you can configure: the Export Config
	     properties page, the Import Config properties page, and the Schedule
	     properties page.
	
	  The Export Config Properties Page:
	
	  The Export Config properties page contains the following sections:
	
	   - The USN section displays the most recent Update Sequence Number. If you
	     click Import All Recipients, it resets the Master USN to 0. This forces
	     the master agent to send the requestor a complete list of names from its
	     database. If you click Export All Recipients, it resets the Requestor USN
	     to 0, forcing a complete export of all the requestor entries.
	
	   - In the Exported Containers box, you can specify the containers that you
	     want to export. The requestor agent can export multiple containers. In an
	     Exchange Server organization with multiple sites, you need to select a
	     container from each site. For each container that you want to export,
	     click to select the type of contents that you want to export (Exchange
	     Server mailboxes, distribution lists, and/or custom recipients).
	
	   - If you want to append a text string to the display name of the users that
	     are exported, click Append to Display Name, and then type the name to be
	     appended in the text box.
	
	   - By default, the InterOrg Synchronization tool always exports the primary
	     SMTP address defined for the users. If you want to configure the InterOrg
	     service to replace the domain portion of the user's primary SMTP address
	     with other text, click Modify SMTP Address. This is useful in corporate
	     scenarios where an SMTP mailer is used to change the SMTP From header to
	     something else. For example, if the primary address is
	     SMTP:User1@Org1.company.com. The SMTP mailer might change the From field
	     to User1@Org1.com.Com.
	
	   - The maximum MDB size option allows you to control how large a message
	     generated by the requestor agent can be. If the size of the directory
	     exceeds this number, the requestor breaks up the information into multiple
	     messages.
	
	   - In some cases, you may not want to export a particular recipient address.
	     If so, you can use the Trust Level box to control the recipients that are
	     exported. The InterOrg service exports all mailboxes with a trust level
	     below or equal to the one number in this box.
	
	  The Import Config Properties Page:
	
	  The Import Config properties page of the Requestor InterOrg Synchronization
	  dialog box allows you to configure information necessary for the import cycle
	  of the process. It includes the following sections.
	
	   - The Master Server Address box.
	
	     As its name implies, the Master Server Address box contains the e-mail
	     address of the master service. In most cases, this is be the SMTP address
	     of the master server (for example, Master@MyCo.Com). However, if the
	     master and requestor agents reside in the same Exchange Server
	     organization (as is true of the master organization), you need to use the
	     distinguished name address of the master (for example,
	     /o=ORG1/ou=Site1/cn=Recipients/cn=MASTER). If the distinguished address is
	     used, you need to select the EX address type instead of SMTP.
	
	   - The Container for Importing box.
	
	     In this box, specify the container that the requestor service uses to
	     import the information it receives from the master agent. Note that the
	     requestor agent uses a single Exchange Server site container for
	     importing. It is HIGHLY recommended that you select a different container
	     to import than the one you use for export.
	
	   - The Domains to Import box.
	
	     In this box, you can specify which SMTP domains are imported into your
	     directory, or you can click Import All to accept all domains known to the
	     master agent.
	
	  The Schedule Properties Page:
	
	  In the Schedule properties page you can specify how frequently the requestor
	  agent processes updates. You can schedule the service to start processing any
	  new changes on a daily basis. Or you can click Execute Now to start the
	  process on demand, provided that you are logged on using the Exchange Server
	  service account and password.
	
	Configuring the InterOrg Service to Run on Windows NT
	-----------------------------------------------------
	
	The last step in configuring the InterOrg service is to configure it to run on
	Windows NT.
	
	To configure the InterOrg service to run on Windows NT, perform the following
	steps:
	
	1. In Control Panel, click Services.
	
	2. In the Services dialog box, double-click InterOrg Synchronization.
	
	3. In the Service properties page, to select the automatic startup type, click
	  to select the Automatic check box, if it is not already selected.
	
	4. Click This Account.
	
	5. Log on using the user ID and password of the Exchange Server service
	  account.
	
	  Important: Any changes that you make to the service configuration after the
	  service is running do not take effect until the service is restarted.
	
	Additional query words: resource kit t-shoot tshot dirsynch Synch BORKIII GAL replication deploy deploying deployment
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
