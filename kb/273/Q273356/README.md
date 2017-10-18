---
layout: page
title: "Q273356: XFOR: &quot;&#92;&#92;&quot; in Meeting Request Migrated From Notes to Exch Double"
permalink: kb/273/Q273356/
---

## Q273356: XFOR: &quot;&#92;&#92;&quot; in Meeting Request Migrated From Notes to Exch Double

	Article: Q273356
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are migrating users from Lotus Notes R4.6, or R5 to Exchange Server
	5.5, or Exchange 2000 Server where meetings are present in the Lotus Notes
	calendar that contain backslashes in either the Subject, or Description fields,
	the backslashes appear to double in quantity in the Outlook Calendar after you
	migrate this user to Exchange.
	
	For example, before the migration, in the Lotus Notes calendar, a meeting exists
	with the description of:
	
	  Connect to \\server\share\file ...
	
	After the migration, when you view this meeting in the Outlook calendar, the
	description appears as:
	
	  Connect to \\\\server\\share\\file ...
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server 5.5
	and Microsoft Exchange 2000 Server.
	
	MORE INFORMATION
	================
	
	After you complete the migration process, the Microsoft Exchange Migration
	Wizard generates a message that contains an .sc2 file attachment, which has the
	subject Migrated Calendar Information. You have to import this file into Outlook
	in order to populate the Outlook Calendar with the calendar information from
	Lotus Notes.
	
	In the .sc2 file, the backslashes double even before you import this file into
	Outlook.
	
	Here is a sample of an .sc2 file that contains backslashes that have doubled:
	
	  SingleAppointments:
	  {
		Start: 09-22-2000 13:15
		End:   09-22-2000 14:15
		Text:  "backslash test 2 \\\\  "\\\\""
		BusyType: 1
	  Attendees:
	  {
		UserDisplay: "FirstName LastName"
	       UserEntryID:  "00/00/00/00/81/2B/1F/A4/BE/A3/10/19/9Dn/00/DD/01/0FT/02/00/00/01/00FirstName\ 
	        /20LastName/00NOTES/00FirstName/20LastName/2FCertifier/40Domain/00"
		UserSearchKey: "NOTES/3AFIRSTNAME/20LASTNAME/2FCERTIFIER/40DOMAIN/00"
		IsUserDistributionList:	F
		UserWell:	1
		AttendeeStatus:	1
	  }
	
	  Connect to  \\\\server\\share\\file
	  }
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
