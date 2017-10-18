---
layout: page
title: "Q58334: Windows 3.0 WIN.INI [ports] Section"
permalink: kb/058/Q58334/
---

## Q58334: Windows 3.0 WIN.INI [ports] Section

	Article: Q58334
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	WININI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	MORE INFORMATION
	================
	
	[PORTS] SECTION
	---------------
	
	The [ports] section lists all available communications ports and
	defines default values; it also lists files to which printer output
	may be sent.
	
	The [ports] section can contain the following settings:
	
	<portname>:=<baud-rate, parity, word-length, stop-bits>[[,p]]
	
	Purpose: The <portname> keyname must be the name of the communications
	        port as it is recognized by DOS. The <baud-rate> value
	        specifies the port's baud rate. The <word-length> value
	        gives the length of a word (in bits). The <stop-bits> value
	        gives the number of stop bits to be used. The [[,p]] option
	        specifies that hardware handshaking is in effect.
	
	To change: Choose the Ports icon from the Control Panel window.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
