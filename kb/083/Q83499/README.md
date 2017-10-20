---
layout: page
title: "Q83499: Serial Communication Port Settings for HP ColorPro"
permalink: /kb/083/Q83499/
---

## Q83499: Serial Communication Port Settings for HP ColorPro

{% raw %}

	Article: Q83499
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a Hewlett-Packard (HP) ColorPro plotter with Windows, serial port
	communication needs to be configured correctly through the Windows Control
	Panel.
	
	MORE INFORMATION
	================
	
	To set up a serial communication port for the HP ColorPro in Windows do the
	following:
	
	1. Choose the Ports icon from the Control Panel menu.
	
	2. Choose the appropriate port and choose settings.
	
	3. Set BAUD rate to 9600 bits per second (BPS).
	
	4. Set data bits to 8.
	
	5. Set parity to none.
	
	6. Set stop bits to 1.
	
	7. Set flow control to Hardware.
	
	8. Choose OK.
	
	These settings are common and will work for most serial plotters and printers.
	For a serial printer, however, a common setting for flow control is None.
	
	To set up a serial communication port for the HP ColorPro in Windows 2.x, do the
	following:
	
	1. Start Control Panel from the MS-DOS Executive.
	
	2. Select the Setup menu and choose the Communications Port command.
	
	3. Select the appropriate port: COM1 or COM2.
	
	4. Set BAUD rate to 9600.
	
	5. Set word length to 8.
	
	6. Set parity to none.
	
	7. Set stop bits to 1.
	
	8. Set handshake to Hardware.
	
	9. Choose OK.
	
	Each time you go into the Control Panel and choose Communications Port, Windows
	shows you the settings for COM1 by default. This occurs even if you have never
	set up COM1. To see the settings for COM2, select COM2 when you are in the
	Communications Port dialog box. The screen will then show you the settings for
	COM2.
	
	Additional query words: 3.1 hewlett packard
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
