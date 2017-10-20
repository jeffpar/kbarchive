---
layout: page
title: "Q120672: RAS: X.3 PAD Parameters for X.25 Networks"
permalink: /kb/120/Q120672/
---

## Q120672: RAS: X.3 PAD Parameters for X.25 Networks

{% raw %}

	Article: Q120672
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the X.3 Packet Assembler/Disassembler (PAD) parameters
	that are used in conjunction with PAD.INF for Remote Access Service. PAD is used
	to convert protocol to and from a packet-switched network.
	
	MORE INFORMATION
	================
	
	There are 22 standard PAD parameters. Parameters 16, 17, 18, and 19 describe the
	available editing functions.
	
	NOTE on style: 1:126 = the first parameter (1) and its value (126)
	
	Parameter 1: PAD recall
	Description: This enables an escape from the PAD on-line state to the PAD command
	state on receipt of a specific character. When the PAD receives this character,
	the PAD prompt is displayed on the your terminal monitor.
	
	Parameter 2: Echo
	Description: This parameter is set to "0" (zero) for echo and "1" for non-echo.
	One of the most frequently used parameters, this is handy for applications used
	for suppression of text when you are typing in your name and password. When this
	parameter is set, all characters received from the terminal are echoed,
	excluding those specified by parameters 5,12,20,22. Setting parameters 12 or 22
	to non-zero values suppresses character echo (XON and OFF) even if parameter 2
	is set to echo on.
	
	Parameter 3: Data Forwarding Signal (characters)
	Description: This value is bit-mapped. The PAD does not usually transmit one
	character at a time; it prefers large blocks of data, such as lines of text. A
	normal character used for this parameter is [carriage return = 2]. A PAD
	manufacturer's manual should have a table showing the options for this
	parameter.
	
	Parameter 4: Idle Time Delay
	Description: With the Data Forwarding, this parameter provides the capability to
	forward data to a host based on idle time. If there is data in the buffer and
	there has been no additional characters received in the IDLE TIME, the buffer is
	sent to the host. The time units are in 0.05 seconds and the values range from 1
	- 255.
	
	Parameter 5: Flow Control - PAD to Terminal
	Description: This parameter tells the PAD to transmit the XON/OFF characters to
	the DTE, depending on the buffer state.
	
	Parameter 6: PAD Result Code Control
	Description: This controls how the PAD result codes are transmitted to the
	terminal. The parameter can stop the PAD from sending service codes back to the
	terminal in response to events as the X.25 calls for clear or reset.
	
	Parameter 7: Action on Receipt of Break from Character Terminal
	Description: This parameter is bit-mapped. The break action here is a sequence
	(from the host that the PAD is connected to) for indicating that attention is
	required. This can be used in the interruption of a long transmission that the
	host may think is hung in a loop or stuck in constant transmit mode.
	
	Parameter 8: Discard Output
	Description: Set this parameter so that you can abort a running process on the
	remote system by pressing a [break] key. If set to zero [0], normal data
	delivery is used.
	
	Parameter 9: Padding after Carriage Return
	Description: Specifies the number of {NUL} characters to transmit after a
	carriage return.
	
	Parameter 10: Line Folding
	Description: This allows for the formatting of data into regular line lengths
	when delivered to the character terminal. If a line length is specified, a
	[carriage return / line feed] must be transmitted.
	
	Parameter 11: Terminal Speed
	Description: This is a READ ONLY value. The parameter shows the current DTE
	speed. It is automatically set by the PAD using the last AT command.
	
	  Value          Baud Rate
	  -----          ---------
	
	    0                110
	    2                300
	    3               1200
	    4                600
	    5                 75
	   12               2400
	   13               4800
	   14               7200 or  9600
	   15              14400 or 19200
	   16              38400
	
	Parameter 12: Flow Control of the PAD by Local Terminal
	Description: This is basically the opposite of parameter 5: it allows the
	character terminal to control the flow control.
	
	Parameter 13: Line Feed Insertion after Carriage Return
	Description: This specifies whether the PAD inserts a line feed character after
	carriage returns. This applies only in the PAD on-line state.
	
	Parameter 14: Padding after Line Feed
	Description: This is the same as parameter 9 except that the padding {NUL}
	characters instead of a carriage return are inserted after a line feed.
	
	Parameter 15: Editing
	Description: This specifies whether editing is used in the PAD on-line state.
	
	Parameters 16, 17, 18, and 19 help describe the available editing functions.
	
	If editing is enabled, parameter 4 (Idle Time Delay) is ignored.
	
	Parameter 16: Character Delete
	Description: This defines the delete character to delete the last character in
	the editing buffer. ASCII 8 is the backspace character.
	
	Parameter 17: Line (buffer) Delete
	Description: This defines the line delete character. ASCII 24 is <Ctrl-X>.
	
	Parameter 18: Line Display
	Description: This defines the line display. If you enter the character specified
	and editing is enabled, the editing buffer is displayed. ASCII 18 is
	<Ctrl-R>.
	
	Parameter 19: Editing PAD Result Codes
	Description: This defines the effect of editing buffered characters with the
	character delete and line delete functions.
	
	Parameter 20: Echo Mask
	Description: Bit-Masked Parameter. If parameter 2 is set to 1, this parameter
	lets you select the characters that are echoed.
	
	Parameter 21: Parity Treatment
	Description: This controls the parity and character format used by the terminal.
	Best left in the "OFF" condition.
	
	Parameter 22: Page Wait
	Description: This allows for pagination of data sent to the terminal. If the
	terminal display can display 20 lines and this parameter is set to 20, the PAD
	sends 20 lines of data then stops transmission.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
