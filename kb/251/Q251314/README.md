---
layout: page
title: "Q251314: XCLN: Schedule+ Two-Digit Date Is Not Interpreted Correctly"
permalink: /kb/251/Q251314/
---

## Q251314: XCLN: Schedule+ Two-Digit Date Is Not Interpreted Correctly

{% raw %}

	Article: Q251314
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
	
	The French version of this fix should have the following file attributes or
	later:
	
	File Name     Size        Date          File Version     Language
	-------------------------------------------------------------------------------
	Msscd32.dll     184,080   28-Dec-1999   7.05.1462.0007   001036 French (France)	
	Mscal32.dll     215,824   28-Dec-1999   7.05.1462.0007   001036 French (France)	
	Msspc32.dll   1,756,944   28-Dec-1999   7.05.1462.0007   001036 French (France)	
	Mstre32.dll      39,696   28-Dec-1999   7.05.1462.0007   001036 French (France)	
	
	The German version of this fix should have the following file attributes or
	later:
	
	File Name     Size        Date          File Version     Language
	--------------------------------------------------------------------------------
	Msscd32.dll     184,080   28-Dec-1999   7.05.1462.0007   001031 German (Germany)	
	Mscal32.dll     216,336   28-Dec-1999   7.05.1462.0007   001031 German (Germany)	
	Msspc32.dll   1,755,920   28-Dec-1999   7.05.1462.0007   001031 German (Germany)	
	Mstre32.dll      39,696   28-Dec-1999   7.05.1462.0007   001031 German (Germany)	
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	File Name     Size        Date          File Version     Language
	------------------------------------------------------------------------
	Msscd32.dll     183,568   28-Dec-1999   7.05.1462.0007   001041 Japanese	
	Mscal32.dll     211,728   28-Dec-1999   7.05.1462.0007   001041 Japanese
	Msspc32.dll   1,747,216   28-Dec-1999   7.05.1462.0007   001041 Japanese
	Mstre32.dll      39,184   28-Dec-1999   7.05.1462.0007   001041 Japanese
	
	The Spanish version of this fix should have the following file attributes or
	later:
	
	File Name       Size      Date          File Version     Language
	--------------------------------------------------------------------------------
	Msscd32.dll     184,080   18-Jan-2000   7.05.1462.0008   Spanish (Internat Sort)	
	Mscal32.dll     214,800   18-Jan-2000   7.05.1462.0008   Spanish (Internat Sort)
	Msspc32.dll   1,752,848   18-Jan-2000   7.05.1462.0008   Spanish (Internat Sort)
	Mstre32.dll      39,696   18-Jan-2000   7.05.1462.0008   Spanish (Internat Sort)
	
	
	
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
	

{% endraw %}
