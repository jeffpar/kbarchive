---
layout: page
title: "Q112665: UPDATE.EXE Starts Setup Help If Space Exists in Directory Path"
permalink: /kb/112/Q112665/
---

## Q112665: UPDATE.EXE Starts Setup Help If Space Exists in Directory Path

	Article: Q112665
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run UPDATE.EXE (from any Service Pack) in a directory in which the
	complete path name includes a space or long directory name, instead of running
	UPDATE.EXE, a screen explaining the SETUP.EXE command-line options appears.
	
	MORE INFORMATION
	================
	
	When you run UPDATE.EXE, it calls Windows NT SETUP.EXE with some command- line
	parameters. If a space exists in the directory name or the directory name is a
	long directory name, the Setup screen titled "Usage" (which explains the
	Microsoft Setup command-line options) appears. SETUP.EXE does not parse the
	command line properly if a space exists in the directory name of the parameters
	passed to it. For example, if you have a directory called "C:\FILES\NT
	FILES\SPACK" or "C:\FILES\NTFILESFORSPACK\SPACK", and you place the update files
	in the SPACK directory and then run UPDATE.EXE, you receive the above error.
	
	RESOLUTION
	==========
	
	Move the Service Pack files to a directory path that does not include a space or
	long directory name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Service Packs for Windows NT
	versions 3.1 and 3.5 and Windows NT Service Pack 1. This problem has been
	corrected in the latest U.S. Service Pack for Windows NT version 3.5. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt CSD ldn lfn file
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
