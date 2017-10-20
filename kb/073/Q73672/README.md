---
layout: page
title: "Q73672: Upgrading to MS-DOS 5.0 over Stacker"
permalink: /kb/073/Q73672/
---

## Q73672: Upgrading to MS-DOS 5.0 over Stacker

{% raw %}

	Article: Q73672
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have STAC Electronics Stacker 1.0 installed on your machine and you want
	to upgrade to MS-DOS version 5.0, follow the procedure below. If any of these
	steps fail, please contact STAC Electronics technical support by calling (619)
	431-6712 or faxing (619) 431-1073.
	
	If you Stacker version 2.0 or later, follow the instructions in your Stacker
	manual to update to MS-DOS 5.0. If you have Stacker version 1.1 or earlier,
	obtain an automatic update utility from Stac Electronics.
	
	MORE INFORMATION
	================
	
	To upgrade your machine to MS-DOS 5.0, do the following:
	
	1. IMPORTANT: Back up your hard drive. This is for your benefit.
	
	2. Install MS-DOS 5.0 to floppy disks with the SETUP /F command.
	
	3. Determine which drive is your boot drive using the following procedure:
	
	  a. Remove any disk from drive A and reboot the machine.
	
	  b. Insert the Stacker disk in drive A.
	
	  c. Type "A:\SWAPMAP" (without the quotation marks).
	
	  d. Record the drive letter that "was drive C: at boot time." For example, in
	     the following sample display of SWAPMAP, drive D is the one you are
	     looking for:
	
	        Drive A: was drive A: at boot time
	        Drive B: was drive B: at boot time
	        Drive C: was drive D: at boot time [D:\STACVOL.000 = 16.0MB]
	        Drive D: was drive C: at boot time
	
	4. Transfer the system files to the hard drive. Insert the MS-DOS 5.0 Support
	  disk (5.25-inch) or Startup/Support disk (3.5-inch) in the floppy drive.
	
	  Type "SYS x:" (without the quotation marks), where x is the drive that is
	  swapping with drive C. In the above example, this is drive D. If you are not
	  swapping drives, type "C:" (without the quotation marks). If you are
	  requested to "Insert the system disk in drive A:", insert the Startup disk.
	
	  If SWAPMAP gives the output "Drive C: was Drive C: at boot time," go to step
	  6.
	
	5. Note: The MS-DOS SYS command will NOT work on Stacker volumes. This step
	  accomplishes the same thing as the SYS command.
	
	  a. Remove the MS-DOS 5.0 Startup or Startup/Support disk and insert the
	     Stacker disk.
	
	  b. In the following commands, x represents the drive that is swapped with
	     drive C. If you are using an IBM version of DOS, the system files are
	     named IBMBIO.COM, and IBMDOS.COM. Use these in place of IO.SYS and
	     MSDOS.SYS. Type the following commands:
	
	  " sattrib -r -s -h c:\io.sys
	  sattrib -r -s -h c:\msdos.sys
	  sattrib -r -s -h x:\io.sys
	  sattrib -r -s -h x:\msdos.sys
	
	  copy x:\io.sys c:\
	  copy x:\msdos.sys c:\
	  copy x:\command.com c:\
	
	  sattrib +r +s +h c:\io.sys
	  sattrib +r +s +h c:\msdos.sys
	  sattrib +r +s +h x:\io.sys
	  sattrib +r +s +h x:\msdos.sys" (without the quotation marks)
	
	6. Copy MS-DOS files as needed.
	
	  a. Remove the Stacker disk and insert the Startup or Startup/Support disk.
	
	  b. Use the COPY command to copy some or all of the files to your hard disk.
	     It is a good idea to put the MS-DOS version 5.0 files in the same
	     directory in which you stored your previous MS-DOS files. If you copy the
	     MS-DOS 5.0 files to a different directory, the paths in the CONFIG.SYS and
	     AUTOEXEC.BAT files will be incorrect.
	
	  c. Insert each of the remaining working disks in the disk drive and copy the
	     files you want. Remember, there will be a DOS directory on the Stacker
	     volume as well as on the uncompressed drive. Make sure you include a copy
	     of COMMAND.COM in your DOS subdirectories.
	
	The product included here, Stacker, is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Reference(s):
	
	STAC Electronics
	technical support: Phone (619) 431-6712
	Fax (619) 431-1073
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
