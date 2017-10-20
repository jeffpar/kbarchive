---
layout: page
title: "Q140686: PC WSPlus Win: Err Msg: Your Message File Could Not Be Located"
permalink: /kb/140/Q140686/
---

## Q140686: PC WSPlus Win: Err Msg: Your Message File Could Not Be Located

{% raw %}

	Article: Q140686
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	- Microsoft Mail for Windows, version 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Mail for Windows, you may get the following error:
	
	  Your message file could not be located.
	
	If you select the OK button, Mail for Windows will try to locate a MSMAIL.MMF
	file. If it does not locate one, you can create a new mail message file (MMF)
	and continue into Mail. However, the Mail client will be offline with the broken
	network icon in the lower right corner.
	
	CAUSE
	=====
	
	This occurs when you run Schedule+ 1.0 before Mail, and you have the
	StartupOffline option enabled.
	
	RESOLUTION
	==========
	
	Check the SCHDPLUS.INI file and see if it has the following entry:
	
	     [Microsoft Schedule+]
	     STARTUPOFFLINE=1
	
	If the entry is there, disable it by changing the entry to STARTUPOFFLINE=0.
	
	Additional query words: 1.00 message corrupt schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbMail3xSearch
	Version           : WINDOWS:1.0,3.x
	
	=============================================================================
	

{% endraw %}
