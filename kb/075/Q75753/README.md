---
layout: page
title: "Q75753: Winconnect and Windows 3.0"
permalink: kb/075/Q75753/
---

## Q75753: Winconnect and Windows 3.0

	Article: Q75753
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Winconnect is a file transfer Windows application from Traveling Software, Inc.
	and hDC that allows you to connect a laptop (or any type of MS-DOS computer) to
	a desktop computer. One computer (usually the laptop) is designated as the
	server and the other (desktop) is the client. The client runs Windows and can
	access all drives on the server. The server runs a memory resident program from
	MS-DOS and sends and receives files as requested by the client.
	
	MORE INFORMATION
	================
	
	Before Installing Winconnect
	----------------------------
	
	No other applications ("microapps") manufactured by hDC should be running when
	attempting to install Winconnect. Such applications must be unloaded for
	Winconnect to modify the HDCLIB.DLL file. This file contains information used by
	all hDC microapps.
	
	Executing Winconnect Server Program in a Window
	-----------------------------------------------
	
	The server program (WCS.EXE) should not be run from Windows. It should be run
	from DOS.
	
	Piping(|) and Redirection(>)
	----------------------------
	
	Piping and redirections are incompatible with the Winconnect TSR (WC.EXE).
	
	Port Problems upon Quitting Windows
	-----------------------------------
	
	If ports are changed and settings are saved during a Winconnect session, after
	quitting Windows, the computer may not recognize the port previously selected.
	To solve problem, reboot the computer.
	
	Disabling Winconnect
	--------------------
	
	1. Remove WC.EXE from AUTOEXEC.BAT.
	
	2. Remove MICROMAN.EXE from the LOAD= line in WIN.INI.
	
	3. Reboot the system.
	
	4. Start Windows 3.0.
	
	(WC.EXE is the memory resident program used to set up the computer as the client
	and establish contact with the server.)
	
	Winconnect Technical Support
	----------------------------
	
	Contact Traveling Software.
	
	If you are using GEnie, do the following:
	
	1. Type:
	
	  LAPTOPS
	
	2. Join the Laptops bulletin board.
	
	3. Type the following for the Traveling Software Technical Support:
	
	  SET 3
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	REFERENCES
	==========
	
	"Winconnect User's Guide"
	
	Winconnect READMEWC.TXT file.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
