---
layout: page
title: "Q82545: Serial Device Stops Working After Installing New Serial Device"
permalink: /kb/082/Q82545/
---

## Q82545: Serial Device Stops Working After Installing New Serial Device

{% raw %}

	Article: Q82545
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95kbfaq
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install a new serial device in your computer, an existing serial
	device may stop responding when you use the new device. For example, you may
	experience problems with a serial mouse on COM1 after you install an internal
	modem on COM3.
	
	CAUSE
	=====
	
	Serial ports COM1 and COM3 share a common interrupt request line (IRQ), IRQ 4,
	and serial ports COM2 and COM4 share IRQ 3. Because COM1 and COM3 share the same
	IRQ, the two serial ports cannot be used simultaneously.
	
	This behavior most often occurs when an internal modem is installed on COM3 or
	COM4 with a serial mouse already installed on COM1 or COM2. When you use the
	modem, the mouse stops responding (hangs). This is caused by the modem taking
	control of the IRQ the mouse uses to communicate with the computer.
	
	RESOLUTION
	==========
	
	To resolve this situation, remove the new serial device from your computer to
	determine if the existing serial device regains its functionality. If the
	remaining serial device functions correctly, reinstall the new serial device,
	but configure the new device to use a different IRQ. For information about how
	to configure the new serial device, consult the documentation included with the
	new device, or contact the device's manufacturer.
	
	MORE INFORMATION
	================
	
	Some computers and serial port adapters support IRQ sharing. This is common on
	Micro Channel Architecture (MCA) bus computers, such as IBM PS/2 computers, and
	Extended Industry Standard Architecture (EISA) bus computers, provided the full
	EISA standard is implemented.
	
	NOTE: IRQ sharing generally does not work when one of the devices is in constant
	use (such as a serial mouse).
	
	In Windows 3.x, it is possible to configure serial ports to use the same IRQ (for
	example, COM1 and COM3 on IRQ 4, and COM2 and COM4 on IRQ 3) one after the
	other, but not at the same time unless the serial adapter supports IRQ sharing.
	Windows 3.1 and Windows for Workgroups 3.1x support IRQ sharing for serial
	adapters. To use the adapters properly, make sure that the IRQ values are set
	correctly. To do so, follow these steps:
	
	1. Double-click Control Panel in Program Manager, and then double- click Ports.
	
	2. Double-click the port you want to configure, and then click Advanced.
	
	3. In the Interrupt Request Line (IRQ) box, click the correct interrupt.
	
	4. Click OK, click OK, and then click Close.
	
	5. Use any text editor (such as Notepad) to open the System.ini file in the
	  Windows folder.
	
	6. Add the following line to the [386Enh] section of the System.ini file:
	
	  COMIrqSharing=True
	
	7. Save and then close the System.ini file.
	
	8. Restart your computer.
	
	For more information about the "COMIrqSharing=" setting and other switches in the
	System.ini file for Windows 3.1 and Windows for Workgroups 3.1x, please see the
	Sysini.wri file in the Windows folder.
	
	For more information about the "COMIrqSharing=" setting for Windows 95, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q130533 Using Previous Windows Communications Switches in Windows 95
	
	In Windows 95, after you install a modem, the serial port that the modem is
	configured to use may not be listed in Device Manager. To determine which serial
	port the modem is configured to use, click the modem in Device Manager, and then
	click Properties.
	
	The serial ports of Plug and Play modems do not appear in Device Manager in the
	Ports section as you might expect. To view the modem's resources, click the
	modem in Device Manager and then click Properties.
	
	Additional query words: 3.10 3.11 conflict
	
	======================================================================
	Keywords          : win31 win95 kbfaq
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	

{% endraw %}
