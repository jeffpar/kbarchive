---
layout: page
title: "Q99862: NetCon.exe - Connect Net Drive - File Manager Extension"
permalink: /kb/099/Q99862/
---

## Q99862: NetCon.exe - Connect Net Drive - File Manager Extension

	Article: Q99862
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbsample kbFileManExt kbOSWin310 kbGrpDSShell kb16bitonly
	Last Modified: 30-JUL-2001
	
	---------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NETCON program sample demonstrates how to create a dynamic-link library
	(DLL) that will extend the File Manager application in Microsoft Windows
	versions 3.1 and later. The program sample exports a function called
	FMExtensionProc(), which File Manager sends messages to during its
	initialization. NETCON adds a Quick Connect menu to File Manager (in Windows for
	Workgroups, NETCON adds a toolbar button and a help string to be displayed in
	the status bar when the toolbar button is selected). When the Quick Connect menu
	item is selected, NECON.DLL brings up a Connect Network Drive dialog box. The
	program uses the following network application programming interface (API),
	which must be supported by the network that Windows is running on:
	
	- WNetAddConnection()
	
	- WNetGetConnection()
	
	NETCON also maintains the MRU_Files section of WIN.INI in the exact manner that
	Windows for Workgroups does. Unlike the Connect Network Drive dialog box that
	comes with Windows for Workgroups, this dialog box does not browse for available
	drives during initialization, and therefore startup time may be significantly
	faster.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	NetCon.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	To enable File Manager to use the DLL, and the following line to the [AddOns]
	section of WINFILE.INI:
	
	     Quick Net Connection = netcon.dll
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbFileManExt kbOSWin310 kbGrpDSShell kb16bitonly 
	
	=============================================================================
	
