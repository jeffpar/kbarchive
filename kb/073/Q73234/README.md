---
layout: page
title: "Q73234: Meaning of COM Port Settings in WIN.INI"
permalink: /kb/073/Q73234/
---

## Q73234: Meaning of COM Port Settings in WIN.INI

	Article: Q73234
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information listed below describes the COM port settings in the [ports]
	section of the WIN.INI file as changed by the Flow Control options when
	selecting Ports from Control Panel.
	
	MORE INFORMATION
	================
	
	When the Flow Control settings on a COM port are saved as xon/xoff, an "x"
	(without the quotation marks) is added to the appropriate COM port in the
	[ports] section of WIN.INI.
	
	For example:
	
	  com1:=9600,n,8,1,x
	
	The "x" designates an xon/xoff software handshake.
	
	When the Flow Control settings on a COM port are saved as hardware, a "p"
	(without the quotation marks) is added to the appropriate COM port in the
	[ports] section of WIN.INI.
	
	For example:
	
	  com2:=9600,n,8,1,p
	
	The "p" designates a hardware handshake and infinite retries.
	
	The absence of a letter at the end of a line donates Flow Control set to none.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 wincomm 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
