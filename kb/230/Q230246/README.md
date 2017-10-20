---
layout: page
title: "Q230246: 16-Bit MS-DOS-Based Programs Not Supported for Software Metering"
permalink: /kb/230/Q230246/
---

## Q230246: 16-Bit MS-DOS-Based Programs Not Supported for Software Metering

{% raw %}

	Article: Q230246
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsMeter
	Last Modified: 05-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most 16-bit and 32-bit Windows-based programs are supported for Software
	Metering. However, Software Metering cannot track or meter 16-bit MS-DOS-based
	programs on Microsoft Windows NT Software Metering clients.
	
	MORE INFORMATION
	================
	
	In Windows NT, MS-DOS-based programs are started in a virtual MS-DOS window
	(Ntvdm.exe). Software Metering registers programs in the same way that Task
	Manager recognizes running processes. MS-DOS-based or 16-bit Windows-based
	programs that are listed as Ntvdm.exe or Ntvdm\Wowexec.exe are not displayed
	because they are included in the default list of excluded programs in Software
	Metering.
	
	To verify if your program can be tracked by Software Metering:
	
	1. Start the program.
	
	2. Start Task Manager, and then click the Processes tab.
	
	3. If the program file or registerable file (.exe, .dll, .scr, .mod, .tsk, or
	  .bin file) is listed, it can be tracked by Software Metering.
	
	Additional query words: prodsms swmeter legacy
	
	======================================================================
	Keywords          : kbsms200 kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
