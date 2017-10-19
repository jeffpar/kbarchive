---
layout: page
title: "Q119490: Checking Crashdump File for Corruption"
permalink: /kb/119/Q119490/
---

## Q119490: Checking Crashdump File for Corruption

	Article: Q119490
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT version 3.5 Software Development Kit (SDK) includes a utility
	that you can use with the memory.dmp file to validate the integrity of the file:
	Dumpchk.exe.
	
	MORE INFORMATION
	================
	
	DUMPCHK
	-------
	
	DUMPCHK [options] <CrashDumpFile>
	
	This utility checks the validity of a crash dump file.
	
	  Options
	  -------
	  -?     Displays a Help message.
	  -v     Verbose mode.
	  -p     Print header only, do not validate file.
	  -q     Perform a quick test.
	
	<CrashDumpFile> - The name of the crashdump file.
	
	DUMPEXAM
	--------
	
	DUMPEXAM [options] <CrashDumpFile>
	
	  Options
	  -------
	  -?            Display this message
	  -v            Verbose mode
	  -p            Print header only
	  -f File name] Specify output file name
	  -y Path]      Set the symbol search path
	
	If the crashdump filename is empty the name specified in the registry is used.
	
	If the symbol search path is empty the compact disc is used for symbols.
	
	<CrashDumpFile> - The name of the crashdump file.
	
	DUMPFLOP
	--------
	
	DUMPFLOP [opts]                            - Store default dump thru
	
	                                            Drive A:
	
	DUMPFLOP [opts] <CrashDumpFile> [<Drive>:] - Store crash dump onto
	floppies
	DUMPFLOP [opts] <Drive>: [<CrashDumpFile>] - Assemble crash dump from
	floppies
	
	  Options ([opts])
	  ----------------
	  -? display this message
	  -p only prints crash dump header on assemble operation
	  -v show compression statistics
	  -q formats floppy when necessary during store operation
	     overwrites existing crash dump file during assemble operation
	
	<CrashDumpFile> - The name of the crashdump file.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
