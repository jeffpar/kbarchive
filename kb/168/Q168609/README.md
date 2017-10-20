---
layout: page
title: "Q168609: How to Use Display Heap (DH.EXE) Resource Kit Utility"
permalink: /kb/168/Q168609/
---

## Q168609: How to Use Display Heap (DH.EXE) Resource Kit Utility

{% raw %}

	Article: Q168609
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article discusses the setup and usage of the Windows NT Resource Kit
	Utility, Display Heap (DH.EXE).
	
	MORE INFORMATION
	================
	
	Display Heap (DH.EXE)
	
	Display Heap (DH) is a character-mode tool for displaying information about heap
	usage in a user mode process or pool usage in kernel mode memory. DH writes its
	formatted output to a text file. DH accepts command line switches to identify
	which process to display information for along with what information to
	display.
	
	Use "/?" at the command line to see command line information:
	
	Usage: DH [-l] [-m] [-s] [-g] [-h] [-t] [-p -1 | 0 [-k] [-o] | n] [-f fileName]
	where: -l - displays information about locks.
	      -m - displays information about module table.
	      -s - displays summary information about heaps.
	      -g - displays information about memory hogs.
	      -h - displays information about heap entries for each heap.
	      -t - displays information about heap tags for each heap.
	      -b - displays information about stack back trace database.
	      -i - ignore information about stack back trace database.
	      -p 0 - displays information about kernel memory and objects in
	             DH_SYS.DMP.
	      -o - displays information about object handles (only valid with -p
	           0).
	      -k - displays information about processes and threads (only valid
	           with -p 0).
	      -p -1 - displays information about Win32 Subsystem process in
	              DH_WIN32.DMP.
	      -p n - displays information about process with ClientId of n
	      -f fileName - specifies the name of the file to write the dump to.
	                    Default file name is DH_nnnn.DMP where nnnn is the
	                    process id.
	      -- specifies the dump output should be written to stdout.
	
	      Default flags are: -p -1 -m -l -s -g -h
	
	The most useful information that DH can display is a listing of potential memory
	hogs (programs or drivers that allocate excessive amounts of memory) or those
	allocation calls (calls that allocate memory) that have allocated the most
	memory. Unfortunately, to identify call sites symbolically, the system needs the
	ability to capture a stack back trace at runtime. This is only supported on
	checked x86 builds (Checked versions of Windows NT are available through MSDN
	subscriptions). To get the full benefit of DH, you need to run it on a checked
	x86 build of Windows NT and enable certain GLOBAL flags located in the
	registry.
	
	In order to get your machine ready to use DH.EXE, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe)
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     SYSTEM\CurrentControlSet\Control\Session Manager
	
	3. Change the value of the GlobalFlag parameter to 23000. For example:
	
	  GlobalFlag:REG_DWORD:0X00023000
	
	NOTE: By default, this value is ZERO or 0x00000000
	
	The following is a list of flags used by DH.EXE:
	
	  ENABLE DEBUGGING OF THE WIN32 SUBSYSTEM - 0x00020000
	
	  CREATE USER MODE STACK DB - 0x00001000
	
	  CREATE KERNEL MODE STACK DB - 00002000
	
	  All of the flags enabled value is 00023000
	
	4. Click OK and quit Registry Editor.
	
	5. Install the checked symbol files (there is a difference between checked
	  symbols and retail symbol files) into the %WINDIR% directory (default is
	  WINNT).
	
	6. Shutdown and restart the Windows NT computer.
	
	After restarting, open a command prompt and set the following command to set the
	location of the symbol files. At the command prompt, type:
	
	  SET _NT_SYMBOL_PATH=C:\WINNT (or wherever Windows NT is installed).
	
	After this is completed, you can now run the DH program and get the desired
	output.
	
	The -g option to DH will display a sorted list of call sites that have allocated
	the most memory. Each call site is identified by a symbolic stack back trace of
	up 16 levels that should uniquely identify the code path that resulted in the
	memory allocations.
	
	NOTE: That the default command line flags by just running DH.EXE at the command
	prompt are: -p -1 -m -l -s -g -h.
	
	*See the command line options for default file output names (depends on where you
	are displaying Win32 subsystem or Kernel mode memory).
	
	If you are planning to use DH.EXE in a retail environment:
	
	DH is still useful, on retail builds of Windows NT with the -p 0 option, as this
	will display a list of all Windows NT kernel objects in the system along with
	all handles to those objects for each process.
	
	*Global flag settings still apply when using DH on retail builds of Windows NT.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
