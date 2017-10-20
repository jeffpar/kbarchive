---
layout: page
title: "Q139107: Err Msg: Uninstall Is Unable to Write to the MBR"
permalink: /kb/139/Q139107/
---

## Q139107: Err Msg: Uninstall Is Unable to Write to the MBR

{% raw %}

	Article: Q139107
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Uninstall option in the Add/Remove Programs tool, you
	may receive the following error message when your computer restarts:
	
	  Uninstall is unable to write to the MBR
	
	When this occurs, the Uninstall procedure cannot be completed, and you may not be
	able to start the computer from the hard disk.
	
	CAUSE
	=====
	
	This problem can occur when any of the following conditions exists:
	
	- The hard disk's Master Boot Record (MBR) is damaged.
	
	- A software or hardware-level virus scanning program is protecting the MBR.
	
	- You are using third-party disk partitioning software.
	
	- You computer has been infected with a boot-sector virus.
	
	RESOLUTION
	==========
	
	Use the information in the appropriate section below to try to resolve the
	problem. If you cannot start your computer from the hard disk, you can start it
	using your Windows 95 Startup disk.
	
	MBR Protected by Virus Scanning Software
	----------------------------------------
	
	If you suspect that a virus scanning program is preventing Uninstall from writing
	to the MBR, disable the virus scanning program by editing the Config.sys or
	Autoexec.bat file to temporarily disable the program. Place the word "Rem"
	(without the quotation marks) at the beginning of the line or lines used to load
	the virus scanningprogram. After you make this change, restart the computer.
	
	For information about the virus scanning program, consult the program's
	documentation or manufacturer.
	
	MBR Protected by Hardware-Level Virus Scanning Program
	------------------------------------------------------
	
	To disable hardware-level virus detection, run your computer's CMOS configuration
	utility and disable the virus detection.
	
	For information about your computer's CMOS configuration utility, please consult
	the computer's documentation or manufacturer.
	
	Third-Party Partitioning Software
	---------------------------------
	
	If third-party partitioning software is preventing Uninstall from writing to the
	MBR, refer to the software's documentation for information about restoring the
	previous MBR or modifying the current MBR.
	
	Boot-Sector Virus
	-----------------
	
	If you suspect that your computer has been infected with a boot-sector virus, use
	an anti-virus program to detect and remove the virus.
	
	For additional information about viruses, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q82923 Methods to Detect a Boot-Sector Virus
	
	After you resolve the problem that is preventing Uninstall from writing to the
	MBR, start your computer with your Windows 95 Startup disk, and then run
	Uninstall by typing the following command at the command prompt
	
	  " <disk>:\uninstal <W95undo.dat_location> " (without the
	  quotation marks)
	
	where <disk> is the drive containing the Startup disk and
	<W95undo.dat_location> is the full path to the W95undo.dat file.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
