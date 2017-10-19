---
layout: page
title: "Q84036: Troubleshooting HP LaserJet Printing Under Windows 3.1"
permalink: /kb/084/Q84036/
---

## Q84036: Troubleshooting HP LaserJet Printing Under Windows 3.1

	Article: Q84036
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If an HPPCL-supported printer, such as a Hewlett-Packard (HP) LaserJet printer,
	does not print correctly, follow the steps in this article to troubleshoot the
	problem.
	
	MORE INFORMATION
	================
	
	1. Verify that there is a SET TEMP statement in the AUTOEXEC.BAT file. Verify
	  that the directory that SET TEMP references actually exists, and that at
	  least 2 MB of free space exists on that drive. If you are using a temporary
	  swap file, check this value from inside Windows to ensure that you have
	  enough disk space after the temporary swap file has been created. You may
	  need more disk space if you are using applications that create their own
	  temporary files. Aldus PageMaker, for example, can create several megabytes
	  of temporary files when it is working with large documents.
	
	2. Make sure the correct printer driver is installed for your printer. To find
	  the default printer, choose the Printers icon in Control Panel. To check the
	  printer driver version number, choose the Setup button, choose the Options
	  button, and then choose the About button. If you are using an HP III printer
	  (HPPCL5A.DRV), the About box should say:
	
	  version 31.x.xx for Windows 3.1
	
	  If you are using an HP II or earlier printer, the About box should say:
	
	  Universal Driver version 3.1
	  HPPCL version 1.1
	
	3. Make sure the Printer Time Out (seconds) value is set as follows:
	
	      Option                 Setting
	      ------                 -------
	
	      Device not selected:   15
	      Transmission retry:    45
	
	  These can be set by choosing the Printers icon in Control Panel. These
	  settings may need to be increased to 30 and 120 or higher for printing
	  complex graphics images from some applications such as Arts and Letters, or
	  when printing over a network.
	
	4. Check your printer settings in Control Panel. Choose the Setup button and
	  make sure the graphics resolution is set to 300 dots per inch (dpi) for
	  testing. You should see more fonts available in Windows applications when the
	  resolution is set to 300. TrueType fonts may not show up at lower
	  resolutions. Keep in mind that when Windows version 3.0 is upgraded to
	  Windows version 3.1, printer driver settings are often reset to their
	  defaults.
	
	5. Check the available memory on the printer. Memory problems can occur when
	  printing large files, such as Microsoft Excel for Windows charts, if the HP
	  LaserJet has limited memory. In Excel, the chart may only partially print.
	  Make sure that the memory setting you have selected in Control Panel matches
	  the amount of RAM installed in your printer.
	
	6. When the printer driver is properly configured, test the configuration by
	  attempting to print a simple line of text from Windows Write. Progress to
	  printing bigger documents with graphics pictures/images.
	
	7. If you are having problems printing TrueType fonts, try selecting the Print
	  TrueType As Graphics option. To change this setting, choose the Setup button,
	  choose the Options button, and select the Print TrueType As Graphics check
	  box.
	
	8. Disable third-party printing software: If you are experiencing general
	  protection (GP) faults or corrupt output while using Publisher's Power Pack,
	  try disabling it.
	
	9. If you are not getting any output, try disabling the Fast Printing Direct To
	  Port option. To do this, run Control Panel, choose the Printers icon, choose
	  the Connect button, and clear the Fast Printing Direct To Port check box. If
	  you cannot print with Fast Printing Direct To Port disabled, try printing to
	  the hard disk instead of the port. To do this, run Control Panel and choose
	  the Printers icon. Choose the Connect button, and select FILE: as the port.
	  You will be prompted for a filename. Type a name such as TEST.PRN. Exit to
	  MS-DOS and copy the file to the port. The following syntax will copy a
	  printer output file called TEST.PRN to the default parallel printer port,
	  usually LPT1.
	
	  copy test.prn prn
	
	  If Windows prints correctly, the problem is in communication between Windows
	  and the printer. If the printout is still incorrect or absent, the problem is
	  the printer driver. It may be the wrong version, incorrectly configured, or
	  corrupt or damaged.
	
	10. Check the BIOS address for the port being used. If the BIOS is setting the
	  incorrect value for the port address, Windows will not be able to print. For
	  more information on this subject, query on the following words in the
	  Microsoft Knowledge Base:
	
	  "cannot" (without the quotation marks) and "print" (without the quotation
	  marks) and "port" (without the quotation marks) and "address" (without the
	  quotation marks) and "BIOS" (without the quotation marks)
	
	11. Determine if the LaserJet is physically connected to the computer's parallel
	  or serial port. If it is not, try physically attaching the printer to the
	  computer for testing purposes. Switch boxes or networks can be the source of
	  the problem. For more information on this subject, query on the following
	  words in the Microsoft Knowledge Base:
	
	  "switch" (without the quotation marks) and "boxes" (without the quotation
	  marks) and "troubleshooting" (without the quotation marks) and "printing"
	  (without the quotation marks) and "networks" (without the quotation marks)
	
	12. If no output or poor output still occurs, check the cable (perhaps try
	  another) and check the hardware documentation for proper configuration.
	
	Other Considerations
	--------------------
	
	The following is a list of less likely solutions; however, these may correct the
	problem if you are experiencing printing problems:
	
	- Make sure you are using a supported operating system. If your hardware
	  manufacturer has an OEM version of MS-DOS, your system may require that
	  version of MS-DOS. For example, some COMPAQ machines may require COMPAQ
	  MS-DOS instead of MS-DOS.
	
	- Remove all terminate-and-stay-resident (TSR) programs and device drivers that
	  are not absolutely essential to the system's operation from the AUTOEXEC.BAT
	  and CONFIG.SYS files, then restart the computer. It is possible for some TSR
	  programs to interfere with Windows communication with the hardware.
	
	- If you experience printer problems after upgrading to Windows 3.1, open a
	  document saved under Windows 3.0, open the application's Printer Setup dialog
	  box and select a Windows 3.1 printer. Save, close, and reopen the document.
	  The file should now print correctly. Some applications, such as Ami Pro and
	  Microsoft PowerPoint for Windows, save printer-specific information in
	  individual document files. You will need to perform this procedure for each
	  document saved in this type of application.
	
	If you cannot print from MS-DOS, contact your hardware manufacturer.
	
	
	Additional query words: gpf 3.10 trouble shoot HPPCL HPCL5A UNIDRV.EXE HPQJET.EXE 3.11 Publisher tt HPIII
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
