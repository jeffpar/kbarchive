---
layout: page
title: "Q104335: Windows Err Msg: Not Enough Space in Windows Temporary..."
permalink: kb/104/Q104335/
---

## Q104335: Windows Err Msg: Not Enough Space in Windows Temporary...

	Article: Q104335
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set up Micrografx Designer version 3.1 or 4.0 for Windows, you
	may receive the following error message:
	
	  Alert! Not enough Space in Windows Temporary Directory! Setup failed!
	
	CAUSE
	=====
	
	When you install Micrografx Designer 3.1 or 4.0, you may encounter an out of
	disk space error message if the TEMP= line in your AUTOEXEC.BAT file is directed
	to a drive with less than 3 megabytes (MB) of disk space available. This occurs
	regardless of the drive and directory specified for the Micrografx Designer
	installation.
	
	When Designer sets up, it stores information in temporary files that it places in
	the directory specified by your TEMP variable. Micrografx has confirmed that its
	installation program requires at least 3 MB for this purpose.
	
	RESOLUTION
	==========
	
	1. Edit your AUTOEXEC.BAT file and make sure that there is a valid TEMP= line.
	
	2. Ensure that the drive and directory specified in the AUTOEXEC.BAT have at
	  least 3 MB of available space..
	
	3. Reboot the computer and restart the Micrografx Designer installation program
	  as specified by Micrografx.
	
	Micrografx Designer is manufactured by Micrografx, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 install
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
