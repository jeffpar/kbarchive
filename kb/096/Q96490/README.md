---
layout: page
title: "Q96490: NETWORKS.TXT: MS-DOS 6 Upgrade, 6.2 Upgrade, and 6.2 Step-Up"
permalink: /kb/096/Q96490/
---

## Q96490: NETWORKS.TXT: MS-DOS 6 Upgrade, 6.2 Upgrade, and 6.2 Step-Up

	Article: Q96490
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the NETWORKS.TXT file. The same file is
	included with the MS-DOS 6 Upgrade, MS-DOS 6.2 Upgrade, and MS-DOS 6.2 Step-Up
	(both disk and bulletin board service versions).
	
	MORE INFORMATION
	================
	
	NETWORKS.TXT
	
	This file contains information about making your network compatible with MS-DOS
	6. If you are running MS-DOS 5.0, you do not need to make any changes to your
	network to make it compatible with MS-DOS 6.
	
	If Setup referred you to this file, see Section 1 below. If you are looking for
	additional information about your network software, find the appropriate section
	below.
	
	This file contains the following sections:
	
	1. Setup referred you to the NETWORKS.TXT file
	
	2. DoubleSpace and Network Drivers
	
	3. MS-DOS Shell and Networks
	
	4. 3+Share
	
	5. Arcnet systems
	
	6. Artisoft LANtastic
	
	7. AT&T StarGroup (non-LAN Manager)
	
	8. Banyan VINES
	
	9. DEC Pathworks and PCSA
	
	10. IBM PC LAN
	
	11. IBM DOS LAN Requester Version 1.30 or Earlier
	
	12. Microsoft LAN Manager and 100-Percent Compatible Networks
	
	13. Microsoft MS-Net and 100-Percent Compatible Networks
	
	14. Net/One PC
	
	15. Novell Networks
	
	16. Novell Networks and DoubleSpace
	
	17. PC-NFS
	
	18. TCS 10Net or DCA 10Net
	
	1.  Setup referred you to the NETWORKS.TXT file
	-----------------------------------------------
	
	If Setup displayed the "You have specified that your computer is connected to a
	network" screen, your computer might be running an older version of network
	software that is incompatible with MS-DOS 6. For more information, see the
	section in this file that addresses your network software. If you don't find
	instructions on making your network compatible with MS-DOS 6, obtain an upgrade
	of your network software from your network vendor, install the upgraded network
	files, and then run MS-DOS 6 Setup again.
	
	After you have upgraded your network software, when Setup displays the "You have
	specified that your computer is connected to a network" screen, choose the
	Continue option. Your network should work correctly with MS-DOS 6.
	
	2. DoubleSpace and Network Drivers
	----------------------------------
	
	If you have any problems running your network software on a DoubleSpace drive,
	make sure that the command that loads your DBLSPACE.SYS file appears in your
	CONFIG.SYS file before any commands that load your network drivers.
	
	For problems with specific network software and DoubleSpace, refer to the section
	below pertains to your network sofware.
	
	3. MS-DOS Shell and Networks
	----------------------------
	
	Most network software won't work correctly if you start it from a command prompt
	in MS-DOS Shell. Start your network before starting MS-DOS Shell.
	
	4. 3+Share
	----------
	
	If your network software is 3+Share 1.6 or earlier, and you previously upgaded to
	MS-DOS 5.0, your current version of the 3+Share redirector will work with MS-DOS
	6. After you install MS-DOS 6, type the following at the command prompt, and
	restart your computer:
	
	  " SETVER MSREDIR.EXE 5.0" (without the quotation marks)
	
	If you do not have the redirector included with the MS-DOS 5.0, obtain the
	redirector by ordering the Supplemental disks.
	
	After you obtain the redirector, follow the instructions in the NET.TXT file on
	the Supplemental disks.
	
	5. Arcnet systems
	-----------------
	
	If your network uses Arcnet hardware, you might need to run the Microsoft
	Diagnostics (MSD) program by using the MSD /I command. If you must use the /I
	switch, do not choose the Networks option in MSD.
	
	6. Artisoft LANtastic
	---------------------
	
	If you are using any version of Artisoft LANtastic, shut down the LANtastic
	server before you run MS-DOS 6 Setup. There is no need to shut down the
	redirector.
	
	Artisoft LANtastic versions 3.02 and higher are compatible with MS-DOS 6.
	
	If you are using a LANtastic version earlier than 2.5, contact your network
	vendor for an update.
	
	If you are using LANtastic versions 2.5 through 3.01, carry out the following
	procedure
	
	To update LANtastic versions 2.5 through 3.01:
	
	1. Shut down the LANtastic server. You can leave the redirector running.
	
	2. Set up MS-DOS 6 on your computer. For more information about installing
	  MS-DOS 6, see the chapter "Getting Started" in the MICROSOFT MS-DOS USER'S
	  GUIDE.
	
	  If MS-DOS displays an "Incorrect DOS version" message when your network
	  restarts, ignore it.
	
	3. Type the following command at the command prompt:
	
	  " SETVER SERVER.EXE 4.00" (without the quotation marks)
	
	4. Restart your computer.
	
	If you are using EMM386, you might need to exclude the memory area used by the
	network adapter card. To do this, use the X switch with the DEVICE command for
	EMM386.EXE in your CONFIG.SYS file. If you are using the factory-set defaults
	for the LANtastic 2Mbps adapter, include the X=D800-DFFF switch with the DEVICE
	command for EMM386.EXE. If this memory region is not excluded, you might
	experience problems with programs that use expanded memory.
	
	NOTE Microsoft Defragmenter is incompatible with LANtastic network software if
	the server service is loaded. If only the redirector is loaded, Microsoft
	Defragmenter is compatible with LANtastic network software.
	
	NOTE You cannot use DoubleSpace to compress a drive on a LANtastic server because
	all local drives are viewed as network drives. To compress a drive, disable the
	server service by typing REM and space in front of the server command in your
	AUTOEXEC.BAT file, and restarting the computer. Then run DoubleSpace to compress
	the drive. After you run DoubleSpace, remove the REM command from your
	AUTOEXEC.BAT file.
	
	After you compress a drive on a server, some DoubleSpace features-- such as the
	LIST, CHKDSK, MOUNT, and UNMOUNT features--will not work correctly unless you
	stop the server service.
	
	Also, the NET command will not display the drive configuration of your server
	correctly. For example, any drive an "Available for DoubleSpace" drive will not
	be displayed at all. Also, drive C, if it is compressed, may be incorrectly
	displayed as a physical drive. If your host drive uses a drive letter after an
	"Available for DoubleSpace" drive, you can make it inaccessible by using that
	drive letter when you connect to another server.
	
	7. AT&T StarGroup (non-LAN Manager)
	-----------------------------------
	
	If your network software is AT&T StarGroup, run MS-DOS 6 Setup. When Setup
	displays the "You have specified that your computer is connected to a network"
	screen, choose Continue, and follow the instructions on your screen. If you
	cannot run your network software after running Setup, carry out the following
	procedure:
	
	1. Type the following commands at the command prompt:
	
	  " SETVER SETUP.EXE 4.00
	  SETVER ATTSTART.EXE 4.00" (without the quotation marks)
	
	2. Restart your computer.
	
	3. Use your StarGroup installation disks to remove the existing network software
	  from your computer.
	
	4. Reinstall StarGroup. When the StarGroup installation prompts you to indicate
	  which version of MS-DOS you are using, choose MS-DOS version 4.0.
	
	8. Banyan VINES
	---------------
	
	Banyan VINES versions 4.1 and higher are compatible with MS-DOS You can use
	Banyan VINES version 4.0x with MS-DOS 6 if you have the REDIRALL.EXE or
	REDIR4.EXE file in the BANYAN directory on your hard disk.
	
	If neither file is on your hard disk, but you have the VINES installation disks
	that include one of these files, copy the file to the directory on your hard
	disk that contains your network files.
	
	If the files are not on your hard disk or on the VINES installation disks,
	contact your network vendor.
	
	If you have a VINES version earlier than 4.0, contact your network vendor for an
	update.
	
	NOTE
	In some cases, Banyan VINES is incompatible with MemMaker. For example, if your
	network software loads multiple components into different UMB regions, MemMaker
	may not work correctly on your computer.
	
	9. DEC Pathworks and PCSA
	-------------------------
	
	If you have DEC PATHWORKS for DOS version 4.1, carry out the following
	procedure:
	
	1. If you are upgrading from MS-DOS version 3.3 or earlier, update your
	  redirector file, REDIR.EXE. Obtain REDIR.400 from the PATHWORKS disks or
	  system service, rename it to REDIR.EXE, and place it in your DECNET
	  directory.
	
	2. Install MS-DOS 6 on your computer. For more information about installing
	  MS-DOS 6, see the chapter "Getting Started" in the MS-DOS 6 USER'S GUIDE.
	
	Version 4.0 of PATHWORKS for DOS is compatible with MS-DOS However, you must
	carry out the following procedure to achieve this compatibility.
	
	To update PATHWORKS version 4.0:
	
	1. If you are upgrading from MS-DOS version 3.3 or earlier, update your
	  redirector file, REDIR.EXE. Obtain REDIR.400 from the PATHWORKS disks or
	  system service, rename it to REDIR.EXE, and place it in your DECNET
	  directory.
	
	2. Install MS-DOS 6 on your computer. For more information about installing
	  MS-DOS 6, see the chapter "Getting Started" in the MS-DOS 6 USER'S GUIDE.
	
	3. Restart your computer, but do not yet run STARTNET.BAT, which starts the
	  network.
	
	4. Type each of the following lines at the command prompt:
	
	  " SETVER USE.EXE 4.00
	
	  SETVER MEMMAN.EXE 4.00
	
	  SETVER LAD.EXE 4.00
	
	  SETVER SHOW.EXE 4.00
	
	  SETVER NETSETUP.EXE 4.00" (without the quotation marks)
	
	5. Restart your computer, and run STARTNET.BAT.
	
	NOTE If you upgrade to PATHWORKS 4.1 from PATHWORKS 4.0, you must disable the
	SETVER commands you typed in this procedure. To do this after you install
	PATHWORKS 4.1, type the same commands, but replace the 4.00 with /D in each
	command.
	
	If you are using a version of PATHWORKS or PCSA earlier than 4.0, contact your
	network vendor for an update. Meanwhile, if you are using PATHWORKS or PCSA
	version 3.x, you can start using MS-DOS 6 by carrying out the following
	procedure.
	
	NOTE To get support for MS-DOS Task Swapper, use PATHWORKS for DOS version 4.1 or
	later.
	
	To temporarily update PATHWORKS or PCSA version 3.x:
	
	1. If you are upgrading from MS-DOS version 3.3 or earlier, update your
	  redirector file, REDIR.EXE. Obtain REDIR.400 from the PATHWORKS disks or
	  system service, rename it to REDIR.EXE, and place it in your DECNET
	  directory.
	
	2. Install MS-DOS 6 on your computer. For more information about installing
	  MS-DOS 6, see the chapter "Getting Started" in the MICROSOFT MS-DOS USER'S
	  GUIDE. If MS-DOS displays a series of "Incorrect DOS version" messages when
	  your network restarts, ignore these.
	
	3. Type all of the following commands at the command prompt:
	
	  " SETVER USE.EXE 4.00
	  SETVER EMSLOAD.EXE 4.00
	  SETVER SCH.EXE 4.00
	  SETVER NETSETUP.EXE 4.00
	  SETVER NCP.EXE 4.00
	  SETVER DNNETHAT.EXE 4.00
	  SETVER LAD.EXE 4.00
	  SETVER DLL.EXE 4.00
	  SETVER MEMMAN.EXE 4.00
	  SETVER DNNETHLD.EXE 4.00
	  SETVER SHOW.EXE 4.00" (without the quotation marks)
	
	4. Restart your computer.
	
	10. IBM PC LAN
	--------------
	
	If you use IBM PC LAN 1.34 and have problems with applications that use record
	locking or file locking, you may need an updated REDIR50.EXE file included in
	ICO 3039. Contact IBM Support Channel.
	
	IBM PC LAN Program Version 1.33 or Earlier
	------------------------------------------
	
	To use MS-DOS 6 with IBM PC LAN Program (PCLP), you need one of the following:
	
	- IBM PCLP version 1.34 installed.
	
	- IBM PCLP version 1.3x that has been updated to version 1.34 by applying the
	  appropriate IBM Corrective Service Disks. Contact IBM Product Support to
	  obtain the software you need.
	
	If you are running a PCLP version earlier than 1.30, contact IBM for the
	necessary software and instructions.
	
	To update IBM PCLP versions 1.30 through 1.34:
	
	1. Skip to step 3 if you are upgrading from version 1.34. Otherwise, install the
	  necessary IBM PCLP software by following the instructions included with the
	  Corrective Service Disk(s) you received from IBM.
	
	2. Restart your computer, and make sure the network starts.
	
	  If the network doesn't start, quit this procedure and contact IBM for help.
	
	3. Set up MS-DOS 6 on your computer. For more information about installing
	  MS-DOS 6, see the chapter "Getting Started" in the MICROSOFT MS-DOS 6 USER'S
	  GUIDE.
	
	  When Setup restarts your computer, the following message appears on your
	  screen:
	
	  Start PC LAN Program 1.3 (Y/N)?
	
	4. Type "N" (without the quotation marks), and press ENTER.
	
	5. Type the following at the command prompt:
	
	  " SETVER NET.COM /D" (without the quotation marks)
	
	6. Restart your computer.
	
	  The following message appears on your screen:
	
	  Start PC LAN Program 1.3 (Y/N)?
	
	7. Type "Y" (without the quotation marks), and press ENTER.
	
	  NOTE If, after setting up MS-DOS, your CONFIG.SYS file contains a command for
	  loading the IFSFUNC.EXE file, disable it by typing REM and a space in front
	  of the command. Then save the file and restart your computer.
	
	  NOTE Microsoft Defragmenter program will not run on a PCLP server.
	
	11. IBM DOS LAN Requester Version 1.30 or Earlier
	-------------------------------------------------
	
	To use MS-DOS 6 with IBM DOS LAN Requester, you need one of the following:
	
	- DOS LAN Requester files that are included with OS/2 LAN Server version
	  1.30.1.
	
	- DOS LAN Requester files that come with OS/2 LAN Server version 1.30, which
	  has had IBM Corrective Service Diskette (CSD) 5015 applied to it. Contact IBM
	  Product Support to obtain the software you need.
	
	If you are running a DOS LAN Requester version earlier than 1.30, contact IBM for
	the necessary software and instructions.
	
	To update IBM DOS LAN Requester version 1.30:
	
	1. Upgrade your DOS LAN Requester software to version 1.30.1 by following the
	  instructions included with IBM Corrective Service Disk 5015.
	
	2. Restart your computer, and make sure the network starts.
	
	  If the network doesn't start, quit this procedure and contact IBM for help.
	
	3. Set up MS-DOS 6 on your computer. For more information about installing
	  MS-DOS 6, see the chapter "Getting Started" in the MICROSOFT MS-DOS 6 USER'S
	  GUIDE.
	
	  When Setup restarts your computer, the following message appears on your
	  screen:
	
	  Start DOS LAN Requester (Y/N)?
	
	4. Type "N" (without the quotation marks), and press ENTER.
	
	5. Type the following at the command prompt:
	
	  " SETVER NET.COM /D" (without the quotation marks)
	
	6. Restart your computer.
	
	  The following message appears on your screen:
	
	  Start DOS LAN Requester (Y/N)?
	
	7. Type "Y" (without the quotation marks), and press ENTER.
	
	  NOTE If, after setting up MS-DOS, your CONFIG.SYS file has a command for
	  loading the IFSFUNC.EXE file, disable it by typing REM and a space in front
	  of the command. Then save the file and restart your computer.
	
	12. Microsoft LAN Manager and 100-Percent Compatible Networks
	-------------------------------------------------------------
	
	If you are running any version of Microsoft LAN Manager or a 100-Percent
	Compatible network, and Setup referred you to this file, obtain updated network
	files by ordering the Supplemental disks.
	
	After you obtain the Supplemental disks, follow the instructions in the NET.TXT
	file on the Supplemental disks.
	
	13. Microsoft MS-Net and 100-Percent Compatible Networks
	--------------------------------------------------------
	
	If you are running any version of Microsoft MS-Net or a 100-Percent Compatible
	network, and Setup referred you to this file, obtain updated network files by
	ordering the Supplemental disks.
	
	After you obtain the Supplemental disks, follow the instructions in the NET.TXT
	file on the Supplemental disks.
	
	14. Net/One PC
	--------------
	
	If Ungermann-Bass Net/One PC does not load with MS-DOS 6, do one of the
	following:
	
	- Contact your network vendor to get an updated LOADNIU.EXE file.
	
	- Put a UBPAUSE command between the LOADNIU and XNSBIOS lines in your MSNET.INI
	  file.
	
	- Run network commands from a batch file that includes a PAUSE command between
	  the LOADNIU and XNSBIOS lines.
	
	15. Novell Networks
	-------------------
	
	When this NETWORKS.TXT file was published, the current version of the workstation
	shell was 3.31. Obtain version 3.31 or later for use with MS-DOS 6.
	
	If you have a NetWare version earlier than 2.1, or your network software uses any
	of the following files, contact your network vendor:
	
	NET3.COM
	NET4.COM
	XMSNET3.EXE
	XMSNET4.EXE
	EMSNET3.EXE
	EMSNET4.EXE
	
	If you can't use Task Swapper in MS-DOS Shell when running a Novell network,
	contact your network vendor.
	
	If you can't load MS-DOS 6 on your remote-boot workstation, contact Novell for
	the RPLFIX.COM file.
	
	If you run LOGIN.EXE, MAP.EXE, and SESSION.EXE from MS-DOS Shell or while MS-DOS
	Shell is running, a search path is not added to the existing path. Use these
	programs before starting MS-DOS Shell.
	
	If you use the Novell login program to set the COMSPEC variable after starting
	MS-DOS 6, and you can't reload the COMMAND.COM file, edit the SHELL command line
	in your CONFIG.SYS file. Make sure the path to COMMAND.COM points to the root
	directory and remove the C:\DOS\ parameter that follows the path, if one
	exists.
	
	For example, suppose your SHELL command line looks like this:
	
	   SHELL=C:\DOS\COMMAND.COM  C:\DOS\  /P  /E:512
	
	Change it to look like this:
	
	   SHELL=C:\COMMAND.COM  /P  /E:512
	
	Or contact your Novell vendor to get a new login program.
	
	If you are having problems using Microsoft Undelete on a Novell network, use the
	MAP ROOT command in conjunction with the Delete Sentry level of delete
	protection. (If you have Novell Netware version 2.15c or older, obtain the most
	recent MAP.EXE file from your network vendor.) For example, you would use MAP
	ROOT syntax similar to the following (normally specified in the server's login
	script):
	
	MAP ROOT F:=COUNT/SYS:USERS/JOEB
	
	In this example, F is the network drive letter, COUNT is a file server name, SYS
	is the volume name, USERS is a subdirectory of volume SYS, and JOEB is the root
	for a network user. On JOEB's computer, the AUTOEXEC.BAT file would contain the
	following syntax:
	
	UNDELETE /SF
	
	The /S switch specifies the Delete Sentry level of delete protection and F
	specifies a network drive to be protected. The AUTOEXEC.BAT file should specify
	/S[drive] for each drive to be protected.
	
	NOTE
	If you use Microsoft Backup for MS-DOS or Windows to back up files to a network,
	and your network software is NetWare 286, the gas gauge will move very slowly at
	first. This is due to the way NetWare 286 handles writing files to the network.
	
	NOTE
	The %OS_VERSION parameter used in login scripts will return v5.00 if you are
	using any shell up to, and including, version 3.31. Until Novell releases an
	updated shell, refrain from using the %OS_VERSION parameter or map a v6.00 drive
	over the existing v5.00 drive in a user's login script.
	
	MS-DOS Setup and Shared Windows Configuration
	---------------------------------------------
	
	If you use a search drive to access your Windows initialization files
	(PROGMAN.INI, SYSTEM.INI, and WINFILE.INI) on a network directory, and you want
	to install the Windows programs included with MS-DOS 6, carry out the following
	procedure before you run Setup.
	
	NOTE The information in this section applies both to the normal Setup
	installation program and Setup run with the /E switch.
	
	* Temporarily override the search drive by using the MAP command at the command
	prompt. For example, if the network drive assignment for your Windows directory
	is W, and the path is \USER\JOEB, type MAP DEL W: at the command prompt to
	temporarily delete the search drive. Then type MAP W:=SYS:USER\JOEB at the
	command prompt. Then run Setup. After Setup is finished and restarts your
	computer, your system will return to its normal configuration.
	
	16. Novell Networks and DoubleSpace
	-----------------------------------
	
	If your network software is NetWare, make sure it is running before you run
	DoubleSpace.
	
	NetWare Lite
	------------
	
	NetWare Lite uses all "Available for DoubleSpace" drives when the network
	software mounts remote file systems. As a result, MS-DOS displays the "Not ready
	error" when you try to access the drives and Windows File Manager shows the
	drives as floppy drives. In addition, if you attempt to compress another drive,
	DoubleSpace will not be able to use the former "Available for DoubleSpace"
	drives, even if you use the NET MAP DEL command.
	
	To avoid drive conflicts, run DoubleSpace in Custom mode. Then specify for your
	host drive a letter that won't conflict with the drive letter your network
	software uses. For example, if your network drive is currently F, you could use
	E for your host drive when you install DoubleSpace.
	
	17. PC-NFS
	----------
	
	If you use SETVER to report a different version of MS-DOS to a program, PC-NFS
	3.x may report the version incorrectly. If you are having this problem, contact
	your network vendor for updated network software.
	
	If you use PC-NFS 3.0 with MS-DOS Shell, MS-DOS Shell might display more drives
	than you have currently enabled. To prevent this, use the PC-NFS /D switch to
	specify the number of drives you are using. For more information, see your PC-
	NFS documentation.
	
	If you can't use the COPY or XCOPY command on PC-NFS 3.01, contact your vendor to
	get an updated version of the PCNFS.SYS device driver.
	
	If you use PC-NFS network software, carry out the following procedure before you
	run MemMaker:
	
	1. Open your MEMMAKER.INF file using any text editor. This file is in the
	  directory that contains your MS-DOS files.
	
	2. Add the following line to the file:
	
	  " *NET" (without the quotation marks)
	
	3. Save the file, and then run MemMaker.
	
	18. TCS 10Net or DCA 10Net
	--------------------------
	
	DCA 10Net Plus Versions 4.20 (20) and later, and DCA 10Net versions 3.3 (41) and
	later are compatible with MS-DOS 6. If you have an earlier version, contact your
	network vendor for an update.
	
	If you are running a compatible version of 10Net Network Software, disable the
	network software, and then run MS-DOS 6 Setup. After you install MS-DOS 6,
	reenable your network software.
	
	NOTE
	Microsoft Defragmenter program is incompatible with 10Net network software if the
	server service is loaded. If only the redirector is loaded, the program is
	compatible with 10Net network software.
	
	NOTE
	You cannot use DoubleSpace to compress a drive on a 10Net server because all
	local drives are viewed as network drives. To compress a drive, disable the
	server service by typing REM and space in front of the server command in your
	AUTOEXEC.BAT file, and restarting the computer. Then run DoubleSpace to compress
	the drive. After you run DoubleSpace, remove the REM command from your
	AUTOEXEC.BAT file.
	
	After you compress a drive on a server, some of DoubleSpace's features-- such as
	the LIST, CHKDSK, MOUNT, and UNMOUNT features--will not work correctly unless
	you stop the server service.
	
	Additional query words: defrag 6.00 6.20 network.txt msbackup mwbackup stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
