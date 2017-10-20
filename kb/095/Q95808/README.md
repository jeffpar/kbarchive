---
layout: page
title: "Q95808: How to Install MS-DOS 6 or 6.2 Upgrade over DR-DOS"
permalink: /kb/095/Q95808/
---

## Q95808: How to Install MS-DOS 6 or 6.2 Upgrade over DR-DOS

{% raw %}

	Article: Q95808
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	You can successfully install the Microsoft MS-DOS versions 6.0 and later Upgrade
	over Digital Research(R) DOS (DR DOS) version 5.0 or 6.0; however, before you
	upgrade your current installation of DR DOS or Novell DR-DOS, you should disable
	the following:
	
	- DR DOS security features
	
	- DR DOS DELWATCH utility
	
	- DR DOS GOTO and ? commands
	
	- DR DOS CHAIN command
	
	NOTE: If you use the SuperStor(R) (STOR) data-compression program provided with
	DR DOS, you should also read the section in this article titled "Your Computer
	Uses DR DOS Disk Compression."
	
	DISABLING SECURITY FEATURES
	---------------------------
	
	If you have any security features, including password protection, disable them.
	When you run the Setup program for the MS-DOS 6.0 or later Upgrade, your system,
	system files, DR DOS directory, and files in your DR DOS directory cannot be
	password protected. The MS-DOS Upgrade Setup program cannot create an Uninstall
	disk if your CONFIG.SYS or AUTOEXEC.BAT file is password protected.
	
	Disabling Password Protection
	-----------------------------
	
	To disable password protection for a specific file, type the following at the
	command prompt:
	
	  " password <filename> /n " (without the quotation marks)
	
	where <filename> is the file you want to remove the password from. When you
	are prompted for the password, type it and then press the ENTER key.
	
	To disable password protection for a specific directory, type the following at
	the command prompt
	
	  " password <dirname> /n " (without the quotation marks)
	
	where <dirname> is the directory you want to remove the password from. When
	you are prompted for the password, type it and then press the ENTER key.
	
	To disable password protection for the entire system, type the following at the
	command prompt:
	
	  " password /ng " (without the quotation marks)
	
	When you are prompted for the password, type it and then press the ENTER key.
	
	  WARNING: The MS-DOS 6.0 and later Upgrade Setup program cannot create an
	  Uninstall disk if your CONFIG.SYS or AUTOEXEC.BAT file is password protected.
	  If any of your DR-DOS system files or your DR-DOS directory are password
	  protected, use the DR-DOS password command to disable the password protection
	  before you install MS-DOS 6.0 or later.
	
	Disabling Master Key Password Protection
	----------------------------------------
	
	If you installed the Master Key password security option with DR DOS, you must
	run DR DOS Setup again to disable it. For more information on this feature, see
	your DR DOS documentation.
	
	DISABLING THE DELWATCH DELETE-PROTECTION UTILITY
	------------------------------------------------
	
	If you have the DELWATCH delete-protection utility installed on your computer,
	you must disable it and purge your deleted files before you install MS-DOS 6.0
	and later. To disable the DELWATCH utility:
	
	1. Use an ASCII text editor to open your AUTOEXEC.BAT file.
	
	2. Remove the command that loads DELWATCH, save the file, and then quit the text
	  editor.
	
	3. Remove any disks in your floppy disk drives, and then restart your computer
	  by pressing CTRL+ALT+DEL.
	
	4. Run the DELPURGE utility to purge your hard disk of pending delete files.
	
	DISABLING THE GOTO AND ? COMMANDS
	---------------------------------
	
	If your CONFIG.SYS or AUTOEXEC.BAT file uses any conditional DR DOS commands
	(such as ? or GOTO), remove those commands and adjust the order of the remaining
	commands accordingly. For more information on the DR DOS GOTO and ? commands,
	see your DR DOS documentation.
	
	DISABLING THE CHAIN COMMAND
	---------------------------
	
	If your CONFIG.SYS file contains the DR DOS CHAIN command, remove it and adjust
	the other CONFIG.SYS commands accordingly. For more information on this command,
	see your DR DOS documentation.
	
	YOUR COMPUTER USES DR DOS DISK COMPRESSION
	------------------------------------------
	
	Drive C is Not Compressed
	-------------------------
	
	If your computer uses disk compression but drive C is not compressed, run Setup
	as described in the "Getting Started" chapter of the "User's Guide" for version
	6.0 and later. When Setup displays the message "Your CONFIG.SYS file contains
	commands that are not valid MS-DOS commands," select the Modify Original Files
	option.
	
	Drive C is Compressed
	---------------------
	
	If your computer uses disk compression, and drive C is compressed, do the
	following:
	
	1. Determine which drive is your original uncompressed drive. For more
	  information, see your DR DOS documentation.
	
	2. Make backup copies of the CONFIG.SYS and AUTOEXEC.BAT files on your
	  compressed drive and the DCONFIG.SYS file on your uncompressed drive.
	
	3. Combine the two configuration files. For example, if drive D is your
	  uncompressed drive, type the following at the command prompt:
	
	  " copy d:\dconfig.sys + c:\config.sys d:\config.sys " (without the quotation
	  marks)
	
	4. Copy the combined CONFIG.SYS file to drive C. For example, if drive D is your
	  uncompressed drive, type the following at the command prompt:
	
	  " copy d:\config.sys c:\config.sys " (without the quotation marks)
	
	5. Copy your AUTOEXEC.BAT file to your uncompressed drive. For example, if drive
	  D is your uncompressed drive, type the following at the command prompt:
	
	  " copy c:\autoexec.bat d:\autoexec.bat " (without the quotation marks)
	
	6. Run Setup.
	
	7. When Setup displays the message "Your CONFIG.SYS file contains commands that
	  are not valid MS-DOS commands," select the Modify Original Files option.
	
	  When Setup displays the message "Because you are currently using the DR DOS
	  operating system," choose Continue.
	
	8. After Setup is complete, MS-DOS displays an "Unrecognized command" message on
	  your screen for each command in your AUTOEXEC.BAT and CONFIG.SYS files that
	  is not a valid MS-DOS command. Remove these commands from your CONFIG.SYS and
	  AUTOEXEC.BAT files.
	
	9. Add the following command to the beginning of your CONFIG.SYS file, and then
	  restart your computer:
	
	  " device=c:\dos\himem.sys " (without the quotation marks)
	
	Setup Displays the Message "Your Computer Uses a Disk-Compression
	
	Program and Does Not Have Enough Free Disk Space to Set Up MS-DOS
	-----------------------------------------------------------------
	
	If Setup displays the message "Your computer uses a disk-compression program and
	does not have enough free disk space to set up MS-DOS," you must convert your DR
	DOS 6 SuperStor compressed drive to an MS-DOS 6.0 or later DoubleSpace drive
	using the procedure below. This is necessary because the DR DOS 6 SuperStor
	program does not provide the functionality for increasing the size of your
	uncompressed host drive.
	
	1. Using the DR DOS BACKUP command, back up your program and data files. For
	  more information on using the BACKUP command, refer to your DR DOS
	  documentation.
	
	2. Insert the MS-DOS 6.0 or later Setup Disk 1 in drive A or B and use the SETUP
	  command with the /F switch. For example, if you inserted Setup Disk 1 in
	  drive A, type the following at the MS-DOS command prompt and then press
	  ENTER:
	
	  " a:setup /f " (without the quotation marks)
	
	  IMPORTANT: After you type the above command and Setup prompts you to insert a
	  disk to create the startup floppy disk, you must create that disk in drive A.
	  Also, be sure that you choose to install on drive A.
	
	3. Make sure that the startup disk you created in step 2 is in drive A, and then
	  restart your computer by pressing CTRL+ALT+DEL.
	
	4. Use the MS-DOS FORMAT command to reformat all your drives. When you format
	  drive C, be sure to use the /S parameter to make the disk bootable. To do
	  this, type the following command at the MS-DOS command prompt and then press
	  ENTER:
	
	  " format c: /s " (without the quotation marks)
	
	5. Use the MS-DOS 6.0 or later RESTORE command, which is located on the startup
	  disk you created in step 2, to restore your program and data files. For
	  example, to restore your files from drive A to drive C, type the following
	  command at the MS-DOS command prompt and then press ENTER:
	
	  " restore a: c:\*.* /s " (without the quotation marks)
	
	  IMPORTANT: Do not restart your computer before proceeding to step 6.
	
	  NOTE: If some of your files cannot be restored to your hard disk because you
	  don't have enough disk space, you need to install the MS-DOS 6 or later
	  Upgrade, run DoubleSpace to compress your hard disk, and then restore your
	  files. After you finish restoring your files, continue with step 6.
	
	6. To remove your DR DOS files, install the MS-DOS 6 or 6.2 Upgrade again. To do
	  this, insert the MS-DOS 6 or laster Setup Disk 1 in drive A, type "SETUP"
	  (without the quotation marks), and follow the instructions on your screen.
	
	DR DOS is manufactured by Novell, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: appnote dr-dos novell double space dblspace drive drvspace set up drdos dr dos digital research readme.txt
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
