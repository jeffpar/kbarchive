---
layout: page
title: "Q292183: XCLN: How to Troubleshoot Reminders and Free/Busy Issues"
permalink: kb/292/Q292183/
---

## Q292183: XCLN: How to Troubleshoot Reminders and Free/Busy Issues

	Article: Q292183
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Microsoft Exchange Client version 4.0 or 5.0
	(the Exchange client) to resolve issues with reminders that do not dismiss and
	individual clients that are publishing incorrect free-and-busy times.
	
	MORE INFORMATION
	================
	
	You can use the Exchange Client to resolve issues that pertain to Outlook
	clients such as reminders that do not dismiss and individual calendar or
	free-and-busy issues. The exact location of this file varies depending on the
	operating system. Typically, Exchng32.exe is located in the Windows Messaging
	subfolder.
	
	NOTE: The Exchange 32-bit client is not shipped with Outlook 2000.
	
	Before you follow the procedure described in this section, try to start Outlook
	by using the /cleanfreebusy or /cleanreminders switch to start to troubleshoot
	these issues. If you start Outlook using the /cleanfreebusy or /cleanreminders
	switch, and your issue is not resolved, follow these steps:
	
	1. Start the Outlook client.
	
	2. Click the user's calendar, click Import/Export on the File menu, and then
	  export the Calendar folder to a personal folder.
	
	3. On the File menu, click "Exit and Log off".
	
	4. Start the Exchange Client.
	
	5. Click the user's calendar, and then press DELETE.
	
	6. Quit the Exchange Client.
	
	7. Click Start, click Run, and then type the following command to restart
	  Outlook:
	
	  "outlook.exe /resetfolders" (without the quotation marks)
	
	  NOTE: You notice that the user has an empty Calendar folder.
	
	8. Click the user's Calendar folder, click Import/Export on the File menu, and
	  then import the file that you saved in step two.
	
	9. Verify that the calendar data is successfully imported into the Calendar
	  folder, and then test to see if the issues with reminders or free-and-busy
	  issues still occur.
	
	NOTE: You cannot perform this procedure when you use an Outlook client because
	Outlook does not allow you to delete default folders such as the Calendar
	folder. You cannot perform this procedure on the Inbox because you cannot delete
	the Inbox from either Outlook or Exchange client.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
