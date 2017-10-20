---
layout: page
title: "Q74307: MS-DOS Upgrade Detects DOS Path as D:&#92;DOS with Stacker"
permalink: /kb/074/Q74307/
---

## Q74307: MS-DOS Upgrade Detects DOS Path as D:&#92;DOS with Stacker

{% raw %}

	Article: Q74307
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
	
	The MS-DOS 5 or later Upgrade and MS-DOS 6.2 Step-Up should not be used to
	upgrade a primary DOS partition being compressed by Stacker. The upgrade
	identifies the DOS path as D:\DOS. There is no way to change the drive letter.
	When setup is complete, the disk will not be bootable.
	
	MORE INFORMATION
	================
	
	Stacker works by creating a file named STACVOL.xxx in the root directory of the
	drive to be compressed. Stacker then creates a new drive that is contained
	within that file. When you access the new Stacker volume, the Stacker program
	compresses and decompresses data to and from the STACVOL.xxx file stored in the
	root of the compressed drive.
	
	Typically, the MS-DOS 5 upgrade will report that there is not enough free disk
	space to install in a Stacker volume. The Setup program is not fooled by the
	SSWAP.COM program; Setup finds the real primary DOS partition, even if it has
	been swapped to the D drive, and checks the free space. Typically, there is
	little free space on this drive due to the STACVOL.xxx file.
	
	WORKAROUND
	==========
	
	The following procedure will upgrade a system using Stacker on the D drive:
	
	1. Install the MS-DOS Upgrade to floppy disks.
	
	2. Run SYS on the drive that was the C drive at boot time.
	
	3. Copy COMMAND.COM to the drive that was the C drive at boot time.
	
	4. Copy IO.SYS, MSDOS.SYS, and COMMAND.COM to the Stacker volume.
	
	5. Copy all files from the floppy disks to the C:\DOS subdirectory on the
	  Stacker volume.
	
	NOTE: If you are using MS-DOS 5.0 or later you can skip step 3 as SYS copies
	COMMAND.COM automatically.
	
	You may also want to set the attributes on MSDOS.SYS and IO.SYS to hidden files.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 6.22 5.00 3rdparty 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
