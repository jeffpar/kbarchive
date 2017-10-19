---
layout: page
title: "Q153769: XCLN: How to Automatically Import Holidays into Schedule+ 7.0"
permalink: /kb/153/Q153769/
---

## Q153769: XCLN: How to Automatically Import Holidays into Schedule+ 7.0

	Article: Q153769
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	7.00
	WINDOWS
	kbusage kbhowto
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can import Federal, National, Company, and Personal holidays into multiple
	user's files automatically by creating a holiday schedule file and making it
	available to every user by sending it to them via an attachment or a Hot Link in
	a mail message.
	
	MORE INFORMATION
	================
	
	To create a holiday schedule file:
	
	1. Start Schedule+, click the File menu, click Open, and then click Archive or
	  Project Schedule.
	
	2. In the Open Archive or Project Schedule dialog box, type "Holidays" (without
	  the quotation marks) in the File Name textbox and click the Open button.
	
	3. Now create appointments covering normal working hours, and enter an accurate
	  description, of each holiday.
	
	4. Click the File menu, click Export, click Schedule+ Interchange, and export
	  the information, using Holidays.sc2 as the file name.
	
	5. Click Close on the File menu.
	
	There are two ways to make this file accessible to your users:
	
	- As an attached file:
	
	  1. Send the Holidays.sc2 file as an attachment via a Microsoft Exchange mail
	     message.
	
	  2. In the message body, instruct them to double-click on the attachment.
	
	  3. They will be asked if they want to import the Holidays.sc2 information
	     into their SCD file. Tell them to click the OK button to import the
	     holiday information into their appointment book.
	
	- Using the Hot Links feature:
	
	  1. Place the Holidays.sc2 file on a shared location that everyone has access
	     to.
	
	  2. Create a message that includes a line similar to the following:
	
	        file:\\<server>\<share>\Holidays.sc2
	
	     replacing the server and share names with the correct location.
	
	  3. In the message body, instruct them to double-click on the attachment.
	
	  4. They will be asked if they want to import the Holidays.sc2 information
	     into their SCD file. Tell them to click the OK button to import the
	     holiday information into their appointment book.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0
	
	=============================================================================
	
