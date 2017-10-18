---
layout: page
title: "Q123863: README.TXT: Windows NT Version 3.5 U.S. Service Pack"
permalink: kb/123/Q123863/
---

## Q123863: README.TXT: Windows NT Version 3.5 U.S. Service Pack

	Article: Q123863
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Following is the README.TXT file that accompanies the Microsoft Windows
	NT 3.5 Workstation and Server U.S. Service Pack 3:
	
	---------------------------------------------------------------------------
	             Microsoft Windows NT 3.5 Workstation and Server
	                           U.S. Service Pack 3
	---------------------------------------------------------------------------
	Contents
	--------
	1.0  Introduction
	2.0  Installation Instructions for the Windows NT 3.5 U.S. Service Pack 3
	2.1  User Notes
	2.2  List of Bugs Fixed in Windows NT 3.5 U.S. Service Pack 3
	
	1.0  Introduction
	-----------------
	This release of Microsoft(R) Windows NT(TM) 3.5 U.S. Service Pack 3 is
	easy to apply from within Windows NT and changes only those files that
	were originally set up on the Windows NT Workstation or Windows NT Server
	system.  Service Pack releases are cumulative: they contain all previous
	fixes, as well as any new fixes made to the system.
	
	2.0  Installation Instructions for the Windows NT U.S. Service Pack
	-------------------------------------------------------------------
	Installing the Service Pack from a floppy disk:
	1.  Insert Service Pack Disk 1 into the floppy drive.
	2.  At the Windows NT Command Prompt, change to that floppy drive (that is,
	   A: or B:) and type UPDATE.
	3.  Follow the instructions given on the screen.
	
	Installing the Service Pack from a CD-ROM:
	1.  Insert the Service Pack CD-ROM disk into the CD-ROM drive.
	2.  At the Windows NT Command Prompt, change to that CD-ROM drive, then
	   change to the i386, MIPS, or ALPHA directory (depending upon whether
	   you have an Intel(TM), MIPS(R), or ALPHA AXP(TM) CPU), and type UPDATE.
	3.  Follow the instructions given on the screen.
	
	Installing the Service Pack from a network drive:
	1.  At the Windows NT Command Prompt, type the command to connect to the
	   network drive on which the Service Pack files reside.
	2.  Change to that network drive and type UPDATE.
	3.  Follow the instructions given on the screen.
	
	2.1  User Notes
	---------------
	*** Emergency Repair Disk
	
	If it is necessary to use the Windows NT Emergency Repair Disk to repair
	your Windows NT system at some time after you apply the Service Pack, you
	will need to re-apply the Service Pack after the repair is completed.  This
	is because the Emergency Repair Disk repairs your system by restoring your
	original Windows NT setup.  After the repair has completed, simply follow
	the above Installation Instructions to reapply the Service Pack.
	
	*** Adding New Components to the System
	
	If new software or hardware components are changed or added to your system
	after you have applied the Service Pack, it will be necessary to reapply
	the Service Pack.  This is because the files taken from the original
	Windows NT disk set may not be equivalent to the files on the Service Pack
	disk set.
	
	It is not possible to install new components directly from the Service Pack
	media (such as a new keyboard or printer driver).  New components must be
	installed from the original product media.
	
	*** Installing Symbol Files from the CD-ROM
	
	To install the symbol files corresponding to the new binaries in Service
	Pack 3, do the following (assuming your CD-ROM drive is D:, your symbol
	files are located in the C:\WINNT\SYMBOLS directory, and you are installing
	the files for an x86 machine):
	
	   XCOPY /S /U /D D:\SUPPORT\DEBUG\I386\SYMBOLS C:\WINNT\SYMBOLS
	
	This will copy the Service Pack 3 .DBG files over the existing versions of
	these files.  The XCOPY command shown will copy only those .DBG files that
	are already installed (/U switch), and only those with a more recent time-
	date stamp (/D switch).
	
	*** Remote Access Service (RAS)
	
	Several fixes were made to Windows NT Remote Access Service (RAS) that are
	included in this Service Pack. Following is background information on
	client compatibility with RAS.
	
	NOTE: If you don't already have RAS installed, install it from your
	original Windows NT setup media before applying the Service Pack.
	
	RAS Software Compression Compatibility with WFW 3.11 And Windows NT 3.1
	
	In addition to other fixes, the Service Pack installs files that make
	Windows NT 3.5 software compression compatible with Windows for Workgroups
	(WFW) 3.11 and Windows NT 3.1. Throughput should improve significantly
	unless previously compressed files are copied. For best performance
	Microsoft suggests you configure the RAS client software on WFW 3.11,
	Windows NT 3.1, and Windows NT 3.50 as follows:
	
	1. In Remote Access, make sure the Disable Software Compression option in
	  the Options menu is clear (not checked).
	
	2. Choose Edit, choose Modem, and select the following:
	
	   - Enable Hardware Flow Control
	   - Enable Modem Error Control
	
	  Clear the Enable Modem Compression check box so software compression
	  and modem compression are not used at the same time (as this reduces
	  throughput).
	
	Windows NT 3.5 RAS Clients Need No Change for RAS Software Compression
	
	If you install the Service Pack on a Windows NT 3.5 RAS server, unmodified
	Windows NT 3.5 RAS clients do not lose software compression compatibility
	when calling the RAS server. WFW 3.11 and Windows NT 3.1 RAS clients can
	use RAS software compression without any need for new files, except as
	noted below.
	
	All copies of Windows NT 3.5 have RAS software compression built-in. Only
	Windows NT 3.5 computers that are acting as RAS servers need the Service
	Pack for compression compatibility with Windows NT 3.1 and WFW 3.11 RAS
	clients. However, because of several code improvements, Microsoft
	recommends that you also apply this patch to Windows NT 3.5 RAS clients.
	The patch is required for RAS software compression compatibility when you
	call a Windows NT 3.1 or WFW 3.11 RAS server from a Windows NT 3.5 RAS
	client.
	
	Software Compression in WFW 3.11 and Windows NT 3.1 RAS Clients
	
	Software compression is available by default on these RAS clients unless
	you set the Disable Software Compression option in the Options menu or you
	purchased your copy of WFW 3.11 or Windows NT 3.1 after February 1994. You
	can tell whether you have RAS software compression or not by using the
	following information:
	
	Windows for Workgroups 3.11:
	
	  File name    Bytes   Compression
	  ----------   -----   -----------
	  RASMAC.386   49209   YES
	  RASMAC.386   27193   NO
	
	Windows NT 3.1:
	
	  File name      Bytes    Compression
	  ------------   -----    -----------
	  ASYNCMAC.SYS   53188    YES
	  ASYNCMAC.SYS   53716    YES
	  ASYNCMAC.SYS   33732    NO
	
	NOTE: The Windows NT 3.1 and Windows for Workgroups 3.11 RAS compression
	files can be obtained from the SUPPORT\RAS directory on the Windows NT 3.5
	U.S. Service Pack 3 CD.
	
	2.2  List of Bugs Fixed in Windows NT 3.5 U.S. Service Pack 3
	-------------------------------------------------------------
	NOTE: Use the Qxxxxxx number that precedes the title of the bug fix to
	query the Microsoft Knowledge Base to find an article about that bug.
	
	Q122182: CALC.EXE Display Error in Floating Point Number Calculation
	Q122323: WinNT 3.5 Software Update for the Pentium Floating Point Error
	Q110882: GP Fault in WINLOGON.EXE
	Q110932: Mail Fails with Memory or Network Errors
	Q110947: Diamond Viper VLB Video Adapter Driver Fails To Load
	Q111026: Backup Creates Many REGXXXX Files, Can't Copy .EVT Files
	Q111027: File Write to Network Share Using MS-DOS 21h Function Fails
	Q111325: Can't Choose Paper Tray with Postscript Printer Driver
	Q111420: MIPS Four-Processor Computer Halts for Long Time
	Q111429: SET Batch File Command Resets Error Levels
	Q111450: Two Token Ring Adapters Forces Source Routing on Both Adapters
	Q111736: Printing Postscript from Project, Task Bars Shaded or Darkened
	Q112547: Error and Warning Events Not Described in System Log
	Q112637: STOP Message on MIPS Computer Caused by NET Command
	Q112874: Fonts Look Different When Printed and on Screen
	Q113916: Copy from One Novell Server to Another Fails
	Q114304: ACLs Not Translated When User Names Have Extended Characters
	Q114577: Watermark Software HP 1300T Removable Disk Stuck or Corrupted
	Q114892: Err Msg: "Out of Memory" Browsing Network Files as Administrator
	Q115431: Turkish Characters in Directory Name Hangs Windows NT
	Q115602: Cannot Input Unicode Characters >256 into Dialog Edit Field
	Q116341: Characters Change When Pasted into 16-bit Applications
	Q117359: SFM: Copying Files Between Volumes Freezes Other Mac Clients
	Q119277: Err Msg: "Access denied" Running MS-Mail SMTP Gateway in VDM
	Q119568: Kyocera FS-3500A PCL Driver Will Not Print from Lower Paper Tray
	Q119574: WinNT 3.1 to 3.5 Upgrade Does Not Copy OEM SCSI Drivers to Disk
	Q120693: Dual Processor MIPS Computer with Proteon NIC Hangs At Startup
	Q120770: STOP: 0x0000000A When CadexNet on LM Clients Stress SRV.SYS
	Q121645: STOP 0x0000001E in SRV.SYS
	Q121725: Alert for "<" Condition Fails to Run Batch File
	Q121726: STOP Message Caused by NTFS with Long Filenames
	Q121822: Deadlocks When Using Asynchronous Named Pipes
	Q122043: Err Msg: Access Denied Connecting to NetWare Resource
	Q122224: Format Limits Stripe Sets to 4 GB
	Q122248: Event Id 2000 Errors In System Log
	Q122329: Err Msg: System Error 59 Has Occurred, an Unexpected...
	Q122368: "Insufficient Memory" Messages Appear When You Use Word 6
	Q122385: Err Msg: Mail Could Not Read the Entire Message...
	Q122445: Unexpected Network Error When Changing WfWG Password
	Q122781: LMHOSTS #INCLUDE of Local Files May Fail on Windows NT 3.5
	Q122793: Err Msg: OS Loader V3.5 Windows NT Could Not Start...
	Q122838: Memory Leak in LMREPL Service
	Q122903: Error Message with Compaq Smart SCSI
	Q122961: Print Job Stalls Printing to NEC NPDL2
	Q122986: Justified Words Printed with PostScript Driver Contain Spaces
	Q123058: Closing Timed-Out Applications Without Choosing End Task
	Q123062: Windows NT 3.5 Fails to Unlock a Record Area After Locking It
	Q123083: Client Hangs Accessing Remote Downlevel LAN Manager Server
	Q123155: Err Msg: The Remote Computer is Not Available
	Q123159: Windows NT 3.5 Computer with Intel Neptune PCI Chip Hangs
	Q123166: Time and Date Stamp of Word 6.0 Document Updated
	Q123215: Backup Incorrectly Sets Archive Bit on WFWG 3.11 Files
	Q123275: Extra Keys on Brazilian Keyboard Do Not Work at Command Prompt
	Q123338: SFM Performance Degrades Due to Memory Problem
	Q123447: Err Msg: STOP Message in DLC.SYS
	Q123478: Multiple ISDN Adapters Cannot Be Installed
	Q123500: Administrators Permissions for a Printer Change to Read
	Q123607: Graphics and True Type Fonts Print Garbage on Okidata ML320
	Q123678: Changing Registry Does Not Prevent User from Changing Delay
	Q123716: CACLS.EXE Err Msg: No More Internal IDs Available
	Q123717: Windows NT Backup Writes Incorrect Times To Log
	Q123738: STOP 0x0000001e Err Msg with NetBEUI Client/Server Applications
	Q123740: Unexpected Error Accessing MS Mail Postoffice Through GSNW
	Q123741: Cannot Run RAS Programs When a Service References RASAPI32.DLL
	Q123744: Secure Erase on Exabyte 2501 Err Msg: The Computer Has Rebooted
	Q123745: Windows NT Err Msg: No more connections to the remote...
	Q123862: Opening a File Causes the Application to Close
	Q123942: Invalid User Names Causes Memory Leak
	Q123957: Error Updating PowerPoint 4.0 File Using CSNW/GSNW
	Q123964: Server Service Hangs When Using GSNW
	Q123965: Can't Get Zone Information with Compaq Netflex II TR NIC
	Q123976: Sequential File Reads of 4K Instead of 64K Blocks
	Q124021: CD-ROM File System Does Not De-allocate Non-paged Pool Memory
	Q124037: Windows NT Setup Err Msg on Compaq: Stop 0x0000008B
	Q124084: FTP OnNet 1.1 PPP Client Hangs Windows NT 3.5 RAS Service
	Q124120: Event Log Service Fails to Start Due to Event Log Corruption
	Q124121: Memory Loss During Application Process Creation
	Q124142: Registry Editor Hangs When You Select a Key
	Q124157: Cannot Build VC++ Projects (.PDB & .PCH Files) on Netware Server
	Q124242: Forced Disconnect for Macintosh Users Not Working
	Q124284: STOP 0x00000026 when Accessing a CD Using an Indirect Path
	Q124360: Non Critical Error with IR32_32.DLL and Mitsumi IDE CD-ROM
	Q124374: Windows NT 3.1 Computer Cannot Log On to Windows NT 3.5 Domain
	Q124375: SFM: File Permissions Problem When Volume is Shared at Root
	Q124484: Error 33: DOSRead and DOSWrite APIs from OS/2 Application
	Q124542: Service Logged On w/ User Account Able to Interact with Desktop
	Q124549: Unable to Disable Print Event Logging in Windows NT 3.5
	Q124582: VBApp & OLE Do Not Work If Network Components Are Not Installed
	Q124648: DC21040 Causes Windows NT 3.5 to Stop Responding (Hang)
	Q124747: SFM Err Msg: The Item...Is Missing and Was Probably Deleted...
	Q124796: DHCP Client Does Not Support Domain Name Option
	Q124816: Very Large or Very Small Transfers to SCSI Printers Fail
	Q124853: STOP Message with SFMATALK.SYS
	Q124874: STOP Message 0x0A Running Performance Monitor on NEC 3360
	Q124909: Problems Accessing Drive Formatted with Ontrack Disk Manager
	Q124910: Using Ontrack Disk Manager to Support Large IDE Drives
	Q124912: Slow Processing with Windows NT PDC and LAN Manger BDC
	Q124936: Application in VDM May Receive Overrun Error
	Q124940: STOP 0x0000000A when Accessing NetWare Server
	Q124958: NTFS Integrity Problems with Large Stripe Sets
	Q125573: Event Viewer Does Not Report System Log Errors Correctly
	Q125625: Software Compression Compatibility in Windows NT 3.5 RAS
	Q125646: Computer with Intel Neptune PCI Chip Hangs on Warm Reboot
	Q125759: Windows NT3.5 Improves Performance with Intel Neptune PCI Chip
	Q126020: Setup Err Msg on Intel Xpress Deskside: Inaccessible Boot...
	Q126277: 16-Bit Process Creation Can Result in Memory Loss
	Q126429: Equinox Serial Driver Causes the Win16 Subsystem to Fail
	Q126752: DCs Fail to Synchronize or Validate Users Over NWLINK
	Q127818: Clients Fail to Connect to Windows NT Server
	Q128565: LMHOSTS File Generates STOP 0x00000050
	Q129045: Date and Time Stamp of Files Change When Copied to Netware
	Q130117: Running PKZIP Hangs WFW or Windows NT MS-DOS Command Prompt
	Q130120: Event Error 2000 Logged Repeatedly Due to Illegal Command
	Q130480: GSNW Share Names Displayed as DELETED with RAS Server Running
	Q125385: File Size and Date Reported Incorrectly On NTFS Drive
	Q126142: Windows NT Mail Err Msg: The Network Path You Entered Could...
	Q126383: RAS Callback Via ISDN Uses Only One Channel
	Q126451: SNA Server: Windows NT Client Loses Session To Server
	Q126560: Cannot Create NetBIOS Session Over TCP/IP
	Q126652: FDDI MAC Address Issue with Windows NT 3.5
	Q126724: NPMCA.SYS Causes STOP 0x0A in TCPIP.SYS
	Q126974: STOP 0x24 Generated With NTFS
	Q126978: IBM Token Ring /A Adapter Fails To Start in Windows NT 3.5
	Q127775: STOP 0x0A in STREAMS.SYS with DEC Pathworks Loaded
	Q127789: LAN Manager Clients Cannot See Windows NT Computers
	Q127814: Printing to WinNT Queue Attached to NetWare Queue Hangs NetWare
	Q127821: Problems Using Event Viewer from Windows for Workgroups
	Q127908: Granularity Value Changes After Installing Service Pack 2
	Q127909: Seed Routing Not Working With C.O.P.S. LocalTalk NIC
	Q127922: Setting BDC to be WINS Proxy Agent May Cause Broadcast Storms
	Q128254: Stop Msg: C0000218 "Unknown Hard Error" When Registry is Overrun
	Q128335: IPX Subnet Clients Unable to Connect to Windows NT
	Q128415: NT to LAN  Manager UAS Replication Problem after using PORTUAS
	Q128447: Enumeration of Large NTFS Directory Takes a Long Time
	Q128448: RAS Event ID 20013: The User Connected to Port...
	Q128550: Memory Leak: MS-DOS-Based Apps Starting Non-MS-DOS-Based Apps
	Q129054: Periods Not Displayed in CD-ROM Disc Volume Label
	Q129111: PCI Adapter Incorrectly Identified on Dual-bus Computers
	Q129482: Systems Management Server Inventory Via RAS Causes STOP Screen
	Q129600: Large Zeroing Operations Cause Systems To Appear Hung
	Q130661: Windows NT 3.5: STOP 0x0000000a in NETBT.SYS When Memory is Low
	Q130901: Frame Corruption in Retransmitted IPX Packet
	Q131339: STOP Msg: 0x0000000A or 0X0000001E Dis/Reconnecting to WfWG Svr
	Q131479: Unable to Change Printer Settings From Windows Applications
	
	Additional query words: prodnt servpack SP3 bug fix qfe compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
