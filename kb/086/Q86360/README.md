---
layout: page
title: "Q86360: NETWORKS.TXT: Microsoft Windows &amp; MS-DOS 5 Upgrade Part A"
permalink: /kb/086/Q86360/
---

## Q86360: NETWORKS.TXT: Microsoft Windows &amp; MS-DOS 5 Upgrade Part A

	Article: Q86360
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Windows & MS-DOS 5 Upgrade
	NETWORKS.TXT file. This article contains sections 1 through 6.
	
	MORE INFORMATION
	================
	
	MICROSOFT WINDOWS 3.1 & MS-DOS 5 UPGRADE
	
	NETWORKS.TXT
	------------
	
	This file provides important information not included in the
	"Microsoft Getting Started" manual, the "Microsoft MS-DOS
	User's Guide and Reference," the "Windows User's Guide" or in
	online Help. Specifically, this file addresses problems with
	updating networks.
	
	For information about other files and documentation, see the
	"Welcome" section of "Getting Started."
	
	Caution: If you use a network, read the information about
	        your network in this file BEFORE installing Windows
	        3.1 and MS DOS 5.0.
	
	Note: This file contains information which should be used if
	     you are upgrading to both MS-DOS 5 and Windows 3.1. If
	     for some reason you are upgrading only to Windows, see
	     the NETWORKS.WRI file. For the location of the file, see
	     the PACKING.LST file on Setup disk 1.
	
	1. Introduction
	
	If you use a network, you might need to update one or more files on
	your hard disk before you set up Windows 3.1 and MS-DOS 5.0 on your
	computer. This file contains basic information about upgrading
	networks which is appropriate for someone with experience setting up
	networks and personal computers. If you do not have this experience,
	you should get someone who does to help you ensure your network
	software is compatible with Windows 3.1 and MS-DOS 5.0.
	
	In many cases, there are separate network files which may need
	updating to support MS-DOS vs. Windows 3.1. Thus, you should find the
	section of this document which pertains to the network you have and
	read the entire section once before trying to do anything. In many
	sections, there may be a subsection for the Windows procedure and a
	subsection for the MS-DOS procedure.
	
	There are new versions of files for many widely used networks included
	with this package of Windows 3.1 and MS-DOS. To make these networks
	compatible with Windows 3.1 and MS-DOS 5.0, follow the procedure
	outlined for your network to install the appropriate file (or files)
	on your hard disk. For some networks, the network vendor should supply
	the necessary files.
	
	Important: To find which Setup Disk has a specific file, use any text
	editor to open the PACKING.LST file on Setup Disk 1 and then search
	for the filename.
	
	In general, if you are using a network:
	
	o Check the list in Chapter 1, "Upgrading from a Previous
	 Version of DOS to Windows and MS-DOS," of "Getting Started"
	 to determine whether your network needs to be updated.
	
	o Follow the procedures in this file to update your
	 network files.
	
	o If you have trouble after updating, see
	 "Getting Started" for possible solutions.
	
	You need to be familiar with the following tasks to successfully carry
	out the procedures in this file:
	
	o Using MS-DOS to change drives and directories
	
	o Working with network software
	
	o Searching a disk for a file
	
	o Searching a file for text
	
	o Editing a text file
	
	o Renaming or backing up files
	
	o Working with paths
	
	o Identifying when a file was created
	
	2.  Table of Contents
	
	1.  Introduction
	2.  Table of Contents
	3.  General Notes
	4.  Novell NetWare
	5.  Banyan VINES
	   5.1.  MS-DOS Procedure
	   5.2.  Windows Procedure
	         5.2.1.  Banyan VINES 4.0x
	         5.2.2.  Banyan VINES 4.1x
	6.  Microsoft LAN Manager and 100-Percent Compatible Networks
	   6.1.  MS-DOS Procedure
	         6.1.1.  Determining Which Version You Are Using
	         6.1.2.  Microsoft LAN Manager Version 2.1
	         6.1.3.  Microsoft LAN Manager Version 2.0 Enhanced
	         6.1.4.  Microsoft LAN Manager Version 2.x Basic
	         6.1.5.  Microsoft LAN Manager Version 1.x Enhanced
	         6.1.6.  Microsoft LAN Manager Version 1.x Basic
	   6.2.  Windows Procedure
	         6.2.1.  Ungermann-Bass Net/One
	         6.2.2.  Using the Ungermann-Bass XNS Transport Stack
	         6.2.3.  Using LAN Manager and Expanded Memory
	         6.2.4.  Using Pop-up Services
	         6.2.5.  LAN Manager Basic
	         6.2.6.  LAN Manager 1.x
	         6.2.7.  LAN Manager 2.0 Enhanced
	         6.2.8.  LAN Manager 2.1 Basic
	         6.2.9.  LAN Manager 2.1 Enhanced
	7.  Artisoft LANtastic
	   7.1.  MS-DOS Procedure
	         7.1.1.  Artisoft LANtastic Versions 3.01 or Earlier
	   7.2.  Windows Procedure
	         7.2.1.  Artisoft LANtastic 3.x
	         7.2.2.  Artisoft LANtastic 4.x
	8.  Microsoft MS-Net and 100-Percent Compatible Networks
	   8.1.  MS-DOS Procedure
	         8.1.1.  General Instructions
	         8.1.2.  3Com 3+Share Version 1.6 or Earlier
	   8.2.  Windows Procedure
	         8.2.1.  General Instructions
	         8.2.2.  Ungermann-Bass Net/One
	         8.2.3.  3Com Networks
	9.  DEC Pathworks and PCSA
	   9.1.  MS-DOS Procedure
	   9.2.  Windows Procedure
	10. IBM PC Lan/DOS Lan Requester
	   10.1. MS-DOS Procedure
	         10.1.1.  IBM PC LAN Program Version 1.33 or Earlier
	         10.1.2.  IBM DOS LAN Requester Version 1.30 or Earlier
	   10.2. Windows Procedure
	         10.2.1.  IBM PC LAN Program
	11. TCS 10Net or DCA 10Net
	   11.1. MS-DOS Procedure
	         11.1.1. DCA 10Net Plus Version 4.20 (10) or Earlier and DCA
	                 10Net Version 3.3 (40) or Earlier
	   11.2. Windows Procedure
	12. Farallon PhoneNet Talk Version 2.02 or Earlier
	   12.1. MS-DOS Procedure
	13. Sitka TOPS Version 3.0 or Earlier
	   13.1. MS-DOS Procedure
	14. Invisible Software - NET/30 For Windows
	   14.1. Windows Procedure
	15. AT&T StarGroup (Non-LANMAN)
	   15.1. MS-DOS Procedure
	16. PC-NFS 3.0
	   16.1. MS-DOS Procedure
	17. Other Online Documents
	
	3.   General Notes
	
	o There are many settings in the SYSTEM.INI file that affect
	 the way Windows interacts with a network. You can change
	 these settings to correct most problems you might have
	 operating Windows with your network. See the SYSINI.WRI
	 online document for information about changing the
	 following SYSTEM.INI settings:
	
	 [Boot]
	 Network.drv=
	
	 [Standard]
	 Int28Filter=
	 NetHeapSize=
	
	 [386Enh]
	 AllVMsExclusive=
	 EMMExclude=
	 FileSysChange=
	 InDOSPolling=
	 Int28Critical=
	 NetAsyncFallback=
	 NetAsyncTimeout=
	 NetDMASize=
	 NetHeapSize=
	 Network=
	 PSPIncrement=
	 ReflectDOSInt2A=
	 TimerCriticalSection=
	 TokenRingSearch=
	 UniqueDOSPSP=
	
	o Many networks require the TimerCriticalSection entry
	 in the [386Enh] section of the SYSTEM.INI file to be set
	 to a value of 10000 or greater. For more information, see
	 the SYSINI.WRI file.
	
	o The default value for the NetHeapSize entry in the
	 [Standard] section of the SYSTEM.INI file is 8K. Although
	 some applications require this value, in most cases you
	 can decrease the value to 4K in order to increase the
	 amount of memory available to your applications. A few
	 applications require the value to be 4K.
	
	o If for some reason you use Setup to change your
	 network configuration after you have already set up
	 Windows, Setup might not remove all support for your
	 previous network selection. Unnecessary files might be
	 left in your Windows directory, and entries might be left
	 in your WIN.INI or SYSTEM.INI files that could harm your
	 system's performance. If you change your network
	 configuration, check the notes about both your previous
	 and new selections to see if any previous entries are no
	 longer required.
	
	o Some network adapter cards require the
	 ExcludeHighRegion (or EMMExclude) entry in the [386Enh]
	 section of the SYSTEM.INI file to be set to the memory
	 range used by the card. For more information, see your
	 network-adapter documentation and the SYSINI.WRI file.
	
	 These cards may also require an X= option on the EMM386
	 command line in your CONFIG.SYS file. For more
	 information, see chapter 14, "Optimizing Windows," in the
	 "Microsoft Windows User's Guide."
	
	o Some network cards and some network transport stacks
	 require special handling. Consult the following sections
	 not only for the manufacturer of your network but also for
	 the manufacturer of your network adapter and your
	 transport stack.
	
	o Many networks have pop-up message facilities that
	 allow you to see messages sent from other servers or
	 workstations. In most cases, these pop-up programs will
	 cause the Windows part of Setup to fail if a message is
	 received while setting up. Many networks provide
	 additional utilities that allow them to work with Windows
	 once Windows is set up, but these are generally not
	 available during Setup. You should make sure any such pop-
	 up service is disabled before setting up Windows. Please
	 consult specific entries regarding your network in the
	 following sections, or consult your network documentation
	 for instructions.
	
	o If you configured your remote-boot workstation to run
	 Windows version 3.0, you may be loading a program called
	 RIPLMEM.EXE or RPLMEM.EXE in your AUTOEXEC.BAT. This
	 program is no longer required for running Windows version
	 3.1.
	
	o The Windows Resource Kit for the Microsoft Windows
	 Operating System Version 3.1 contains additional
	 information about setting up and configuring Windows for
	 use with a network, and information for system
	 administrators. This kit provides complete technical
	 information about Windows version 3.1 for the support
	 professional. It includes a technical reference manual,
	 and a disk containing helpful utilities, system resource
	 viewers, drivers, and accessories.
	
	 To order the Windows Resource Kit within the United
	 States, dial:
	
	 1-800-642-7676
	
	 To order outside of the United States, dial the phone
	 number for your area. You can find this number on the
	 International Subsidiary card.
	
	o If you are running a shared copy of Windows from a network
	 drive, make sure both your personal Windows directory and
	 the shared network directory are included on the PATH
	 command line in your AUTOEXEC.BAT file.
	
	o If you receive sharing violations while running a shared
	 copy of Windows, make sure that all of the files in the
	 shared network directory are marked as read-only.
	
	o If you have problems running a shared copy of Windows,
	 remove the MS-DOS SHARE command from your system. With
	 some networks, the MS-DOS SHARE utility must not be loaded
	 on a workstation to run a shared copy of Windows.
	
	o If you have problems and your network software is loaded
	 high (in the upper memory area between 640K and 1 MB), try
	 loading the network in conventional memory.
	
	o Windows Print Manager spools print jobs to the location
	 specified by the MS-DOS environment variable TEMP. If TEMP
	 is not set, Print Manager will use the root of drive C.
	 For diskless workstations, set the TEMP variable either to
	 a RAM disk or to the location of a network directory (you
	 must have full access to this directory). The TEMP
	 variable may be set by placing a SET TEMP= statement in
	 the AUTOEXEC.BAT file or network login script. For
	 example, to spool to the network directory
	 X:\USERNAME\WINUSER\TEMP, you would use the statement
	 SET TEMP=x:\username\winuser\temp. Each user must have a
	 personal TEMP directory.
	
	o On some diskless workstations, you will not be able to
	 start Windows in standard mode unless you have a TEMP
	 environment variable set or you have added a swapdisk
	 entry in the [NonWindowsApp] section of the SYSTEM.INI
	 file. For more information about the swapdisk entry, see
	 the SYSINI.WRI file.
	
	o If you are running a peer-to-peer network, you may not be
	 able to format a floppy disk by using File Manager. You
	 can use the FORMAT command at the MS-DOS prompt instead.
	
	o Some networks ship with their own copies of files that are
	 included with Windows version 3.1. Usually Windows
	 includes a newer version, and upgrades the one provided
	 with the network when you run Setup. However, if you
	 install the network after installing Windows 3.1, some
	 network installation programs will overwrite the newer
	 file provided with Windows with their own, older version.
	 This older version may lack features provided in the newer
	 version, or it may not function properly with Windows 3.1.
	 You should back up your network and Windows files before
	 upgrading your network software. If problems occur, you
	 may need to restore the previous version of some files.
	
	o If you use the MS-DOS Shell, note that most network
	 software won't work correctly if you start it from an
	 MS-DOS Shell command prompt. Start your network before
	 starting MS-DOS Shell.
	
	o You can install both Windows and MS-DOS from a network
	 share point. To do so, carry out the following procedure:
	
	 1. Make sure your network is running with at least one
	    server and one client.
	
	 2. Restart the client computer by inserting Setup disk 1
	    into drive A, and pressing CTRL+ALT+DEL.
	
	 3. Press ENTER at the Welcome screen. Then, at the next
	    screen, press F3 twice to quit Setup.
	
	 4. Create an INSTALL directory on the hard drive and make the
	    drive current by typing the following at the command prompt:
	
	    c:
	    md install
	    cd install
	
	 5. Copy all the files on the disk to the INSTALL directory
	    by typing the following at the command prompt:
	
	    copy a:\*.* c:\install
	
	 6. Insert each of the remaining Setup disks and copy all the files
	    to the INSTALL directory.
	
	 7. Expand the ATTRIB.EX_ file by typing the following at the
	    command prompt:
	
	    expand attrib.ex_ attrib.exe
	
	 8. Insert Setup disk 1 into drive A.
	
	 9. Remove the attributes from the IO.SYS and MSDOS.SYS files by typing
	    the following at the command prompt:
	
	    attrib -h -s -r a:\io.sys
	    attrib -h -s -r a:\msdos.sys
	
	 10. Copy the IO.SYS and MSDOS.SYS files to the INSTALL directory
	     by typing the following at the command prompt:
	
	     copy a:\io.sys c:\intall
	     copy a:\msdos.sys c:\install
	
	 11. Delete the ATTRIB.EXE file in the INSTALL directory by typing
	     the following at the command prompt:
	
	     del c:\install\attrib.exe
	
	 12. Remove Setup disk 1 from drive A, and restart your computer
	     by typing CTRL+ALT+DEL.
	
	 13. Connect to the network and create a directory called DOSWIN
	     on the network drive.
	
	 14. Run Setup by typing the following at the command prompt:
	
	     c:\install\setup /a
	
	 15. Follow the directions on your screen.
	
	 16. To install Windows and MS-DOS on a client computer from the
	     network share point, connect to the network drive and run
	     Setup by typing the following at the command prompt:
	
	     dwsetup
	
	 17. Follow the instructions on your screen.
	
	o If you have copied the Windows and MS-DOS files to a network
	 share point by typing "setup /a," and you want to run Windows
	 from the network on a client computer, make sure you set up
	 MS-DOS 5.0 only on the client computer before you type
	 "setup /n."
	
	4. Novell NetWare
	
	Note: The procedures for Microsoft Windows 3.1 and MS-
	     DOS 5.0 are integrated in this section.
	
	Additional Notes at Press Time:
	
	    NetWare Shell Version (NETX.COM):
	
	    The NetWare workstation shell software is Novell's
	    basic DOS shell and is included with MS-DOS 5.0.  You
	    may require a different shell for a specific
	    application.  Contact your authorized Novell reseller
	    if you believe another shell may be needed. EMSNET5.EXE
	    and XMSNET5.EXE, alternate shells, are available from
	    Novell.
	
	    Novell Remote Workstations (RPLFIX.COM):
	    If you can't load MS-DOS 5.0 on your remote-boot
	    workstation, contact Novell for the RPLFIX.COM file.
	
	    Drive Mapping Utilities:
	    If you run LOGIN.EXE, MAP.EXE, and SESSION.EXE from MS-
	    DOS Shell or while MS-DOS Shell is running, a search
	    path is not added to the existing path. Use these
	    programs before starting MS-DOS Shell.
	
	    TBMI2.COM and Task Swapper:
	    If you can't use Task Swapper in MS-DOS Shell when
	    running a Novell network, do the following:
	    1. Expand and copy the IPX.OB_ and TBMI2.CO_ files to
	       your hard disk. If your AUTOEXEC.BAT file has a
	       command that loads the NET3.COM or NET4.COM file,
	       expand and copy the file from the Setup disk to
	       the hard drive.
	
	       See the PACKING.LST file on Setup
	       disk 1 for the location of the files and for
	       instructions on how to use the EXPAND command.
	
	    2. Use the IPX.OBJ file to create a new IPX.COM file.
	       For information about creating an IPX.COM file, see
	       your Novell documentation.
	
	    3. Start your network, using the new IPX.COM and
	       NETX.COM files.
	
	    4. Start TBMI2.COM.
	
	    5. Start the application that may be causing problems
	       with Task Swapper.  Run the application and then exit.
	
	    6. Display diagnostic information by typing the
	       following:
	       tbmi2 /d
	
	    7. If the value in the field named Far Call Usage is
	       not 0, you need to run TBMI2.COM before using Task
	       Swapper.
	
	       To get help with TBMI2.COM, type the following:
	       tbmi2 /?
	
	       The default configuration for TBMI2.COM is correct for
	       most applications. If you need help configuring the
	       program, contact Novell.
	
	The Windows 3.1 and MS-DOS 5.0 Upgrade includes updated
	versions of several Novell NetWare files that are required
	to run with Windows 3.1. If you are running Novell NetWare,
	the Windows part of Setup will copy the following files to
	the SYSTEM subdirectory of your Windows directory (or the
	shared network directory if you set up a shared copy of
	Windows by using setup /n):
	
	NETX.COM (version 3.26)
	IPX.OBJ (version 3.10)
	TBMI2.COM (version 2.1)
	IPXODI.COM (version 1.20)
	LSL.COM (version 1.21)
	
	Before running Windows you may need to do the following:
	
	o Replace your current NetWare shell with the NETX.COM
	 provided (if your current NetWare shell is older than the
	 version provided). Windows 3.1 requires that the NetWare
	 shell components on your workstation (such as NETX.COM) be
	 version 3.01 or higher. You can use these shell components
	 even if your servers are running older versions of NetWare
	 (as early as NetWare 2.10).
	
	 Your current shell may have one of the following names:
	
	 NET3.COM        XMSNET3.EXE     EMSNET3.EXE
	 NET4.COM        XMSNET4.EXE     EMSNET4.EXE
	 NETX.COM        XMSNET5.EXE     EMSNET5.EXE
	 NETX.COM        XMSNETX.EXE     EMSNETX.EXE
	
	 NETX.COM will run on MS-DOS versions 3.1 or higher. The
	 EMS and XMS versions of the shell are available from your
	 Novell dealer.
	
	Note: The EMS NetWare shells (EMSNETX.EXE, etc.) are not
	     supported when Windows is running in 386 enhanced mode.
	
	If you have a NetWare version earlier than 2.1, contact your
	network vendor for an update.
	
	To update the NETX command for NetWare versions 3.11 or
	earlier:
	
	1. Expand and copy the NETX.CO_ file to your network directory.
	  See the PACKING.LST file on Setup disk 1 for the location of
	  the files and for instructions on how to use the EXPAND command.
	
	2. Replace the network startup command in your
	  AUTOEXEC.BAT file with the NETX command.
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For information about installing MS-DOS 5.0, see
	"Getting Started."
	
	Note: If you use any programs specific to Internetwork
	     Packet Exchange (IPX), such as NVER, SYSCON, and
	     RCONSOLE, you need to take additional steps to run
	     these programs with MS-DOS Task Swapper. For more
	     information about running these programs with MS-DOS
	     Task Swapper, see the README.TXT file. See the
	     PACKING.LST file on Setup disk 1 for the location of
	     the README.TXT file.
	
	o If you are running Novell IPXODI.COM and LSL.COM, you need
	 to upgrade these to versions 1.20 or higher. Use the files
	 provided with Windows and copy them from the SYSTEM
	 subdirectory of your Windows directory (or your shared
	 network directory) to the directory where your existing
	 versions are located.
	
	o To run Windows in standard mode, load the TBMI2.COM memory-
	 resident utility when running Windows. Novell recommends
	 that you create a batch file that will load this utility,
	 start Windows, and then unload the utility when you quit
	 Windows. The batch file could be named RUNWIN.BAT and look
	 like this:
	
	 TBMI2
	 WIN
	 TBMI2 /U
	
	 TBMI2 enables you to safely run applications that use the
	 NetWare IPX and SPX functions in standard mode Windows or
	 the MS-DOS 5.0 task switcher.
	
	o If you are running Novell IPX.COM, create a new version using
	 the IPX.OBJ file. For information about creating an IPX.COM
	 file, see your Novell documentation.
	
	In addition:
	
	o If you enable 32-bit disk access and you are running the
	 XMS shell rather than one of the standard NetWare shells
	 (NETX.COM, etc.), you can further improve performance by
	 setting the OverlappedIO entry in the [386Enh] section of
	 your SYSTEM.INI file to On.
	
	o Do not try to log in, log out, attach, or detach a Novell
	 server from the MS-DOS Prompt within Windows. You should log
	 in before starting Windows, and attach or detach servers
	 by using File Manager or the Printers option in Control
	 Panel.
	
	o If you experience problems starting applications while
	 running Windows or Windows applications from a file
	 server, make sure you are not running the MS-DOS SHARE
	 utility. Current versions of the NetWare shell are not
	 fully compatible with SHARE.
	
	o If you have a Western Digital Ethercard Plus and have
	 problems accessing drives by using the MAP ROOT command,
	 contact Western Digital for an updated driver.
	
	o By default, NetWare gives you access to only 40 files at a
	 time. When you are running applications with Windows, you
	 can exceed this limit rather quickly. If so, you might see
	 unexpected error messages. To increase the file access
	 limit, add the following line to your SHELL.CFG file:
	
	 file handles = 60
	
	 You should also add the following to your CONFIG.SYS file:
	
	 files = 60
	
	o If you get unusable output when printing to a NetWare
	 server (such as incorrect fonts, garbled text, invalid
	 page breaks, or blank lines), you may need to edit your
	 print-job configuration. Try using the NetWare PRINTCON
	 utility to set the Auto Endcap and Enable Timeout options
	 to No.
	
	o When running Windows in 386 enhanced mode, swapping to a
	 drive on a NetWare 286 server might make starting Windows
	 take up to a minute. See Chapter 14, "Optimizing Windows,"
	 in the "Microsoft Windows User's Guide" for information
	 about controlling the location of your swap file.
	
	o A NetWare file server does not include the directory
	 entries dot (.) and double dot (..) as MS-DOS does.
	 However, the NetWare shell (version 3.01 or higher) can
	 emulate these entries when applications attempt to list
	 the files in a directory. If you have problems listing
	 files or deleting directories, turning on the Show Dots
	 feature will help. Add the following line to your
	 SHELL.CFG file:
	
	 show dots = on
	
	 Turning on Show Dots will cause problems with earlier
	 versions of some 286-based NetWare utilities, such as
	 BINDFIX.EXE and MAKEUSER.EXE. Make sure you upgrade these
	 utilities if you upgrade your NetWare shell. For more
	 information, contact your Novell dealer.
	
	o Redirected drives can look different in Windows than they
	 did without Windows. For example, a device mapped as
	 FileServerName/Volume:Directory will appear in Windows as
	 FileServerName/Volume:\, showing the root of the file
	 server's shared volume, rather than the subdirectory you
	 expected. You can correct this with the MAP ROOT entry
	 explained in the following information.
	
	o In some cases, Windows applications may change the default
	 directory on a drive. This might cause problems if, for
	 example, your path includes the current directory on a
	 network drive (that is, your path includes a drive letter
	 without a specific directory, such as z: instead of
	 z:\system).
	
	 You can prevent this problem by using MAP.EXE and
	 LOGIN.EXE versions 3.0 and later to set up fake roots, or
	 by choosing the MAP ROOT function when mapping a
	 connection in File Manager. This feature simulates the
	 MS-DOS SUBST command, which sets the root of a given drive
	 to a directory designated by the user instead of to the
	 true root of the volume.
	
	 For example, suppose you normally mapped drive F to the
	 HOME\TERRI directory on the COUNT\SYS volume, and then
	 included F: in your path. You would do this by including
	 the following command in your AUTOEXEC.BAT file or by
	 typing the command before starting Windows:
	
	 map f:=count\sys:home\terri
	
	 The default directory on drive F would then be HOME\TERRI.
	 To prevent Windows from changing this, you would replace
	 the command above with the one shown below:
	
	 map root f:=count\sys:home\terri
	
	 This command would make the directory HOME\TERRI appear to
	 be the root drive F.
	
	o If you are running Windows in 386 enhanced mode, you can
	 adjust the way Windows handles your network drive mappings
	 by using the Network option in Control Panel.
	
	 Normally, when you quit Windows, all of your drive
	 mappings are restored to the way they were before you
	 started Windows, and all changes you made inside Windows
	 are lost. If you clear the Restore Drives option, the
	 mappings you made inside Windows will remain when you quit
	 Windows.
	
	 Typically, each instance of the MS-DOS Prompt you start from
	 Windows has its own set of drive mappings. Changes you
	 make in one instance do not affect another. If you set the
	 NWShareHandles option, drive mappings will instead be
	 global, and changes made in one instance of the MS-DOS Prompt
	 will affect all other applications. If you are running a
	 NetWare 286 server, setting NWShareHandles increases the
	 number of workstations that can be connected to the server
	 before the server runs out of available connections.
	
	 See the Help available in the Network dialog box in
	 Control Panel for more information on these options.
	
	o When setting up Windows for use with Novell NetWare, the
	 following entry is added to the [windows] section of your
	 WIN.INI file:
	
	 load=nwpopup.exe
	
	 This automatically starts the NetWare pop-up utility,
	 which displays your incoming broadcast messages.
	
	o If you are running Novell NetBIOS, you may need to specify
	 TimerCriticalSection=10000 in the [386Enh] section of the
	 SYSTEM.INI file.
	
	o If you have applications or files that use extended
	 characters (ASCII characters above 128) and you have
	 problems viewing or using them, try adding the following
	 line to your SHELL.CFG file:
	
	 special uppercase = on
	
	o When connecting or disconnecting network resources from
	 File Manager,  Print Manager, or Control Panel, pay
	 attention to the state of the Permanent check box. If this
	 option is checked when you make a connection, the
	 connection is automatically made each time you restart
	 Windows. To stop reconnecting, disconnect with the
	 Permanent option checked. If the option is not checked
	 when you disconnect, the connection is removed for the
	 current Windows session, but is reconnected when you
	 restart Windows.
	
	5.   Banyan VINES
	
	5.1. MS-DOS Procedure
	
	Banyan VINES version 4.1 is compatible with MS-DOS 5.0.
	You can use Banyan VINES version 4.0x with MS-DOS 5.0 if you
	have the REDIRALL.EXE or REDIR4.EXE file in the BANYAN
	directory on your hard disk.
	
	If neither file is on your hard disk, but you have the VINES
	installation disks that include one of  these files, copy
	the file to the directory on your hard disk that contains
	network files.
	
	If the files are not on either your hard disk or the VINES
	installation disks, contact your Banyan VINES network
	vendor.
	
	If you have a VINES version earlier than 4.0, contact your
	network vendor for an update.
	
	Note: If you are upgrading from MS-DOS version 4.x, you
	     do not need to update your network files.
	
	5.2. Windows Procedure
	
	Setup will correctly handle the following Banyan VINES
	versions:
	
	o Banyan VINES 4.0 is compatible with Microsoft Network and
	 will be handled as such by Windows.
	
	o Banyan VINES 4.1 and later come with additional Windows
	 components, which are installed when you set up Windows
	 for use with Banyan VINES 4.1.
	
	See the following sections for information about running
	these versions of VINES with Windows.
	
	Note: You should start VINES and log in before starting
	     Windows. Banyan does not support logging in while
	     Windows is running. If you start Windows when the
	     network is not loaded or you are not logged in, you
	     will receive one or more error messages indicating that
	     you will not be able to use VINES functions from within
	     Windows.
	
	5.2.1. Banyan VINES 4.0x
	
	When you set up Windows for use with Banyan VINES 4.0x, the
	following entries are added to the [386Enh] section of your
	SYSTEM.INI file:
	
	TimerCriticalSection=5000
	UniqueDOSPSP=TRUE
	PSPIncrement=5
	
	See SYSINI.WRI for more information on these settings.
	
	o To use Windows printing functions with VINES 4.0, you must
	 have VINES 4.00(5) or later and must have the NetBIOS
	 support loaded. If you cannot print to a network printer,
	 ask your network administrator to verify that you are
	 loading NetBIOS and that you are running the proper
	 version of VINES.
	
	o If you are running VINES 4.0 with Windows running in 386
	 enhanced mode and want to run non-Windows applications
	 that use NetBIOS, you must install VINES 4.00(5) or later.
	 In addition, you will need to start NetBIOS before
	 starting Windows.
	
	 If you start VINES NetBIOS support before starting Windows
	 in standard mode, you may not be able to start any non-
	 Windows applications. If you have this problem, load
	 NetBIOS from within Windows, or contact your Banyan dealer
	 for more information.
	
	o Versions below site-specific patch 0H will not support
	 Windows running in 386 enhanced mode.
	
	o If you are running VINES version 4.0x and you have a
	 problem with print jobs that time-out intermittently, you
	 can either update to VINES 4.1x, or use the VINES SETPRINT
	 utility to remove the timeout on your printer port by
	 specifying the following:
	
	 SETPRINT lptn servicename /D:INFINITE
	
	 Lptn is the printer port, and servicename is the name of
	 the network print queue.
	
	5.2.2. Banyan VINES 4.1x
	
	When you set up Windows for use with Banyan VINES 4.1, the
	following entries are added to the [386Enh] section of your
	SYSTEM.INI file:
	
	Network=*dosnet, *vnetbios, vvinesd.386
	TimerCriticalSection=5000
	UniqueDOSPSP=TRUE
	PSPIncrement=5
	
	See SYSINI.WRI for more information on these settings.
	
	In addition:
	
	o If you are running VINES 4.10 or 4.11 (below 4.11(5)) and
	 you have problems printing, you may need to upgrade your
	 VINES.DRV. This driver is available from Banyan.
	
	o If you are running Banyan VINES 4.10 or 4.11, you do not
	 need to load NetBIOS unless you are running NetBIOS-
	 specific applications.  (It is not required for printing,
	 as it is with VINES 4.0x.)
	
	 If you are running version 4.10 and you want to run
	 NetBIOS-specific applications with Windows running in 386
	 enhanced mode, you must start NetBIOS before starting
	 Windows. However, you can only run a single NetBIOS
	 application at a time.
	
	 If you are running version 4.11, you can load NetBIOS
	 either before starting Windows or after starting Windows
	 in 386 enhanced mode.
	
	 If you want to run NetBIOS with Windows running in
	 standard mode, you must load NetBIOS from within Windows.
	 If you load NetBIOS before starting Windows, you will not
	 be able to start any non-Windows applications.
	
	 For more information on running memory-resident
	 applications after starting Windows, see Chapter 7, "Non-
	 Windows Applications," in the "Microsoft Windows User's
	 Guide."
	
	6.   Microsoft LAN Manager and 100-Percent Compatible
	    Networks
	
	6.1. MS-DOS Procedure
	
	Follow the procedures in this section if you are using one
	of the following networks:
	
	o Microsoft LAN Manager, version 2.1 or earlier
	
	o 3Com 3+Open, versions 1.1 through 2.0
	
	o Hewlett-Packard LAN Manager, version A.02.00 or earlier
	
	o NCR LAN Manager, all versions
	
	o Olivetti Olinet-LM, version 2.0 or earlier
	
	o Ungermann-Bass Net/One LM, versions 1.1 through 2.0
	
	The updating procedure differs, depending on which version
	of LAN Manager you are using. Follow the instructions for
	the version you have. If you are not sure which version
	you have, see the following section.
	
	6.1.1. Determining Which Version You Are Using
	
	To determine which version you are using, type the following
	at the command prompt:
	
	net config workstation
	
	If you see information about your configuration, you have an
	Enhanced version. This information indicates whether you
	have Enhanced version 2.x or Enhanced version 1.x.
	
	If you receive an error message when you type the command,
	you have a Basic version. To find out whether you have Basic
	version 2.x or Basic version 1.x, check the creation dates
	of the files in your LAN Manager directory (typically
	C:\\LANMAN.DOS\BASIC). If the files are dated before July
	1990, you have version 1.x. Files dated after July 1990 are
	typically version 2.0; files dated after July 1991 are
	typically version 2.1.
	
	Note: If you installed 3Com 3+Share with minimal NetBIOS
	     implementation, do one of the following:
	     - Reinstall with a complete NetBIOS implementation.
	     - Copy the REDIR.400 file to replace the MSREDIR.EXE
	       file on your hard disk.
	     - Call Microsoft Sales Information Center (MSIC) and request the LAN
	       Manager 2.0 supplemental disk; see your registration
	       card for the phone number.
	
	6.1.2  Microsoft LAN Manager Version 2.1
	
	No MS-DOS procedure is required for Microsoft LAN Manager Version
	2.1.
	
	6.1.3. Microsoft LAN Manager Version 2.0 Enhanced
	
	To update LAN Manager version 2.x Enhanced, replace your
	current NETWKSTA.EXE and NETBEUI.DOS files with the new
	versions included with the Windows 3.1 and MS-DOS 5.0
	Upgrade. It's a good idea to preserve your current files by
	renaming them with a different extension, such as .OLD or
	.BAK.
	
	To update LAN Manager version 2.x Enhanced:
	
	1. Rename the following files:
	
	  NETWKSTA.EXE (usually in C:\LANMAN.DOS\NETPROG) to
	  NETBEUI.DOS (usually in C:\LANMAN.DOS\DRIVERS\PROTOCOL\NETBEUI)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  location of the NETWKSTA.2X_ and NETBEUI.DO_ files.
	
	4. Use the following syntax to expand and copy the new
	  files to your network directory:
	
	  expand [drive1:]netwksta.2x_ [drive2:][path]netwksta.exe
	  expand [drive1:]netbeui.do_ [drive2:][path]netbeui.dos
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the NETWKSTA.2X_ file is on a disk in
	  drive A, and your NETWKSTA.EXE file is in the
	  LANMAN.DOS\NETPROG directory on drive C, type this at the
	  command prompt:
	
	  expand a:\netwksta.2x_ c:\lanman.dos\netprog\netwksta.exe
	
	  Note: Do not restart your computer.
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For information about installing MS-DOS, see
	"Getting Started."
	
	For information about loading LAN Manager device drivers
	into the upper memory area, see the README.TXT file. For
	the location of the README.TXT file, see the PACKING.LST
	file on Setup disk 1.
	
	Note: Do not use the MS-DOS LOADHIGH command with the
	     LAN Manager net start command. The net start command
	     loads the network redirector (NETWKSTA.EXE) into the
	     upper memory area. If you do not want to load
	     NETWKSTA.EXE into the upper memory area, add the UMB=NO
	     command to the [workstation] section of your LANMAN.INI
	     file.
	
	Note: If you are running Microsoft LAN Manager 2.x
	     Enhanced or an OEM version of LAN Manager 2.x Enhanced,
	     you may want to take advantage of any remaining space
	     in the upper memory area by loading LAN Manager
	     services such as NETPOPUP in this area. Call Microsoft
	     Customer Service to request the LAN Manager 2.0
	     supplemental disk and technical notes. See your
	     registration card for the phone number.
	
	Note: If you are running Microsoft LAN Manager 2.x
	     Enhanced and get a "NET3055" message, do ONE of the
	     following:
	     o Use the RAM switch in the DEVICE command for EMM386
	       in your CONFIG.SYS file, and the LIM=YES command in
	       the [workstation] section of your LANMAN.INI file.
	     o Use the NOEMS switch in the DEVICE command for
	       EMM386 in your CONFIG.SYS file, and the LIM=NO
	       command in the [workstation] section of your
	       LANMAN.INI file.
	
	6.1.4. Microsoft LAN Manager Version 2.x Basic
	
	To update LAN Manager version 2.x Basic, replace your
	current REDIR.EXE, NET.EXE, and NETBEUI.DOS files with the
	new versions included with the Windows 3.1 and MS-DOS 5.0
	Upgrade. It's a good idea to preserve your current files by
	renaming them with a different extension, such as .OLD or
	.BAK.
	
	To update LAN Manager version 2.0 Basic:
	
	1. Rename the following files:
	
	  REDIR.EXE (usually in C:\LANMAN.DOS\REDIR)
	  NET.EXE (usually in C:\LANMAN.DOS\BASIC)
	  NETBEUI.DOS (usually in C:\LANMAN.DOS\DRIVERS\PROTOCOL\NETBEUI)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  location of the REDIR.2X_, NET.EX_, and NETBEUI.DO_ files.
	
	4. Use the following syntax to expand and copy the new
	  files to your network directory:
	
	  expand [drive1:]redir.2x_ [drive2:][path]redir.exe
	  expand [drive1:]net.ex_ [drive2:][path]net.exe
	  expand [drive1:]netbeui.do_ [drive2:][path]netbeui.dos
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the REDIR.2X_ file is on a disk in drive
	  A, and your REDIR.EXE file is in the LANMAN.DOS\REDIR
	  directory on drive C, type this at the command prompt:
	
	  expand a:\redir.2x_ c:\lanman.dos\redir\redir.exe
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For information about installing MS-DOS, see
	"Getting Started."
	
	Note: After updating your network, REDIR.EXE loads into
	     the upper memory area. If you do not want to load
	     REDIR.EXE into the upper memory area, add the UMB=NO
	     command to your LANMAN.INI file. The UMB=NO command
	     must directly follow the START RDR $1 command.
	
	6.1.5. Microsoft LAN Manager Version 1.x Enhanced
	
	To update LAN Manager version 1.x Enhanced, replace your
	current NETWKSTA.EXE file with the new version included with
	the Microsoft Windows 3.1 and MS-DOS 5.0 Upgrade. It's a
	good idea to preserve your current file by renaming it with
	a different extension, such as .OLD or .BAK.
	
	To update LAN Manager version 1.x Enhanced:
	
	1. Rename the following file:
	
	  NETWKSTA.EXE (usually in C:\LANMAN.DOS\NETPROG)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  location of the NETWKSTA.1X_ file.
	
	4. Use the following syntax to expand and copy the new file
	  to your network directory:
	
	  expand [drive1:]netwksta.1x_ [drive2:][path]netwksta.exe
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the NETWKSTA.1X_ file is on a disk in
	  drive A, and your NETWKSTA.EXE file is in the LANMAN.DOS\NETPROG
	  directory on drive C, type this at the command prompt:
	
	  expand a:\netwksta.1x_ c:\lanman.dos\netprog\netwksta.exe
	
	  Note: Do not restart your computer.
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For information about installing MS-DOS, see
	"Getting Started."
	
	Note: Do not use the LOADHIGH command to load any LAN
	     Manager version 1.x files into the upper memory area.
	     This might result in memory conflicts that could cause
	     your system to fail.
	
	6.1.6. Microsoft LAN Manager Version 1.x Basic
	
	To update LAN Manager version 1.x Basic, replace your
	current REDIR.EXE file with the new version included with
	the Windows 3.1 and MS-DOS 5.0 Upgrade. It's a good idea to
	preserve your current file by renaming it with a different
	extension, such as .OLD or .BAK.
	
	To update LAN Manager version 1.x Basic:
	
	1. Rename the following file:
	
	  REDIR.EXE (usually in C:\LANMAN.DOS\BASIC)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  location of the REDIR.1X_ file.
	
	4. Use the following syntax to expand and copy the new file
	  to your network directory:
	
	  expand [drive1:]redir.1x_ [drive2:][path]redir.exe
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the REDIR.1X_ file is on a disk in drive
	  A, and your REDIR.EXE file is in the LANMAN.DOS\BASIC
	  directory on drive C, type this at the command prompt:
	
	  expand a:\redir.1x_ c:\lanman.dos\basic\redir.exe
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For information about installing MS-DOS, see
	"Getting Started."
	
	Note: Do not use the LOADHIGH command to load any LAN
	     Manager version 1.x files into the upper memory area.
	     This might result in memory conflicts that could cause
	     your system to fail.
	
	6.2. Windows Procedure
	
	Many networks, such as IBM LAN Server, Digital Pathworks,
	and 3Com 3+Open, are based on Microsoft LAN Manager. Consult
	your network documentation, network distributor, or system
	administrator to learn whether your network belongs in this
	category, and if so, on which version of LAN Manager it is
	based.
	
	The following notes include general information about using
	LAN Manager networks and information about specific versions
	of LAN Manager.
	
	6.2.1. Ungermann-Bass Net/One
	
	o Ungermann-Bass Net/One LAN Manager is based on Microsoft
	 LAN Manager. Choose the Microsoft LAN Manager option when
	 running the Windows and MS-DOS Setup program. Setup should
	 correctly identify your network and the proper version
	 number.
	
	In addition:
	
	If you are using an Ungermann-Bass network card with any
	network, including networks not produced by Ungermann-Bass,
	your system may not run correctly in 386 enhanced mode
	unless you have the proper settings in your SYSTEM.INI file.
	
	If you experience problems, follow these steps:
	
	1. Open your SYSTEM.INI file by using a text editor such
	  as Notepad. SYSTEM.INI is located in your Windows
	  directory.
	
	2. Find or add the [386Enh] section in the file.
	
	  If you're using Notepad, you can find this section by
	  choosing Find from the Search menu, typing [386Enh], and
	  then choosing the OK button.
	
	3. Find or add the TimerCriticalSection=10000 line in
	  this section.
	
	4. Save your SYSTEM.INI file.
	
	5. Quit and restart Windows.
	
	6.2.2. Using the Ungermann-Bass XNS Transport Stack
	
	If you are using the Ungermann-Bass XNS transport stack and
	running Windows in 386 enhanced mode, you must make sure the
	transport stack is not using expanded memory. If your system
	is configured to provide expanded memory with a memory
	manager such as EMM386, you can disable that product's
	expanded-memory option. Or, if you want to continue using
	expanded memory, you can disable its use by using the
	Ungermann-Bass transport stack as follows:
	
	1. Open your PROTOCOL.INI file by using a text editor
	  such as Windows Notepad. PROTOCOL.INI is located in your
	  LAN Manager directory.
	
	2. Find the section [XNS_XIF].
	
	  If you're using Notepad, you can find this section by
	  choosing Find from the Search menu, typing [XNS_XIF], and
	  then choosing the OK button.
	
	3. Add a line NOEMM, or, if the line already exists,
	  make sure that it is not commented out with a semicolon
	  (;) at the beginning of the line.
	
	4. Save your PROTOCOL.INI file.
	
	5. Restart your workstation.
	
	6.2.3. Using LAN Manager and Expanded Memory
	
	If you are running Windows in 386 enhanced mode, it is
	recommended that you not use expanded memory with LAN
	Manager. If you do, you may find that your system slows down
	considerably or it may lock up occasionally. If this is a
	problem, turn off the use of expanded memory by modifying
	your LANMAN.INI and PROTOCOL.INI files. The exact procedure
	will vary depending on what components you are running. See
	your LAN Manager documentation for further details.
	
	1. Open your LANMAN.INI file by using a text editor such
	  as Notepad. LANMAN.INI is located in your LAN Manager
	  directory.
	
	2. Find or add the section [workstation].
	
	  If you're using Notepad, you can find this section by
	  choosing Find from the Search menu, typing [workstation],
	  and then choosing the OK button.
	
	3. Find or add the LIM= line in this section, and then
	  edit it to read:
	
	  LIM=NO
	
	4. Save your LANMAN.INI file.
	
	5. Restart your workstation.
	
	Or you can stop your workstation and restart it again using
	the net stop workstation and net start workstation commands.
	
	In addition, you may want to configure other network
	components (such as protocol stacks) to avoid using expanded
	memory. Consult your network documentation for the specific
	component for instructions on how to do this.
	
	6.2.4. Using Pop-up Services
	
	LAN Manager Enhanced includes pop-up services you can use to
	see incoming broadcast messages. These pop-up services can
	disrupt the Windows screen display, so you must either
	disable them or run the LAN Manager WinPopup utility so they
	can coexist with Windows.
	
	The WinPopup utility should be located in your LAN Manager
	NETPROG directory, included in your path. To automatically
	start the utility when you start Windows, include the
	following entry in the [windows] section of your WIN.INI:
	
	load=winpopup.exe
	
	If you set up Windows for use with LAN Manager version 2.0
	or 2.1 Enhanced, the Windows part of Setup adds this line to
	your WIN.INI file. If you are running LAN Manager 1.x
	Enhanced, you must insert this line yourself. See WININI.WRI
	for information on modifying your WIN.INI file. If you are
	using LAN Manager 1.x, you also need to obtain an updated
	version of NETPOPUP.EXE from your network dealer.
	
	Note: Windows version 3.1 includes an updated version of
	     the WinPopup utility. This utility may not be
	     compatible with all networks that are based on
	     Microsoft LAN Manager. If you are running AT&T/NCR
	     StarGroup LAN Manager version 2.0 Release 3.5, you
	     should use the WNETMSG utility provided instead of
	     WinPopup.
	
	Alternatively, if you want to disable the pop-up services,
	use the following procedure:
	
	1. Find your LAN Manager root directory.
	
	2. Use Notepad to open the LANMAN.INI file, and locate
	  the line that begins with WRKSERVICES=.
	
	3. Remove the NETPOPUP or MINIPOP entry from this line.
	
	  If you remove the netpopup and minipop entries but leave
	  the messenger entry, messages will still be received but
	  will be recorded in the MESSAGES.LOG file in your LAN
	  Manager directory rather than being displayed on the
	  screen. If you do not want to log your messages, you can
	  also remove the messenger entry from this same line.
	
	4. Save the file.
	
	5. Quit Windows, and then restart your workstation.
	
	6.2.5. LAN Manager Basic
	
	When you set up Windows for use with LAN Manager Basic (all
	versions), the following entry is added to the [386Enh]
	section of your SYSTEM.INI file:
	
	network=*dosnet, *vnetbios, lanman10.386
	
	See the SYSINI.WRI file for more information on this entry.
	
	Network software based on LAN Manager Basic, or on LAN
	Manager Enhanced without full API support, must not be
	loaded in the high memory area (the first 64K of extended
	memory).
	
	You need to modify the LANMAN.INI file in your network
	directory to prevent the network from loading in the HMA.
	Find all lines that begin with REDIR and add the following
	command-line option to each:
	
	/HIMEM:NO
	
	6.2.6. LAN Manager 1.x
	
	Some early copies of LAN Manager 1.x require a maintenance
	upgrade to run with Windows. If you experience problems,
	contact your network vendor for an upgrade.
	
	6.2.7. LAN Manager 2.0 Enhanced
	
	When you set up Windows for use with LAN Manager 2.0
	Enhanced, the following entry is added to the [386Enh]
	section of your SYSTEM.INI file:
	
	network=*vnetbios, *dosnet
	
	See the SYSINI.WRI file for more information on this entry.
	
	For Windows to support LAN Manager 2.0 Enhanced, you must
	have the files NETAPI.DLL, PMSPL.DLL, LANMAN.DRV,
	LANMAN.HLP, WINPOPUP.EXE, and WINPOPUP.HLP. These files are
	located in your LAN Manager NETPROG directory, which should
	be in your path. Windows also includes updated versions of
	these files, which will be automatically installed on some
	older versions of LAN Manager.
	
	6.2.8. LAN Manager 2.1 Basic
	
	If you upgrade from an earlier version of LAN Manager Basic
	to version 2.1 Basic using the Over-the-Network Upgrade
	process, your SYSTEM.INI and WIN.INI files may be left with
	incorrect information. This will only happen if your upgrade
	procedure has been configured to update Windows
	installations.
	
	This problem will cause you to receive a warning that
	"WinPopup" cannot be found, and all network functions in
	Windows File Manager, Print Manager, and Control Panel will
	be unavailable.
	
	To correct this problem, follow these steps:
	
	1. Open your WIN.INI file by using a text editor such as
	  Notepad. WIN.INI is located in your Windows directory.
	
	2. Find or add the load= line in the file.
	
	  If you're using Notepad, you can find this section by
	  choosing Find from the Search menu, typing load=, and then
	  choosing the OK button.
	
	3. Remove the word WinPopup or WinPopup.exe from this
	  line.
	
	4. Save your WIN.INI file.
	
	5. Quit Windows.
	
	6. Change to the Windows directory.
	
	7. Start Windows Setup by typing setup at the MS-DOS
	  prompt.
	
	8. Choose the Network entry to display a list of network
	  options.
	
	9. Choose the option Microsoft LAN Manager (version 2.1
	  Basic).
	
	10. Choose to accept the configuration shown.
	
	11. Restart Windows.
	
	6.2.9. LAN Manager 2.1 Enhanced
	
	When you set up Windows for use with LAN Manager 2.1
	Enhanced, the following entry is added to the [boot] section
	of your SYSTEM.INI file:
	
	Network.drv=lanman21.drv
	
	See the SYSINI.WRI file for more information on this entry.
	
	For Windows to support LAN Manager 2.1 Enhanced, you must
	have the files NETAPI.DLL, PMSPL.DLL, LANMAN21.DRV,
	LM21_W31.HLP, WINPOPUP.EXE, and WINPOPUP.HLP. These files
	are usually located in your LAN Manager NETPROG directory,
	which is on your path. If Windows cannot find any of these
	files, you may receive warning messages when starting
	Windows, or be unable to use Windows network functions.
	
	Additional query words: 3.1 3.10 5 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	
