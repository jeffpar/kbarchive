---
layout: page
title: "Q249574: Schedule+ 7.5 To Do Tab Maps Short Date Style Year Incorrectly"
permalink: kb/249/Q249574/
---

## Q249574: Schedule+ 7.5 To Do Tab Maps Short Date Style Year Incorrectly

	Article: Q249574
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the year 2000 (Y2K) update for Schedule+ 7.5 and set the Date
	format to the Short Date Style MM/dd/yyyy, you start Schedule+ to set up a "To
	Do" list for 1/5/0001. When you enter the date for the "To Do" list, you simply
	type "1" (without the quotation marks) in the year field. However, when you
	press the TAB key to go to the next field, the year changes to 1/1/1900 and is
	displayed in red.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date        Time     Version     Size      File name    Platform
	-------------------------------------------------------------
	12/28/1999  11:48a   7.5.1462.7  212,752   Mscal32.dll  Win32
	12/28/1999  11:47a   7.5.1462.7  182,544   Msscd32.dll  Win32 
	12/28/1999  11:47a   7.5.1462.7  1,744,144 Msspc32.dll  Win32
	12/28/1999  11:47a   7.5.1462.7  38,160    Mstre32.dll  Win32
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, use the arrow keys instead of the TAB key to move
	between cells.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The hotfix is only for the English version of Schedule+ 7.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule750
	Version           : WINDOWS:7.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
