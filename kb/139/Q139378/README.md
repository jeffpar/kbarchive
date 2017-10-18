---
layout: page
title: "Q139378: Debugging SNA Server Application Exceptions on WinNT 3.5 &amp; 3.51"
permalink: kb/139/Q139378/
---

## Q139378: Debugging SNA Server Application Exceptions on WinNT 3.5 &amp; 3.51

	Article: Q139378
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2,4.0 SP3; winnt:3.5
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives you the following information for debugging SNA Server
	application exceptions on your computer running Windows NT 3.5 and 3.51:
	
	- Entries in SNA Dump File, Application Event Log, and DRWATSON.LOG
	
	- DRWTSN32.EXE Specified as Default Debugger in Registry
	
	- DRWTSN32.EXE Can Fail
	
	- How to Configure SNA Server for Debugging
	
	- Information to Provide to SNA Server Support Team
	
	- SNA Server 2.11 README.WRI File Excerpt
	
	MORE INFORMATION
	================
	
	Entries in Dump File, Application Event Log, and DRWATSON.LOG
	-------------------------------------------------------------
	
	If an application exception or unexpected internal error occurs in an SNA Server
	component, SNA Server automatically generates an application dump file
	containing the memory contents of the failing process. Also, SNA Server logs the
	following event in the Windows NT Application event log:
	
	  Event: 624
	  Creating dump file <filename> for <process>
	
	If the dump file is due to an unexpected internal error in SNA Server, this error
	is logged at the same time as Event 624. In such cases, the DRWTSN32.LOG
	indicates a hardcoded breakpoint. For example:
	
	  Application exception occurred in module <modulename>
	  Exception number: 80000003 (hardcoded breakpoint)
	
	The DRWTSN32.LOG is important to diagnose the cause of the failure.
	
	DRWATSN32.EXE Specified as Default Debugger in Registry
	-------------------------------------------------------
	
	On Windows NT 3.5 and 3.51, DRWTSN32.EXE is the default debugger that gets
	invoked if an application exception occurs. This is set in the Windows NT
	registry under the HKEY_LOCAL_MACHINE subtree under the following key:
	
	  \SOFTWARE\Microsoft\Windows NT\CurrentVersion\AeDebug\ 
	
	The following parameters appear in the right window of the Registry Editor:
	
	  Auto: REG_SZ: 1
	
	  Debugger:REG_SZ: drwtsn32 -p %ld -e %ld -g
	
	NOTE: If Auto is set to 1 (one), the debugger runs immediately. If Auto is set to
	0 (zero), then you must choose Cancel at the Windows NT application exception
	screen to invoke the debugger.
	
	NOTE: "l" in "%ld" is the letter "l" and not the number one (1).
	
	DRWATSN32.EXE Can Fail
	----------------------
	
	When you run Windows NT 3.5, the following problems can cause DRWTSN32.EXE to
	fail to generate a useful DRWTSN32.LOG file:
	
	- The Windows NT 3.5 symbols have not already been copied to the
	  <ntroot>\symbols tree.
	
	- You use SNA Server 2.1 or 2.11, and the failure has occurred in a component
	  that was built using full compiler optimizations.
	
	  NOTE: SNA Server 2.11 ships non-optimized versions of the SNA binaries to
	  support reliable DRWTSN32.LOG generation on computers running Windows NT 3.5.
	  However, a useful DRWTSN32.LOG may still be generated without applying these
	  non-optimized binaries.
	
	
	How to Configure SNA Server for Debugging
	-----------------------------------------
	
	When you run SNA Server 2.1 on Windows NT 3.5:
	
	- Apply Windows NT symbols.
	
	When you run SNA Server 2.11 on Windows NT 3.5:
	
	- Apply Windows NT symbols.
	
	- Run SETUPDBG/MAKEDBG as documented in the 2.11 README.TXT file.
	
	When you run SNA Server 2.1 or 2.11 on Windows NT 3.51:
	
	- It is not necessary to run SETUPDBG/MAKEDBG, as documented in the 2.11
	  Readme.txt file and Readdbg.txt file. Also, when running on Windows NT 3.51,
	  it is not necessary to copy Windows NT 3.51 symbols, due to an enhancement in
	  the Windows NT 3.51 version of Drwtsn32.exe.
	
	When you run SNA Server 3.0 on Windows NT 3.51:
	
	- Verify that the symbols from the 3.0 CD were applied. Default installations
	  should copy the symbols over to the <winntroot>\SYMBOLS tree.
	
	When you run SNA Server 2.11 with Service Pack 1 (SP1) installed:
	
	- The SNA Server 2.11 Service Pack 1 symbols are included in the
	  self-extracting SP1 server update file (for each platform), though the
	  symbols are not automatically installed when the Service Pack 1 update
	  program is run. Matching symbols must be present in the server computer
	  <ntroot>\SYMBOLS directory tree or the DRWTSN32.LOG entry does not show
	  valid stack information.
	
	- To manually install the symbols, run XCOPY to copy the \SYMBOLS directory
	  from the SNA Server 2.11 SP1 self-extracting file to the Windows NT root
	  directory. For example:
	
	  xcopy <sp1root>\SYMBOLS\*.* <winntroot>\SYMBOLS /s /e /v
	
	Information to Provide to SNA Server Support Team
	-------------------------------------------------
	
	If an application exception occurs in an SNA Server component, provide the
	following information to the SNA Server support team:
	
	- <ntroot>\DRWTSN32.LOG.
	
	- <snaroot>\TRACES\SNADUMP.LOG.
	
	- Windows NT System and Application event logs.
	
	- SNA Server configuration file (<snaroot>\SYSTEM\CONFIG\COM.CFG).
	
	SNA Server 2.11 README.WRI File Excerpt
	---------------------------------------
	
	The following is an excerpt from the SNA Server 2.11 README.WRI file that is
	installed in the SNA Server group icon:
	
	A.5. Notes on obtaining useful DRWTSN32.LOG files
	
	By default, the log files generated by the Dr. Watson utility do not contain
	symbol information necessary for interpreting those files. This is because SNA
	Server components contain optimized instructions that prevent the Dr. Watson
	utility from being able to provide a full trace. In addition, the default
	configuration of Windows NT version 3.5 does not include symbol information
	required by the Dr. Watson utility.
	
	If you are experiencing a Windows NT trap, and if Microsoft Product Support
	Services requests a copy of your DRWTSN32.LOG file, you must modify your system
	setup before the Dr. Watson utility can produce a useful log file the next time
	a trap occurs.
	
	For a computer running Windows NT Server version 3.5, you must perform the
	following steps to make symbol information available to the Dr. Watson utility:
	
	1. Place the Windows NT installation CD-ROM in the CD-ROM drive.
	
	2. At the Windows NT command prompt, execute the following command:
	
	  "xcopy <cd_drive>:\support\debug\<cpu_type>\symbols\*.*
	  %systemroot%\symbols\*.* /s /e /v" (without the quotation marks)
	
	If any Windows NT service packs have been applied, copy the symbols supplied with
	the service pack in the same manner.
	
	On all versions of Windows NT, you must replace all SNA Server system files with
	debug versions using this procedure:
	
	1. Place the SNA Server CD-ROM in the CD-ROM drive.
	
	2. At the Windows NT command prompt, execute the following commands:
	
	  " cd_drive:
	  cd \
	  setupdbg
	  snaroot_drive:
	  cd %snaroot%
	  makedbg cd_drive:" (without the quotation marks)
	
	  Cd_drive is the drive letter or UNC path of the drive containing the SNA
	  Server CD-ROM.snaroot_drive is the drive letter of the drive on the server
	  that contains the SNA Server system directory.
	
	  This step creates two subdirectories in the SNA Server system directory: DEBUG
	  contains nonoptimized, debug versions of the SNA Server system files, while
	  NODEBUG contains copies of the original, optimized SNA Server system files.
	
	3. To prepare the system for troubleshooting with the Dr. Watson utility,
	  execute the following commands:
	
	  "net stop snaserver
	  net stop snabase
	  copy %snaroot%\debug %snaroot%" (without the quotation marks)
	
	4. Restart the system.
	
	When you no longer need to run the debug versions of the SNA Server system files,
	execute the following commands and then restart the system:
	
	  "net stop snaserver
	  net stop snabase
	  copy %snaroot%\nodebug %snaroot%" (without the quotation marks)
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2,4.0 SP3; winnt:3.5,3.51
	Issue type        : kbhowto
	
	=============================================================================
	
