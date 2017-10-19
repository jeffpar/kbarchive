---
layout: page
title: "Q108314: Using More Than Four Communications Ports in Windows"
permalink: /kb/108/Q108314/
---

## Q108314: Using More Than Four Communications Ports in Windows

	Article: Q108314
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In theory, it is possible to use more than four communications (COM) ports in a
	Windows-based application. In practice, however, due to the limitation imposed
	by the Windows 3.1 communications (comm) driver, only a maximum of four
	communications ports can be used.
	
	MORE INFORMATION
	================
	
	The virtual communications device (VCD) under Windows can support up to nine
	communications ports. And, the Windows communications functions also support the
	use of nine communications ports in a Windows-based application. All this
	information might indicate that a maximum of nine COM ports can be used in a
	Windows-based application.
	
	But the communications driver (COMM.DRV) that is shipped with Windows version 3.1
	supports a maximum of only four communications ports. For example, you can use
	the following code in a Windows-based application:
	
	     // Get the number of COM ports.
	     nPorts = EscapeCommFunction(0,GETMAXCOM)+1;
	
	Note, nPorts is not an indication of the number of communications ports that the
	computer has; it indicates the maximum number of communications ports the
	communications driver supports. For the Windows version 3.1 standard
	communications driver, nPorts is always four.
	
	This situation might change in the future. For example, the communications driver
	that ships with Windows for Workgroups version 3.11 does support more than four
	communications ports. Also, some of the third-party communications drivers, such
	as TurboCom by Pacific CommWare, do support up to nine communications ports. For
	more information, contact:
	
	  Pacific CommWare
	  180 Beacon Hill Lane
	  Ashland, OR 97520
	  Voice: (503) 482-2744
	  Fax: (503) 482-2627
	  BBS: (503) 482-2633
	
	Note that Microsoft does not recommend any third-party applications for a given
	purpose. TurboCom is an example only.
	
	Also, because the Windows Device Driver Kit (DDK) version 3.1 provides the source
	code to all the drivers including the Windows standard communications driver,
	one could modify the source code to provide support for more than four
	communications ports under Windows. However, note that modifying the
	communications driver source code is not a trivial operation. For more
	information on how to modify the Windows communications driver source code to
	provide support for nine communications ports, query the Knowledge Base on the
	words:
	
	  modifying comm nine
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
