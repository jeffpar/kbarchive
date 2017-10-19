---
layout: page
title: "Q99479: How to Modify MODEMS.INF for Non-Standard Modems"
permalink: /kb/099/Q99479/
---

## Q99479: How to Modify MODEMS.INF for Non-Standard Modems

	Article: Q99479
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article contains information to help you modify sections in MODEMS.INF to
	accommodate modems not handled by standard means.
	
	MORE INFORMATION
	================
	
	MODEMS.INF lists the expected responses for each modem type in a section using
	the form seen in this example:
	
	  [CODEX_2264.INIT.RESPONSE]
	  OK=*cr*lfOK*cr*lf
	  ERROR=*cr*lfERROR*cr*lf
	
	Defaults are listed at the beginning of the file and exceptions are listed in
	each modem's section, with .RESPONSE in the section header. Modem commands
	depend on the modem (not all are 100 percent Hayes command set compatible), but
	RAS does not understand BUSY, etc. so you must modify MODEMS.INF. The COMDEV.INI
	file contains the name of the modem selected and points RAS to the MODEMS.INF
	file for the appropriate strings.
	
	E1 normally indicates "echo validated," but in some instances it means "enable
	command state character echo," which is not the same thing as validating the
	echo. (This can be done in the script file, but the modem performs no
	validation, it simply echos the command.)
	
	The setting S3=13 (CR) is a default. Some modems "forget" to echo the (CR)
	character; to find out if a program is waiting for the complete echo of the
	string sent to the modem, check the section of MODEMS.INF file detailing your
	modem. See what the program is waiting for, then edit the MODEMS.INF file (use
	any text editor) to make it compatible with your modem.
	
	When you enter a Dial command (ATDT), some modems send a "crlf" or "crlfOKcrlf"
	message before dialing and sending the expected answer. Here is how to deal with
	these modems:
	
	If you use ATQ0V1 ("return result codes" and "return result codes in verbose
	form"), you get the message "CONNECT." If you use ATX3 or ATX4 you also get
	"BUSY." Wait until you get these results and don't be concerned if you get
	something else before. "CONNECT" or "BUSY" are always the last results before
	you can enter a new command. If this does not work you might have a timing
	problem. Check to see if you have to dial "BLIND" or increase the value of S7.
	The best testing technique is to set S7 to the highest possible value listed in
	your modem handbook.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
