---
layout: page
title: "Q176481: FIX: LUPDATE() Does Not Report Correct Century for Year 2000"
permalink: /kb/176/Q176481/
---

## Q176481: FIX: LUPDATE() Does Not Report Correct Century for Year 2000

{% raw %}

	Article: Q176481
	Product(s): Microsoft FoxPro
	Version(s): 2.01,2.1,2.6,2.6a,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbYear2000 kbHWMAC kbOSUNIX kbvfp
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for UNIX, version 2.6 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use SET CENTURY ON with a computer that has the system date set to the
	year 2000 and a modification is made to the structure of a table (.dbf) file, or
	a copy of the table file is made, the LUPDATE() function incorrectly displays
	the century as 1900.
	
	CAUSE
	=====
	
	The date of the last update is stored in the header of the .dbf file. The
	LUPDATE() function reads the date of last update from the header of the .dbf
	file. This problem is caused by the manner in which FoxPro writes the date into
	the table's file header.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- Use the FDATE() function to obtain the correct date. With SET CENTURY ON,
	  this function returns the correct year.
	
	- Create a program subroutine with the ADIR() function to obtain the file date
	  parameter as illustrated by the following program code:
	
	  SET CENTURY ON
	        =ADIR(afileinfo, "CUSTOMER.DBF")
	        x = afileinfo(1, 3)
	        ? x
	
	NOTE: Because FoxBase does not support either the FDATE() or ADIR() function,
	these workarounds do not apply to FoxBase.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The LUPDATE() function returns the date of the last update to the table in the
	currently selected work area or in a specified work area. The "last updated"
	date and time are not updated by the operating system until the file is closed.
	When you close a modified table, FoxPro writes the current system date of the
	computer into the header of the table file.
	
	With a network, there is no guarantee that all the computers have a synchronized
	date and time. If the LUPDATE() function makes it appear that the table has not
	been updated today and then new information is entered into the table, you could
	be overwriting new data entered from a computer that has the wrong system date.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Change the computer's system date to 02/01/2000 (the specific date is not
	  critical as long as the year is 2000 or higher).
	
	2. In the FoxPro Command window, type the following without the comments:
	
	        SET CENTURY ON
	        USE <tablename>         && Name of the table.
	        ?LUPDATE()              && Checks the current value of the last 
	                                && updated date.
	        APPEND BLANK            && Appends a blank record to the table.
	        USE                     && This closes the table.
	        USE <tablename>         && Open the table again.
	        ?LUPDATE()              && Check the last updated date again.
	
	  An incorrect answer is returned: 02/01/1900.
	
	NOTE: Remember to reset your computer system date back to today's date.
	
	REFERENCES
	==========
	
	For more information about the LUPDATE(), FDATE(), and ADIR() functions, please
	see the following articles in the Microsoft Knowledge Base:
	
	Q130165 PRB: LUPDATE() Does Not Return Date of Last Update
	
	Q113943 New and Enhanced Commands and Functions in FoxPro Ver 2.6
	
	Q100554 Using ADIR() Function to Obtain MS-DOS File Information
	
	Microsoft FoxPro Help, "LUPDATE() Function"
	
	Microsoft FoxPro Help, "FDATE() Function"
	
	Microsoft FoxPro Help, "ADIR() Function"
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kbYear2000 kbHWMAC kbOSUNIX kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbFoxBASE201Mac kbFoxBASE210DOS kbFoxBASESearch kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :2.01,2.1,2.6,2.6a,3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
