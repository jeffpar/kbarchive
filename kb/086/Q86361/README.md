---
layout: page
title: "Q86361: NETWORKS.TXT: Microsoft Windows &amp; MS-DOS 5 Upgrade Part B"
permalink: /kb/086/Q86361/
---

## Q86361: NETWORKS.TXT: Microsoft Windows &amp; MS-DOS 5 Upgrade Part B

{% raw %}

	Article: Q86361
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
	NETWORKS.TXT file. This article contains sections 7 through 17.
	
	MORE INFORMATION
	================
	
	7.     Artisoft LANtastic
	
	7.1.   MS-DOS Procedure
	
	Before you run Setup with any version of Artisoft LANtastic,
	make sure to shut down the LANtastic server. Do not shut down
	the workstation client.
	
	7.1.1. Artisoft LANtastic Versions 3.01 or Earlier
	
	Artisoft LANtastic versions 3.02 and higher are compatible
	with MS-DOS 5.0
	
	If you are using LANtastic versions 2.5 through 3.01,
	you need to type two SETVER commands at the command prompt.
	The SETVER command reports to your network software the
	version of DOS that it was designed to run with--in this
	case, version 4.0.
	
	If you are using a LANtastic version earlier than 2.5,
	contact your network vendor for an update.
	
	To update LANtastic versions 3.01 or earlier:
	
	1. Shut down the LANtastic server. Do not shut down the
	  workstation client.
	
	2. Set up MS-DOS 5.0 on your computer. For more information
	  about installing MS-DOS 5.0, see "Getting Started."
	
	  MS-DOS may display two "Incorrect DOS version" messages
	  when your network restarts. Ignore these.
	
	3. Type the following commands at the command prompt:
	
	  setver redir.exe 4.00
	
	  setver server.exe 4.00
	
	4. Restart your computer.
	
	If you are using EMM386, you might need to exclude the
	memory area used by the network adapter card. To do this,
	use the x switch with the DEVICE command for EMM386.EXE in
	your CONFIG.SYS file. If you are using the factory-set
	defaults for the LANtastic 2Mbps adapter, include the x=d800-
	dfff switch with the DEVICE command for EMM386.EXE. If this
	memory region is not excluded, you might experience problems
	with programs that use expanded memory.
	
	For more information about EMM386 options, see Chapter 15 of
	the "Microsoft MS-DOS User's Guide and Reference."
	
	7.2. Windows Procedure
	
	LANtastic versions below 3.0 are not compatible with
	Microsoft Windows.
	
	For information about LANtastic versions 3.x or 4.x, see the
	specific sections that follow. The following notes apply to
	both versions.
	
	o The EMMExclude setting, added to the SYSTEM.INI file
	 during Setup, is required for the default configuration of
	 the Artisoft LANtastic Enhanced 2mbps network adapter. If
	 you have changed the memory address setting on your
	 adapter, modify this entry in SYSTEM.INI to reflect the
	 appropriate address range. If you are not using this
	 network adapter, you can remove this entry.
	
	o Some commands require the NetHeapSize entry in the
	 SYSTEM.INI file to be set higher than the default value;
	 for example, XCOPY requires NetHeapSize=128. Increasing
	 the NetHeapSize value leaves less memory available for non-
	 Windows applications, so only increase this value if
	 necessary. For more information about the NetHeapSize
	 entry, see the SYSINI.WRI file.
	
	o You cannot create a permanent swapfile while running
	 Windows on a LANtastic server. To create a permanent
	 swapfile, restart your computer without loading the server
	 software, and create the swapfile in Windows. If a dialog
	 box appears asking you to restart Windows, you must
	 restart Windows in 386 enhanced mode before you start the
	 server software.
	
	o If you are running a LANtastic server, you cannot use
	 Windows File Manager to format a floppy disk. You can use
	 the FORMAT command at the MS-DOS prompt instead.
	
	7.2.1. Artisoft LANtastic 3.x
	
	When you set up Windows for use with LANtastic 3.x, the
	following entries are added to the [386Enh] section of
	SYSTEM.INI:
	
	EMMExclude=D800-DFFF
	INDOSPolling=TRUE
	NetHeapSize=76
	NetAsynchFallback=TRUE
	NetAsynchTimeout=50
	
	In addition:
	
	To print from any mode of Windows across LANtastic 3.x, it
	is necessary to do one of the following:
	
	o Turn off the Fast Printing Direct To Port option in
	 Control Panel. To do this, choose the Printers option in
	 Control Panel, and then choose the Connect button. In the
	 Connect dialog box, clear the Fast Printing Direct To Port
	 check box.
	
	When you turn off this option, it affects all of your ports.
	
	If you want to turn this option off for one port only,
	follow these steps:
	
	1. If you are printing using LPT3, add the following
	  entry to the [ports] section of the WIN.INI file:
	
	  LPT3.DOS=
	
	  If you are using LPT1 or LPT2, you can use the LPT1.DOS or
	  LPT2.DOS entries already in your WIN.INI file.
	
	2. Quit Windows, and then redirect the LPTx port
	  (where x is the port you are using) by using the LANtastic
	  NET USE command.
	
	3. Restart Windows.
	
	4. Using Control Panel, change your printer port to
	  LPTx.DOS.
	
	o If you are running LANtastic version 3.x, you cannot run
	 Windows in 386 enhanced mode on a non-dedicated server.
	
	o If you have a network connection on LPT1, it will not be
	 displayed in Print Manager or Control Panel.
	
	7.2.2. Artisoft LANtastic 4.x
	
	When you set up Windows for use with LANtastic 4.x, the
	following entries are added to the [386Enh] section of
	SYSTEM.INI:
	
	EMMExclude=D800-DFFF
	NetAsynchFallback=TRUE
	NetAsynchTimeout=50
	NetHeapSize=64
	PerVMFiles=0
	
	In addition:
	
	o If you set up Windows for use with LANtastic 4.x, you must
	 have the LANTASTI.386 file somewhere on your path. This
	 file should be located in your LANtastic directory. If
	 LANTASTI.386 is not in your path, the Windows part of
	 Setup adds *dosnet to the [386Enh] section of the
	 SYSTEM.INI file. To use Windows with LANtastic 4.x, remove
	 this entry and add the entries shown above, and make sure
	 LANTASTI.386 is somewhere on your path.
	
	8.     Microsoft MS-Net and 100-Percent Compatible Networks
	
	8.1.   MS-DOS Procedure
	
	8.1.1. General Instructions
	
	Follow the instructions in this section if you are using one
	of the following networks:
	
	o Microsoft MS-Net, all versions
	
	o Hewlett-Packard Office Works, all versions
	
	o NCR PC LAN, all versions
	
	o Olivetti Olinet-LAN, version 1.23 or earlier
	
	o Ungermann-Bass Net/One PC, versions 2.0 through 2.1
	
	Note: If you are using 3Com 3+Share Version 1.6 or
	     earlier, see the separate section for this network
	     below.
	
	To update MS-NET or 100-percent compatible networks, replace
	your current REDIR.EXE and SETNAME.EXE files with the new
	versions included with the Windows 3.1 and MS-DOS 5.0
	Upgrade. It's a good idea to preserve your current files by
	renaming them with a different extension, such as .OLD or
	.BAK.
	
	To update MS-NET or a 100-percent compatible network:
	
	1. Rename the following files:
	
	  REDIR.EXE (usually in the directory that contains your
	  network files)
	  SETNAME.EXE (usually in the directory that contains your
	  network files)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  location of the REDIR.2X_ file.
	
	4. Use the following syntax to expand and copy the new
	  files to your network directory:
	
	  expand [drive1:]redir.2x_ [drive2:][path]redir.exe
	  expand [drive1:]setname.ex_ [drive2:][path]setname.exe
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the REDIR.2X_ file is on a disk in drive A,
	  and your REDIR.EXE file is in the NETWORK directory on drive C,
	  type this at the command prompt:
	
	  expand a:\redir.2x_ c:\network\redir.exe
	
	5. Review your MSNET.INI file to make sure the REDIR command appears
	  before the SETNAME command when both appear in the same command
	  set.
	
	  For example, suppose one of your command sets in MSNET.INI appears
	  as follows:
	
	  start rdr $1
	  chknet
	  loadniu -r -d -m:d -i:5 exniuw.xfm stdlc
	  xnsbios -m:d -i:5
	  session
	  setname $1
	  redir /l:26 /s:9
	  prtsc
	
	  You would reverse the order of the SETNAME and REDIR commands
	  so the command set appears as follows:
	
	  start rdr $1
	  chknet
	  loadniu -r -d -m:d -i:5 exniuw.xfm stdlc
	  xnsbios -m:d -i:5
	  session
	  redir /l:26 /s:9
	  setname $1
	  prtsc
	
	Note: If Ungermann-Bass Net/One PC does not load with MS-
	     DOS 5.0, do one of the following:
	     o Contact your vendor to get an updated LOADNIU.EXE
	       file.
	     o Put an UBPAUSE command between the LOADNIU and
	       XNSBIOS lines of the MSNET.INI file.
	     o Issue network commands from a batch file that
	       includes a PAUSE command between the LOADNIU and
	       XNSBIOS lines.
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For information about installing MS-DOS, see
	"Getting Started."
	
	8.1.2. 3Com 3+Share Version 1.6 or Earlier
	
	To update 3Com 3+Share version 1.6, replace your current
	MSREDIR.EXE file with the new version included with the
	Windows 3.1 and MS-DOS 5.0 Upgrade. It's a good idea to
	preserve your current file by renaming it with a different
	extension, such as .OLD or .BAK.
	
	If you have a 3+Share version earlier than 1.6, contact your
	network vendor for an update. You cannot run a server with
	3+ Share version 1.6 or earlier and MS-DOS 5.0.
	
	Note: Version 1.6 or earlier of 3+Start, the remote-
	     startup software from 3Com, is not compatible with MS-
	     DOS version 4.x or 5.0.
	
	To update 3Com 3+Share version 1.6:
	
	1. Rename the following file:
	
	  MSREDIR.EXE (usually in C:\3SHARE)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  the location of the REDIR.2X_ file.
	
	4. Use the following syntax to expand and copy the new file
	  to your network directory:
	
	  expand [drive1:]redir.2x_ [drive2:][path]msredir.exe
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the REDIR.2X_ file is on a disk in drive
	  A, and your MSREDIR.EXE file is in the 3SHARE directory on
	  drive C, type this at the command prompt:
	
	  expand a:\redir.2x_ c:\3share\msredir.exe
	
	After you complete the procedure, set up MS-DOS 5.0 on your
	computer. For more information about installing MS-DOS 5.0,
	see "Getting Started."
	
	8.2.   Windows Procedure
	
	8.2.1. General Instructions
	
	If a network is present and detected, but cannot be
	identified during the Windows part of Setup, the Microsoft
	Network is the default network that may be set up. The
	following notes apply to the general category of networks
	that support the MS-DOS network interface and NetBIOS
	protocols.
	
	For specific notes on Ungermann-Bass Net/One and 3Com
	Networks, see these separate sections below.
	
	When you set up Windows for use with Microsoft Network, the
	following entries are added to the [386Enh] section of the
	SYSTEM.INI file:
	
	TimerCriticalSection=10000
	UniqueDOSPSP=TRUE
	PSPIncrement=5
	
	For some networks, you may be able to remove one or more of
	these entries to improve performance. For more information
	about these entries, see the SYSINI.WRI file.
	
	In addition:
	
	o If the path to your network software is not included in
	 the path in your AUTOEXEC.BAT file, Setup does not detect
	 a network and proposes "No Network Installed" for your
	 system configuration. Use Custom Setup to specify that the
	 Microsoft Network is installed.
	
	o Due to the way some networks handle print queues, Print
	 Manager cannot distinguish multiple print queues on the
	 same server. The lists of print jobs in these queues might
	 be displayed improperly. In addition, Print Manager might
	 not be able to display the job title when displaying queue
	 information.
	
	o The Microsoft network driver does not support any vendor's
	 name-aliasing scheme.
	
	8.2.2. Ungermann-Bass Net/One
	
	Ungermann-Bass Net/One is based on Microsoft Network.  Make
	sure you choose the proper network option when you set up
	Windows.
	
	o Choose the Microsoft Network Or 100 Compatible option
	 when running the Windows and MS-DOS Setup program.
	
	o Ungermann-Bass Net/One LAN Manager is based on Microsoft
	 LAN Manager. See the Microsoft LAN Manager section earlier
	 in this document for more information.
	
	In addition:
	
	If you are using an Ungermann-Bass network card with any
	network, including networks not produced by Ungermann-Bass,
	your system may not run correctly in 386 enhanced mode
	unless you have the proper settings in your SYSTEM.INI file.
	
	If you experience problems, follow these steps:
	
	1. Open your SYSTEM.INI file by using a text editor
	  such as Notepad. SYSTEM.INI is located in your Windows
	  directory.
	
	2. Find or add the [386Enh] section in the file.
	
	  If you're using Notepad, you can find this section by
	  choosing Find from the Search menu, typing [386Enh], and
	  then choosing the OK button.
	
	3. Find or add the TimerCriticalSection=10000 line
	  in this section.
	
	4. Save your SYSTEM.INI file.
	
	5. Quit and restart Windows.
	
	o If you are using an Ungermann-Bass XNS transport stack,
	 you must make sure it is configured not to use expanded
	 memory when running Windows version 3.1 in 386 enhanced
	 mode.
	
	8.2.3. 3Com Networks
	
	The Windows part of Setup recognizes the following 3Com
	networks:
	
	o The 3Com 3+Share network is based on the Microsoft Network
	 product and will be handled as such by Windows. See the
	 "Microsoft Network and Compatibles" section later in this
	 document.
	
	o The 3Com 3+Open LAN Manager network is based on Microsoft
	 LAN Manager and will be handled as such by Windows. See
	 the "Microsoft LAN Manager Networks" section earlier in
	 this document.
	
	When you install for 3Com 3+Share or 3Com 3+Open LAN
	Manager, Setup adds the following entries to the [386Enh]
	section of your SYSTEM.INI file:
	
	TimerCriticalSection=10000
	UniqueDOSPSP=TRUE
	PSPIncrement=5
	
	See SYSINI.WRI for more information on these entries.
	
	In addition:
	
	o Some copies of 3Com 3+Open LAN Manager version 1.1 require
	 a maintenance upgrade to work with Windows. If you
	 encounter problems, contact your network customer-support
	 organization.
	
	o When you install Windows, Setup modifies your AUTOEXEC.BAT
	 file to make sure the Windows directory appears in your
	 path ahead of any conflicting directories. However,  the
	 3+Share network might change this path when you log in. If
	 so, your system administrator must modify the network log-
	 in procedure so that the path is set correctly to run
	 Windows.
	
	o On a 3Com 3+Open network, the user's name displayed by
	 Windows Print Manager might not match the user's actual
	 log-in name.
	
	o Some 3Com 3Station diskless workstations come with an All
	 ChargeCard. Make sure your machine is not configured to
	 load the network into the upper memory area between 640K
	 and 1 megabyte, as this will not work reliably with
	 Windows version 3.1 in standard mode. You will not be able
	 to set up Windows if your system is configured in this
	 way.
	
	o If you use the 3C505 Network Adapter Card, you must
	 disable the Link Plus Optimizer to run Windows in 386
	 enhanced mode. You can disable it by removing the
	 following lines from your CONFIG.SYS file:
	
	 device=psh.sys arguments
	 device=pth.sys
	
	 In addition, remove the following line from your
	 AUTOEXEC.BAT (or any other batch file you use to start
	 your network):
	
	 ldr
	
	o Windows does not support the 3Com network aliasing scheme
	 (three-part names).
	
	9.   DEC Pathworks and PCSA
	
	9.1. MS-DOS Procedure
	
	If you have DEC PATHWORKS for DOS version 4.1,
	carry out the following procedure:
	
	1. If you are upgrading from DOS version 3.3 or earlier,
	  you need to update your redirector file, REDIR.EXE. Obtain
	  REDIR.400 from the PATHWORKS disks or system service,
	  rename it to REDIR.EXE, and place it in your DECNET
	  directory.
	
	2. Install MS-DOS 5.0 on your computer. For more
	  information about installing MS-DOS 5.0, see
	  "Getting Started."
	
	3. Restart your computer, but do not yet run STARTNET.BAT,
	  which starts the network.
	
	4. Type the following line at the command prompt:
	
	  setver redir.exe 4.00
	
	5. Restart your computer, and run STARTNET.BAT.
	
	Version 4.0 of PATHWORKS for DOS is compatible with MS-DOS
	5.0. However, you must take several steps to achieve this
	compatibility.
	
	To update PATHWORKS version 4.0:
	
	1. If you are upgrading from DOS version 3.3 or earlier,
	  you need to update your redirector file, REDIR.EXE. Obtain
	  REDIR.400 from the PATHWORKS disks or system service,
	  rename it to REDIR.EXE, and place it in your DECNET
	  directory.
	
	2. Install MS-DOS 5.0 on your computer. For more
	  information about installing MS-DOS 5.0, see
	  "Getting Started."
	
	3. Restart your computer, but do not yet run STARTNET.BAT,
	  which starts the network.
	
	4. Type each of the following lines at the command prompt:
	
	  setver redir.exe 4.00
	
	  setver use.exe 4.00
	
	  setver memman.exe 4.00
	
	  setver lad.exe 4.00
	
	  setver show.exe 4.00
	
	  setver netsetup.exe 4.00
	
	5. Restart your computer, and run STARTNET.BAT.
	
	Note: If you upgrade to PATHWORKS 4.1 from PATHWORKS 4.0,
	     you must disable the SETVER commands you typed in this
	     procedure. To do this after you install PATHWORKS 4.1,
	     type the same commands, but replace the 4.00 with /d in
	     each command.
	
	If you are using a version of PATHWORKS or PCSA earlier than
	4.0, contact your network vendor for an update. Meanwhile,
	if you are using PATHWORKS or PCSA version 3.x, you can
	start using MS-DOS 5.0 by carrying out the following
	procedure.
	
	Note: To get support for MS-DOS Task Swapper, use
	     PATHWORKS for DOS version 4.1 or later.
	
	To temporarily update PATHWORKS or PCSA version 3B10.BIxD0:
	
	1. If you are upgrading from DOS version 3.3 or earlier,
	  you need to update your redirector file, REDIR.EXE. Obtain
	  REDIR.400 from the PATHWORKS disks or system service,
	  rename it to REDIR.EXE, and place it in your DECNET
	  directory.
	
	2. Install MS-DOS 5.0 on your computer. For more
	  information about installing MS-DOS 5.0, see
	  "Getting Started." MS-DOS might display a series of
	  "Incorrect DOS version" messages when your network
	  restarts. Ignore these.
	
	3. Type all of the following commands at the command
	  prompt:
	
	  setver redir.exe 4.00
	  setver use.exe 4.00
	  setver emsload.exe 4.00
	  setver sch.exe 4.00
	  setver netsetup.exe 4.00
	  setver ncp.exe 4.00
	  setver dnnethat.exe 4.00
	  setver lad.exe 4.00
	  setver dll.dxe 4.00
	  setver memman.exe 4.00
	  setver dnnethld.exe 4.00
	  setver show.exe 4.00
	
	4. Restart your computer.
	
	9.2. Windows Procedure
	
	Windows version 3.1 supports DEC Pathworks versions 4.0 and
	above.
	
	When you set up Windows for use with a DEC Pathworks
	network, the following entries are added to the [386Enh]
	section of your SYSTEM.INI file:
	
	Network=*dosnet, decnet.386, decnb.386
	TimerCriticalSection=10000
	
	For more information about these settings, see the
	SYSINI.WRI file.
	
	In addition:
	
	o DEC Pathworks supports additional APIs that are not
	 supported by the files installed by Windows 3.1.
	
	o If you have problems starting Windows, or copying or
	 opening files, you may need to increase the value of the
	 FILES= command in your CONFIG.SYS file. Try setting the
	 value to 30.
	
	o If you have problems running NetBIOS applications, try
	 replacing the DECNB.386 entry with *VNETBIOS in the
	 network=  line in the [386Enh] section of the SYSTEM.INI
	 file.
	
	10.   IBM PC Lan/DOS Lan Requester
	
	10.1. MS-DOS Procedure
	
	If you use IBM PC LAN 1.34 and have problems with
	applications that use record locking or file locking, you
	may need an updated REDIR50.EXE file included in ICO 3039.
	Contact IBM Support Channel.
	
	10.1.1 IBM PC LAN Program Version 1.33 or Earlier
	
	To use MS-DOS 5.0 with IBM PC LAN Program (PCLP), you need
	one of the following:
	
	o IBM PCLP version 1.34 installed.
	
	o IBM PCLP version 1.3x that has been updated to version
	 1.34 by applying the appropriate IBM Corrective Service
	 Disks. Contact IBM Product Support to obtain the software
	 you need.
	
	If you are running a PCLP version earlier than 1.30, contact
	IBM for the necessary software and instructions.
	
	To update IBM PCLP versions 1.30 through 1.34:
	
	1. Skip to step 3 if you are upgrading from version 1.34.
	  Otherwise, install the necessary IBM PCLP software by
	  following the instructions included with the Corrective
	  Service Disk(s) you received from IBM.
	
	2. Restart your computer, and make sure the network starts.
	
	  If the network doesn't start, quit this procedure and
	  contact IBM for help.
	
	3. Set up MS-DOS 5.0 on your computer. For more information
	  about installing MS-DOS 5.0, see "Getting Started."
	
	4. Restart your computer.
	
	  The following message appears on your screen:
	
	  Start PC LAN Program 1.3 (Y/N)?
	
	5. Type n, and press  ENTER.
	
	6. Type the following at the command prompt:
	
	  setver net.com /d
	
	7. Restart your computer.
	
	  The following message appears on your screen:
	
	  Start PC LAN Program 1.3 (Y/N)?
	
	8. Type y, and press ENTER.
	
	  Note: If, after setting up MS-DOS, your CONFIG.SYS file
	        has a command for loading the IFSFUNC.EXE file,
	        disable it by typing "rem" and a space in front
	        of the command. Then save the file and restart
	        your computer.
	
	10.1.2. IBM DOS LAN Requester Version 1.30 or Earlier
	
	To use MS-DOS 5.0 with IBM DOS LAN Requester, you need one
	of the following:
	
	o DOS LAN Requester files that are included with OS/2 LAN
	 Server version 1.30.1.
	
	o DOS LAN Requester files that come with OS/2 LAN Server
	 version 1.30, which has had IBM Corrective Service
	 Diskette (CSD) 5015 applied to it.  Contact IBM Product
	 Support to obtain the software you need.
	
	If you are running a DOS LAN Requester version earlier than
	1.30, contact IBM for the necessary software and
	instructions.
	
	To update IBM DOS LAN Requester version 1.30:
	
	1. Upgrade your DOS LAN Requester software to version
	  1.30.1 by following the instructions included with IBM
	  Corrective Service Disk 5015.
	
	2. Restart your computer and make sure the network starts.
	
	  If the network doesn't start, quit this procedure and
	  contact IBM for help.
	
	3. Set up MS-DOS 5.0 on your computer. For more information
	  about installing MS-DOS 5.0, see "Getting Started."
	
	4. Restart your computer.
	
	  The following message appears on your screen:
	
	  Start DOS LAN Requester (Y/N)?
	
	5. Type n, and press ENTER.
	
	6. Type the following at the command prompt:
	
	  setver net.com /d
	
	7. Restart your computer.
	
	  The following message appears on your screen:
	
	  Start DOS LAN Requester (Y/N)?
	
	8. Type y, and press ENTER.
	
	  Note: If, after setting up MS-DOS, your CONFIG.SYS file
	        has a command for loading the IFSFUNC.EXE file,
	        disable it by typing "rem" and a space in front
	        of the command. Then save the file and restart
	        your computer.
	
	10.2.   Windows Procedure
	
	10.2.1. IBM PC LAN Program
	
	The IBM PC LAN Program is based on the Microsoft Network
	product and will be handled as such by Windows.
	
	When setting up Windows for use with the IBM PC LAN Program,
	the following entry is added to the [386Enh] section of the
	SYSTEM.INI file:
	
	INDOSpolling=TRUE
	
	See the online document, SYSINI.WRI, for more information on
	this setting.
	
	In addition:
	
	o When you connect to a network share by using File Manager,
	 that redirection will not be detected by non-Windows
	 applications.
	
	o The IBM PCLP Extended Services refers to network drives
	 and printers by two different names. Usually, when
	 connecting to a network, you select connections from a
	 list containing descriptive names, but internally
	 connections are made using hidden names such as
	 \\SERVER\IBMXS001.
	
	 With PCLP Extended Services, you must type the same name
	 as the hidden names in Control Panel or File Manager to
	 make new network connections. Consult your network
	 administrator to learn the proper names to use.
	
	o Some versions of PCLP lock up your system if you receive a
	 broadcast message while running Windows. You can disable
	 these messages with the net pause messenger command. Or
	 you can start up your network with NET START RDR instead
	 of NET START RCV or NET START MSG commands.
	
	o When you connect to a network printer by using Control
	 Panel, the connection will not be detected by non-Windows
	 applications. It will, however, still be usable by Windows
	 and Windows applications.
	
	o If you use "setup /a" to copy and expand Windows files
	 to the network, then use "setup /n" to set up Windows
	 over the network, make sure the NET.COM file appears in the path
	 before NET.EXE.
	
	11.     TCS 10Net or DCA 10Net
	
	11.1.   MS-DOS Procedure
	
	11.1.1. DCA 10Net Plus Version 4.20 (10) or Earlier and
	       DCA 10Net Version 3.3 (40) or Earlier
	
	DCA 10Net Plus versions 4.20 (20) and later, and DCA 10Net
	versions 3.3 (41) and later, are compatible with MS-DOS 5.0.
	If you have an earlier version, contact your network vendor
	for an update.
	
	11.2.   Windows Procedure
	
	Tiara Computer Systems 10Net (formerly known as DCA 10Net)
	versions 4.1 and above are compatible with Windows version
	3.1. The Windows part of Setup treats these as Microsoft
	Network compatible.
	
	When setting up Windows for use with TCS 10Net, the
	following entry is added to the [386Enh] section of your
	SYSTEM.INI file:
	
	TimerCriticalSection=10000
	
	The TimerCriticalSection value may be set lower on some
	versions of 10Net. For more information about this entry,
	see the SYSINI.WRI file.
	
	To set up Windows for use with TCS 10Net version 4.1x with
	the DCA 1MB card, run Custom Setup and choose the TCS 10Net
	(versions 4.1X with DCA 1M card) network option. The Windows
	part of Setup adds the following entries to the [386Enh]
	section of your SYSTEM.INI file:
	
	INDOSPolling=TRUE
	PSPIncrement=5
	TimerCriticalSection=10000
	UniqueDOSPSP=TRUE
	
	For more information about these settings, see the
	SYSINI.WRI file.
	
	In addition:
	
	o If you purchase 10Net for Windows, it will install
	 additional Windows components that will enhance the
	 functionality available in Windows File Manager, Control
	 Panel, and Print Manager.
	
	o You cannot use File Manager to format floppy disks when
	 running versions of 10Net prior to 5.0.
	
	12.   Farallon PhoneNet Talk Version 2.02 or Earlier
	
	Note: Please contact Farallon for information about
	     running this network with Windows 3.1.  No information
	     was available at press time.
	
	12.1. MS-DOS Procedure
	
	To update Farallon PhoneNet Talk version 2.02, replace your
	current REDIR.EXE file with the new version included with
	the Windows 3.1 and MS-DOS 5.0 Upgrade.  It's a good idea to
	preserve your current file by renaming it with a different
	extension, such as .OLD or .BAK.
	
	If you are using a PhoneNet Talk version earlier than 2.02,
	contact your network vendor for an update.
	
	To update Farallon PhoneNet Talk version 2.02:
	
	1. Rename the following file:
	
	  REDIR.EXE (usually in C:\\PNTALK)
	
	2. Copy the EXPAND.EXE file on Setup disk 1 to the DOS directory
	  on the hard drive.
	
	3. Open the PACKING.LST file on Setup disk 1 to determine the
	  location of the REDIR.2X_ file.
	
	4. Use the following syntax to expand and copy the new file
	  to your network directory:
	
	  expand [drive1:]redir.2x_ [drive2:][path]redir.exe
	
	  The [drive1:] parameter specifies the location of the
	  compressed file you want to expand. The [drive2:][path]
	  parameter specifies the destination for the expanded file.
	
	  For example, if the REDIR.2X_ file is on a disk in drive
	  A, and your REDIR.EXE file is in the PNTALK directory on
	  drive C, type this at the command prompt:
	
	  expand a:\redir.2x_ c:\pntalk\redir.exe
	
	13.   Sitka TOPS Version 3.0 or Earlier
	
	Note: Please contact Sitka for information about running
	     this network with Windows 3.1.  No information was
	     available at press time.
	
	13.1. MS-DOS Procedure
	
	Sitka TOPS version 3.0 is compatible with MS-DOS version
	5.0. However, do not load any TOPS files into the upper
	memory area. This might result in memory conflicts that
	could cause your system to fail. Do not use the LOADHIGH
	command with a TOPS network.
	
	If your system is a TOPS workstation, the MS-DOS Shell MOVE
	command may not work.
	
	If you are using a TOPS version earlier than 3.0, contact
	your network vendor for an update.
	
	14.   Invisible Software - NET/30 For Windows
	
	Note: Please contact Invisible Software for information
	     about running this network with MS-DOS 5.0.  No
	     information was available at press time.
	
	14.1. Windows Procedure
	
	To use NET/30 For Windows, choose the Custom Setup option
	when you run Setup. For your network configuration, choose
	Other Network (Requires disk from OEM). You are prompted for
	a path to the directory containing your NET/30 files. Your
	SYSTEM.INI and WIN.INI files will automatically be updated.
	
	If you are setting up Windows on a nondedicated file server
	and you are sharing a serial printer, you must add a line to
	the SYSTEM.INI file. If you are sharing COM1, add the
	following line in the [386Enh] section:
	
	COM1AutoAssign=0
	
	If you are sharing COM2, add the following line to the
	[386Enh] section:
	
	COM2AutoAssign=0
	
	15.   AT&T StarGroup (Non-LANMAN)
	
	15.1. MS-DOS Procedure
	
	Follow these instructions only if you cannot use the AT&T
	StarGroup network after you upgrade to MS-DOS version 5.0
	from MS-DOS version 3.x:
	 1. Install Windows 3.1 and MS-DOS 5.0.
	 2. Type the following commands at the MS-DOS prompt:
	    SETVER SETUP.EXE 4.00
	    SETVER ATTSTART.EXE 4.00
	 3. Restart your computer.
	 4. Use your StarGroup installation disks to remove
	    the existing network software from your computer.
	 5. Reinstall StarGroup.  When the StarGroup
	    installation prompts you to indicate which version of
	    MS-DOS you are using, choose MS-DOS version 4.0.
	
	16.   PC-NFS 3.0
	
	Note: Please contact Sun Microsystems for information
	     about running this network with Windows 3.1.  No
	     information was available at press time.
	
	16.1. MS-DOS Procedure
	
	If you use PC-NFS 3.0 with MS-DOS Shell, MS-DOS Shell may
	display more drives than you have currently enabled. To
	prevent this, use the PC-NFS /d switch to specify the number
	of drives you are using. For more information, see your PC-
	NFS documentation.
	
	If you can't use the COPY or XCOPY command on PC-NFS 3.01,
	contact your vendor to get an updated version of the
	PCNFS.SYS device driver.
	
	17.  Other Online Documents
	
	For a complete list of the other online documents, refer to
	the Welcome section of "Getting Started."
	
	Additional query words: 3.1 3.10 5 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	

{% endraw %}
