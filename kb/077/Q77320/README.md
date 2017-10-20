---
layout: page
title: "Q77320: Err Msg: SMARTDrive Reports Incompatible Partitions"
permalink: /kb/077/Q77320/
---

## Q77320: Err Msg: SMARTDrive Reports Incompatible Partitions

{% raw %}

	Article: Q77320
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your system includes a disk partition that was created using third- party
	software, such as Disk Manager or SpeedStor, you might receive this message:
	
	  SMARTDrive: Incompatible disk partition detected.
	
	You might also receive this message if your system has a UNIX partition.
	
	RESOLUTION
	==========
	
	This problem is typical of disk-caching utilities. There are two solutions to
	the problem. The one you choose depends on what type of system you have.
	
	If your hard disk has more than 1024 cylinders, you should not use SMARTDrive.
	Use your disk-partitioning program, such as SpeedStor or Disk Manager, to
	determine whether your computer has more than 1024 cylinders.
	
	If your hard disk has 1024 or fewer cylinders, or has a UNIX partition, you can
	load SMARTDrive by specifying the /p switch.
	
	To disable SMARTDrive:
	----------------------
	
	1. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file. If
	  you want to use MS-DOS Editor, type the following command:
	
	  " edit config.sys" (without the quotation marks)
	
	2. Find the command that loads your SMARTDRV.SYS file. It should look like the
	  following:
	
	  DEVICE=C:\DOS\smartdrv.sys
	
	3. Type "rem" (without the quotation marks) in front of the SMARTDrive command.
	  For example, the command should look like the following:
	
	  rem DEVICE=C:\DOS\smartdrv.sys
	
	4. Save the CONFIG.SYS file and exit your text editor. If you're using MS-DOS
	  Editor, choose Save from the File menu. When MS-DOS Editor displays a dialog
	  box prompting you to save your file, choose Yes, or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	To load SMARTDrive using the /p switch:
	---------------------------------------
	
	1. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file. If
	  you want to use MS-DOS Editor, type the following command:
	
	  " edit config.sys" (without the quotation marks)
	
	2. Find the command that loads your SMARTDRV.SYS file. It should look like the
	  following:
	
	  DEVICE=C:\DOS\smartdrv.sys
	
	3. Type "/p" (without the quotation marks) at the end of the command. The
	  corrected command should look like the following:
	
	  DEVICE=C:\DOS\smartdrv.sys /p
	
	4. Save the CONFIG.SYS file and exit your text editor. If you're using MS-DOS
	  Editor, choose Save from the File menu. When MS-DOS Editor displays a dialog
	  box prompting you to save your file, choose Yes, or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	
	
	Additional query words: appnote 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
