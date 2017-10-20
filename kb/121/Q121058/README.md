---
layout: page
title: "Q121058: DIR Results in Strange Characters When Using SCSI Drive"
permalink: /kb/121/Q121058/
---

## Q121058: DIR Results in Strange Characters When Using SCSI Drive

{% raw %}

	Article: Q121058
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running MS-DOS version 6.0 or higher and you press the F4 or F8 key
	at the Starting Windows prompt, running the DIR command causes strange
	characters rather than a directory listing to be displayed.
	
	CAUSE
	=====
	
	This problem occurs if your hard disk is a SCSI drive that requires double
	buffering and the following line is loading in the CONFIG.SYS (CONFIG.DOS)
	file:
	
	  DEVICE=C:\DOS\EMM386.EXE NOEMS X=D800-DFFF
	
	RESOLUTION
	==========
	
	To correct this problem, insert the command doublebuffer=1 in the MSDOS.SYS
	file. To insert this line, do the following:
	
	1. Start Windows 95.
	
	2. Click the Start button on the taskbar and then click Run.
	
	3. In the Open box, type the following:
	
	  " attrib -s -h -r c:\msdos.sys " (without the quotation marks)
	
	4. Click the Start button on the taskbar and then click Run.
	
	5. In the Open box, type the following:
	
	  " notepad c:\msdos.sys " (without the quotation marks)
	
	6. In the [Options] section, add the following line:
	
	  " doublebuffer=1 " (without the quotation marks)
	
	  NOTE: The doublebuffer=1 setting is a conditional setting that enables double
	  buffering for controllers that need it.
	
	7. Click Save on the File menu.
	
	If the above steps do not correct the problem, you may need to use the
	doublebuffer=2 setting instead of the doublebuffer=1 setting. To do so, follow
	these steps:
	
	1. Click the Start button on the taskbar and then click Run.
	
	2. In the Open box, type the following:
	
	  " attrib -s -h -r msdos.sys " (without the quotation marks)
	
	3. Click the Start button on the taskbar and then click Run.
	
	4. In the Open box, type the following:
	
	  " notepad c:\msdos.sys " (without the quotation marks)
	
	5. In the [Options] section, modify the doublebuffer=1 line that you added in
	  step 6 above so that it appears as follows:
	
	  " doublebuffer=2 " (without the quotation marks)
	
	  NOTE: The doublebuffer=2 setting is an unconditional setting that enables
	  double buffering regardless of whether the controller needs it or not.
	
	6. Click Save on the File menu.
	
	MORE INFORMATION
	================
	
	This is a MS-DOS 6.x configuration problem, not a problem in Windows 95. When
	you boot under Windows 95, double buffering is automatically provided if needed.
	This is not the case with MS-DOS versions 6.0 and higher.
	
	This problem is known to occur with the following SCSI hard disks:
	
	  Seagate ST1200N external drive
	
	Additional query words: 1.0 1.00 6.00 6.2 6.20 6.21 6.22 garbage trash settings double-buffering scuzzy 3rdparty
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
