---
layout: page
title: "Q184621: XGEN: GWRESET Utility"
permalink: kb/184/Q184621/
---

## Q184621: XGEN: GWRESET Utility

	Article: Q184621
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When troubleshooting the Internet Mail Service (in Exchange Server version 5.0
	and later) or the Internet Mail Connector (in Exchange Server 4.0), it may
	become necessary to delete messages in the MTS-IN or MTS-OUT queue.
	
	There is a utility named Reset, compiled off the software development kit (SDK),
	that allows you to delete messages from the MTS-IN and MTS-OUT queues. You have
	to be logged on as the Internet Mail Service service account and use the
	Internet Mail Service profile like MDB Viewer.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To use the Reset utility:
	
	1. Log on to the server running the Internet Mail Service as the service
	  account. Start Regedt32.exe and go to
	
	  HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion
	  \Windows Messaging Subsystem\Profiles.
	
	  NOTE: The above registry key is one line, and is broken into two lines for
	  convenience.
	
	2. You will find a profile called MSExchangeIMC xxxxxxxxxx. Select the profile
	  name key and on the Registry menu, click Save Key to save the entry to disk.
	
	  NOTE: If there are multiple MSExchangeIMC xxxxxxxxxx entries, then select any
	  of the entries.
	
	
	3. Add a key under Profiles and name it something descriptive such as Internet
	  Mail Service Profile. Select the newly created key and on the Registry menu,
	  click Restore and select the file created in step 2.
	
	4. Stop the Internet Mail Service.
	
	5. From a command prompt type: reset.
	
	6. Choose the Internet Mail Service profile that you created in step 3.
	
	7. When the command prompt returns the MTS-IN and MTS-OUT queues, confirm that
	  they are empty.
	
	For additional information on how to create an Internet Mail Service profile,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q165505 XFOR: How to View/Delete Messages in MTS-IN and MTS-OUT
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
