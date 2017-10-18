---
layout: page
title: "Q86579: AM or PM Missing from Digital Clock"
permalink: kb/086/Q86579/
---

## Q86579: AM or PM Missing from Digital Clock

	Article: Q86579
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The digital clock display may lose the AM or PM designation for the time of day
	if you change the Time Format in the International option in Control Panel from
	12-hour format to 24-hour format and then back to 12-hour format.
	
	This affects not only Clock but every Windows-based application that displays the
	hour in digital format.
	
	The International Time Format settings do not default back to the AM or PM
	designation; instead, the dialog boxes are blank.
	
	WORKAROUND
	==========
	
	There are two ways to restore the AM or PM designation:
	
	1. From Control Panel, choose the International icon. Select Change Time Format.
	
	2. Make sure the 12-hour format is selected.
	
	3. Press TAB, or use your mouse to move to the box at the right of the 12-hour
	  format, and type AM.
	
	4. Press TAB, or use your mouse to move to the box at the right of the 24-hour
	  format, and type PM.
	
	5. Choose OK. The AM or PM designation should return.
	
	  -or-
	
	1. Open the WIN.INI file in Notepad and go to the [intl] section.
	
	2. Find the following lines
	
	        s1159=
	        s2359=
	
	  and change them to:
	
	        s1159=AM
	        s2359=PM
	
	3. Save the WIN.INI file and restart Windows.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
