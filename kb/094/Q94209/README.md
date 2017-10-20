---
layout: page
title: "Q94209: Profiling an Application in Microsoft Windows"
permalink: /kb/094/Q94209/
---

## Q94209: Profiling an Application in Microsoft Windows

{% raw %}

	Article: Q94209
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.2,1.3
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler for Windows, versions 1.0, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SUMMARY
	=======
	
	Version 1.2 of the Microsoft Source Profiles includes two executable files:
	PROFILE.EXE and PROFILEW.EXE. PROFILEW.EXE is a Microsoft Windows-hosted source
	profile utility that can run from the command line or from an icon in the
	Microsoft Windows operating system. The names of batch files used to profile a
	Windows-based application end with the letter "W." Run these batch files from
	the MS-DOS prompt because each one starts Windows. You also can profile a
	Windows-based application in Windows.
	
	MORE INFORMATION
	================
	
	The text below provides the steps to profile function timing in the GENERIC
	sample application provided with the Microsoft Windows Software Development Kit
	(SDK). The explanation assumes that the GENERIC sample is installed in the
	C:\WINDEV\GUIDE\GENERIC directory and that the Source Profiler is installed in
	the C:\PROFILER\BIN directory. The procedure has three main steps, as follows:
	
	1. Create the PCF file and run PREP.
	
	2. Create an icon for profiling and profile the application.
	
	3. Create an output file with PREP and PLIST.
	
	Create the PCF and Run PREP
	---------------------------
	
	The PCF (Profiler Command File) provides greater control to select the parts of
	the executable program to profile. The PCF is optional and is not necessary to
	collect statistics about all functions of the application.
	
	With the following PCF, the profiler collects statistics only for the main window
	procedure and for the About dialog box procedure in GENERIC. For more
	information on PCFs, see chapter 4 of the Source Profiler "User's Guide." Place
	the following text into the GENERIC.PCF file:
	
	     FPROFILE TIME
	     PROGRAM  GENERIC.EXE DELETE
	     OBJECT   GENERIC.OBJ
	     FUNCTION MainWndProc ADD  # Note: function names are case sensitive
	     FUNCTION About ADD
	
	To use this file, perform the following three steps:
	
	1. Place the GENERIC.PCF file into the same directory as the source code for the
	  GENERIC sample.
	
	2. Build the GENERIC sample with debugging information (specify the /Zi compiler
	  option switch and the /CO linker option switch).
	
	3. Use the following command line to run the PREP utility:
	
	     PREP /P GENERIC.EXE /OT GENERIC.PBT /OI GENERIC.PBI GENERIC.PCF
	
	For more information about the PREP utility, see Appendix A of the Source
	Profiler "User's Guide."
	
	You can place the PREP command into the makefile that builds profiling versions
	of your application. Run the PREP utility after building the executable file.
	
	Create an Icon for Profiling and Profile the Application
	--------------------------------------------------------
	
	Perform the following seven steps:
	
	1. In the Microsoft Windows Program Manager, activate a program group.
	
	2. Choose New from the File menu.
	
	3. Choose OK to create a new program item.
	
	4. In the Properties dialog box, enter the following text in the Command Line
	  field:
	
	  " PROFILEW C:\WINDEV\GUIDE\GENERIC\GENERIC.EXE " (without the quotation
	  marks)
	
	  Note: This command line assumes that the PBI and PBO files are named
	  GENERIC.PBI and GENERIC.PBO, respectively, and that each resides in the
	  C:\WINDEV\GUIDE\GENERIC directory.
	
	5. In the Working Directory field, enter the path to the PROFILEW.EXE file. In
	  this example, the correct directory is C:\PROFILEW\BIN.
	
	6. Choose OK to create the program icon.
	
	7. To run and profile GENERIC, either double-click the icon or select the icon
	  and choose Run from the File menu. Close GENERIC to complete profiling.
	
	Create an output File with PREP and PLIST
	-----------------------------------------
	
	Perform the following two steps:
	
	1. At the MS-DOS prompt, enter the following command to update the PBT file:
	
	  " PREP /IT GENERIC.PBT /IO GENERIC.PBO /OT GENERIC.PBT " (without the
	  quotation marks)
	
	2. At the MS-DOS prompt, enter the following command to create an output text
	  file:
	
	  " PLIST GENERIC.PBT > GENERIC.TXT " (without the quotation marks)
	
	For more information about the PLIST utility, see Appendix A of the Source
	Profiler "User's Guide."
	
	Even though GENERIC.TXT lists all the functions in the GENERIC application, it
	contains timing and hit statistics for only the About() and MainWndProc()
	functions.
	
	Additional query words: 1.00 1.20 1.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbSProfiler100 kbSProfiler130 kbSProfiler120
	Version           : :1.0,1.2,1.3
	
	=============================================================================
	

{% endraw %}
