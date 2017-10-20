---
layout: page
title: "Q181214: PBS: Access Violation Deleting POPs from Command Line"
permalink: /kb/181/Q181214/
---

## Q181214: PBS: Access Violation Deleting POPs from Command Line

{% raw %}

	Article: Q181214
	Product(s): Internet Information Server
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation may occur when you delete POPs from the command line using
	Pbadmin.exe, the executable for Phone Book Server. POPs are local access points
	for network providers.
	
	In Windows NT, the following summary of the exception will be logged in
	Drwtsn32.log:
	
	  Application exception occurred:
	
	  App: D:\Program Files\Pba\pbadmin.exe (pid=219)
	  When: 2/4/1998 @ 20:21:48.652
	  Exception number: c0000005 (access violation)
	
	There can be a number of different causes of access violations in pbadmin that
	present the summary above. To determine whether the problem you are experiencing
	is this particular issue, do the following:
	
	Search for the word "fault" under the error noted above in the Drwtsn32.log file.
	If you find the following instruction line, then the problem described above is
	occurring:
	
	  FAULT ->0f03878f 8a4814           mov     cl,[eax+0x14]
	  ds:0126ea06=??
	
	CAUSE
	=====
	
	An uninitialized pointer is being referenced.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Windows
	NT 4.0 Option Pack service pack.
	
	This fix should have the following time stamp:
	
	  02/11/98  07:13p               548,864 pbadmin.exe (Intel)
	  02/11/98  07:10p               799,232 pbadmin.exe (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0 Option Pack.
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNT400OptionPack
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
