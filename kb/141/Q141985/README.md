---
layout: page
title: "Q141985: Download of Time to Timex Watch Is Incorrect"
permalink: /kb/141/Q141985/
---

## Q141985: Download of Time to Timex Watch Is Incorrect

	Article: Q141985
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,97,98; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you download the time and time zone information to the Timex Data Link
	Watch, the time downloaded to the watch will not match the time that is shown on
	the computer.
	
	CAUSE
	=====
	
	By default, when you export to the Timex Data Link Watch, the watch gets the
	time from the computer prior to invoking the download routine. Depending on the
	amount of time for the download of information, the time setting on the watch
	may be from 5 seconds to 1 minute slower than the computer's time.
	
	WORKAROUND
	==========
	
	You can add the following command to the DATALINK.INI file located in the
	Windows directory to have a more accurate download:
	
	     [Settings]
	     SyncTime=1
	
	Additional query words: 7.00 office95 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOutlook97Search kbOutlook98Search kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0,97,98; Win95:7.0
	Issue type        : kbprb
	
	=============================================================================
	
