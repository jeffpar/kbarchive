---
layout: page
title: "Q235660: Stop 0x0000001e in Win32k.sys with Logon Screen Saver"
permalink: kb/235/Q235660/
---

## Q235660: Stop 0x0000001e in Win32k.sys with Logon Screen Saver

	Article: Q235660
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log on to your computer running Windows NT 4.0, which is configured to
	use the logon screen saver, the computer may stop responding (hang) and the
	following STOP blue screen error message may be displayed:
	
	  STOP 0x0000001e (0xc0000005, 0xa306cc1a, 0x00000000, 0x00000004)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	The blue screen error message is caused by a corrupt or invalid handle that is
	being used by Dr. Watson to display the dialog box for OK or Cancel after a
	program has ceased functioning properly. The program that is starting Dr. Watson
	for this particular issue is always the logon screen saver which uses the
	Logon.scr file. The screen saver causes a fault for the same reason as Dr.
	Watson, a corrupted or invalid handle. Because Dr. Watson is the debugger for
	user-mode processes if a problem occurs in the debugger, the kernel attempts to
	handle the fault. If the kernel cannot handle the fault, a blue screen error
	message is generated.
	
	RESOLUTION
	==========
	
	To resolve this issue, click to clear the Dr. Watson Visual Notification
	feature:
	
	1. Click Start, click Run, type "drwtsn32" (without the quotation marks), and
	  then press ENTER.
	
	2. Click to clear Visual Notification, and then click OK.
	
	3. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	MORE INFORMATION
	================
	
	Turning off the Visual Notification of Dr. Watson option prevents the display of
	the OK/Cancel dialog box after a program has caused a fault. Because of a
	corrupt or invalid handle, Dr. Watson cannot display the window properly and
	Windows NT displays the blue screen error message.
	
	With Visual Notification disabled, when a programs does not function properly, a
	User.dmp file is generated. With the option enabled, there are no User.dmp files
	generated.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
