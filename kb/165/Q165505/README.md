---
layout: page
title: "Q165505: XFOR: How to View or Delete Messages in MTS-IN and MTS-OUT Queue"
permalink: /kb/165/Q165505/
---

## Q165505: XFOR: How to View or Delete Messages in MTS-IN and MTS-OUT Queue

	Article: Q165505
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55 kbgraphxlinkcritical
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In some cases you may need to view or delete messages in the Exchange Server
	Internet Mail Service (in Exchange Server version 4.0 the Internet Mail
	Connector [IMC]) or the Microsoft Exchange Connector for Lotus cc:Mail queues
	that are located in the message store. This article explains how to view
	messages in the queues and how to delete mail from them by using the Microsoft
	Exchange MDB Viewer utility.
	
	MORE INFORMATION
	================
	
	To view or delete messages in the MTS-IN and MTS-OUT queues:
	
	1. Log on using the service account to the server that is running the IMC,
	  Internet Mail Service (IMS) or the Connector for cc:Mail.
	
	2. Run the Profinst program to create a profile with a unique name (for example,
	  IMC, IMS or ccmc):
	
	  The following file is available for download from the Microsoft Download
	  Center:
	
	  DownloadDownload Profinst.exe now
	  (http://download.microsoft.com/download/exch50/Utility/1/NT4/EN-US/Profinst.exe)
	
	  For additional information about how to download Microsoft Support files,
	  click the following article number to view the article in the Microsoft
	  Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	  Microsoft scanned this file for viruses. Microsoft used the most current
	  virus-detection software that was available on the date that the file was
	  posted. The file is stored on secure servers that prevent any unauthorized
	  changes to the file.
	
	  The Profinst program can also be obtained from the BackOffice Software
	  Development Kit (SDK) version 2.0 or later. The following are the parameters
	  for running this utility.
	
	  NOTE: Enter "GATEWAY" (without the quotation marks) for the /Type= parameter.
	
	  
	
	     MAPI Profile Installation sample.
	
	     USAGE: PROFINST [Flags]
	
	       Required Flags
	       /SERVICE=    Service name (MSExchangeIMC or MSExchangeCCMC)
	       /NAME=    Profile name
	       /TYPE=    Profile type (GATEWAY or AGENT)
	
	       Optional Flags
	       /DELETE   Delete profile
	       /HELP or /?  Display help
	 
	
	  After you run the Profinst program you have a Messaging Application
	  Programming Interface (MAPI) profile that can be used by any MAPI client. The
	  MDB Viewer utility is a MAPI client that gives you full access to the MTS-IN
	  and MTS-OUT folders. The executable file is called Mdbvu32.exe, and is
	  located on both the Standard and Enterprise edition of Exchange Server in the
	  Support\Utils\I386 folder. The utility can be run directly from the CD-ROM.
	  The following steps outline the procedure to use MDB Viewer to view messages
	  in the MTS-IN and MTS-OUT queues and to delete a message.
	
	3. Start MDB View, click MAPI_Explicit_PROFILE, and then click OK.
	
	  NOTE: If the option to select a profile is not available when you start MDB
	  View, quit and restart Windows NT Server. Then start MDB View again and the
	  profile option should be available.
	
	4. Click the name of the profile that you created in step 2. On the MDB menu,
	  click Open Message Store. In the Store Display Name pane, click either
	  Internet Mail Connector (<server>) or Connector for cc:Mail
	  (<server>), and then click Open.
	
	  NOTE: The first time that you perform this procedure on a server, Internet
	  Mail Connector (<server>) is not displayed. Instead, Private Folders is
	  displayed. Both of these names refer to the same thing. Click Private
	  Folders, and then click Open, and continue to perform the following steps.
	
	  When you are finished, close the session, and then open another session the
	  same way. During the second session and during subsequent sessions, because
	  you have already opened Private Folders, Internet Mail Connector
	  (<server>) is displayed.
	
	5. On the MDB menu, click Open Root Folder. The MTS-IN and MTS-OUT folders are
	  displayed in the Child Folders window. Click either the MTS-OUT Child Folder
	  pane or MTS- IN Child Folder pane, and in the Messages in Folder pane, any
	  messages that exist in that queue are displayed.
	
	6. To delete a message, in the Message In Folder pane, click the message that
	  you want to delete. In the Operations Available dialog box, click
	  "lpFLD->DeleteMessages()". Click Call Function, and then click OK to
	  confirm the deletion. The message is deleted.
	
	If you are unable to obtain the Profinst.exe program, you can perform the
	following steps to create the MAPI profile by using a registry entry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Log on to the server that is running the IMC as the service account. Start
	  the Regedt32.exe program and locate the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\ Windows
	  Messaging Subsystem\Profiles
	
	2. A profile called "MSExchangeIMC xxxxxxxxxx" is displayed. Click the profile
	  name key, and on the Registry menu, click Save Key to save the profile to
	  your hard disk drive. In Exchange Server 5.0 there are multiple
	  "MSExchangeIMC xxxxxxxxxx" entries. You may select any of the entries.
	
	3. Under Profiles, add a key and name it something descriptive, such as "IMC
	  Profile." Click the profile key that you just created, click Registry
	  Restore, and then click the file that you created in step 2.
	
	Additional query words: Event ID 4116 BAD folder MDBVUE MDBVUE32
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
