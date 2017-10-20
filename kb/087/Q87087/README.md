---
layout: page
title: "Q87087: LAN WorkPlace for DOS May Cause GP Fault"
permalink: /kb/087/Q87087/
---

## Q87087: LAN WorkPlace for DOS May Cause GP Fault

{% raw %}

	Article: Q87087
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Novell LAN WorkPlace for DOS version 4.01 from Windows, you receive
	one or more general protection (GP) faults.
	
	MORE INFORMATION
	================
	
	GP Fault 1
	----------
	
	When you start the Novell FileExpress, you receive a GP fault if the virtual
	device driver VTCPIP.386 is not installed in the SYSTEM.INI file and the Windows
	SYSTEM subdirectory:
	
	  FILEXPRS caused an unknown fault in WLIBSOCK.DLL
	
	FileExpress is a Windows-based application that uses the LAN WorkPlace for DOS
	files to communicate across the network to UNIX servers.
	
	RESOLUTION
	==========
	
	Use the steps below to install VTCPIP.386.
	
	1. Copy the file VTCPIP.386 to the Windows SYSTEM subdirectory.
	
	2. Edit the [386Enh] section in the SYSTEM.INI file with an ASCII text editor
	  and add the following line:
	
	  device=VTCPIP.386
	
	GP Fault 2
	----------
	
	When you try to close FileExpress, you receive a GP fault.
	
	Workaround
	----------
	
	Select a file on the REMOTE display before you try to close FileExpress. (The
	REMOTE display is the window that contains the list of files located on the
	remote server.)
	
	GP Fault 3
	----------
	
	When you are using LAN WorkPlace version 2.0 in conjunction with Oracle 7 SQLNET
	server, the following error may be displayed:
	
	  Nettest has caused a general protection fault in module WLIBSOCK.DLL
	
	To work around this problem, install VTCPIP.386 using the "Steps to Install
	VTCPIP.386" instructions above.
	
	Additional query words: gpf 3.10 3.11 unic lsl ipxodi vctpip.386 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
