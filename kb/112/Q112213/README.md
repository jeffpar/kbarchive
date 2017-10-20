---
layout: page
title: "Q112213: PC Win: Err Msg: Folder Conversion Utility Runs Only with..."
permalink: /kb/112/Q112213/
---

## Q112213: PC Win: Err Msg: Folder Conversion Utility Runs Only with...

{% raw %}

	Article: Q112213
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows-based CONVERT.EXE program that is included with
	versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows to convert MS-DOS
	client folders to Windows client folders, the following error may appear:
	
	  STOP: This folder conversion program runs only with the Microsoft Mail
	  Provider.
	
	CAUSE
	=====
	
	The MS-DOS client and the Remote Mail client are loaded on the computer and the
	current Mail driver is not Microsoft Mail for PC Networks.
	
	RESOLUTION
	==========
	
	Use the Microsoft Mail System Selector to change the current driver to Microsoft
	Mail for PC Networks and then run the Convert program.
	
	
	Additional query words: 3.00 3.00b 3.20 LAN client
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
