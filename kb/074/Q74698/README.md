---
layout: page
title: "Q74698: SDK Installation Incompatible with Networked Windows"
permalink: kb/074/Q74698/
---

## Q74698: SDK Installation Incompatible with Networked Windows

	Article: Q74698
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before installing the Microsoft Windows Software Development Kit (SDK) on a
	machine, Microsoft Windows must be installed in a local configuration. The
	Windows SDK installation program is not compatible with a networked
	configuration for Windows.
	
	MORE INFORMATION
	================
	
	The design of the Windows SDK installation program assumes that a number of
	Windows files are available in particular subdirectories of the main Windows
	directory. These assumptions are valid only when a local copy of Windows is
	installed on a given machine. Neither the network server nor the network client
	installation of Windows uses the required directory structure. Attempting to
	install the Windows SDK on either network Windows installation yields the
	following message:
	
	  Unable to find Windows in the specified directory.
	
	The Windows SDK includes a copy of the debugging version of Windows, which the
	installation program copies along with the other tools. Because the debugging
	version of Windows provides additional parameter validation and error checking,
	it is very useful to help find problems during application development. The
	Windows SDK includes a batch file to switch between the retail and debugging
	versions of Windows. Switching between Windows versions in a networked
	environment would be very difficult and could cause unexpected results.
	Therefore, installing the Windows SDK with a network version of Windows is not
	allowed.
	
	For more information on a network installation for Windows, see the "Getting
	Started with Microsoft Windows" manual. For more information on the debugging
	version of Windows and tips to create better applications, see Chapter 3 of the
	"Microsoft Windows Software Development Kit: Getting Started" manual.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
