---
layout: page
title: "Q103387: Intersvr Does Not List Available COM Ports for Printing"
permalink: /kb/103/Q103387/
---

## Q103387: Intersvr Does Not List Available COM Ports for Printing

{% raw %}

	Article: Q103387
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Intersvr does not list the COM port(s) available for remote printing from the
	Interlnk client.
	
	WORKAROUND
	==========
	
	If you are printing remotely from the client to the Intersvr's COM1 port (using
	LPT1 as the data channel), you must perform the following steps before invoking
	INTERSVR and INTERLNK:
	
	1. You MUST have an extra LPT port on the server.
	
	2. Set COM1 parameters on the server at the command prompt. For example
	
	  c:\>mode com1: <b>,<p>,<d>,<s>
	
	  where <b> is the bit rate (for example, 9600 bits per second [BPS]),
	  <p> is the parity (for example, none), <d> is the data bits value
	  (for example, 8), and <s> is the stop bits value (for example, 1).
	
	3. Redirect the open Intersvr LPT2 port (not being used as channel) to COM1 by
	  typing the following at the server's (Intersvr) command prompt:
	
	  c:\>mode lpt2:=com1:
	
	4. Start up Interlnk (with Intersvr invoked) and print to the Intersvr's
	  redirected LPT2 port to print on Intersvr's COM1 port.
	
	NOTE: The above steps also apply to using a null modem cable as the data channel
	and printing to the Intersvr's physical COM2 port. Your server must have two COM
	ports and the LPT1 port must be redirected to the COM2 port for printing.
	
	MORE INFORMATION
	================
	
	Many users want to use a customized parallel cable as a data access channel
	between the client and server because it transfers at a rate of 8 bits compared
	to customized serial null modem cable's rate of 1 bit.
	
	You can print to another LPT port (LPT2) if you have two physical LPT ports on
	the server (Intersvr), or you can print to another COM port on the server. The
	Intersvr's user interface, however, only lists the LPT ports available for
	printing.
	
	Additional query words: 6.22 6.00 redirect mode print 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
