---
layout: page
title: "Q154751: XCLN: Corrupt Reminder.dat Causes Errors with Preview Pane"
permalink: /kb/154/Q154751/
---

## Q154751: XCLN: Corrupt Reminder.dat Causes Errors with Preview Pane

	Article: Q154751
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to set a reminder for a message using the Preview Pane Extension
	from the Technical Resource Kit you may receive one of the following error
	messages:
	
	  Unable to read all of the bytes specified in a call to a read file.
	
	-or-
	
	  Unable to compare message entry identifiers.
	
	CAUSE
	=====
	
	You may have a corrupt Reminder.dat file. This file contains the reminders you
	may have created using the Preview Pane Extension.
	
	WORKAROUND
	==========
	
	You can either rename or delete the Reminder.dat file, which is normally located
	in the Windows directory, to keep from receiving the error message. You will
	lose any of the reminders you have created using the Preview Pane Extension.
	
	NOTE: Always make a backup copy of the Reminder.dat file prior to renaming or
	deleting it.
	
	MORE INFORMATION
	================
	
	The Preview Pane Extension is a part of the Microsoft Exchange Technical
	Resource. Microsoft Product Support Services will use commercially reasonable
	efforts in addressing all support problems. For more information about support
	or the Preview Pane, please see the Readme.txt file on the Microsoft Exchange
	Technical Resource compact disc.
	
	Additional query words: PPE Tech CD
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
