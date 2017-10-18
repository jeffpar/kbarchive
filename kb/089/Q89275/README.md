---
layout: page
title: "Q89275: DefaultDialogs=1 in WIN.INI Overrides Updated LANMAN21.DRV"
permalink: kb/089/Q89275/
---

## Q89275: DefaultDialogs=1 in WIN.INI Overrides Updated LANMAN21.DRV

	Article: Q89275
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your WIN.INI file's [network] section contains the line
	
	  DefaultDialogs=1
	
	then the updated LANMAN21.DRV's new File Manager dialog box will not be
	available.
	
	MORE INFORMATION
	================
	
	The WIN.INI file's DefaultDialogs=1 switch was added to work around some of the
	problems that the original LANMAN21.DRV had, such as the lack of a Previous
	button for connecting to former connections without having to type the full
	connection path again. The new LANMAN21.DRV corrects this and several other
	problems.
	
	Additional query words: appnote 3.10 win31 LANMAN
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
