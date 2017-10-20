---
layout: page
title: "Q149400: Err Msg: The Topic Does Not Exist. Contact Your Application..."
permalink: /kb/149/Q149400/
---

## Q149400: Err Msg: The Topic Does Not Exist. Contact Your Application...

{% raw %}

	Article: Q149400
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a help topic in Schedule+, you may get the following error
	message:
	
	  The Topic Does Not Exist. Contact your application vendor for an updated file
	  (129).
	
	CAUSE
	=====
	
	Microsoft Windows 95 was installed as an upgrade over Microsoft Windows for
	Workgroups version 3.11. Windows for Workgroups 3.11 comes with Schedule+ 1.0,
	and it's associated help file, Schdplus.hlp, is located in the C:\WINDOWS
	directory. During Windows 95 installation the Schedule+ 1.0 help file is not
	removed.
	
	Schedule+ 7.0 also has a help file with the same name, but is located in the
	Schedule directory. Therefore, multiple Schedule+ help files exist on the hard
	drive causing the above error message.
	
	WORKAROUND
	==========
	
	1. Search your hard drive for all instances of Schdplus.hlp.
	
	2. Rename the extra copies. NOTE: The only copy that should exist will be in the
	  Schedule+ 7.0 directory.
	
	Additional query words: 95 error 129 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
