---
layout: page
title: "Q83832: Novell Driver Versions for Windows 3.1"
permalink: /kb/083/Q83832/
---

## Q83832: Novell Driver Versions for Windows 3.1

{% raw %}

	Article: Q83832
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When running Microsoft Windows version 3.1 on a Novell network, the following
	software version should be used:
	
	Filename               Version
	--------               -------
	
	IPX.COM                 3.1
	NETX.COM                3.26
	TBMI2.COM               2.1
	IPXODI.COM              1.2
	LSL.COM                 1.21
	
	You can determine the software version by issuing the following two commands from
	the MS-DOS command prompt:
	
	  IPX I
	
	  NVER
	
	Microsoft recommends that both commands be used as a cross-reference.
	
	MORE INFORMATION
	================
	
	Windows 3.1 comes with all of these drivers, or in the case of IPX.COM, the
	necessary IPX.OBJ file is shipped. If you select Novell as your Network when you
	run Setup, the following files are expanded to the WINDOWS\SYSTEM directory (or
	to the shared network directory if you set up a shared copy of Windows by using
	SETUP /A and then using SETUP /N on each workstation).
	
	Compressed    Expanded  File
	File            Version  Size          Size      Date
	----            -------  ----          ----      ----
	
	NETX.COM        3.26     38642        52443     3/10/92
	IPX.OBJ         3.10     15111        20340     3/10/92
	TBMI2.COM       2.10     6612         17999     3/10/92
	IPXODI.COM      1.20     13552        20903     3/10/92
	LSL.COM         1.21     6278         7662      3/10/92
	VIPX.386        n/a      8864         19197     3/10/92
	
	If you are running an earlier version of Novell IPX.COM, you need to have your
	system administrator regenerate a new IPX.COM from the Windows 3.1 IPX.OBJ using
	the shell generation program SHGEN.EXE.
	
	The changes from IPX 3.0x to 3.1 do not affect Novell's NetBIOS or MS-DOS
	applications making NetBIOS calls.
	
	Additional query words: 3.10 3.1 novell versions required older drivers general protection (GP) fault
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
