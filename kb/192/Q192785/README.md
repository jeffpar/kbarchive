---
layout: page
title: "Q192785: Must Be Administrator to Eject Removable Media"
permalink: /kb/192/Q192785/
---

## Q192785: Must Be Administrator to Eject Removable Media

	Article: Q192785
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to eject the media in a removable media drive by using the Eject
	option on the context menu of Windows NT Explorer, the following error occurs:
	
	  An error was encountered trying to unmount Removable disk [D:] Check to make
	  sure there are no open files or windows from that volume.
	
	In addition to the conditions mentioned in the error message, this error will
	occur if the user does not have Administrator privileges on the local computer.
	
	CAUSE
	=====
	
	This is by design.
	
	RESOLUTION
	==========
	
	The user must be given Administrative privileges, to use the Eject functionality
	of Windows NT Explorer.
	
	MORE INFORMATION
	================
	
	An Iomega Zip drive is an example of a device that will demonstrate this
	behavior. Other comparable devices are thought to function similarly.
	
	The media can be ejected manually through the release button, but the Eject
	option on the shortcut menu that appears when you right-click Windows NT
	Explorer will not work if the user does not have Administrative privileges.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
