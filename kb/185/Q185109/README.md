---
layout: page
title: "Q185109: XFOR: LinkAge Queue Viewer Is Not FIFO"
permalink: /kb/185/Q185109/
---

## Q185109: XFOR: LinkAge Queue Viewer Is Not FIFO

	Article: Q185109
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The LinkAge Queue Viewer, located in the Microsoft Exchange Administrator
	program under Connector Properties for any LinkAge Connector, does not give a
	"First In First Out" (FIFO) view of the queue. To see messages at the top of the
	queue (or in other words, in FIFO order), you must use MDBVU32 utility.
	
	MORE INFORMATION
	================
	
	The Linkage Queue Viewer displays messages in alphabetic order of the
	originator's name. Hence, if a message from Elizabeth Boyle is sent at
	10:21a.m., and a message from Amy Anderson is sent at 2:35 p.m. on the same day,
	Amy Anderson's message will appear at the top of the queue in Queue Viewer.
	Therefore, if you suspect that a message in the LinkAge queue is blocking other
	traffic, and you wish to remove the oldest message from the queue (the message
	at the top of the queue), you won't be able to easily determine which message is
	the oldest by simply looking in Queue Viewer. The following articles in the
	Microsoft Knowledge Base suggest removing the message from the top of the
	LinkAge queue without taking into account that the LinkAge Queue Viewer does not
	show these messages in FIFO order:
	
	  Q177325 XFOR: LME-PROFS-MEXIN Returns Error Code 80070057 and Exits
	
	  Q177534 XFOR: LME-PROFS-MEXDIA Crashes Processing a Long File Extension
	
	If the messages are currently "stuck" in the MTS-IN, MTS-OUT, READY-IN, or
	READY-OUT folders of the connector, you must use Mdbvu32.exe to view the
	contents of these folders in FIFO order. For general instructions on using
	Mdbvu32, see the following article in the Microsoft Knowledge Base:
	
	  Q165505 XFOR: How to View/Delete Messages in MTS-IN and MTS-OUT Queues
	
	However, you should note that Profinst.exe will not work for creating a profile
	to log on to the LinkAge Connector mailboxes. To create a profile for using
	Mdbvu32, follow these steps:
	
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
	
	1. Log on to Windows NT as the service account that runs LinkAge Connectors.
	
	2. Using Regedt32, locate the following key:
	
	 
	     KEY_CURRENT_USER\Software\Microsoft \Windows NT\Windows Messaging
	     Subsystem\Profiles.
	  
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Find a profile of the pattern: SERVERNAME-LME-CONNECTOR Vn.n (where "n" is
	  the version number). For example: SERVER1-LME-SNADS V5.5.
	
	4. Highlight that profile, and from the Registry menu, click Save Key. Save the
	  key in a directory where you can find it easily.
	
	5. Now highlight the Profiles key. From the Edit menu, click Add Key.
	
	6. In the Add Key dialog box, enter a unique Key Name, like SNADS-Test. Leave
	  the Class field blank, and click OK.
	
	7. Highlight the newly created profile, and from the Registry menu, click
	  Restore.
	
	8. Select the key that was saved in step 4, and click Open.
	
	9. Click Yes on the warning. The profile is now created.
	
	It is recommended that after you identify the message at the top of the folder
	you are troubleshooting, you use the Queue Viewer in the Exchange Administrator
	program to first export the message, and then "NDR" the message by selecting the
	message and clicking the NDR button on the toolbar. This will save the offending
	message in Transport Neutral Encoding Format (TNEF) format.
	
	
	The example companies, organizations, products, people and events depicted herein
	are fictitious. No association with any real company, organization, product,
	person or event is intended or should be inferred.
	
	Additional query words: mdbvu mdbvue mdbview mdbvue32
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
