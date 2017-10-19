---
layout: page
title: "Q66498: Productivity Pack Setup Must Be Run from MS-DOS Command Prompt"
permalink: /kb/066/Q66498/
---

## Q66498: Productivity Pack Setup Must Be Run from MS-DOS Command Prompt

	Article: Q66498
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Productivity Pack for Windows Setup program is MS-DOS based, not
	Windows based. It cannot be run from inside Windows or from MS-DOS Prompt under
	Windows. To install the Productivity Pack, first exit Windows completely.
	
	To run Setup, do the following:
	
	1. If you have 5.25-inch disks, switch to the drive containing Setup Disk 1. If
	  you have 3.5-inch disks, switch to the drive containing Setup Disk 1 and
	  Setup Disk 2.
	
	2. From the MS-DOS command prompt of that drive, type "setup" (without the
	  quotation marks).
	
	MORE INFORMATION
	================
	
	If you type "a:setup" from the MS-DOS command prompt on drive C, the
	
	  Bad Command or File Name
	
	error message is generated.
	
	If you attempt to run the Productivity Pack for Windows Setup program from inside
	Windows, your system will do the following:
	
	1. Attempt to start the Setup program on the disk and fail.
	
	2. Scan your hard drive for a Windows program named Setup.
	
	3. Find the Windows Setup utility.
	
	NOTES
	-----
	
	If you attempt to run the Productivity Pack for Windows Setup program from
	Windows, you will instead be offered the dialog box where you can change your
	device driver settings for Windows.
	
	Running the Productivity Pack for Windows Setup program from MS-DOS under Windows
	may appear to work correctly. However, it can cause incorrect or corrupted
	installations of the Productivity Pack.
	
	The correct instructions are included on the disk label and in the "Set up &
	Learn" documentation included with the Productivity Pack for Windows. If the
	instructions are followed precisely, there should be no problems with
	installation.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	
