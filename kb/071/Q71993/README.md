---
layout: page
title: "Q71993: PCL Driver 3.3 and 3.4 Does Not Set Default Paper Source"
permalink: kb/071/Q71993/
---

## Q71993: PCL Driver 3.3 and 3.4 Does Not Set Default Paper Source

	Article: Q71993
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You are using the Microsoft Windows 3.0 PCL/HP driver version 3.3 or 3.4 and
	when you change the default Paper Source field through Control Panel, your
	changes aren't saved when you exit and restart Windows.
	
	CAUSE
	=====
	
	The Windows 3.0 PCL/HP driver does not allow the default Paper Source field to
	be changed and saved through Control Panel and Printers if the paper source is
	set to either Manual Feed or Envelope. If either of these are set, the Paper
	Source reverts back to upper tray the next time Windows is started.
	
	WORKAROUND
	==========
	
	Set the default Paper Source field manually through the WIN.INI file:
	
	1. Load the WIN.INI file into a text editor such as Notepad.
	
	2. Locate the section [HPPCL,LPTx] or [HPPCL,COMx], and add a new line to this
	  section
	
	  Tray=x
	
	   where x = 1 for Default paper tray ("top tray")
	             2 for Lower paper tray
	             3 for Manual feed
	             7 for Auto paper feed
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	"Microsoft Windows Device Development Kit: Printers and Fonts Kit," Microsoft
	Corporation. Pages 9-1, 12-5.
	
	Additional query words: 3.00 win30 3.00a ddk winddk winfont
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
