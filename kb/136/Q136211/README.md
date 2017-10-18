---
layout: page
title: "Q136211: PRB: SETUP.APP Creates Disk Image too Large for a Floppy Disk"
permalink: kb/136/Q136211/
---

## Q136211: PRB: SETUP.APP Creates Disk Image too Large for a Floppy Disk

	Article: Q136211
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Setup.app to create disk images of your application, the resulting
	files that are supposed to fit on one blank floppy disk occupy more space than
	you have on a blank floppy disk.
	
	CAUSE
	=====
	
	This may be caused by a virus-checking software package by Central Point
	Software. When the Visual FoxPro .exe file is created, the virus-checking
	software creates a file with a .vir extension and places it in the same
	directory as the .exe file. When the .exe file is run on a computer that is
	running Central Point's virus-checking software, the .vir file is checked.
	
	NOTE: Central Point Software is a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	The .vir file can vary in size. If Setup.app created a disk image that is close
	to the capacity of the floppy disk size you are using, it could be that the .vir
	file is just enough to exceed the capacity of a blank floppy disk. You would
	discover this situation when you try to copy the contents of the disk directory
	to a blank floppy disk and receive an error informing you of the insufficient
	disk space.
	
	WORKAROUND
	==========
	
	Remove the .vir file from the disk directory in which it is located. The
	contents of the disk directory should then fit on a blank floppy disk.
	
	
	Additional query words: VFoxWin distribution kit
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
