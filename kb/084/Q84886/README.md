---
layout: page
title: "Q84886: Unable to Print TrueType Fonts on Novell Network"
permalink: kb/084/Q84886/
---

## Q84886: Unable to Print TrueType Fonts on Novell Network

	Article: Q84886
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can't print TrueType fonts when running Microsoft Windows on a Novell
	network.
	
	CAUSE
	=====
	
	This problem occurs if the PRINTCON.DAT file is not in the SYS directory for
	your Novell network installation. One of the functions of PRINTCON.DAT is to set
	up the default data stream type. Without a PRINTCON.DAT file, the default is a
	"TEXT" data stream.
	
	RESOLUTION
	==========
	
	To correct this problem, use the Novell PRINTCON utility to generate a
	PRINTCON.DAT file with a default data stream of "BITSTREAM". Once this is done,
	TrueType fonts should print normally.
	
	
	Additional query words: 3.10 novell true type 3.11 KBNETWORK netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
