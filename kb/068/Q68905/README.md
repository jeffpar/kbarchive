---
layout: page
title: "Q68905: Ventura Gold Doesn't Print Last Page on PostScript Printer"
permalink: /kb/068/Q68905/
---

## Q68905: Ventura Gold Doesn't Print Last Page on PostScript Printer

	Article: Q68905
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ventura Gold does not print the last page of a print job on a PostScript printer
	connected to a COMx: port if the Flow Control (handshaking) has not been set to
	Hardware From Ports in the Control Panel.
	
	MORE INFORMATION
	================
	
	Windows requires the Flow Control (handshaking) be set to the Hardware option
	for printers connected to a serial communications port.
	
	Ventura prints the publication correctly if File is selected as the port and the
	output is redirected to a File.
	
	Setting the Flow Control to Hardware for any COMx: Port
	-------------------------------------------------------
	
	1. In the Control Panel window, choose the Ports icon.
	
	2. Select the port used by the printer.
	
	3. Choose the Settings button.
	
	4. Select Hardware for the Flow Control.
	
	5. Choose the OK button, then choose the Close button and exit Control Panel to
	  save your changes.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, "Configuring Communications
	Ports" section, pages 175-176
	
	"Microsoft Windows User's Guide," version 3.0, "Configuring Communications Ports"
	section, pages 159-163
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
