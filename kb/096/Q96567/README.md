---
layout: page
title: "Q96567: Setting Up WFWG on a Novell Workstation Without a Hard Disk"
permalink: /kb/096/Q96567/
---

## Q96567: Setting Up WFWG on a Novell Workstation Without a Hard Disk

{% raw %}

	Article: Q96567
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Running Microsoft Windows for Workgroups on a computer with one 5.25-inch or
	3.5-inch high-density disk drive and a hard disk with 9.5 megabytes (MB)
	available memory is fully supported. (We recommend that you have a hard disk
	with 14.5 MB available memory). Windows for Workgroups is not designed to be
	installed on workstations without hard disks (computers without hard disks that
	are connected to a network), and Microsoft does not support running Windows for
	Workgroups with any type of diskless workstation. However, a workaround to set
	up Windows for Workgroups on Novell workstations that do not have hard disks is
	available.
	
	This article contains information that you can use to install Windows for
	Workgroups on a Novell NetWare workstation that does not have a hard disk.
	
	NOTE: A true diskless workstation (one with no floppy disk drive or hard disk
	drive) using a network adapter with a boot ROM does not work with Windows for
	Workgroups. This is because the boot ROM establishes a network connection and
	does not allow the Windows for Workgroups network drivers to coexist with the
	boot ROM.
	
	MORE INFORMATION
	================
	
	To set up Windows for Workgroups on a diskless workstation on a Novell network,
	use the following procedure:
	
	1. Start the computer with a network boot disk and log on as supervisor.
	
	  NOTE: If you upgraded from Windows 3.1 by using the SETUP /A command should
	  remove the Windows 3.1 shared directory before continuing. For more
	  information on upgrading a shared networked Windows directory, query on the
	  following words in the Microsoft Knowledge Base:
	
	  and attrib and flag
	
	2. Run SETUP /A from the Windows for Workgroups Disk 1. This process expands the
	  Windows for Workgroups files and places them in a shared network directory.
	
	3. Have each user start his or her computer with a network boot disk and log on.
	  Run SETUP or SETUP /N (recommended) from the shared directory created in step
	  2. When prompted for the directory name, enter the network user's home
	  directory.
	
	  (A network boot disk contains the MS-DOS operating system and necessary files
	  to establish network connection, that is, IPX and NETX. The boot disk must
	  have approximately 1 MB of free disk space. The free disk space needed varies
	  depending on which NDIS network card driver is installed.)
	
	  NOTE: Windows 3.1 directories created with SETUP /N can only be upgraded to
	  Windows for Workgroups with SETUP /N. Windows 3.1 installations created with
	  SETUP must be upgraded by SETUP.
	
	4. After selecting the network adapter type and settings, the Compatible
	  Networks dialog box appears. Select Novell NetWare and choose the Add
	  button.
	
	  During the setup process the following message appears:
	
	  Setup cannot find or cannot update your system files on drive A:. If you
	  started your system from a floppy disk, be sure to remove write-protection
	  from your system startup (boot) disk. Then insert the disk into drive A and
	  choose Retry.
	  To copy system files to your Windows directory choose Cancel.
	
	  This is normal. If your bootable floppy boot contains approximately 1 MB of
	  free disk space, select Retry.
	
	When the setup process is finished, the boot disk will contain the following
	files:
	
	Filename        Size  Date      Time    Function
	---------------------------------------------------------------------
	
	COMMAND  COM     47845 04-09-91   5:00a  MS-DOS Command Interpreter
	IPX      COM     26207 01-02-92   4:06p  Novell IPX (Not used by WFWG)
	NET      MSG     70629 10-01-92   3:11a  Message help file for net.exe
	CONFIG   OLD        22 02-18-93  12:24p  Old CONFIG.SYS before setup
	AUTOEXEC OLD        24 02-18-93  12:29p  Old AUTOEXEC.BAT before setup
	EMM386   EXE    110174 10-01-92   3:11a  386 Expanded Memory Manager
	HIMEM    SYS     13824 10-01-92   3:11a  Manages the use of ext. memory
	RAMDRIVE SYS      5873 10-01-92   3:11a  RAM disk device driver
	SMARTDRV EXE     43609 10-01-92   3:11a  Disk cache
	PROTOCOL INI       636 02-18-93   2:34p  Protocol initialization file
	NETX     COM     52443 10-01-92   3:11a  Novell NETX (Updated by WFWG)
	NETH     MSG    104570 10-01-92   3:11a  Message help file for net.exe
	WORKGRP  SYS      7268 10-01-92   3:11a  WFWG real mode device driver
	NET      EXE    415252 10-01-92   3:11a  WFWG redirector
	PROTMAN  DOS     21680 10-01-92   3:11a  Protocol manager
	PROTMAN  EXE     13760 10-01-92   3:11a  Protocol manager accessory
	NDISDRVR DOS     24666 10-01-92   3:11a  NDIS network adapter driver
	                                        (name depends on adapter)
	MSIPX    COM     27130 10-01-92   3:11a  IPX to NDIS driver
	MSIPX    SYS      4301 10-01-92   3:11a  IPX to NDIS shim
	ROUTE    COM      4262 10-01-92   3.11a  Novell TR source routing drvr
	PROTOCOL 000         0 02-18-93   2:34p  Old PROTOCOL.INI
	CONFIG   SYS       204 02-18-93   2:38p  New CONFIG.SYS
	AUTOEXEC BAT       117 02-18-93   2:38p  New AUTOEXEC.BAT
	      23 file(s)     994496 bytes
	                  141146 bytes free
	
	The following lines are added/modified in the AUTOEXEC.BAT and CONFIG.SYS files:
	
	AUTOEXEC.BAT                      CONFIG.SYS
	--------------------------------------------------------------
	
	A:\SMARTDRV.EXE                   device=A:\protman.DOS /i:A:\ 
	A:\net start                      device=A:\workgrp.sys
	A:\msipx                          device=A:\ndisdrvr.DOS
	A:\route (Token ring users only)  device=A:\msipx.sys
	A:\netx                           LASTDRIVE=P
	PATH=U:\WFWUSER;y:\wfwshare;a:\   DEVICE=A:\HIMEM.SYS
	SET TEMP=U:\WFWUSER\TEMP          STACKS=9,256
	
	Notes on Using Workstations Without Hard Disks
	----------------------------------------------
	
	- A workstation without a hard disk has the same system requirements for
	  running Windows for Workgroups 3.1 as a workstation with a hard disk drive.
	  (The RAM requirement may be greater if you are using a RAM drive).
	
	- Running Windows for Workgroups in standard mode (the highest mode on an 80286
	  computer) makes it necessary to log on to the Windows for Workgroups network
	  before you run Windows. Network commands such as Net Start and Net Logon
	  Username will require information from the SYSTEM.INI file in the Windows
	  user directory. Copy this file from the Windows for Workgroups user directory
	  to the network boot disk. Note that changes made in the Networks dialog box
	  in Control Panel will not update the SYSTEM.INI file on the boot disk. If you
	  make changes in Control Panel, you must recopy the SYSTEM.INI file to the
	  boot floppy disk before the changes can take effect.
	
	- To share local workstation resources (such as floppy disk drives, printers,
	  and CD-ROM drives), you must create a RAM drive and set your SET TEMP
	  environment variable to its location. The RAM drive needs to be of
	  considerable size (2048K or larger) if you are planning to share a local
	  printer because Print Manager will queue jobs into the RAM drive. To set up a
	  2 MB RAM drive, add the following line to your CONFIG.SYS file:
	
	  DEVICE=A:\RAMDRIVE.SYS 2048 /E
	
	Additional query words: 3.10 3rdparty disk less
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
