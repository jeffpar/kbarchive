---
layout: page
title: "Q160902: Windows NT Error Msg: Alternate Drivers Cannot Be Installed"
permalink: /kb/160/Q160902/
---

## Q160902: Windows NT Error Msg: Alternate Drivers Cannot Be Installed

	Article: Q160902
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install alternate operating system printer drivers, such as
	Windows NT 3.51 printer drivers on a Windows NT 4.0 Server computer, you may get
	the following error message:
	
	  Alternate drivers cannot be installed an unexpected error occurred.
	
	The error message may also occur when you attempt to install a third-party
	Windows NT 3.51 PostScript driver for a Windows NT 4.0 printer control language
	(PCL) printer (or vise versa) using the Have Disk option.
	
	CAUSE
	=====
	
	This error is usually caused when using an OEM printer driver disk whose printer
	description field, found in the Windows NT 3.5x Printer.inf file, does not match
	that of the Windows NT 4.0 %SystemRoot%\Inf\Ntprint.inf file. This problem can
	also occur when you try to add an alternate driver in Windows NT 4.0 for a
	printer that was not natively supported in Windows NT 3.5x while using the
	Windows NT 3.5x compact disc as the installation source path.
	
	For example, Windows NT 4.0 Ntprint.inf has the following entry for the HP Color
	LaserJet 5:
	
	  [HP]
	  "HP Color LaserJet 5" = Pcl5ems.dll.bidi
	
	The Hewlett-Packard OEM Windows NT 3.51 driver disk contains a Printer.inf file
	whose entry does not match the description in the Windows NT 4.0 Ntprint.inf
	file:
	
	  [Options]
	  "HP Color LaserJet 5/5M (HP)" = hpc2ui, hpc2lpd, hpc2drv
	
	
	RESOLUTION
	==========
	
	If you are installing a third-party printer driver as an alternate driver, make
	sure that the non-native driver is the same type (PCL or PostScript) as the
	Windows NT printer.
	
	-or-
	
	If the printer descriptions in the Printer.inf and Ntprint.inf files do not
	match, use the following steps to resolve this problem:
	
	1. Copy the vendor-supplied installation files to a folder on your hard disk
	  drive, including the printer information file (Printer.inf). If desired, make
	  a backup copy of the Printer.inf file.
	
	2. In Notepad, open the Windows NT 4.0 Ntprint.inf file located in the
	  %SystemRoot%\Inf folder.
	
	3. Search for the description field for the printer in question and make a note
	  of it for step six.
	
	4. In Notepad, open the Printer.inf file from the vendor-supplied files on the
	  hard disk drive.
	
	5. Search for the description of the same printer in question.
	
	6. Change the description in the Printer.inf file to match the description in
	  the Ntprint.inf file as noted in step two.
	
	7. Close and save the changes in the Printer.inf file.
	
	8. Close the Ntprint.inf file (with no changes made).
	
	9. Click the Start button, point to Settings, and then click Printers.
	  Right-click the printer in question and click Properties, and then click the
	  Sharing tab.
	
	10. Select the alternate driver to install (that is, Windows NT 3.5 or 3.51
	  x86).
	
	11. When prompted with the message similar to the following:
	
	  Please insert the floppy disk labeled Windows NT 3.5 or
	  3.51 x86 into drive A:
	
	  Click OK and browse to the vendor-supplied folder on the hard disk drive and
	  select the modified Printer.inf file.
	
	
	NOTE: You can also modify the Ntprint.inf file to match the description in the
	vendor supplied Print.inf or Printer.inf file.
	
	The remainder of the installation should no longer return errors, and the
	alternate driver should be installed successfully.
	
	MORE INFORMATION
	================
	
	This article does not apply to Windows 95. If you are installing a Windows 95
	point and print driver on a computer running Windows NT for Windows 95 clients
	and you receive this error, please notify the vendor. To load Windows 95 drivers
	on Windows NT 4.0, the vendor must follow the specifications listed in the
	Windows 95 Resource Kit Appendixes C and D. ISBN 1-55615-678-2. Please contact
	your vendor for an updated INF file.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: HP 5si MX 5L 5M DLC IP Printing
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Hardware          : ALPHA MIPS PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
