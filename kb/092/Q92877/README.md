---
layout: page
title: "Q92877: WFWG May Hang If TCP/IP Hasn't Registered at Logon Time"
permalink: /kb/092/Q92877/
---

## Q92877: WFWG May Hang If TCP/IP Hasn't Registered at Logon Time

	Article: Q92877
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	If you load TCP/IP as a protocol and then immediately start Windows for
	Workgroups from your AUTOEXEC.BAT file, your machine may stop responding (hang)
	when you attempt to log on.
	
	CAUSE
	=====
	
	This problem occurs because TCP/IP requires time to register on the network
	before you log on.
	
	WORKAROUND
	==========
	
	To work around the problem, place a pause statement in your AUTOEXEC.BAT file
	before the statement that starts Windows, as in the following example:
	
	     pause
	     win
	
	You can also use the MS-DOS 6.0 and 6.2 CHOICE command to force a timed pause
	(for example, use "c:\dos\choice /N /T:n,10 Please wait for the computer to
	register with the network..."). Refer to your MS-DOS documentation for more
	information.
	
	STATUS
	======
	
	This problem occurs with the Microsoft versions of TCP/IP that are available for
	Windows for Workgroups 3.11 and Microsoft LAN Manager. This problem may or may
	not occur with other implementations of TCP/IP.
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.11 stack wfwfest
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
