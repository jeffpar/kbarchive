---
layout: page
title: "Q147630: FIX: Remote Monitor Quits When TCP/IP Isn't Loaded"
permalink: kb/147/Q147630/
---

## Q147630: FIX: Remote Monitor Quits When TCP/IP Isn't Loaded

	Article: Q147630
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting up the Visual C++ Debug Monitor (Msvcmon.exe) with Network (TCP/IP)
	selected and pressing the Connect button causes the following error:
	
	  General network failure (Windows Sockets error 10047)
	
	The monitor then continues to attempt to connect to the host. On Windows 95, when
	you press the Disconnect button, the monitor quits.
	
	CAUSE
	=====
	
	This problem occurs because the TCP/IP protocol is not installed on the
	computer.
	
	RESOLUTION
	==========
	
	The problem can be avoided by ensuring that the TCP/IP protocol is installed on
	the computer. To do this, start the Network applet in the Control Panel, and add
	TCP/IP as a protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	On Windows NT, the Windows Sockets error message occurs, but the monitor does
	not quit.
	
	Additional query words: kbVC400bug Windows 95
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
