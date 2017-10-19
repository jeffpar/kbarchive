---
layout: page
title: "Q97608: MS-DOS 6 Err Msg: Too Many Block Devices"
permalink: /kb/097/Q97608/
---

## Q97608: MS-DOS 6 Err Msg: Too Many Block Devices

	Article: Q97608
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; Win95:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	You receive the following error message when you start your computer with MS-DOS
	6.0 or later:
	
	  Too many block devices
	
	CAUSE
	=====
	
	If this message is displayed, one of the following conditions is occurring:
	
	- Too many block device drivers (for example, RAMDRIVE.SYS or a third-party
	  block driver, such as a removable media driver) are being loaded from your
	  CONFIG.SYS file.
	
	- One of your device drivers does not recognize the available drive letters.
	
	- You need to reconfigure your DoubleSpace-compressed drive(s).
	
	- You have an IBM 3363 optical drive conflict.
	
	- You manually removed MS-DOS DoubleSpace files (including your compressed
	  volume file (CVF) and DBLSPACE.BIN) but did not delete the DBLSPACE.INI file.
	
	MORE INFORMATION
	================
	
	This problem may occur more often if you are using DoubleSpace because
	DoubleSpace always allocates enough drive letters to reach from the last default
	block device to the letter specified by the LastDrive line in the DBLSPACE.INI
	file. If an additional block device is added after installing DoubleSpace,
	DoubleSpace attempts to preserve the quantity of available drives. Such attempts
	may increase the total number of drives beyond the 26 available drive letters.
	
	DBLSPACE.SYS /MOVE Command Is Before a Block Device
	---------------------------------------------------
	
	If the DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE command in the CONFIG.SYS file is
	placed before the newly added block device (a device driver that uses a drive
	letter), the block device takes the next available drive letter after the
	LastDrive line in the DBLSPACE.INI file.
	
	For example, if LastDrive is set to X and you add a block device after
	DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE, the block device is assigned the drive
	letter Y. If you add two more block devices after DEVICEHIGH=C:\DOS\DBLSPACE.SYS
	/MOVE, one becomes drive Z and the other causes the "Too many block devices"
	error message.
	
	To correct this problem, run DoubleSpace and decrease the LastDrive statement. If
	DoubleSpace does not allow you to decrease the drive letter, you must edit the
	DBLSPACE.INI file manually. To do this, use the following steps:
	
	1. If you use Microsoft Windows and have a permanent swap file (PSF), run
	  Windows, note the current size of your PSF, and then change your PSF to None.
	  (You will undo this change later in this procedure.)
	
	2. Change to the host drive (for example, H).
	
	3. Use the ATTRIB command to change the file attributes on the DBLSPACE.INI file
	  as in the following example:
	
	  attrib h:\dblspace.ini -s -h -r
	
	4. Using a text editor, such as MS-DOS Editor, open the DBLSPACE.INI file and
	  change the LastDrive setting to the letter you want to be the host drive.
	
	5. Change the first parameter in the ActivateDrive line to the same letter you
	  used in step 3.
	
	  WARNING: Do not change the second parameter, which is (represented by
	  <xx>) in the following example:
	
	     Before change:     ActivateDrive=X,<xx>
	     After change:      ActivateDrive=N,<xx>
	
	  WARNING: If you use a drive letter that is used by a physical device (such as
	  drive A) for the N value, the system may stop responding (hang) or
	  continually reboot when you restart it.
	
	6. Save your changes and quit the text editor.
	
	7. Reset the System, Hidden, and Read-Only attributes on the DBLSPACE.INI file
	  as in the following example:
	
	  attrib h:\dblspace.ini +s +h +r
	
	8. Restart your computer by pressing CTRL+ALT+DEL.
	
	9. If you removed your PSF in step 1, run Windows and re-create the PSF on your
	  host drive. Do not attempt to create the PSF on your DoubleSpace-compressed
	  drive. You may receive the following message if you re-create your PSF at its
	  previous size:
	
	  Windows will not use more than the virtual memory specified by the
	  Recommended Size. Are you sure you want to create a larger swap file?
	
	  You can ignore this error message; it is probably incorrect. As long as the
	  PSF is not larger than four times your physical memory, Windows can use a
	  swap file that is larger than the recommended size.
	
	DBLSPACE.SYS /MOVE Command Is After a Block Device
	--------------------------------------------------
	
	If the DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE command in the CONFIG.SYS file is
	placed after the newly added block device (a device driver that uses a drive
	letter), the block device takes the next available drive letter after the last
	physical block device (for example, the last hard disk drive partition), and
	pushes the available drive letters for DoubleSpace beyond the value specified in
	the DBLSPACE.INI file LastDrive statement.
	
	For example, DBLSPACE /LIST reports drive Y as being available for DoubleSpace's
	use when the DBLSPACE.INI file reports LastDrive=X. If your last logical drive
	is C and you add one block device before DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE.
	The block device becomes drive D. If you add two more block devices, then one of
	them becomes E and the other causes MS-DOS to display the "Too many block
	devices" error message.
	
	To correct this problem, use the same procedure in the previous section.
	
	You Have an IBM3363 Optical Drive Conflict
	------------------------------------------
	
	After you run DoubleSpace on an IBM PS/2 with a 3363 optical drive, you may
	receive the error message "Too many block devices" when the ECYDDX.SYS device
	driver in loaded from the CONFIG.SYS file. As a result, the DoubleSpace drive
	letter mapping may shift and the LastDrive= and FirstDrive= settings in the
	DBLSPACE.INI file may be changed.
	
	To work around this problem, change the drives reserved by ECYDDX.SYS by adding
	the DRIVES=<n> parameter to the ECYDDX.SYS command in the CONFIG.SYS file
	(where <n> is the number of drives).
	
	NOTE: IBM3363.EXE is used in place of MSCDEX.EXE with this drive.
	
	ECYDDX.SYS is a device driver used with the IBM 3363 optical drive. This driver
	is used in conjunction with IBM3363.EXE to provide access to the IBM 3363
	optical drive. By default, the ECYDDX.SYS driver reserves eight drives on a PS/2
	and one drive on a PS/1. These reserved drives behave like block devices and
	take the next available drive letters when loading.
	
	NOTE: This may also apply to the IBM PC/Support program and its driver,
	FSDDX.SYS. By default, FSDDX.SYS allocates eight drives and may need the
	DRIVES=<n> parameter added.
	
	You Manually Removed MS-DOS DoubleSpace files (Including Your Compressed
	
	Volume File (CVF) and DBLSPACE.BIN), but Did Not Delete DBLSPACE.INI
	--------------------------------------------------------------------
	
	To work around this problem, delete DBLSPACE.INI. If you have removed all your
	DoubleSpace drives, type the following at the MS-DOS command prompt and then
	press ENTER:
	
	  " deltree c:\dblspace.ini /y " (without the quotation marks)
	
	For more information about block devices and DoubleSpace, query on the following
	words in the Microsoft Knowledge Base:
	
	  " how doublespace assigns drive letters " (without the quotation marks)
	
	Additional query words: 6.22 6.00 6.20 last drive lastdrive double space mount can't mapping reserved CD compact disk EXYDDX.SYS
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; Win95:
	
	=============================================================================
	
