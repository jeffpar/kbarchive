---
layout: page
title: "Q254562: XCLN: Schedule+ Two-Digit Date Is Not Interpreted Correctly"
permalink: /kb/254/Q254562/
---

## Q254562: XCLN: Schedule+ Two-Digit Date Is Not Interpreted Correctly

	Article: Q254562
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Schedule+ for Microsoft Windows, if you type a two-digit date in a four-digit
	date box, Schedule+ may interpret the date incorrectly. This problem occurs if:
	
	- You set the short date format for Windows (under Regional Settings in Control
	  Panel) to use a four-digit year (such as dd/mm/yyyy).
	
	-and-
	
	- In Schedule+, you type a two-digit year in any four-digit date box.
	
	The following symptoms occur:
	
	- If you enter a two-digit year in an appointment, Schedule+ always assumes
	  that the year is 19xx.
	
	- If you insert a two-digit year in a "To Do" task, Schedule+ always sets the
	  year to 1900.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The Simplified Chinese version of this fix should have the following file
	attributes or later:
	
	File Name     Size        Date         File Version     Language
	---------------------------------------------------------------------
	Msscd32.dll     182,544   01/28/2000   7.05.1462.0007   Chinese (PRC)	
	Mscal32.dll     207,120   01/28/2000   7.05.1462.0007   Chinese (PRC)	
	Msspc32.dll   1,734,928   01/28/2000   7.05.1462.0007   Chinese (PRC)	
	Mstre32.dll      38,160   01/28/2000   7.05.1462.0007   Chinese (PRC)	
	
	The Traditional Chinese version of this fix should have the following file
	attributes or later:
	
	File Name     Size        Date         File Version     Language
	------------------------------------------------------------------------
	Msscd32.dll     182,544   02/01/2000   7.05.1462.0008   Chinese (Taiwan)	
	Mscal32.dll     207,120   02/01/2000   7.05.1462.0008   Chinese (Taiwan)	
	Msspc32.dll   1,735,952   02/01/2000   7.05.1462.0008   Chinese (Taiwan)	
	Mstre32.dll      38,160   02/01/2000   7.05.1462.0008   Chinese (Taiwan)	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, either click the button to display the calendar, or
	enter the full four digits in the year box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the English-language version of this fix, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q249574 Schedule+ 7.5 To Do Tab Maps the Year Incorrectly When You Set Short
	  Date Style to MM/DD/YYYY
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule750
	Version           : :7.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
