---
layout: page
title: "Q140708: Error Message: Cannot Display This Help File. Try Opening..."
permalink: kb/140/Q140708/
---

## Q140708: Error Message: Cannot Display This Help File. Try Opening...

	Article: Q140708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a Windows Help file on a full-access network share, you may
	receive the following error message:
	
	  Cannot display this Help file. Try opening the Help file again, and if you
	  still get this message, copy the Help file to a different drive, and try
	  again. (136)
	
	CAUSE
	=====
	
	This behavior can occur if the Help file you are trying to open is currently
	open on a computer running Microsoft Windows NT.
	
	RESOLUTION
	==========
	
	To work around this behavior, use any one of the following methods:
	
	- Copy the Help file to a different name or location.
	
	- Close the Help file on the computer running Windows NT.
	
	- Change the access type for the network share to read-only.
	
	- Add a second network protocol in Network properties.
	
	MORE INFORMATION
	================
	
	This behavior occurs only if you try to open a Help file on a Windows 95- based
	computer and the Help file is currently open on a Windows NT-based computer.
	Other computers running Windows NT 3.x, Windows 3.1x, or Windows for Workgroups
	3.1x can open the Help file while it is open on a Windows NT-based computer.
	
	Additional query words: error 136
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
