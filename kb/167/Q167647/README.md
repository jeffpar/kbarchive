---
layout: page
title: "Q167647: Cannot Log On After FilterKeys Option Enabled"
permalink: /kb/167/Q167647/
---

## Q167647: Cannot Log On After FilterKeys Option Enabled

	Article: Q167647
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The system does not appear to respond to keys pressed at the logon screen
	(system beeps), and you are unable to log on.
	
	CAUSE
	=====
	
	The FilterKeys Accessibility option has been enabled for the logon session. With
	FilterKeys enabled, keys need to be held down for 1 second (default settings)
	before the system registers the system registers the keystroke.
	
	RESOLUTION
	==========
	
	To resolve this issue, do the following:
	
	1. Press and hold the Control (CTRL) key until the system beeps twice.
	
	2. While still holding the CTRL key, press the ALT key until the system beeps
	  twice.
	
	3. While still holding these two keys, press the Delete (DEL) key until the
	  password prompt is displayed.
	
	4. To enter your password, hold down each key for two beeps; the asterisk (*) is
	  displayed indicating the key has been entered. Then, move on to the next
	  character in the password. If you need to use the SHIFT or CTRL key, press
	  and hold the key for two beeps before pressing the second key. Use the mouse
	  to click OK when the password is entered.
	
	5. After you are logged on, click Start, click Settings, and then click Control
	  Panel.
	
	6. Double-click the Accessibility icon, click to remove the check mark from the
	  FilterKeys check box, click OK, and then click Yes to the "Do you want to
	  save the current settings as the default for new users and the login prompt?"
	  dialog box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	After enabling FilterKeys, the user is presented with a dialog box stating:
	
	  Do you want to save the current settings as the default for new users and the
	  login prompt?
	
	If you select Yes to this prompt, FilterKeys will be enabled for the logon
	session.
	
	If you select no, FilterKeys will be enabled only for the current user's profile;
	logging on will not be affected.
	
	Additional query words: logon keyboard fail unresponsive
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
