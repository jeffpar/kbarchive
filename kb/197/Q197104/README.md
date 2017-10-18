---
layout: page
title: "Q197104: Error Message If Laptop Is Ejected While Copying to Floppy Disk"
permalink: kb/197/Q197104/
---

## Q197104: Error Message If Laptop Is Ejected While Copying to Floppy Disk

	Article: Q197104
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you eject a laptop computer from the docking station while you are copying a
	file to a floppy disk drive that is in the laptop computer, you may receive the
	following error message on a blue screen, indicating that a divide by zero error
	has occurred:
	
	  A fatal exception 00 has occurred at 0028:C0FD5A27 in VXD HSFLOP(01)
	  + 00000A27. The current application will be terminated.
	
	This error message may be followed by the following error message:
	
	  Disk Write Error
	  Unable to write to disk in drive A:
	  Data or files may be lost
	
	CAUSE
	=====
	
	This problem can occur if you have installed the update described in the
	following article in the Microsoft Knowledge Base:
	
	  Q159153 Error Messages While Backing Up to Some Floppy Disk Drives
	
	Note that the "Disk Write Error" message may occur even if the exception does
	not. In either case, you should recopy the file.
	
	The device enumeration required to match and verify the laptop computer's
	hardware to the ejected-state hardware profile must temporarily insert tracking
	structures into the floppy disk drive device control data; the read/write
	operation still in progress interrupts the enumeration before the data is fully
	initialized, resulting in the use of a zero divisor.
	
	Some models of floppy disk drives require specific timing and delays between disk
	operations to work properly. The timing implemented by the Windows 95 floppy
	disk driver is not sufficient for some of these drives. The changes introduced
	by the update noted above to accommodate these drives result in the divide
	exception.
	
	
	
	RESOLUTION
	==========
	
	To work around this issue, Microsoft recommends that you wait for copy
	operations to finish before ejecting a laptop computer from the base station.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 OEM Service
	Release versions 1, 2, 2.1, and 2.5, if the described update has been
	installed.
	
	This problem is corrected in Microsoft Windows 98.
	
	Additional query words: 95 OSR 1 2 2.1 2.5
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
