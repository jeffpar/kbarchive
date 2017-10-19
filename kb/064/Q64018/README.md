---
layout: page
title: "Q64018: DOCERR: Environment Variables in STARTUP.CMD in FORTRAN"
permalink: /kb/064/Q64018/
---

## Q64018: DOCERR: Environment Variables in STARTUP.CMD in FORTRAN

	Article: Q64018
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Contrary to what is stated in the "Microsoft FORTRAN Getting Started" booklet
	included with Microsoft FORTRAN version 5.0 and the "Microsoft FORTRAN
	Installing and Using the Professional Development System" booklet shipped with
	Microsoft FORTRAN version 5.1, SET statements for environment variables should
	not be included in the STARTUP.CMD file. These statements should be included in
	the CONFIG.SYS file, an OS2INIT.CMD file, or in another .CMD file that is
	executed before FORTRAN is used.
	
	The FORTRAN version 4.10 manuals do not contain this documentation error, but the
	information included below about setting up the environment also applies to
	version 4.10.
	
	MORE INFORMATION
	================
	
	Page 20 of the "Microsoft FORTRAN Getting Started" booklet included with FORTRAN
	5.0 states the following:
	
	  The environment-setting commands can be included in your AUTOEXEC.BAT or
	  STARTUP.CMD file to ensure that the compiler environment is properly set up
	  each time you reboot.
	
	Page 21 of the "Microsoft FORTRAN Installing and Using the Professional
	Development System" booklet included with FORTRAN version 5.1 states the
	following:
	
	  If the host operating mode is OS/2, add the contents of the NEW-VARS.CMD file
	  to your STARTUP.CMD file and the contents of NEW-CONF.SYS to CONFIG.SYS.
	
	This is correct for the MS-DOS AUTOEXEC.BAT file but not for the OS/2 STARTUP.CMD
	file. Both files are executed when a machine running their respective systems is
	booted, but the environment variables set in STARTUP.CMD are only recognized by
	the OS/2 screen group that executes the .CMD file. If another OS/2 screen group
	is started, STARTUP.CMD is not automatically executed and the environment set by
	it in the original screen group does not affect the new screen group.
	
	To ensure that the environment settings required by FORTRAN are set under OS/2,
	the PATH, SET LIB, SET TMP, SET INIT, and SET INCLUDE statements should be
	included in the CONFIG.SYS file, in an OS2INIT.CMD file, or in a .CMD file that
	is executed before working with FORTRAN.
	
	Environment variables can be set in the CONFIG.SYS file for OS/2 versions 1.1 and
	later. The variables set there are recognized by each OS/2 screen group. This
	feature is not available in version 1.00 of OS/2. In this case, an OS2INIT.CMD
	file can be used to set the environment.
	
	The OS2INIT.CMD file is the OS/2 equivalent to the MS-DOS AUTOEXEC.BAT in terms
	of setting the environment for an OS/2 screen group. To use OS2INIT.CMD, the /K
	option for CMD.EXE must be included in the PROTSHELL statement of CONFIG.SYS.
	
	For example:
	
	     PROTSHELL=... ... C:\0S2\CMD.EXE /K OS2INIT.CMD
	
	The file specified after the /K option is executed every time a new screen group
	is started. Any name can be used for the .CMD file.
	
	Additional query words: Snofps> 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2 kbFORTRAN510OS2
	Version           : :5.0,5.1
	
	=============================================================================
	
