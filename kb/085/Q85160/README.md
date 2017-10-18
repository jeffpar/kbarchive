---
layout: page
title: "Q85160: Terminal's Originate Field May Hang Some Modems"
permalink: kb/085/Q85160/
---

## Q85160: Terminal's Originate Field May Hang Some Modems

	Article: Q85160
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows Terminal uses the following originate string for 100- percent
	Hayes compatible modems:
	
	     ATQ0V1E1S0=0
	
	The following defines the string:
	
	AT - Command prefix; precedes a command line
	Q0 - Enables result codes to be issued to the screen
	V1 - Instructs the modem to display result codes in the numeric
	    format
	E1 - Echoes commands to the screen
	S0=0 - Register that holds the number of rings the modem waits before
	      answering the phone (In this case it is set to zero; the
	      modem will not answer the phone.)
	
	This string may hang modems that are not 100-percent compatible. Refer to your
	modem's manual for your modem's correct originate string.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the originate string:
	
	1. Run Terminal.
	
	2. From the Settings menu, choose Modem Commands.
	
	3. Clear the Originate box.
	
	4. Choose the OK button.
	
	5. From the File menu, choose Save to save your changes.
	
	Additional query words: 3.10 3.11 dial
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
