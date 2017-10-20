---
layout: page
title: "Q95686: Err Msg: &quot;Can't Find File&quot; When Saving Write File to Disk"
permalink: /kb/095/Q95686/
---

## Q95686: Err Msg: &quot;Can't Find File&quot; When Saving Write File to Disk

{% raw %}

	Article: Q95686
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you save a file from Windows Write to a floppy disk, you may encounter one
	or both of the following error messages:
	
	  Error Message 1
	
	  <drive>:\<filename>
	  Cannot find this file (or "cannot read this file")
	
	  Where <drive>:\<filename> refers to the file that Windows is
	  unable to locate or read.
	
	  Error Message 2
	
	  Either something has happened to the network or possibly the file has been
	  renamed or moved. Do you want to try again?
	
	CAUSE
	=====
	
	This error message occurs when the file that you attempt to save on a floppy
	disk originated from a different floppy disk that has been removed from the
	drive.
	
	This error message occurs because Write needs to read from the file's original
	source file in order to save the file to another destination. In this case,
	since the disk was removed from drive A and another disk was placed in the
	drive, the original source file cannot be found.
	
	WORKAROUND
	==========
	
	Since Write is unable to locate and read the source file, you must either save
	the file to the hard drive with the original source disk still in the floppy
	drive, or save the file first to the hard drive, then save to another floppy
	disk.
	
	Once the file is resident on the hard drive, Write has a permanent source file
	that it can locate, read to memory, and save to a second floppy disk.
	
	This situation does not occur if you saved TEST.WRI to the A drive, replaced the
	floppy disk in the A drive, and attempted to save the document to the hard drive
	again as TEST.WRI. This saving procedure works because when the Write file was
	saved to the floppy disk, a temporary file was written to the TEMP directory on
	the hard drive; Windows will locate and read this file in order to save the file
	to the hard drive but it cannot locate this file to save it to a floppy disk.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
