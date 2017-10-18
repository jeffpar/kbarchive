---
layout: page
title: "Q72850: Installation Notes for the Source Profiler Version 1.0"
permalink: kb/072/Q72850/
---

## Q72850: Installation Notes for the Source Profiler Version 1.0

	Article: Q72850
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler for MS-DOS 
	- Microsoft Source Profiler for Windows 
	- Microsoft Source Profiler for OS/2 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SUMMARY
	=======
	
	When installing the Microsoft Source Profiler version 1.0 to work in conjunction
	with other Microsoft language products, there are several setup issues that may
	need to be addressed to avoid problems or confusion.
	
	MORE INFORMATION
	================
	
	The default for the Profiler Setup program is to create the following directory
	structure:
	
	  \PROFILER\BIN - MS-DOS/Windows binary and .BAT files
	  \PROFILER\BINP - OS/2 protected mode binary and .CMD files
	  \PROFILER\HELP - PROFILER.HLP and new PWB.HLP
	  \PROFILER\INIT - TOOLS.PRE
	  \PROFILER\SAMPLES - Sample files for BASIC, C, FORTRAN, and TAB output
	
	For the Profiler to work correctly with other Microsoft language products, some
	of the files in these directories should either be moved or their contents
	should be added to existing system files. To ensure your system is configured
	correctly, perform the following steps:
	
	1. Move PWBPROF.MXT from the \BIN directory to the directory that contains the
	  DOS version of PWB so that it will automatically be loaded along with the
	  other extensions.
	
	2. Move PWBPROF.PXT from the \BINP directory to the directory that contains the
	  protected mode version of PWB so that it will automatically be loaded along
	  with the other extensions.
	
	3. Place PROFILER.HLP and PWB.HLP in a directory pointed to by the HELPFILES
	  environment variable. Since it is important to use the new PWB.HLP rather
	  than an existing version from a language product, the best method is to copy
	  these files from the new \PROFILER\HELP directory to the language \HELP
	  directory that contains your existing help files. If you want to conserve
	  disk space, you can then then delete the files in the \PROFILER\HELP
	  directory.
	
	4. Follow the instructions on pages 9 and 10 of the "Microsoft Source Profiler
	  User's Guide" in order to properly configure your system's CONFIG.SYS,
	  AUTOEXEC.BAT, STARTUP.CMD, TOOLS.INI, and Windows SYSTEM.INI files.
	
	5. If desired, you can conserve further disk space by deleting the SAMPLES
	  directories and files for languages that you do not have or use.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch
	Version           : :
	
	=============================================================================
	
