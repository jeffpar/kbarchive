---
layout: page
title: "Q77626: Uninstalling After Deleting the OLD_DOS.1 Directory"
permalink: kb/077/Q77626/
---

## Q77626: Uninstalling After Deleting the OLD_DOS.1 Directory

	Article: Q77626
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete your OLD_DOS.1 directory and then use your MS-DOS version 5.0 or
	later Uninstall disk to attempt to return to your previous version of MS- DOS,
	you may receive the following message:
	
	  Uninstalling MS-DOS n.n is no longer possible
	
	  The information needed to restore your original version of DOS is no longer
	  present on your hard disk. Please remove the Uninstall disk from your drive
	  and press the ENTER key to restart your system.
	
	WORKAROUND
	==========
	
	To recreate the OLD_DOS.1 directory and complete the uninstall process, you need
	to have the following:
	
	- Your previous version of MS-DOS on floppy disks
	
	- Your MS-DOS 5.0 or later Uninstall disk
	
	(NOTE: The Uninstall disk can only be used ONCE to uninstall back to your
	previous version of MS-DOS. If you've already used it to uninstall before, the
	following procedure cannot work.)
	
	The Uninstall program works if you have an OLD_DOS.1 directory with a file named
	README.NOW in it. If you don't have this file, do the following:
	
	1. Type "MD OLD_DOS.1" (without the quotation marks) and press ENTER at the
	  command prompt to create the OLD_DOS.1 directory in your root directory.
	
	2. Type "CD \OLD_DOS.1" (without the quotation marks) and press ENTER to go into
	  the OLD_DOS.1 directory.
	
	3. Type "COPY CON README.NOW" (without the quotation marks) and press ENTER
	  twice.
	
	4. Press CTRL+Z, then press ENTER. The message should appear.
	
	  1 file(s) copied
	
	5. Put the disk with your previous MS-DOS version into drive A.
	
	6. Type "COPY A:*.* C:\OLD_DOS.1" (without the quotation marks) to copy the
	  files from the disk(s) into the OLD_DOS.1 directory. (Make sure the
	  COMMAND.COM file gets copied there.)
	
	7. Remove the DOS disk, insert the Uninstall disk in drive A, and reboot your
	  machine. You should now be able to uninstall MS-DOS 5.0.
	
	NOTE: Make sure that you do steps 5-7 if you want all of the utilities from your
	previous version of MS-DOS. Without these steps, Uninstall only removes your
	MS-DOS system files. Furthermore, you may run into problems booting up if your
	COMSPEC variable is set to your DOS sub-directory and you didn't copy your
	COMMAND.COM to that subdirectory.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 un-install
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
