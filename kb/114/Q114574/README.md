---
layout: page
title: "Q114574: Control Panel Serial Port Settings Are for Printing Only"
permalink: /kb/114/Q114574/
---

## Q114574: Control Panel Serial Port Settings Are for Printing Only

{% raw %}

	Article: Q114574
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbhw kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following basic serial port settings displayed in Control Panel reflect the
	default values for serial printers only:
	
	
	  Baud rate
	  Parity
	  Word length (data bits)
	  Stop bits
	  Type of port handshaking
	
	These settings can be changed by choosing the Ports icon in Control Panel.
	Changes are reflected in the [ports] section of the WIN.INI file.
	
	MORE INFORMATION
	================
	
	The settings for baud rate, parity, word length, stop bits, and handshaking in
	the Control Panel Ports dialog box define the default values for serial
	printing.
	
	To change these settings, run Control Panel and choose the Ports icon. Select the
	port that you want to change and choose the Settings button.
	
	The Ports settings displayed in Control Panel are recorded in the [ports] section
	of the WIN.INI file. The following are the default values:
	
	     [ports]
	     COM1:=9600,n,8,1,x
	     COM2:=9600,n,8,1,x
	     COM3:=9600,n,8,1,x
	     COM4:=9600,n,8,1,x
	
	The following syntax is used for these settings:
	
	  Portname:=baud rate,parity,word length,stop bits,flow control
	
	The possible values for flow control are "x" for Xon/Xoff, and "p" for hardware.
	If no value is listed, no flow control is selected.
	
	IMPORTANT: These settings have no effect on modem communications, which are set
	by the individual application. Changing the baud rate in Control Panel, for
	example, does not change the speed available in a communications application,
	such as Terminal. Additionally, these Control Panel settings have no affect on
	the Microsoft At Work PC Fax utility included with Windows for Workgroups 3.11.
	
	REFERENCES
	==========
	
	"Microsoft Windows 3.1 Resource Kit," page 174
	
	"Microsoft Windows for Workgroups 3.1 Resource Kit," page 6-17
	
	Additional query words: 3.10 3.1 3.11 COMM.DRV SERIAL.386 stop-bit faxmodem flow-control bits per second baud-rate
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
