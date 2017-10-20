---
layout: page
title: "Q73725: Meaning of MODE &quot;Illegal Device Name - COMx&quot; Message"
permalink: /kb/073/Q73725/
---

## Q73725: Meaning of MODE &quot;Illegal Device Name - COMx&quot; Message

{% raw %}

	Article: Q73725
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.01,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the I/O port address for a COM port is set to 0 (zero) in the table of COM
	port addresses located at address 0000:0400 to 0000:0407, then the MODE COMx
	command returns the following error message:
	
	  Illegal device name - COMx
	
	I/O port addresses are initialized at start up by the BIOS and can be changed
	through software.
	
	A value of 0 for a COM port address typically indicates a lack of BIOS support.
	
	MORE INFORMATION
	================
	
	The I/O port addresses of COM1 through COM4 are stored in low-byte, high-byte
	format in memory locations 0000:0400 through 0000:0407. MS-DOS 4.01 recognizes
	the first non-zero word (series of two bytes) located in this range as the base
	address of the COM1 port, the next non-zero word as the base address of COM2,
	the next as COM3, and the next as COM4.
	
	Example
	-------
	
	If a partial memory dump shows
	
	  0000:0400 F8 03 F8 02 00 00 00 00 .. .. .. .. .. .. .. ..
	
	the address of COM1 is 3F8, and COM2 is 2F8. MODE COM3 or MODE COM4 commands will
	return the "Illegal device name - COMx" message.
	
	If a memory dump shows
	
	  0000:0400 00 00 F8 02 00 00 00 00 .. .. .. .. .. .. .. ..
	
	the base address of COM1 is 2F8; and MODE COM2, MODE COM3, and MODE COM4 commands
	will return a "Illegal device name - COMx" message.
	
	
	Additional query words: 4.01 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.01,5.0,5.0a
	
	=============================================================================
	

{% endraw %}
