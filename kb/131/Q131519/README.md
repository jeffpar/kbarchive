---
layout: page
title: "Q131519: Century Information Lost with m/d/yy Date Format"
permalink: kb/131/Q131519/
---

## Q131519: Century Information Lost with m/d/yy Date Format

	Article: Q131519
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an appointment and the date format is set to m/d/yy, Schedule+
	only recognizes the last two digits of the year. For example, 1902 is changed to
	2002, and 2999 is changed to 1999.
	
	CAUSE
	=====
	
	This is by product design.
	
	RESOLUTION
	==========
	
	Set the date format to display the century (such as m/d/yyyy).
	
	In Windows 95
	-------------
	
	1. In Control Panel, double-click the Regional Settings icon.
	
	2. Click Date.
	
	3. In the Short Date Style box, type "m/d/yyyy" (without the quotation marks).
	
	In Windows NT
	-------------
	
	
	1. In Control Panel, double-click the International icon.
	
	2. In the Date Format box, choose the Change button.
	
	3. Check the Century (1990 Vs. 90) box.
	
	
	Additional query words: schedule plus 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
