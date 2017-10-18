---
layout: page
title: "Q90234: 3Com Etherlink Adapters Not Responding"
permalink: kb/090/Q90234/
---

## Q90234: 3Com Etherlink Adapters Not Responding

	Article: Q90234
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some 3Com Etherlink network adapters may stop responding (hang).
	
	CAUSE
	=====
	
	The TimerCriticalSection= statement in the SYSTEM.INI file may not be set
	correctly to 5000.
	
	
	WORKAROUND
	==========
	
	To work around this problem, modify the setting as follows:
	
	1. Open the SYSTEM.INI file in a text editor (such as Notepad).
	
	2. Find the [386Enh] section and the TimerCriticalSection= statement.
	
	3. Change the TimerCriticalSection= statement to look as follows:
	
	  TimerCriticalSection=5000
	
	4. Save your changes and restart the system.
	
	Additional query words: 3.10 ether link 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
