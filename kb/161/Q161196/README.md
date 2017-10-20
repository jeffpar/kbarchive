---
layout: page
title: "Q161196: Problem Installing FC10/FC20 Driver from Drvlib Directory"
permalink: /kb/161/Q161196/
---

## Q161196: Problem Installing FC10/FC20 Driver from Drvlib Directory

{% raw %}

	Article: Q161196
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install the driver for the HP FC10/FC20 controller from the
	Drvlib directory, Windows NT 4.0 may prompt for a disk labeled "HP Driver Disk."
	
	CAUSE
	=====
	
	The driver as included in the Drvlib directory on the Windows NT 4.0 compact
	disc does not include a tagfile required by the Oemsetup.inf file. As a result,
	the Oemsetup.inf file requests that the user insert a disk called the "HP Driver
	Disk" because it cannot locate the tagfile.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy all of the files that are located in the directory
	  Drvlib\Storage\Fenb\Cms to a floppy disk.
	
	2. Copy the file Oemdisk1.w to the floppy disk from the directory
	  Drvlib\Storage\Fenb\Conner.
	
	3. Rename the Oemdisk1.w file on the floppy to Hpcmsnt.w.
	
	4. Install the driver using the Control Panel Tape Devices tool. Be sure to use
	  the Have disk... option and specify the path to the floppy disk drive
	  containing the driver files.
	
	5. Proceed with the driver installation by supplying necessary configuration
	  information as prompted.
	
	
	Additional query words: hp fc10 fc20 driver install colorado backup tapebackup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
