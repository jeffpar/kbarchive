---
layout: page
title: "Q79890: Printing to Auxiliary Ports from MS-DOS Editor and QBasic"
permalink: /kb/079/Q79890/
---

## Q79890: Printing to Auxiliary Ports from MS-DOS Editor and QBasic

{% raw %}

	Article: Q79890
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can print to alternative auxiliary ports from MS-DOS Editor or QBasic by
	saving the file with a file name of the alternative port.
	
	Valid values for parallel ports include LPT1, LPT2, and LPT3. Valid values for
	serial ports include COM1, COM2, COM3, and COM4. Other auxiliary devices such as
	CON (console) may be used.
	
	The ability to print to any of the above ports is contingent upon the port being
	both physically present on the machine and the port being supported by the
	computer's system BIOS.
	
	MORE INFORMATION
	================
	
	To print to an alternative port, do the following:
	
	1. Open the file you want to print in MS-DOS Editor.
	
	2. From the File menu, choose Save As. You will be prompted for a new file name.
	
	3. For the file name, enter the name of the printer port to which your printer
	  is attached. A dialog box will appear with the following message:
	
	  File already exists. Overwrite?
	
	  Select Yes.
	
	The file will then print to the port you have chosen. Saving the file as an
	alternative port will not save the file to disk.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
