---
layout: page
title: "Q174699: XFOR: Customizing LinkAge Connector Logged Messages"
permalink: kb/174/Q174699/
---

## Q174699: XFOR: Customizing LinkAge Connector Logged Messages

	Article: Q174699
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For purposes of localization or if the customer wants to improve the clarity of
	the logged messages in the LinkAge Notes Connector, it is possible to edit the
	text of the logged messages that the LinkAge Notes Connectors generate. It is
	also possible to change the message level of the message to a more important or
	less important level.
	
	MORE INFORMATION
	================
	
	The Linkage\Msgs directory contains external message (.msg) files. The names of
	the files typically correspond to individual connector processes.
	
	The following is part of a .msg file. We can discuss its format.
	
	 1, 1, "Operating system error &1 from &2"
	 2, 2, "GRC error &2 received from &1"
	 10, 4, "Warning &1: Could not query the &3 keyword from the &2 section of
	        the INI file"
	 11, 2, "Error &1: Could not open the message file &2"
	 12, 2, "Error &1: Could not register &2 with the Event Manager"
	 13, 1, "Could not allocate &1 bytes for a &2 object"
	 14, 1, "An invalid parameter was passed to &1"
	
	The first number in each line is the message number and it also appears in the
	Message Number column in the Log Browser in LinkAge Administrator. The connector
	generates messages by specifying the message number.
	
	The second number is the Message Level, indicating the importance of the message
	itself. It is displayed at the very beginning of each line in the Log Browser.
	It shows a red stop sign for level 1 messages, a yellow '2' for
	warning/important messages, blue '3' for normal informational messages, gray '4'
	for troubleshooting messages, and dark gray '5' for installation assist/debug
	messages.
	
	The third entry is the text string of the message. Note that the text string will
	usually have variables like &1, &2, and so forth. These are variables
	that the connector will provide when it generates the message.
	
	An example of changing the text string of a message follows. Message # 23366 has
	the entry:
	
	   23366, 3, "Opening session with SNA Server"
	
	You need to search all .msg files to see which files contain this message Number
	(you can use a text editor to do this). If you want to change this text string
	(or message level), you need to change it in all .msg files that have this
	entry, not just the .msg file that corresponds to the process.
	
	In this example, Lslmeens.msg is the only .msg file that has this entry. Use any
	text editor to open Lslmeens.msg in the C:\Linkage directory and change the line
	to read
	
	  23366, 4, "Allocating session with Host application"
	
	For this change to take affect, you will need to stop and start the LinkAge
	Controller service. The result should be that any time message number 23366 is
	generated to the log, the new text and message level will appear.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
