---
layout: page
title: "Q139333: Creating Alternate Boot Selections on AXP Machines"
permalink: kb/139/Q139333/
---

## Q139333: Creating Alternate Boot Selections on AXP Machines

	Article: Q139333
	Product(s): Microsoft Windows NT
	Version(s): 3.0 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the primary drive in a mirror set fails on a DEC Alpha computer, it is
	necessary to have alternate boot paths created in the system firmware. There are
	two methods which can be used to boot the machine to the shadow drive in the
	mirror set.
	
	NOTE: The system partition contains OSLOADER.EXE, HAL.DLL and the *.PAL files
	required to load the operating system. The boot partition is the partition that
	has the Windows NT system files.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	This method requires that the system partition be the same as the boot partition,
	or that both the system and boot partitions be mirrored:
	
	1. Boot the system. The first menu will be the System Boot Menu.
	
	  a. Select Supplementary menu.
	
	  b. Select Setup the system.
	
	  c. Select Manage boot selections.
	
	2. From the Manage boot selections menu, select Add a boot selection.
	
	3. At the following prompts enter the correct information for your system.
	
	  NOTE: When a specific path is requested may vary from one computer to
	  another.
	
	  "Select a system partition for this boot selection"
	  Choose: New system partition
	
	  "Enter location of the system partition for this boot selection"
	  Choose: SCSI Hard Disk
	
	  "Enter the osloader directory and name"
	  Type: \os\winnt351\osloader.exe
	
	  "Is the operating system in the same partition as the osloader:"
	  Choose: No
	
	  NOTE: This will also vary from one computer to another. The example here
	  reflects the most common RISC configuration. The system and boot partitions
	  are separate
	
	  "Enter the location of the os partition"
	  "Select media"
	  Choose: SCSI Hard Disk
	
	  "Enter SCSI bus number"
	  Type in the appropriate bus number.
	
	  "Enter SCSI ID"
	  Type in the appropriate SCSI ID
	
	  "Enter partition"
	  Type in the appropriate partition number.
	
	  "Enter the operating system roor directory"
	  Type in the path. For example: \winnt35
	
	  "Enter the name for this boot selection"
	  Type in a name. For example: Boot Shadow Drive
	
	  "Do you want to initialize the debugger at boot time:"
	  Choose Yes or No
	
	After you enter the data the Setup menu appears again. Choose "Supplementary
	menu, and save changes" to exit the Setup menu. The changes will be saved in
	NVRAM. The new boot selection will become the default. The "Manage boot
	selections" menu has a option to rearrange boot selections if you do not want
	the new selection to be the default.
	
	Method 2
	--------
	
	This method is useful if you want to create a Fault Tolerant Floppy (FTF). This
	will allow you to keep the system partition files on a floppy disk.
	
	1. Format a floppy disk of the correct size.
	
	2. Create a directory on the floppy that is the same as the osloader directory
	  on the system partition. For example:
	
	  \os\winnt351
	
	3. Copy the following files into the osloader directory:
	
	  OSLOADER.EXE
	  HAL.DLL
	  All files with the extension PAL.
	
	  NOTE: The .PAL files may have the hidden and system attribute set. These files
	  will always be in the osloader directory on the system partition.
	
	4. Follow the same steps as outlined in Method 1 with the following exception:
	  After selecting New system partition, choose Floppy Disk as the target media.
	  Then enter the floppy disk number when prompted. The rest of the steps are
	  identical to those outlined in Method 1.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.0 3.51
	Issue type        : kbhowto
	
	=============================================================================
	
