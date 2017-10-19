---
layout: page
title: "Q84155: WIN.INI Switch to Disable Network-Specific Dialog Boxes"
permalink: /kb/084/Q84155/
---

## Q84155: WIN.INI Switch to Disable Network-Specific Dialog Boxes

	Article: Q84155
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some of the networks supported by Microsoft Windows operating system version 3.1
	such as Microsoft LAN Manager version 2.1 and Novell NetWare provide
	"network-specific" dialog boxes for File Manager, Print Manager, and the
	Printers option in Control Panel.
	
	To disable these special dialog boxes and use Windows 3.1 common dialog boxes:
	
	1. Open the WIN.INI file in a standard text editor, such as Notepad.
	
	2. Add the following:
	
	        [network]
	        defaultdialogs=1
	
	MORE INFORMATION
	================
	
	For example, the Microsoft LAN Manager 2.1 network specific dialog box in File
	Manager does not support the Previous button that allows you to connect to
	servers that you have connected to in the past, without retyping the entire
	server/resource name.
	
	Additional query words: 3.10 3.11 faster connections
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
