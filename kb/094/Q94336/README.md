---
layout: page
title: "Q94336: How DoubleSpace Assigns the Host Drive Letter"
permalink: /kb/094/Q94336/
---

## Q94336: How DoubleSpace Assigns the Host Drive Letter

{% raw %}

	Article: Q94336
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	When you install Microsoft DoubleSpace, the installation program normally leaves
	four unassigned drive letters between the last drive and the host drive. For
	example, if you have two drives (C and D), a RAM drive (E) and a network
	connection (F), DoubleSpace skips G, H, I, and J, and uses drive K for the host
	drive.
	
	If DoubleSpace detects Novell NetWare in memory, the host drive is assigned one
	letter less than the LASTDRIVE command in the CONFIG.SYS file. If that drive
	letter is unavailable, the host drive is assigned the next available drive
	letter.
	
	If you install DoubleSpace when device drivers that use drive letters (CD-ROM
	drivers or RAMDrives) are not loaded or your network software is not loaded, you
	may need to change the host drive letter.
	
	MORE INFORMATION
	================
	
	If you are using MS-DOS 6.2, you can change the host drive letter with the
	DBLSPACE /HOST command. If you are using Windows and have set up a permanent
	swap file (PSF) on your host drive, you need to remove the PSF before you change
	your host drive and then re-create it after you change the host drive. To do
	this, run Control Panel and choose the 386 Enhanced icon. For more information
	on re-creating the Windows PSF, see the text in step 10 below. For more
	information on using the DBLSPACE /HOST command, type "help dblspace /host"
	(without the quotation marks) at the MS-DOS command prompt and then press
	ENTER.
	
	If you are running MS-DOS 6.0, you can change the host drive letter by following
	these steps:
	
	1. If you use Microsoft Windows and have a permanent swap file (PSF), run
	  Windows, note the current size of your PSF and change your PSF to None. (You
	  will undo this change later in this procedure.)
	
	2. Change to the host drive (for example H).
	
	3. Use the ATTRIB command to change the file attribute on the DBLSPACE.INI file.
	  For example:
	
	  attrib h:\dblspace.ini -s -h -r
	
	4. Edit the DBLSPACE.INI file with a text editor, such as MS-DOS Editor.
	
	5. Change the LastDrive setting to the letter you want to be the host drive.
	
	6. Change the first parameter in the ActivateDrive line to the same letter you
	  used in step 5.
	
	  WARNING: Do not change the second parameter (represented by <xx>) in the
	  following example:
	
	      Before change:     ActivateDrive=H,xx
	      After change:      ActivateDrive=D,xx
	
	  WARNING: If you use a drive letter that is used by a physical device (such as
	  drive A), for the N value, the system may stop responding (hang) or
	  continually reboot when you restart it.
	
	7. Save your changes and quit the text editor.
	
	8. Reset the system, hidden, and read-only attributes on the DBLSPACE.INI file.
	  For example:
	
	  attrib h:\dblspace.ini +s +h +r
	
	9. Restart your computer (press CTRL+ALT+DEL).
	
	10. If you removed your PSF in step 1, run Microsoft Windows and re-create the
	  PSF on your host drive. Do not attempt to create the PSF on your
	  DoubleSpace-compressed drive. You may receive the following message if you
	  re-create your PSF at its previous size:
	
	  Windows will not use more than the virtual memory specified by the
	  Recommended Size. Are you sure you want to create a larger swap file?
	
	  You can ignore this error message; it is likely incorrect. As long as the PSF
	  is not larger than four times your physical memory, Windows can use a swap
	  file that is larger than the recommended size.
	
	Additional query words: 6.00 6.20 dblspace double space designate
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
