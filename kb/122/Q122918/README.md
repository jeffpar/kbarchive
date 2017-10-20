---
layout: page
title: "Q122918: Golf 2.0 GROWSTUB ErrMsg: An Error Has Occurred in Your App..."
permalink: /kb/122/Q122918/
---

## Q122918: Golf 2.0 GROWSTUB ErrMsg: An Error Has Occurred in Your App...

{% raw %}

	Article: Q122918
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0,7.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	2.00
	WINDOWS
	kberrmsg kbhw kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start Golf 2.0:
	
	  GROWSTUB
	  An error has occurred in your application.
	  If you choose Ignore, you should save your work in a new file.
	  If you choose Close, your application will terminate.
	
	This is followed by an application error message:
	
	  Application Error
	  GROWSTUB caused a General Protection Fault in module POINTER.DLL at
	  0001:0f2E
	
	CAUSE
	=====
	
	This problem occurs when you are not using the Microsoft Mouse driver for
	Windows, version 9.01 or later. The problem is caused by a conflict between the
	mouse driver and the Win32s system files.
	
	RESOLUTION
	==========
	
	To correct this problem, install version 9.01 or later of the Microsoft Mouse
	driver for Windows. You can obtain the latest mouse driver by calling the
	Microsoft Sales Information Center at (800) 426-9400. There may be a charge to
	obtain this driver.
	
	Additional query words: 2.00 7.00 GPF fault pointer err msg word7 word95
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWordSearch kbHomeProdSearch kbWord700Search kbGamesSearch kbGolfSearch kbWord700 kbGolf200
	Version           : WINDOWS:2.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
