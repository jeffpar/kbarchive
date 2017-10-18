---
layout: page
title: "Q125979: Err Msg: The Selected COM Port Is Either Not Supported..."
permalink: kb/125/Q125979/
---

## Q125979: Err Msg: The Selected COM Port Is Either Not Supported...

	Article: Q125979
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Terminal, you receive the following error message:
	
	  The selected COM port is either not supported or is being used by another
	  device. Select another port.
	
	You can use the modem in MS-DOS, but you cannot use it with Terminal and you
	cannot use it at an MS-DOS prompt in Windows.
	
	CAUSE
	=====
	
	This problem can occur if you use third-party communications programs. If a
	third-party communications program adds itself to the LOAD= line of the WIN.INI
	file, or to the Startup program group, it can take control of the COM port and
	not release the port for any other application to use.
	
	RESOLUTION
	==========
	
	Remove the third-party communications program from the LOAD= line of the WIN.INI
	file or from the Startup program group. Also check the AUTOEXEC.BAT file to see
	if the communications program is being started automatically. If so, remove the
	program from the AUTOEXEC.BAT file.
	
	These steps will free the COM port for other applications to use. When you want
	to use the third-party communications program, start it manually.
	
	Additional query words: 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
