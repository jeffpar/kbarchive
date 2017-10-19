---
layout: page
title: "Q124486: PC Win: Month Displays as &quot;MM&quot; in Received Date"
permalink: /kb/124/Q124486/
---

## Q124486: PC Win: Month Displays as &quot;MM&quot; in Received Date

	Article: Q124486
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail for Windows, the received date field may
	display the month as "MM." For example, the date may display as
	
	  MM/14/94
	
	instead of:
	
	  12/14/94
	
	RESOLUTION
	==========
	
	Check the following settings:
	
	1. Run Windows Control Panel and choose the Date/Time icon. Make sure the date
	  and time are correct.
	
	2. Run Windows Control Panel and choose International. Make sure the settings
	  are correct for your situation. For example:
	
	  Country: United States
	  Language: English (American)
	  Keyboard Layout: US
	  Measurement: English
	  List Separator: ,
	
	  Check the International Date and Time formats, as well as the Long Date
	  Format, making sure the order is correct (in this example, MDY).
	
	3. In the WIN.INI file, check the international ([intl]) section. It should have
	  the following two entries.
	
	  [intl]
	  sShortDate=M/d/yy
	  sLongDate=dddd, MMMM dd, yyyy
	
	The settings should match the ones above. If they have extra characters or if
	they contain the wrong separator character, the problem described above may
	occur. If you are unsure about the format of the lines in the [intl] section,
	try comparing yours to the [intl] section of another installation that is not
	experiencing the problem.
	
	Additional query words: 3.20 3.20a date format receive
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
