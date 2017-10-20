---
layout: page
title: "Q114425: WFWG 3.11: How to Create a Boot Disk to Load Real-Mode Network"
permalink: /kb/114/Q114425/
---

## Q114425: WFWG 3.11: How to Create a Boot Disk to Load Real-Mode Network

{% raw %}

	Article: Q114425
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kbsetup kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	This article discusses using Microsoft Windows for Workgroups with a floppy
	disk configuration. Although the information outlined in this article does
	allow Windows for Workgroups to access the network from a floppy disk,
	Microsoft does not support this procedure. If the steps or procedures
	described in this article do not function properly, a standard Windows for
	Workgroups configuration should be used to access the network.
	
	SUMMARY
	=======
	
	The steps below describe how to create a bootable floppy disk that loads the
	real-mode network, which allows you to connect to a Windows for Workgroups 3.11
	server. Once connected to the server, a full or a network setup (SETUP /N) can
	be run to a local hard disk drive or to a directory on a server machine. This
	setup disk is ideal for running a large number of installations to local hard
	disk drives without needing the Windows for Workgroups 3.11 disks for each
	installation.
	
	This article assumes the following things:
	
	- The network hardware is already installed.
	
	- All machines are using the same network adapter card with the same hardware
	  settings. (If different network cards are being used, follow the instructions
	  in the note in step 3.)
	
	- The workstation has at least 4 megabytes (MB) of RAM if run from a diskless
	  workstation or 3 MB of RAM if run from a machine with a hard disk drive.
	
	- SETUP /A will be installed to a C:\WINSHARE directory.
	
	- SETUP /N will be installed to a C:\directory.
	
	MORE INFORMATION
	================
	
	1. Create a bootable floppy disk.
	
	  NOTE: If you are using MS-DOS 6.x and you are not using DoubleSpace, you can
	  delete the DBLSPACE.BIN file from the floppy disk to create more disk space.
	
	2. Run an administrative installation (SETUP /A) of Windows for Workgroups 3.11
	  to a C:\WINSHARE directory. This machine will be referred to as the server
	  machine.
	
	3. From the C:\WINSHARE directory, run a shared network installation (SETUP /N)
	  to the server's hard disk drive (for example C:\KBNETWORK). Use the Custom
	  Setup option to perform the following steps:
	
	  a. Clear the Set Up Printers and "Set Up Applications Already on Hard
	     Disk(s)" check boxes.
	
	  b. Select None for the Swapfile setting.
	
	  NOTE: To create a second floppy disk for a different type of network adapter
	  card, simply repeat step 3 but choose a different directory name when you run
	  SETUP /N. Ensure that the appropriate network adapter card and its settings
	  are detected during Setup.
	
	4. Delete the following files from the C:\directory to free additional disk
	  space for the floppy disk:
	
	  *.CLN
	  *.WIN
	  BOOTLOG.TXT
	  EMM386.EXE
	  MOUSE.INI
	  MSCDEX.EXE
	  NCDINFO.INI
	  SPART.PAR
	
	5. Copy the contents of the C:\directory to the root of the floppy disk you
	  formatted in step 1.
	
	6. Create an AUTOEXEC.BAT file and a CONFIG.SYS file on the floppy disk with at
	  least the following entries:
	
	         CONFIG.SYS
	         ==========
	
	         Files=30
	         Buffers=20
	         Lastdrive=z
	         Device=A:\HIMEM.SYS
	         Device=A:\IFSHLP.SYS
	         Device=A:\RAMDRIVE.SYS 1024 512 512 /E
	         <Third-party disk partitioner>
	         <Third-party disk-compression driver>
	         <Other necessary third-party driver>
	
	  NOTE: If the workstation has a hard disk drive, the Device=A:\RAMDRIVE.SYS is
	  not necessary and can be removed from the CONFIG.SYS file.
	
	         AUTOEXEC.BAT
	         ============
	
	         A:\SMARTDRV A+
	         Path=a:\;w:
	         A:\NET LOGON UserName Password
	         A:\NET USE W: <\\SERVER>\<ShareName> /p:No
	         Set Temp=C:\ 
	
	  NOTE: <\\SERVER> is the name of the machine that contains the Setup /A
	  (C:\WINSHARE) copy of Windows for Workgroups. <\\ShareName> is the name
	  given to the C:\WINSHARE directory when it is shared. (See step 9 for more
	  information.)
	
	7. Edit the SYSTEM.INI file on the floppy disk and set the DEVDIR entry in the
	  [Network Drivers] section to equal A:\.
	
	8. Edit the SYSTEM.INI file in the C:\directory and delete the AutoStart=FULL
	  line from the [Network] section.
	
	9. Reboot the server machine and run Windows from the hard disk drive. Share the
	  C:\WINSHARE directory from File Manager.
	
	10. Boot a workstation with the floppy disk you created.
	
	  NOTE: The first time you use this floppy disk, you must reenter the password
	  you entered in the logon line in the AUTOEXEC.BAT file.
	
	11. At the A:\ prompt, change to the W: drive and install Windows for Workgroups
	  to this workstation's hard disk drive, or just run Windows from the floppy
	  disk by typing "win" (without the quotation marks).
	
	NOTE: If you need help using the network commands at the MS-DOS command prompt,
	you type "net /?" (without the quotation marks) or "net use /?" (without the
	quotation marks) to access online help and syntax for most network commands.
	
	Additional query words: 3.11 boot system disk diskless workstation
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
