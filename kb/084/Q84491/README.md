---
layout: page
title: "Q84491: Troubleshooting Print-Sharing Devices"
permalink: kb/084/Q84491/
---

## Q84491: Troubleshooting Print-Sharing Devices

	Article: Q84491
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows supports printing in the following hardware configurations:
	
	- A printer connected directly to a supported LPT or COM port.
	
	- A printer connected to a network print server on a supported network.
	
	It is possible to print using print-sharing devices or switch boxes, although
	this is untested and unsupported by Microsoft. This article discusses some of
	the problems Windows is faced with when printing through these devices.
	
	
	MORE INFORMATION
	================
	
	There are two types of print-sharing devices:
	
	- Manual switch boxes
	
	- Electronic switch boxes
	
	Manual Print-Sharing Devices
	----------------------------
	
	Manual print-sharing devices require that you manually move a switch or dial to
	select one printer or another. These devices are sometimes referred to as AB
	boxes. The main difficulty associated with manual switch boxes is that they may
	not pass through all the pin connections that Windows needs when it normally
	prints.
	
	Electronic Print-Sharing Devices
	--------------------------------
	
	Electronic print-sharing devices electronically poll each connected
	communications line (LPT ports or more commonly COM ports) for a short period of
	time; if no handshake is made (no response), the next port is polled. If a
	handshake is made, the port is monitored until no more data is being sent, then
	the next port is polled. The two most common problems with these devices are:
	
	1. They may not pass through all the pin connections that Windows needs when it
	  normally prints.
	
	2. The polling rate or type of handshaking may need to be adjusted to work with
	  Windows.
	
	If you are having problems when attempting to print from Windows with one of
	these devices, do one of the following:
	
	1. If you can not print from MS-DOS, contact the manufacturer of the
	  print-sharing device. To test printing from MS-DOS:
	
	  a. At the MS-DOS prompt, type the following:
	
	  "copy autoexec.bat lpt1" (without the quotation marks)
	
	     NOTE: Substitute the port being used for the LPT1 entry above. This works
	     for all printers except PostScript printers. For PostScript printers, type
	     the following at the MS-DOS prompt:
	
	  "copy c:\windows\system\testps.txt lpt1" (without the quotation marks)
	
	NOTE: Substitute the port being used for the LPT1 entry above.
	
	2. Disable Print Manager:
	
	  a. Navigate to Control Panel, click Printers, and then clear the Use Print
	     Manager box.
	
	3. Disable the Fast Printing Direct to Port option:
	
	  a. Navigate to Control Panel, click Printers, and then click Connect.
	
	  b. Clear the "Fast Printing Direct To Port" check box.
	
	4. If you are on an unsupported network, and you have installed Windows for the
	  network, you may need to disable the "Print Network Jobs Directly" and
	  "Update Network Display" options:
	
	  a. Navigate to Print Manager, click Options, and then Click Network Settings.
	
	  b. Clear the "Print Network Jobs Directly" and "Update Network Display" check
	     boxes.
	
	5. If you are printing to a Hewlett-Packard (HP) LaserJet or compatible, you may
	  have to print TrueType fonts as graphics:
	
	  a. Navigate to Control Panel, click Printers, click Setup, and then click
	     Options.
	
	  b. Select the "Print TrueType As Graphics" box.
	
	6. If the switching box uses COM ports, try setting Windows to use hardware
	  handshaking:
	
	  a. Navigate to Control Panel, click Ports, select the port being used, and
	     then click Settings.
	
	  b. In Flow Control, select Hardware.
	
	  c. Click OK, and then click Close.
	
	7. Print to the port called Lpt1.dos (or Lpt1.os2 if it exists):
	
	  a. Navigate to Control Panel, click Printers, click Connect, and then select
	     the Lpt1.dos port.
	
	  b. Click OK, and then click Close.
	
	  c. Start Write and type several lines of text and change the font size and
	     style.
	
	8. Print the Write document.
	
	  If you are working with a COM port, you must add a Com1.dos (or Com2.dos) port
	  to your Win.ini file:
	
	  a. Edit the Win.ini file with a standard ASCII text editor (such as Notepad).
	
	  b. Locate the [ports] section, add the new line "COM1.DOS=" (without the
	     quotation marks), and then save the changes.
	
	  c. Restart Windows.
	
	  You now have a port option called Com1.dos.
	
	  d. Print the Write document to this port.
	
	  COM3 and COM4 normally share IRQs with COM1 and COM2, respectively. They may
	  not be available because of this. If your hardware supports having each COM
	  port on a unique IRQ, then COM3 and COM4 should be usable.
	
	9. If the print-sharing device traps or captures a COM port, try using the
	  MS-DOS Mode command to set up the COM port and redirect the LPT port to the
	  COM port:
	
	  a. Edit the Autoexec.bat file with a standard ASCII text editor (such as
	     Notepad) and add the following lines:
	
	  "MODE COMx:9600,n,8 (where x = 1, 2, 3, or 4)" (without the quotation marks)
	
	  "MODE LPT1:=COMx: (this routes LPT1 to COMx)" (without the quotation marks)
	
	  b. Restart the computer, and then restart Windows.
	
	  c. Select the Lpt1.dos (or the Lpt1.os2) port again and try to print.
	
	NOTE: This is a workaround and may not function under all printing conditions.
	
	10. Print to the FILE: port and then copy the output to the printer:
	
	  a. Navigate to Control Panel, click Printers, click Connect, and then select
	     the "FILE:" port.
	
	  b. Click OK, and then click Close.
	
	  c. Start Write.
	
	  d. Type several lines of text, and then on the File menu, click Print.
	
	  e. Click OK.
	
	  f. When asked for a filename, type "C:\OUTPUT.PRT" (without the quotation
	     marks), and then click OK.
	
	  g. Click MS-DOS Prompt, and then type the following command:
	
	  "copy c:\output.prt lpt1" (without the quotation marks)
	
	NOTE: Substitute the port being used for the LPT1 entry above.
	
	If this works, the printing problem is occurring in one of the following areas:
	
	   - BIOS table
	
	   - I/O card (LPT, COM, other)
	
	   - Cable
	
	   - Print-sharing device
	
	11. Quit Windows, and then run the MS-DOS Debug program to inspect the BIOS
	  table for the correct address:
	
	  a. Type "debug" (without the quotation marks), and then press ENTER.
	
	  b. At the minus prompt (-), type "d40:0" (without the quotation marks), and
	     then press ENTER.
	
	     You receive the following:
	
	  0040:0000 F8 03 F8 02 E8 03 E8 02-78 03 78 02 00 00 00 00
	
	  COM1 COM2 COM3 COM4 LPT1 LPT2 LPT3
	
	The above addresses are the industry standard addresses for nonredirected ports
	(debug does not show the port names above).
	
	12. If you are using an electronic print-sharing or switching box, try slowing
	  the polling rate it uses or the time-out setting that it uses. Refer to the
	  manual or the manufacturer of this device for instructions on how to do
	  this.
	
	13. If you still cannot print, remove the switching box and connect the printer
	  directly to the computer. If it prints correctly, then contact the
	  manufacturer of the print-sharing device for additional information on how
	  to adjust the device to work in the Windows environment.
	
	
	Additional query words: 3.00 3.00a 3.10 tshoot buffalo black 3.11 switchbox printsharing printshare telephone pinout true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMEsearch kbWin3xSearch kbWin95search kbWin98search kbWin98SEsearch kbOPKSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWin98 kbWinME kbWin98SE
	Version           : :3.0,3.0a,3.1,3.11,95
	
	=============================================================================
	
