---
layout: page
title: "Q169965: Toshiba 500CS 500CDT, or 730 Computer Hangs on First Reboot"
permalink: /kb/169/Q169965/
---

## Q169965: Toshiba 500CS 500CDT, or 730 Computer Hangs on First Reboot

{% raw %}

	Article: Q169965
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsetup win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time you boot a new Toshiba 500CS, 500CDT, or 730 laptop computer, you
	have the option to install Windows 3.1 or Windows 95. If you choose to install
	Windows 95, Windows 95 Setup may stop responding (hang) on the first reboot.
	Windows 95 Setup must reboot the computer to finish the installation.
	
	CAUSE
	=====
	
	This behavior can occur if the real-mode drivers for the Xircom IIPS PCMCIA
	Ethernet card are installed on the computer.
	
	RESOLUTION
	==========
	
	Disable the real-mode drivers by following these steps:
	
	1. Restart the computer. Press the F8 key when you see the "Starting Windows 95"
	  message, and then choose Safe Mode Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  " cd windows
	  edit system.ini " (without the quotation marks)
	
	3. Locate and disable any lines that refer to "Tranxit" in the [386enh] section
	  by placing a semicolon (;) at the beginning of the line. For example, disable
	  the following lines:
	
	  " Drivers added for Tranxit
	  device=c:\tranxit\<driver_name>.386 " (without the quotation marks)
	
	4. Save and then close the System.ini file.
	
	5. Restart your computer normally.
	
	MORE INFORMATION
	================
	
	For additional information, please contact Toshiba, Inc.
	
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbsetup win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
