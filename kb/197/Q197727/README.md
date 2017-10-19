---
layout: page
title: "Q197727: XFOR: NotesCal Returns Warning Event 2001"
permalink: /kb/197/Q197727/
---

## Q197727: XFOR: NotesCal Returns Warning Event 2001

	Article: Q197727
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Calendar Connector for Lotus Notes may generate the following warning:
	
	  Event ID 2001
	  Source:MSExchangeNotesCal
	  Type:Warning
	  Category:Request to Partner
	  Description: The Calendar Connector could not query the calendar for
	  Notes user "John Smith/Notes@Notes" due to Notes error 6402 - "Could not
	  open the ID file"
	
	CAUSE
	=====
	
	This warning is due to an incorrect configuration on the Notes Calendar
	Connection property page. The property page does not check to make sure that the
	Notes.ini file is specified correctly, or if the file is accessible, and thus an
	incorrect configuration is possible.
	
	RESOLUTION
	==========
	
	Confirm that the "Path to the local Notes.ini file" includes the full directory
	path and file name, for example, D:\Winnt\Notes.ini. If it is not in this
	format, correct the path to point to the local Notes.ini file.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem in Microsoft Exchange Server 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
