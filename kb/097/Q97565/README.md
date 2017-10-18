---
layout: page
title: "Q97565: Novell Login Drive Not Available After Installing DoubleSpace"
permalink: kb/097/Q97565/
---

## Q97565: Novell Login Drive Not Available After Installing DoubleSpace

	Article: Q97565
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	After you install Microsoft DoubleSpace, the drive letter F (normally used by
	Novell NetWare) may be in use.
	
	To work around this problem, you can either use a different drive letter for your
	login drive, or adjust DoubleSpace so that it uses a different drive letter for
	its host drive.
	
	You can avoid this problem if you make sure your NetWare software is loaded
	before you run DoubleSpace to compress your drives.
	
	MORE INFORMATION
	================
	
	If your usual NetWare drive letter is not available, one of the following should
	correct the problem:
	
	- If your CONFIG.SYS file has a DEVICEHIGH=C:\DOS\DBLSPACE.SYS command, make
	  sure it is placed before any RAMDrive statements. Changing the order of the
	  RAMDrive and DBLSPACE.SYS lines in the CONFIG.SYS file changes the "Last
	  drive reserved for DoubleSpace's use:" setting in the DBLSPACE.INI file,
	  freeing up an additional drive letter.
	
	- Edit the DBLSPACE.INI file to manually change the host drive letter. To do
	  this:
	
	  1. If you use Microsoft Windows and have a permanent swap file (PSF), run
	     Windows, note the current size of your PSF and change your PSF to None.
	     (You will undo this change later in this procedure.)
	
	  2. Change to the host drive (for example H).
	
	  3. Use the ATTRIB command to change the file attribute on the DBLSPACE.INI
	     file. For example:
	
	        attrib h:\dblspace.ini -s -h -r
	
	  4. Edit the DBLSPACE.INI file with a text editor, such as MS-DOS Editor.
	
	  5. Change the LastDrive setting to the letter you want to be the host drive.
	     For example, if you have only one hard disk drive (C), you should use D
	     for the host drive so that F will be available for your Novell login
	     drive. To do this, change the FirstDrive and LastDrive statements to read
	     as follows:
	
	        FirstDrive=D
	        LastDrive=D
	
	  6. Change the first parameter in the ActivateDrive line to the same letter
	     you used in step 4.
	
	     WARNING: Do not change the second parameter (represented by "xx") in the
	     following example:
	
	        Before change:     ActivateDrive=H,xx
	        After change:      ActivateDrive=D,xx
	
	     WARNING: If you use a drive letter that is used by a physical device (such
	     as drive A), for the N value, the system may stop responding (hang) or
	     continually reboot when you restart it.
	
	  7. Save your changes and quit the text editor.
	
	  8. Reset the system, hidden, and read-only attributes on the DBLSPACE.INI
	     file. For example:
	
	        attrib h:\dblspace.ini +s +h +r
	
	  9. Restart your computer (press CTRL+ALT+DEL).
	
	1. If you removed your PSF in step 1, run Microsoft Windows and re-create the
	  PSF on your host drive. Do not attempt to create the PSF on your
	  DoubleSpace-compressed drive. You may receive the following message if you
	  re-create your PSF at its previous size:
	
	  Windows will not use more than the virtual memory specified by the
	  Recommended Size. Are you sure you want to create a larger swap file?
	
	  You can ignore this error message; it is likely incorrect. As long as the PSF
	  is not larger than four times your physical memory, Windows can use a swap
	  file that is larger than the recommended size.
	
	For more information on how DoubleSpace assigns drive letters, query on the
	following words in the Microsoft Knowledge Base:
	
	  how doublespace assigns
	
	Additional query words: 6.00 double space dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
