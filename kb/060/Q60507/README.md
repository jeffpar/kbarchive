---
layout: page
title: "Q60507: HLLAPI SEND KEY Function 3: TAB and BACKTAB"
permalink: /kb/060/Q60507/
---

## Q60507: HLLAPI SEND KEY Function 3: TAB and BACKTAB

	Article: Q60507
	Product(s): Microsoft LAN Manager
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DCA/Microsoft Communications Server, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send the TAB (@A@y) and BACKTAB (@A@z) keys to the 3270 presentation
	space using the SEND KEY function, the cursor location doesn't return to the
	expected position. These keystrokes are WORD TAB and WORD BACKTAB, which are
	special IBM OS/2 Extended Edition Communication Manager compatible HLLAPI
	keystrokes. These commands are intended to move the cursor to the next word,
	independent of field positioning.
	
	The OS/2 keyboard mnemonics that should be used to TAB and BACKTAB between
	unprotected fields are:
	
	  Tab      @T
	  Backtab  @B
	
	A complete list of valid OS/2 keyboard mnemonics for HLLAPI SEND KEY (Function 3)
	can be found in the "DCA/Microsoft Select HLLAPI Programmer's Guide."
	
	Additional query words: 1.00 prodcs
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbSNAServSearch kbDCAMSCommServ
	Version           : :1.0
	
	=============================================================================
	
