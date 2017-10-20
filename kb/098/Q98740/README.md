---
layout: page
title: "Q98740: System Hangs at &quot;Starting MS-DOS&quot; Message with DoubleSpace"
permalink: /kb/098/Q98740/
---

## Q98740: System Hangs at &quot;Starting MS-DOS&quot; Message with DoubleSpace

{% raw %}

	Article: Q98740
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you compress an existing drive with DoubleSpace, the system may stop
	responding (hang) during startup when the "Starting MS-DOS" text appears.
	
	If you install DoubleSpace on your boot drive, the following error message may be
	displayed:
	
	  Bad or Missing Command Interpreter
	
	CAUSE
	=====
	
	Your system may hang during startup because it is unable to mount the compressed
	volume file (CVF) and load the command interpreter. In this situation, the same
	problem occurs if you try to boot with an MS-DOS 6.0 floppy disk.
	
	Your system may display the error message above if the compressed drive did not
	mount properly and the COMMAND.COM file is not accessible on the drive.
	
	WORKAROUND
	==========
	
	If your system hangs during startup, try the following:
	
	1. Boot with another version of MS-DOS.
	
	2. Create a blank DBLSPACE.INI file.
	
	3. Use your MS-DOS 6.0 startup disk to reboot the system and manually mount the
	  compressed drive.
	
	If your system displays the error message, copy the COMMAND.COM file to the root
	directory of the drive as follows:
	
	1. Boot from an MS-DOS system disk, such as MS-DOS Upgrade Disk 1 or Uninstall
	  Disk 1.
	
	2. When the message "Starting MS-DOS..." appears, press the F5 key to perform a
	  clean boot.
	
	3. Use the following command to copy the COMMAND.COM file to the boot drive:
	
	     copy a:\command.com c:\command.com
	
	4. Remove the disk from the A drive and reboot the machine.
	
	The error message should no longer appear. If your machine locks up, you may need
	to use the extended procedure below.
	
	MORE INFORMATION
	================
	
	If a DBLSPACE.INI file exists on the boot drive and it has an ActivateDrive=
	line, DoubleSpace attempts to mount the drive specified. If for some reason it
	cannot be mounted and the system hangs, mounting the drive manually may correct
	the problem. To do so, use the steps below.
	
	Before starting this procedure, you need the following two items:
	
	- A bootable disk from an earlier version of MS-DOS
	
	- The ATTRIB.EXE file from the earlier version of MS-DOS
	
	NOTE: If you use MS-DOS 4.01 or earlier, you need to use a third- party program
	instead of the ATTRIB program to remove system or hidden file attributes.
	
	1. Reboot using a floppy disk with a version of MS-DOS earlier than 6.0.
	
	2. If you are using MS-DOS version 4.01 or earlier, use a third-party program to
	  clear the file attributes on the DBLSPACE.INI file.
	
	3. If you are using MS-DOS 5 Upgrade, insert MS-DOS 5 Upgrade Disk 2 (5.25-inch)
	  or Disk 3 (3.5-inch) and type the following lines at the MS-DOS command
	  prompt, pressing ENTER after each line:
	
	  " a:expand a:attrib.ex_ c:\attrib.exe
	  c:\attrib -s -h -r c:\dblspace.ini " (without the quotation marks)
	
	  NOTE: This example assumes you are using floppy disk drive A; substitute drive
	  B if appropriate.
	
	4. Rename the DBLSPACE.INI file. For example:
	
	     ren c:\dblspace.ini temp.ini.
	
	5. Type the following at the MS-DOS command prompt:
	
	  " copy con dblspace.ini " (without the quotation marks)
	
	  After you type the above line, press ENTER twice, press the F6 key, and then
	  press ENTER again; this creates a blank DBLSPACE.INI file.
	
	6. Restore the attributes to the DBLSPACE.INI file by typing the following
	  command:
	
	  " c:\attrib +s +h +r c:\dblspace.ini " (without the quotation marks)
	
	  Note: If you are using MS-DOS version 4.01 or earlier, use a third-party
	  program to set the file attributes on the DBLSPACE.INI file.
	
	7. Insert MS-DOS 6.0 Disk 1 and type the following at the MS-DOS command prompt,
	  pressing ENTER after each line:
	
	  " copy a:command.com c:\
	  copy a:attrib.exe c:\
	  copy a:expand.exe c:\ " (without the quotation marks)
	
	  NOTE: This example assumes you are using floppy disk drive A; substitute drive
	  B if appropriate.
	
	8. Insert MS-DOS 6.0 Disk 3 (3.5-inch) or Disk 4 (5.25-inch), type the following
	  at the MS-DOS command prompt, and then press ENTER:
	
	  " expand a:dblspace.ex_ c:\dblspace.exe " (without the quotation marks)
	
	9. Remove all floppy disks, reboot, and then type the following at the MS-DOS
	  command prompt:
	
	  " c:\dblspace /mount c: " (without the quotation marks)
	
	  Alternatively, run DBLSPACE.EXE, choose Mount from the Drive menu, and try to
	  mount C:\DBLSPACE.000. If the drive mounts successfully, quit DoubleSpace,
	  and reboot your computer.
	
	Additional query words: 6.00 double space dblspace errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
