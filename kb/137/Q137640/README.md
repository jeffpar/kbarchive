---
layout: page
title: "Q137640: BACKSPACE Removes Only Half of Character in HyperTerminal"
permalink: kb/137/Q137640/
---

## Q137640: BACKSPACE Removes Only Half of Character in HyperTerminal

	Article: Q137640
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use HyperTerminal to connect to a bulletin board system (BBS), the
	BACKSPACE and DELETE keys may remove only half of some characters.
	
	CAUSE
	=====
	
	This behavior can occur if the BACKSPACE and DELETE keys are handled as SBCS
	(Single-Byte Characters Set) characters and the BBS is using DBCS (Double-Byte
	Character Set) characters.
	
	The BACKSPACE key may delete only half of a DBCS character if the BACK- SPACE key
	is interpreted as a single-space character.
	
	MORE INFORMATION
	================
	
	Whether or not this behavior occurs depends on how the BBS handles SBCS
	BACKSPACE and DELETE keys.
	
	Some BBSs handle BACKSPACE and DELETE keys in a manner that works properly in
	HyperTerminal.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
