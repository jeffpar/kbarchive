---
layout: page
title: "Q178159: XCLN: Outlook for Windows 3.1x Fails to Import CAL Files"
permalink: /kb/178/Q178159/
---

## Q178159: XCLN: Outlook for Windows 3.1x Fails to Import CAL Files

{% raw %}

	Article: Q178159
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.0,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Schedule+, version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to import a Microsoft Schedule+ 1.0 .cal file into Microsoft
	Outlook Calendar for Windows 3.1x version 8.0, the following error may occur:
	
	  Data file is invalid for given section.
	  Re-select file name and retry.
	
	WORKAROUND
	==========
	
	To successfully import a Microsoft Schedule+ 1.0 file (.cal file) into Microsoft
	Outlook Calendar for Windows 3.1x, use the following steps:
	
	1. Start Microsoft Outlook Calendar.
	
	2. From the File menu, select Open. Then select Archive or Project Schedule.
	
	3. Select the .cal file and click OK. A new window with the user's schedule is
	  displayed.
	
	4. From the File menu, click Export and choose Outlook Calendar Interchange from
	  the new window.
	
	5. Select a location and file name for the export file (.SC2). Click OK.
	
	6. Close the calendar window.
	
	7. From the File menu, click Import and choose Outlook Calendar Interchange.
	
	8. Select the export file created in step 5 and click OK.
	
	At this point, the calendar data from the intermediate export (.SC2) file should
	import correctly.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : WINDOWS:1.0,8.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
