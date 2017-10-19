---
layout: page
title: "Q110136: Default Settings and Behavior or NbtKeepAlive and TcpKeepCnt"
permalink: /kb/110/Q110136/
---

## Q110136: Default Settings and Behavior or NbtKeepAlive and TcpKeepCnt

	Article: Q110136
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Resource Kit Volume 1 incorrectly documents the default settings
	and behavior for NbtKeepAlive and TcpKeepCnt parameters.
	
	MORE INFORMATION
	================
	
	According to the Windows NT Resource Kit Volume 1, the following are default
	values for keepalive parameters:
	
	  NbtKeepAlive = 0 (disabled)
	  TcpKeepCnt = 120 seconds
	
	However, the actual defaults are the following:
	
	  NbtKeepAlive = 60 seconds
	  TcpKeepCnt = 120 seconds
	
	Any frame sent by NBT (including a NetBIOS keep-alive) is considered to be data
	by TCP. Because the NbtKeepAlive parameter is set lower than TcpKeepCnt, on an
	idle NetBIOS session there will be one NBT keep-alive sent per minute, and no
	TCP keep-alives sent. On an idle non-NetBIOS TCP session, such as that used by a
	Windows Sockets program, TCP keep-alives will be sent, with their frequency
	controlled by the TcpKeepCnt parameter.
	
	
	As documented in the Windows Resource Kit, these parameters can be modified to
	produce different behavior. To change these parameters, use the following
	procedure:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Open the Registry Editor (REGEDT32.EXE).
	
	2. For NbtKeepAlive, use the following path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Nbt\Parameters
	
	3. Add a value for the NbtKeepAlive parameter as a REG_DWORD with the desired
	  value in seconds. "0" disables NBT keepalives.
	
	4. For TcpKeepCnt use the following path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	5. Add a value for the TcpKeepCnt parameter as a REG_DWORD with the desired
	  value in seconds. "0" disables TCP keepalives.
	
	For example, if you want to send one TCP keep-alive every five minutes, and no
	NetBIOS keep-alives, use the following values:
	
	  NbtKeepAlive = 0
	  TcpKeepCnt = 300
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
