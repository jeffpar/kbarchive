---
layout: page
title: "Q294282: XADM: How to Use Updatefb.exe to Republish Absent Free/Busy Data"
permalink: kb/294/Q294282/
---

## Q294282: XADM: How to Use Updatefb.exe to Republish Absent Free/Busy Data

	Article: Q294282
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can regenerate the free-and-busy data in the
	Schedule+ Free Busy system folder from the calendar information contained in
	each user's mailbox. The data does not republish unless you change the effected
	user's calendar, even if the free-and-busy data is deleted from the system
	folder.
	
	MORE INFORMATION
	================
	
	If the data in the Schedule+ Free Busy system folder is deleted (by the use of
	the Guidgen.exe utility or by other means), there is an unsupported utility that
	allows the free/busy data to quickly and automatically repopulate. This utility
	is used to add an appointment to the calendar of all affected users, which is
	the equivalent of sending an appointment by means of e-mail and having all users
	accept it manually.
	
	To obtain this utility, please contact Microsoft Support.
	
	IMPORTANT: Microsoft does not support this utility. The use of this utility may
	corrupt your free/busy information. Microsoft cannot guarantee that problems
	caused by the utility can be fixed. Use of this tool is at your own risk.
	
	
	Currently two versions of this utility exists that you can obtain by contacting
	Microsoft Product Support Services:
	
	- Updatefb.exe - A graphical user interface (GUI) Visual Basic version of the
	  utility.
	
	- CPPCDO - A command-line .cpp file version.
	
	To obtain the two versions of the utility, contact Microsoft Product Support
	Services at the following Microsoft Web site:
	
	  http://support.microsoft.com/directory/
	
	NOTE: To use the two utilities, you must install Collaboration Data Objects (CDO)
	on the Exchange Server computer that runs the utilities. For the best results,
	run these commands from the console of the Exchange Server computer. In
	addition, you must log on to the Exchange Server computer by using a Microsoft
	Windows NT account, and you must have the permission to change each user's
	calendar (for example, service account). For additional information about
	granting Service Account access in Exchange 2000, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q262054 XADM: How to Get Service Account Access to All Mailboxes in Exchange
	  2000
	
	Before you run either of these utilities, create a Comma Separated Value (CSV)
	input file that lists each user's mailbox whose free-and-busy information you
	want to update. In the CSV file, list the mailboxes in the following format:
	
	  "<Mailbox Alias>, <Mailbox Home Server>" (without the quotation
	  marks)
	
	To run the Updatefb.exe Visual Basic (GUI) utility:
	
	1. Double-click the Updatefb.exe file.
	
	2. In the GUI, type the path to an input file, and then type a path to an output
	  file.
	
	3. Click UpdateFB, to start processing the CSV file.
	
	NOTE: The input file is the path to the CSV input file. The output file logs the
	procedures performed by the UpdateFB program as the program runs.
	
	The CPPCDO command-line version of the program runs with the following
	parameters:
	
	  CPPCDO <<input filename>><<output filename>>
	
	The utility performs the following steps:
	
	1. The utility reads the CSV file into memory.
	
	2. The utility connects to the calendar of each mailbox listed, one at a time,
	  in the CSV file by using MAPI and CDO.
	
	3. The utility adds a 30 minute appointment, that has no reminder, for 11:00
	  P.M., today's date, to the user's calendar.
	
	4. The utility quits the CDO and MAPI session, which forces the local
	  free-and-busy map to be changed.
	
	5. A message is then posted in the free-and-busy system folder that represents
	  the user's free-and-busy time.
	
	Additional query words: free busy UpdateFB calendar cdo gui csv
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
