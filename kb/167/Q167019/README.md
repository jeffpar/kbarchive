---
layout: page
title: "Q167019: New OLE Features and Enhancements in WinNT 4.0 Service Pack 2"
permalink: /kb/167/Q167019/
---

## Q167019: New OLE Features and Enhancements in WinNT 4.0 Service Pack 2

	Article: Q167019
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following new features and enhancements have been made in Microsoft Windows
	NT version 4.0 Service Pack 2:
	
	- DLL Surrogates
	
	- IAccessControl/CoInitializeSecurity
	
	- Using RPC with WinSock Proxy
	
	DLL Surrogates
	--------------
	
	Windows NT 4.0 Service Pack 2 now provides the functionality to incorporate DLL
	servers that can be loaded into surrogate EXE processes. This combines the ease
	of writing DLL servers with the benefits of executable implementation. COM
	provides default surrogate processes, or you can write a custom surrogate if you
	have special needs. The DLL server, in a surrogate process, offers the benefit
	of:
	
	- Fault isolation and the ability to service multiple clients simultaneously.
	
	- In a distributed environment, a DLL server implementation could be used to
	  service remote clients.
	
	- It could permit clients to protect themselves from untrusted server code,
	  while allowing access to the services the DLL server provides.
	
	- Running a DLL server in a surrogate provides the DLL with the surrogate's
	  security.
	
	IAccessControl/CoInitializeSecurity
	-----------------------------------
	
	IAccessControl and CoInitializeSecurity are two new features written into Windows
	NT 4.0 Service Pack 2. IAccessControl is an interface to control access to
	objects and their properties. The methods used by the IAccessControl interface
	help you manage access to objects and their properties and to get information
	about access permissions.
	
	CoInitializeSecurity registers security and sets the default security values. For
	legacy applications, COM automatically calls CoInitializeSecurity with values
	from the registry. You can use CoInitializeSecurity in conjunction with
	IAccessControl. The CoInitializeSecurity function takes the pointer to
	IAccessControl.
	
	Using RPC With WinSock Proxy
	----------------------------
	
	Another new feature is the recent release of Microsoft(r) Internet Access Server
	that includes WinSock Proxy, an enhanced version of Windows Sockets API, version
	1.1.
	
	WinSock Proxy lets a Windows Sockets application, running on a private network
	client, behave as if it were directly connected to a remote Internet server
	application. Actually, the Microsoft Proxy Server is the host for this
	connection. This means that all application-level communications are channeled
	through a single secured computer; the gateway computer running Microsoft Proxy
	Server.
	
	To use RPC with WinSock Proxy, you need to edit the system registry on each
	computer.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE window, go to the following key:
	
	  Software\Microsoft\Rpc
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following:
	
	     Value Name : UseWinsockForIP
	     Data Type  : REG_DWORD
	     Data       : 1
	
	5. Click OK.
	
	6. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	For more information on these enhancements, refer to the Windows NT Service Pack
	2 Online Help.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbole 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
