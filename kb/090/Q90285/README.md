---
layout: page
title: "Q90285: User Interface Differences Between WFWG and Windows 3.1"
permalink: kb/090/Q90285/
---

## Q90285: User Interface Differences Between WFWG and Windows 3.1

	Article: Q90285
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the differences in the user interface (UI) between
	Microsoft Windows for Workgroups version 3.1 and Microsoft Windows operating
	system version 3.1.
	
	MORE INFORMATION
	================
	
	Toolbars
	--------
	
	Windows for Workgroups adds a toolbar to File Manager and Print Manager.
	
	Each toolbar contains a number of buttons that facilitate the most common
	procedures. Windows for Workgroups displays an explanation of each toolbar
	button and menu item on the status bar when you select it. You can customize
	each toolbar.
	
	File Manager
	------------
	
	- The toolbar contains a list box for selecting a drive to display in the
	  directory window.
	
	- The drive bar is located in the main File Manager window, providing more
	  display area for files.
	
	- An option has been added that opens a new directory window when you connect
	  to a network drive.
	
	- When you select a single file, its size, date, and time display on the status
	  bar.
	
	- The Properties dialog box includes version stamp and copyright information.
	  The Properties dialog box contains an Open By button that allows you to view
	  users on the network who are currently accessing that file.
	
	- When you share a directory, its icon changes. When you select a shared
	  directory, its network path displays on the status bar.
	
	- A directory window can exist for an unavailable drive; in 3.1, when you
	  started File Manager, the only saved windows that were restored were ones on
	  drives that actually existed.
	
	- The Tile command is expanded to Tile Horizontally or Tile Vertically.
	
	Print Manager
	-------------
	
	- A new display format allows more compact and flexible display of information.
	
	- When a printer is shared or connected, its network path is shown in the main
	  display.
	
	- All jobs in a remote print queue are shown, not just those that belong to
	  you.
	
	- The display font can now be customized.
	
	- The default printer can be set from within Print Manager, so you don't have
	  to switch to Control Panel to set it.
	
	- You can insert a separator page before each print job.
	
	Control Panel
	-------------
	
	- The Network icon provides access to all Windows for Workgroups configuration
	  settings.
	
	- The Printers icon only provides access to a Connect dialog box. You cannot
	  disconnect from within the Printers window. You must use Print Manager
	  instead. The Printers icon in Control Panel is primarily dedicated to set up
	  and remove printers from your system.
	
	Connection UI (Both File Manager and Print Manager)
	---------------------------------------------------
	
	- Windows for Workgroups integrates browsing into the Connect Network Printer
	  and Connect Network Drive dialog boxes, so you don't have to choose a
	  separate button to browse. Similarly, the network Path drop-down list
	  contains the last 12 network paths used, so you don't have to open a separate
	  dialog box to browse that list.
	
	- The Drive or Device list displays all devices, including those that are
	  already connected and what they are connected to. You can replace an existing
	  connection with a new one without manually disconnecting first.
	
	- When Windows for Workgroups prompts you for a password, that password can be
	  saved in a password list file (PWL) for later use.
	
	- On dual-network systems, you can choose a button that opens the secondary
	  network's connect dialog box.
	
	- On dual-network systems, you can type a network path to the secondary network
	  in the Windows for Workgroups Path field without having to use the secondary
	  network's Connect dialog box.
	
	Disconnect UI (Both File Manager and Print Manager)
	---------------------------------------------------
	
	- You can select multiple drives for disconnecting at once.
	
	- On dual-network systems, both Windows for Workgroups and secondary- network
	  connections can be disconnected using the same dialog box.
	
	Common Dialog Boxes
	-------------------
	
	- The common Open, Save As, and Print Setup dialog boxes contain a Network
	  button that provides access to a Connect dialog box.
	
	- In the Open and Save As dialog boxes, you can type a share name in UNC
	  (universal naming convention) format to access a list of files without
	  explicitly connecting to that share.
	
	Note to ISVs (independent software vendors): If a common dialog box called by
	your application lacks a Network button, there may be a control ID conflict (the
	ID is psh14), or there may not be enough room in your custom dialog template for
	the button to fit. If, on a dual-network system, the Connect dialog box lacks a
	NetWare button, your application may have insufficient stack space to support
	the NetWare connect dialog box.
	
	Built-In Applications
	---------------------
	
	- ClipBook Viewer replaces Clipboard Viewer.
	
	- New applications include WinMeter, Net Watcher, and Chat.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : :3.1
	
	=============================================================================
	
