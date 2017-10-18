---
layout: page
title: "Q135849: List of Documentation Errors in Windows 95 Resource Kit"
permalink: kb/135/Q135849/
---

## Q135849: List of Documentation Errors in Windows 95 Resource Kit

	Article: Q135849
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists known documentation errors in the Microsoft Windows 95
	Resource Kit and the Microsoft Windows 95 Resource Kit Help file located in the
	Admin\Reskit\Helpfile folder on the Windows 95 CD-ROM.
	
	The following known documentation errors are described in this article:
	
	- Page 111: Technical Issues for Microsoft Protected-Mode Clients
	  Online Help: Planning for Shared Installations
	
	- Page 140: System Startup and Networking for Shared Installations
	  Online Help: System Startup and Networking for Shared Installations
	
	- Page 145: Custom Installations of Windows 95: The Issues
	  Online Help: Customizing Windows 95 with WRKGRP.INI Files
	
	- Page 197: Initializing Static VxDs at Startup
	  Online Help: Initializing Static VxDs at Startup
	
	- Page 202: Config.sys Settings Incorporated in Windows 95 Ios.sys
	  Online Help: Io.sys: The Real-Mode Operating System
	
	- Page 204: MSDOS.SYS Values
	  Online Help: MSDOS.SYS: Special Startup Values
	
	- Page 214: Changes to SYSTEM.INI
	  Online Help: Changes to SYSTEM.INI
	
	- Page 221: Installing Windows 95 for Dual Booting with Windows 3.x
	  Online Help: Installing Windows 95 for Dual Booting with Windows 3.x
	
	- Page 226: Installing Windows 95 over DR DOS
	  Online Help: Installing Windows 95 over DR DOS
	
	- Page 292: Supporting Pass-Through Security for Peer Resource Sharing
	  Online Help: Supporting Pass-Through Security for Peer Resource Sharing
	
	- Page 303: Additional Settings for Client for NetWare Networks
	  Online Help: Additional Settings for Client for NetWare Networks
	
	- Page 340: Artisoft LANtastic, Configuration File Entries.
	
	- Page 354: Configuring Microsoft DLC with ODI Drivers
	
	- Page 375: Using Login Scripts with Microsoft Networking
	
	- Page 392: To View Volumes on a Server
	  Online Help: Using Commands to Connect to NetWare Servers
	
	- Page 431: IPX/SPX Technical Notes on NetWare Networks
	  Online Help: IPX/SPX Technical Notes on NetWare Networks
	
	- Page 457: Sources for Windows 95 System Management Tools
	  Online Help: Sources for Windows 95 System Management Tools
	
	- Page 465: To Set Up User-Level Security on a Computer on a Microsoft Network
	  Online Help: To Set Up User-Level Security on a Computer on a Microsoft
	  Network
	
	- Page 488: Maintaining Roving User Profiles on Other Networks
	  Online Help: Maintaining Roving User Profiles on Other Networks
	
	- Page 570: Using File-System Troubleshooting Options
	  Online Help: Using File-System Troubleshooting Options
	
	- Page 627: Mouse and Pointing Device Driver Overview
	  Online Help: Mouse and Pointing Device Driver Overview
	
	- Page 687: To Preserve Long Filenames with Disk Utilities that Do Not
	  Recognize Them
	  Online Help: To Preserve Long Filenames with Disk Utilities that Do Not
	  Recognize Them
	
	- Page 688: Technical Notes on Long Filenames
	  Online Help: Technical Notes on Long Filenames
	
	- Page 689: Turning Off the Extended File System Features
	  Online Help: Technical Notes on Long Filenames
	
	- Page 719: Creating an Apps.ini File
	  Online Help: Creating an Apps.ini File
	
	- Page 755: Limit on Number of Installed TrueType Fonts
	
	- Page 766: Using DEC PrintServer Software for Windows 95
	  Online Help: Using DEC PrintServer Software for Windows 95
	
	- Page 777: Loading Fonts in Windows 95
	  Online Help: Loading Fonts in Windows 95
	
	- Page 782: Graphic images don't print correctly or output is garbled
	
	- Page 783: Printing is slower than normal
	
	- Page 784: To troubleshoot a computer that stalls while printing to a local
	  printer and network printer
	
	- Page 847: To Choose Which Profile to Use at Startup
	
	- Page 896: To Install SLIP
	  Online Help: Configuring a Windows 95 Dial-Up Client
	
	- Page 899: Configuring a Windows 95 Dial-Up Server
	
	- Page 1019: Getting Started with Registry Editor
	  Online Help: Getting Started with Registry Editor
	
	- Page 1066: Safe Mode Without Compression
	
	- Page 1104: Native Windows 95 Commands
	  Online Help: Introduction of Native Windows 95 Commands
	
	- Page 1111: Incorrect Directory and Command List
	
	- Page 1120: Xcopy Command-Line Switches
	  Online Help: Xcopy Command-Line Switches
	
	- Pages 1159-1160: General INF File Format--[Version] Section
	
	- Pages 1161-1162: [Install] Section
	  Online Help: Windows 95 INF Files: [Install] Section
	
	- Page 1182: [InstallLocationsMRU]
	  Online Help: [InstallLocationsMRU]
	
	- Page 1193: MSBATCH.INF Parameters: netcard_ID
	  Online Help: netcard_ID
	
	- Page 1194: DNS Servers
	  Online Help: DNS Servers, MSBATCH.INF Parameters
	
	- Page 1200: [Printers]
	  Online Help: [Printers]
	
	- Page 1206: MSBATCH.INF Sample File
	  Online Help: MSBATCH.INF Sample File
	
	- Page 1209: Windows 95 Network Adapter INF Summary: Intel
	  Online Help: Windows 95 Network Adapter INF Summary: Intel
	
	- Page 1243: Customizable Display for Mouse Pointer
	  Online Help: Customizable Display for Mouse Pointer
	
	- Page 1257: Getting Answers to Your Technical Questions
	  Online Help: Getting Answers to Your Technical Questions
	
	MORE INFORMATION
	================
	
	Page 111: Technical Issues for Microsoft Protected-Mode Clients
	
	Online Help: Planning for Shared Installations
	--------------------------------------------------------------------------------------------------------------
	
	The fourth bulleted item of this topic states: "For protected-mode network
	clients, you cannot use a PCI network adapter or ISA adapters on a PCI computer
	for system startup over the network. This is because PCI adapters do not start
	until the second booting of Windows 95. For shared installations, the adapter
	must start on the first boot."
	
	This item should state: "For protected-mode network clients, you cannot use a
	PCI, EISA, or ISA Plug and Play network adapter for system startup over the
	network. This is because these adapters do not start until the second booting of
	Windows 95. For shared installations, the adapter must start on the first
	boot."
	
	Page 140: System Startup and Networking for Shared Installations
	
	Online Help: System Startup and Networking for Shared Installations
	------------------------------------------------------------------------------------------------------------------------------------
	
	Page 140 gives the following command:
	
	  net logon generic_name password /y
	
	This command only works for the Client for Microsoft Networks when connecting to
	SBS shares on an SMB server.
	
	Page 145: Custom Installations of Windows 95: The Issues
	
	Online Help: Customizing Windows 95 with WRKGRP.INI Files
	------------------------------------------------------------------------------------------------------------------
	
	This topic states that the Wrkgrp.ini file should be located in the shared folder
	that contains the Windows 95 source files. This information is incorrect. The
	Wrkgrp.ini file should be located in the System folder in the shared folder that
	contains the Windows 95 source files.
	
	Page 197: Initializing Static VxDs at Startup
	
	Online Help: Initializing Static VxDs at Startup
	----------------------------------------------------------------------------------------------
	
	The last sentence of the first paragraph reads: "Notice, however, that if a VxD
	file is in the Windows System\Vmm32 directory, Windows 95 loads it in addition
	to the combined VxDs in Mrci2.vxd."
	
	This sentence should read: "Notice, however, that if a VxD file is in the Windows
	System\Vmm32 directory, Windows 95 loads it in addition to the combined VxDs in
	Vmm32.vxd."
	
	Page 202: Config.sys Settings Incorporated in Windows 95 Io.sys
	
	Online Help: Io.sys: The Real-Mode Operating System
	-------------------------------------------------------------------------------------------------------------------
	
	The "Config.sys Settings Incorporated in Windows 95 Io.sys" topic states that the
	default value for the "files=" setting is 60. This default is actually 30.
	
	Page 204: MSDOS.SYS Values
	
	Online Help: MSDOS.SYS: Special Startup Values
	-------------------------------------------------------------------------
	
	In the [Options] section, the entry that reads
	
	  BootFailSafe=
	
	should read:
	
	  BootSafe=
	
	Note: BootSafe=1 will boot your computer into safe mode.
	
	Page 214: Changes to SYSTEM.INI
	
	Online Help: Changes to SYSTEM.INI
	------------------------------------------------------------------
	
	In the "Entries Added to the [Boot] Section of SYSTEM.INI" section, the entry
	that reads
	
	  sound.drv=sound.drv
	
	should read:
	
	  sound.drv=mmsound.drv
	
	Page 221: Installing Windows 95 for Dual Booting with Windows 3.x
	
	Online Help: Installing Windows 95 for Dual Booting with Windows 3.x
	--------------------------------------------------------------------------------------------------------------------------------------
	
	The note at the bottom of the page states:
	
	NOTE: If you are using disk compression software, you need to copy IO.DOS,
	MSDOS.DOS, COMMAND.DOS, CONFIG.DOS, and AUTOEXEC.BAT to your host drive also.
	
	The reference to AUTOEXEC.BAT is incorrect. The note should read:
	
	NOTE: If you are using disk compression software, you need to copy IO.DOS,
	MSDOS.DOS, COMMAND.DOS, CONFIG.DOS, and AUTOEXEC.DOS to your host drive also.
	
	Page 226: Installing Windows 95 over DR DOS
	
	Online Help: Installing Windows 95 over DR DOS
	------------------------------------------------------------------------------------------
	
	The first bulleted item in this topic states: "Some DR DOS utilities can cause
	compatibility problems with the Windows 95 real-mode kernel; Windows 95 Setup
	uses rem to comment out any command lines in the configuration files that start
	such utilities."
	
	This item should state: "Some DR DOS utilities can cause compatibility problems
	with the Windows 95 real-mode kernel; Windows 95 Setup removes or uses rem to
	comment out any command lines in the configuration files that start such
	utilities."
	
	Page 292: Supporting Pass-Through Security for Peer Resource Sharing
	
	Online Help: Supporting Pass-Through Security for Peer Resource Sharing
	--------------------------------------------------------------------------------------------------------------------------------------------
	
	This section states:
	
	  If computers running Windows 95 will be providing File and Printer
	  Sharing Services for NetWare Networks, then the NetWare server
	  providing access validation must be configured with a special
	  WINDOWS_PASSTHRU account. This special account is used to support
	  pass-through validation for user-level security.
	
	This statement is incorrect. A WINDOWS_PASSTHRU account is not needed as long as
	the person logging on to the server has an account.
	
	Page 303: Additional Settings for Client for NetWare Networks
	
	Online Help: Additional Settings for Client for NetWare Networks
	------------------------------------------------------------------------------------------------------------------------------
	
	- The "Setting maximum IPX packet size for the LIP protocol" section states, in
	  part:
	
	     ...add a registry value named MaxLIP and specify a binary or
	     DWORD value that is the greatest value allowed on any one network
	     segment.
	
	  Note that the value should actually be a binary value entered in hexadecimal
	  in reverse order. For example, if you want to specify a maximum packet size
	  of 1024, enter 00 04 in the binary registry key. (1024 is 0400 in
	  hexadecimal.)
	
	- The "Turning off support for packet-burst protocol" section states:
	
	  If you want to turn off support for the packet-burst protocol (which is
	  enabled by default for File and Printer Sharing for NetWare Networks), set
	  SupportBurst=0 in the following Registry key:
	
	        Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwserver
	
	  The registry key is actually:
	
	     Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwredir
	
	Page 340: Artisoft LANtastic, Configuration File Entries
	--------------------------------------------------------
	
	The Configuration File Entries show the System.ini file requiring the following
	entry:
	
	  [LANTASTIC]
	  network_irq=15
	
	This network_irq=15 entry is not required and Setup will remove it.
	
	Page 354: Configuring Microsoft DLC with ODI Drivers
	----------------------------------------------------
	
	The third entry in the Autoexec.bat is listed as Odinhlp.exe.
	
	The correct component name is Odihlp.exe.
	
	Page 375: Using Login Scripts with Microsoft Networking
	-------------------------------------------------------
	
	Page 375 includes a table named Special Login Script Parameters. Windows NT login
	variables, including those in this table, do not work in Windows 95. The table
	contains the following parameters:
	
	  %OS%
	  %PROCESSOR%
	  %USERDOMAIN%
	  %USERNAME%
	
	NOTE: The Microsoft Windows 95 Resource Kit Help file does not include this
	table.
	
	Page 392: To View Volumes on a Server
	
	Online Help: Using Commands to Connect to NetWare Servers
	-----------------------------------------------------------------------------------------------
	
	The last paragraph of the "To view volumes on a server" bulleted item states:
	"Use the /network parameter to specify the volumes on the particular network you
	want to view" and gives the following example:
	
	  net view \\nwserver_name /network:nw
	
	The /network parameter is not a valid option for the NET VIEW command.
	
	Page 431: IPX/SPX Technical Notes on NetWare Networks
	
	Online Help: IPX/SPX Technical Notes on NetWare Networks
	--------------------------------------------------------------------------------------------------------------
	
	The second bulleted item of this section states:
	
	SPX-II is a protocol definition for windowing and transmitting large packets over
	SPX. You can run any SPX-II application under Windows 95 using the
	IPX/SPX-compatible protocol. The related Novell-supplied file TLI.DLL must be
	available on the computer to support SPX-II.
	
	This item should read:
	
	SPX-II is a protocol definition for windowing and transmitting large packets over
	SPX. The IPX/SPX-compatible protocol included with Windows 95 (Nwlink.vxd) does
	not support SPX-II. There are third-party dynamic link libraries (DLLs)
	available that provide SPX-II support when you are using Nwlink.vxd. However, if
	you are using a third-party DLL intended to provide SPX-II support and a program
	communicates directly with Nwlink.vxd, SPX-II support is not available to that
	program.
	
	Page 457: Sources for Windows 95 System Management Tools
	
	Online Help: Sources for Windows 95 System Management Tools
	--------------------------------------------------------------------------------------------------------------------
	
	This topic states:
	
	  When you install Windows 95 from the installation floppy disks, System
	  Policy Editor is installed automatically with the operational system
	  files. This tool can be used to modify INI files, CONFIG.SYS, and
	  AUTOEXEC.BAT.
	
	This statement is incorrect. The tool that is installed automatically is System
	Configuration Editor, not System Policy Editor. You can use System Configuration
	Editor to modify INI files and the Config.sys and Autoexec.bat files.
	
	System Policy Editor is included with the CD-ROM version of Windows 95 and is not
	installed automatically.
	
	Page 465: To Set Up User-Level Security on a Computer on a Microsoft
	Network
	
	Online Help: To Set Up User-Level Security on a Computer on a
	Microsoft Network
	------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	Step 2 states: "Type the name of the Windows NT domain or Windows NT workstation
	where the user accounts reside, and then click OK."
	
	This step is incorrect. You can type the name of a Windows NT domain or a Windows
	NT server, but not a Windows NT workstation.
	
	Page 488: Maintaining Roving User Profiles on Other Networks
	
	Online Help: Maintaining Roving User Profiles on Other Networks
	----------------------------------------------------------------------------------------------------------------------------
	
	The [Profiles] section states the following:
	
	  [Profiles]
	  Mary=\\bigserver\homedirs\mary
	  John=\\bigserver\homedirs\john
	  Pat=\\bigserver\homedirs\pat
	
	This section should read:
	
	  [Profiles]
	  Mary=\\bigserver\homedirs\mary\user.dat
	  John=\\bigserver\homedirs\john\user.dat
	  Pat=\\bigserver\homedirs\pat\user.dat
	
	The Resource Kit does not include these instructions:
	
	- Before following the instructions for setting up a Windows 95 network client
	  to maintain roaming user profiles on other networks, you first need to ensure
	  that user profiles have been disabled. To do this, click Start, point to
	  Settings, click Control Panel, double-click Passwords, click the User
	  Profiles tab, click "All users of this PC use the same preferences and
	  desktop settings," and then click OK.
	
	- You must also add a DWORD value named "UseHomeDirectory" (without the
	  quotation marks) to the following registry key:
	
	     HKEY_LOCAL_MACHINE\Network\Logon
	
	  Set the data value for UseHomeDirectory to 0x00000000
	
	- You must also add a STRING value named "SharedProfileList" (without the
	  quotation marks) to the following registry key:
	
	     HKEY_LOCAL_MACHINE\Network\Logon
	
	  Set the string value to \\server\share\profiles.ini
	
	- After following the instructions for setting up a Windows 95 network client
	  to maintain roaming user profiles on other networks, the last step is to
	  enable user profiles. To do this, click Start, point to Settings, click
	  Control Panel, double-click Passwords, click the User Profiles tab, click
	  "Users can customize their preferences and desktop settings," and then click
	  OK.
	
	Page 570: Using File-System Troubleshooting Options
	
	Online Help: Using File-System Troubleshooting Options
	----------------------------------------------------------------------------------------------------------
	
	The first sentence of the "Disable All 32-bit Protected-Mode Disk Drivers"
	section states: "This option ensures that no 32-bit disk drivers are loaded in
	the system, except the floppy driver."
	
	This section should read: "This option disables the 32-bit protected-mode floppy
	disk driver (Hsflop.pdr), and floppy disk I/O is performed as in previous
	versions of Windows."
	
	Page 627: Mouse and Pointing Device Driver Overview
	
	Online Help: Mouse and Pointing Device Driver Overview
	----------------------------------------------------------------------------------------------------------
	
	This topic states:
	
	  In addition to better mouse services, Windows 95 allows the use of
	  serial ports COM1 through COM4 for connecting a mouse or other
	  pointing device.
	
	This topic should state:
	
	  Windows 95 allows the use of serial ports COM1 and COM2 for connecting
	  a mouse or other pointing device.
	
	Page 687: To Preserve Long Filenames with Disk Utilities that do not
	  Recognize Them
	
	Online Help: To Preserve Long Filenames with Disk Utilities that do not
	  Recognize Them
	--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	Steps 5 and 6 for the "To preserve long filenames with disk utilities that do not
	recognize them" state:
	
	1. Turn tunneling on again, and then restart the computer.
	
	2. At the command prompt, type lfnbk /r [drive] to restore long filenames.
	
	These steps should be:
	
	1. At the command prompt, type lfnbk /r [drive] to restore long filenames.
	
	2. Turn tunneling on again, and then restart the computer.
	
	Page 688: Technical Notes on Long Filenames
	
	Online Help: Technical Notes on Long Filenames
	------------------------------------------------------------------------------------------
	
	- The "Long filenames cannot be used on SUBST drives" item is incorrect. Long
	  file names can be used on SUBST drives.
	
	- The "To use friendly alias names instead of numeric tails" item is incorrect.
	  Windows 95 does not support the NameNumericTail setting. This setting causes
	  problems for any programs (including Windows 95 Setup, Microsoft Plus! for
	  Windows 95 Setup, and the Add/Remove Programs tool) that use the Program
	  Files folder.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q148594 "NameNumericTail=0" Value Causes Problems for Some Programs
	
	Page 689: Turning Off the Extended File System Features
	
	Online Help: Technical Notes on Long Filenames
	------------------------------------------------------------------------------------------------------
	
	The "Turning off the extended file system features" and "To enable the Windows
	3.1 file system" sections are invalid because Windows 95 does not support this.
	For example, if you edited the registry to include the Win31FileSystem key,
	Windows 95 would ignored it.
	
	
	Page 719: Creating an Apps.ini File
	
	Online Help: Creating an Apps.ini File
	--------------------------------------------------------------------------
	
	The Creating An Apps.ini File section has two errors:
	
	- The To Create An Apps.ini File topic does not include a step to add the
	  [AppInstallList] section. These are the correct steps:
	
	  1. Use a text editor to create a file that contains a list of applications
	     using the following format:
	
	        [AppInstallList]
	        <application name> = [*] <UNC path>
	        For <application name>, substitute the name that you want users
	        to see on the Network Install tab. For <UNC path>, substitute the
	        network location of the Setup application. If a Setup application
	        cannot work with UNC names, include an asterisk before it. For
	        example:
	
	           word for windows=*\\applications\forusers\word60\setup.exe
	
	  2. Save the Apps.ini file on a server to which users have read-only access.
	
	- The "To display the applications listed in Apps.ini on the Network Install
	  tab" topic incorrectly lists the registry key as:
	
	     Hkey_Local_Machine/SOFTWARE/Microsoft/Current Version
	
	  You should actually add a string value named "appinstallpath" (without the
	  quotation marks) to the following registry key:
	
	     Hkey_Local_Machine/SOFTWARE/Microsoft/Windows/Current Version
	
	  The data for the "appinstallpath" value should be the UNC path to the Apps.ini
	  file, including the file name. For example:
	
	     \\<server>\<share>\<installpath>\apps.ini
	
	Page 755: Limit on Number of Installed TrueType Fonts
	-----------------------------------------------------
	
	Page 755 states:
	
	  Greater font flexibility. Because the fonts are stored in the
	  registry, you can install an unlimited number of TrueType fonts.
	  In addition, you can print almost 1000 fonts in any document.
	
	This statement is not entirely true. Windows 95 does limit the number of fonts to
	approximately 1000 for various reasons not related to registry size limits. The
	exact number may vary depending on your configuration.
	
	Page 766: Using DEC PrintServer Software for Windows 95
	
	Online Help: Using DEC PrintServer Software for Windows 95
	------------------------------------------------------------------------------------------------------------------
	
	The steps "To install PrintServer Software for Windows 95" state the following:
	
	1. In the Network option in Control Panel, click Add.
	
	2. In the Select Network Component Type dialog box, double-click Service.
	
	3. In the Select Network Service dialog box, click DEC, and in the Network
	  Services list, click DEC Print Server. Click OK.
	
	These steps should state:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Double-click Add Printer and follow the onscreen instructions.
	
	3. In the list of Manufacturers, click Digital, and then click the appropriate
	  DEC PrintServer in the list of Printers.
	
	Page 777: Loading Fonts in Windows 95
	
	Online Help: Loading Fonts in Windows 95
	------------------------------------------------------------------------------
	
	The Notes in the Loading Fonts In Windows 95 section states: "Because fonts are
	stored in the Registry, there is no limit to the number of TrueType fonts that
	can be installed. In addition, almost 1000 fonts can be used simultaneously, and
	the same number can be printed in the same document."
	
	This section should read: "Approximately 1000 TrueType fonts can be installed in
	Windows 95. In addition, almost all of the installed fonts can be used
	simultaneously, and the same number can be printed in the same document. The
	1000-font maximum occurs because of the size of Registry keys and available
	storage space for font names in GDI."
	
	Page 782: Graphic images don't print correctly or output is garbled
	-------------------------------------------------------------------
	
	The first entry states: "Start the computer in Safe Mode, and then retry
	printing."
	
	This entry should be omitted. You can't print in Safe Mode (except to a file).
	
	Page 783: Printing is slower than normal
	----------------------------------------
	
	The first entry states: "Start the computer in Safe Mode, and then retry
	printing."
	
	This entry should be omitted. You cannot print in Safe Mode (except to a file).
	
	Page 784: To troubleshoot a computer that stalls while printing to a
	         local printer and network printer
	----------------------------------------------------------------------------------------------------------------
	
	The first entry states: "Start the computer in Safe Mode, and then retry
	printing."
	
	This entry should be omitted. You cannot print in Safe Mode (except to a file).
	
	Page 847: To Choose Which Profile to Use at Startup
	---------------------------------------------------
	
	The "To choose which profile to use at startup" section includes 5 steps. This
	topic should end after the note in step 3 on page 848. After this note, the
	following information should appear on page 848:
	
	Setting up a Microsoft Mail workgroup postoffice consists of the following
	tasks:
	
	- Deciding the location for the postoffice
	
	- Deciding who will administer the postoffice
	
	- Adding users and user information, such as office locations and passwords
	
	- Sharing the postoffice with all users in the workgroup
	
	To Set Up a Microsoft Mail Workgroup Postoffice:
	
	1. In Control Panel, click the Microsoft Mail Postoffice icon.
	
	2. In the Microsoft Workgroup Postoffice Admin dialog box, click Create A New
	  Workgroup Postoffice, and then click Next.
	
	<The "Microsoft Workgroup Postoffice Admin" screen on page 848 appears
	here>
	
	Step 4 on page 848 should be step 3.
	
	Step 5 on page 848 should be step 4.
	
	The rest of pages 848 and 849 is correct.
	
	NOTE: The Microsoft Windows 95 Resource Kit Help file contains the correct
	information for this topic.
	
	Page 896: To Install SLIP
	
	Online Help: Configuring a Windows 95 Dial-Up Client
	------------------------------------------------------------------------------
	
	Step 2 of the "To Install SLIP" bulleted item states: "In the Install From Disk
	dialog box, click the Browse button, and then type the path name to ADM
	N\APPTOOLS\SLIP\RNAPLUS.INF."
	
	Step 2 should read: "In the Install From Disk dialog box, click the Browse
	button, and then type the path name to ADMIN\APPTOOLS\DSCRIPT\RNAPLUS.INF."
	
	Page 899: Configuring a Windows 95 Dial-Up Server
	-------------------------------------------------
	
	This topic states: "Windows 95 must have special registry settings to act as an
	IP router."
	
	This information is incorrect. Microsoft does not support making changes to the
	registry to enable Windows 95 to become an IP router. Microsoft Windows NT
	Server version 3.5 can act as an IP router, but Microsoft Windows 95 cannot.
	Windows 95 provides all the protocols you need to connect to the Internet, but
	cannot act as an IP router.
	
	
	Page 1019: Getting Started with Registry Editor
	
	Online Help: Getting Started with Registry Editor
	-------------------------------------------------------------------------------------------------
	
	This topic states: "Registry Editor is not available with the Windows 95 floppy
	disks." Actually, Registry Editor is included on the Windows 95 floppy disks.
	
	Registry Editor is located in the Win95_03.cab cabinet file for non-DMF floppy
	disks, and in the Win95_02.cab cabinet file for DMF floppy disks.
	
	Page 1066: Safe Mode Without Compression
	----------------------------------------
	
	Page 1066 lists a startup option named "Safe Mode Without Compression." This
	startup option does not exist, and cannot be selected.
	
	Page 1104: Native Windows 95 Commands
	
	Online Help: Introduction of Native Windows 95 Commands
	---------------------------------------------------------------------------------------------
	
	The MORE command is listed as an internal command. MORE is actually an external
	command.
	
	Page 1111: Incorrect Directory and Command List
	-----------------------------------------------
	
	Under the heading "Commands Not Included in Windows 95," there is a list of
	commands located in the Other\Olddos folder on the Windows 95 CD-ROM.
	
	This folder name is incorrect; it should be Other\Oldmsdos. Also, some of the
	commands are not present in this folder.
	
	BACKUP was a file backup utility included with MS-DOS versions 2.0 through 5.0.
	It was replaced by MSBACKUP in version 6.0. MSBACKUP is in the Other\Oldmsdos
	folder, but BACKUP is not.
	
	EDLIN was a line-oriented text editor included with MS-DOS versions 2.0 through
	5.0. It was replaced by EDIT in MS-DOS version 5.0 and did not appear at all in
	MS-DOS 6.0 or later. EDIT is also a Windows 95 command and is explained on page
	1103 of the Windows 95 Resource Kit.
	
	Page 1120: Xcopy Command-Line Switches
	
	Online Help: Xcopy Command-Line Switches
	-------------------------------------------------------------------------------
	
	This section of the Resource Kit states that "/exclude" is a valid switch for the
	Windows 95 version of Xcopy. This switch is only valid for the Windows NT
	version of Xcopy.
	
	Pages 1159-1160: [Version] Section
	----------------------------------
	
	Pages 1159-1160 of the Resource Kit state that the Signature line of the
	[Version] section is "$Windows 95$." This is incorrect. The Signature line is
	actually as follows:
	
	  [Version]
	  Signature="$Chicago$"
	
	NOTE: The Microsoft Windows 95 Resource Kit Help file contains the correct
	information.
	
	Pages 1161-1162: [Install] Section
	
	Online Help: Windows 95 INF Files: [Install] Section
	---------------------------------------------------------------------------------------
	
	The "Reboot=1" or "Restart=1" entry in the [Install] section of an .Inf file does
	not restart or reboot the computer after the items in the [Install] section are
	processed as described on these pages.
	
	Page 1182: [InstallLocationsMRU]
	
	Online Help: [InstallLocationsMRU]
	-------------------------------------------------------------------
	
	The [InstallLocationsMRU] section gives the following example:
	
	  [InstallLocationsMRU]
	  mru1=a:\ 
	  mru2=c:\ 
	  mru3=\\winserver\source
	
	This example should state:
	
	  [InstallLocationsMRU]
	  \\server\share\folder=mru1
	  c:\win95=mru2
	  \\winserver\source=mru3
	
	Page 1193: MSBATCH.INF Parameters
	
	Online Help: netcard_ID
	---------------------------------------------------------
	
	In the [*PNP812D] section, the line that reads "Interrupt=" should read "IRQ="
	(without the quotation marks).
	
	Page 1194: DNS Servers
	
	Online Help: DNS Servers, MSBATCH.INF Parameters
	-----------------------------------------------------------------------
	
	The Values description states:
	
	  Comma-separated list of DNS server names.
	
	This description should read:
	
	  Comma-separated list of DNS server IP addresses.
	
	Page 1200: [Printers]
	
	Online Help: [Printers]
	---------------------------------------------
	
	The [Printers] section contains the following example:
	
	  [Printers]
	  "My BJC600"="Canon Bubble-Jet BJC-600",LPT1
	  "IIIsi Next Door"="HP Laserjet IIIsi",\\Server_1\PrtShr_1
	
	This example should state:
	
	  [Printers]
	  My BJC600=Canon Bubble-Jet BJC-600,LPT1
	  IIIsi Next Door=HP Laserjet IIIsi,\\Server_1\PrtShr_1
	
	Page 1206: MSBATCH.INF Sample File
	
	Online Help: MSBATCH.INF Sample File
	-----------------------------------------------------------------------
	
	The MSBATCH.INF Sample File topic contains the following example:
	
	  [InstallLocationsMRU]
	  MRU1=C:\WINDOWS
	  MRU2=C:\USER
	  MRU3=\\win_svr\source files\home_dir
	
	This example should state:
	
	  [InstallLocationsMRU]
	  \\server\share\folder=MRU1
	  c:\win95=MRU2
	  \\winserver\source=MRU3
	
	Page 1209: Windows 95 Network Adapter INF Summary: Intel
	
	Online Help: Windows 95 Network Adapter INF Summary: Intel
	-------------------------------------------------------------------------------------------------------------------
	
	The section heading that reads "[*PNP812]" should read "[*PNP812D]" (without the
	quotation marks).
	
	Page 1243: Customizable Display for Mouse Pointer
	
	Online Help: Customizable Display for Mouse Pointer
	-----------------------------------------------------------------------------------------------------
	
	This topic states that the CD-ROM version of Windows 95 contains color schemes
	for mouse pointers. This information is incorrect. Windows 95 does not include
	color schemes for mouse pointers.
	
	Page 1257: Getting Answers to Your Technical Questions
	
	Online Help: Getting Answers to Your Technical Questions
	---------------------------------------------------------------------------------------------------------------
	
	The sixth bulleted item of this section states:
	
	  Get technical support from a Microsoft engineer. Support is available
	  for no charge from a Microsoft PSS engineer, by means of a toll line,
	  for the first 90 days of using Windows 95. The 90-day period begins the
	  day of your first call. Call (425) 637-7098 between 6:00 A.M. and 6:00
	  P.M. Pacific time, Monday through Friday, excluding national holidays.
	  For support outside the United States, contact your local Microsoft
	  subsidiary.
	
	  After the initial 90-day free period has expired, support is available
	  from a Microsoft PSS engineer and charged by the length of time used or
	  by the occurrence. Call (800)
	  936-5700 ($25 per incident). For support outside the United States,
	  contact your local Microsoft subsidiary.
	
	  Support for Microsoft TCP/IP for Windows 95 is not available from the
	  standard Windows 95 PSS phone lines. To request TCP/IP support for
	  Windows 95, please contact a Microsoft Solution Provider or enroll in
	  one of the Microsoft fee-based support plans. For further information,
	  call the Microsoft Sales Information Center at (800) 426-9400.
	
	This item should read:
	
	  Get technical support from a Microsoft engineer. Support is available
	  for no charge from a Microsoft PSS engineer, by means of a toll line,
	  for the first 90 days of using Windows 95. The 90-day period begins the
	  day of your first call. Call (425) 635-7000 between 6:00 A.M. and 6:00
	  P.M. Pacific time, Monday through Friday, excluding national holidays.
	  For support outside the United States, contact your local Microsoft
	  subsidiary.
	
	  After the initial 90-day free period has expired, support is available
	  from a Microsoft PSS engineer. Call (800) 936-5700 ($35 per incident).
	  For support outside the United States, contact your local Microsoft
	  subsidiary.
	
	  Support for Microsoft TCP/IP for Windows 95 is available from the
	  Windows 95 fee-based support line.
	
	  For phone numbers and support options on all Microsoft products,
	  please see the information available on the Microsoft Web site at
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS.
	
	Additional query words: rkit drdos dr-dos dr dos novell wrk
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
