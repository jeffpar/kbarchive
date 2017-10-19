---
layout: page
title: "Q140514: Using the Operator Agent Tool Included with Unimodem V"
permalink: /kb/140/Q140514/
---

## Q140514: Using the Operator Agent Tool Included with Unimodem V

	Article: Q140514
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released an enhanced version of the Unimodem VxD for Windows 95
	that is optimized for use with the new line of voice-capable modems being
	released by numerous vendors. These modems are listed in the Unimodem V
	Readme.txt file.
	
	To showcase some of the advanced TAPI abilities of Unimodem V, an application
	known as Operator Agent is included with Unimodem V. Operator Agent monitors the
	modem and directs incoming calls to Microsoft Fax, Dial-Up Server, or a Windows
	95 voice messaging application.
	
	MORE INFORMATION
	================
	
	To use Operator Agent, a voice messaging application must be running in addition
	to either Dial-Up Server or Microsoft Fax. No voice messaging application is
	included with Unimodem V or Windows 95.
	
	The primary purpose of Operator Agent is to allow software application developers
	to write and implement voice messaging software in Windows 95. For information
	about how to use Operator Agent, please see the Readme.txt file that is provided
	with Unimodem V.
	
	NOTE: The Unimodem V Readme.txt file is also available in the following article
	in the Microsoft Knowledge Base:
	
	  Q140323 Microsoft Unimodem V Readme.txt File
	
	By default, Operator Agent answers calls and plays a greeting notifying the
	caller to press 1 for voice mail, 2 for fax, or 3 for data. This order can be
	adjusted by clicking Properties in the Microsoft Operator Agent dialog box and
	then clicking Call Routing Priorities. If you change the Call Routing
	properties, you must use a microphone to record a new greeting. To change the
	default greeting, click Properties and then click Initial Greeting. If Operator
	Agent cannot determine the type of incoming call, it passes the call to the
	first application listed in the Call Routing properties.
	
	Please note that if a 16-bit program has control of the modem when an incoming
	call is detected, Operator Agent cannot answer the call, or displays an "Out of
	memory" error message.
	
	Additional query words: msphone msvoice
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
