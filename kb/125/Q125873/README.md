---
layout: page
title: "Q125873: FORTRAN PowerStation 1.0a ANSWERS.TXT"
permalink: kb/125/Q125873/
---

## Q125873: FORTRAN PowerStation 1.0a ANSWERS.TXT

	Article: Q125873
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0a, on platform(s):
	   - the operating system: Microsoft Windows NT, on platform(s):
	      - the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article answers frequently asked questions. The information is taken from
	the Microsoft FORTRAN PowerStation 1.0a ANSWERS.TXT.
	
	MORE INFORMATION
	================
	
	Table of Contents by Section and Question Number
	------------------------------------------------
	
	General:
	
	1. Why does PowerStation run in Windows yet build applications for MS-DOS only?
	
	2. I see various components with NT in their name. Do I need Windows NT to run
	  this product?
	
	3. Can I distribute programs created with PowerStation royalty free?
	
	4. How does virtual memory work under FORTRAN PowerStation? Is there any way I
	  can change this functionality?
	
	Programs Won't Run:
	
	1. Why does a program run on the computer where it was compiled but not on
	  another computer?
	
	2. Why do I get the message "This program cannot be run in DOS mode?"
	
	3. Why do I get an "unhandled exception: Page fault" error?
	
	Compile Time Errors:
	
	1. Why do I get a "CVPACK error" when using /Zi from the command line?
	
	2. What are LNK errors, and where can I get more information on them?
	
	Run Time Errors:
	
	1. Why do I get an error when reading near the end of the file?
	
	2. What are DX errors, and where can I get more information on them?
	
	3. Why do I get a "General Protection Fault"?
	
	4. Why sometimes does CTRL+C or CTRL+BREAK not terminate my program?
	
	Using the Visual Workbench:
	
	1. What do I do about "Internal error. Timed out waiting for WINTEE.EXE"?
	
	2. Why do I get "Cannot open the browser database file. Share is not installed
	  or is not active for this drive." when I use the browser?
	
	3. What can I do to speed up compiles and links?
	
	4. How do I delete a project, and all its associated files?
	
	5. In the editor, how can I do column selections or use macros?
	
	6. Why are INCLUDE/$INCLUDE statements not scanned for dependencies?
	
	7. Why do some windows not remain when I close and reopen Visual Workbench?
	
	8. The debugger is sometimes slow or acts erratic; what can I do to fix it?
	
	Mixed Language Programming:
	
	1. How do I mix FORTRAN and Assembly?
	
	2. How do I mix FORTRAN and C?
	
	Differences from FORTRAN Version 5.1:
	
	1. Why is a program sometimes faster when compiled with F5.1?
	
	2. What happened to the /Fs compiler option?
	
	General
	-------
	
	1. Q. The FORTRAN 5.1 development system ran under MS-DOS and built applications
	  for MS-DOS and Windows, and DLLs for Windows. Why does FORTRAN PowerStation
	  run in Windows and build applications for MS-DOS only?
	
	  A. FORTRAN 5.1 is a 16-bit compiler. There are inherent capacity limitations
	  associated with the 16-bit architecture. In order to allow users to overcome
	  the DOS 640K barrier, we created FORTRAN 5.1 which could generate QuickWin
	  applications, essentially 16-bit applications that use extended memory
	  managed by Microsoft Windows. FORTRAN PowerStation is a 32-bit targeted
	  compiler. Since Windows for DOS is a 16-bit operating system, it would
	  potentially constrain performance for 32-bit applications. 32-bit
	  DOS-extended applications, therefore, was the route of choice.
	
	  FORTRAN PowerStation is also available for Windows NT. With this product,
	  32-bit Windows applications and DLLs can be created (for use on Windows NT
	  only).
	
	2. Q. I see various components with NT in their name. Do I need Windows NT to
	  run this product?
	
	  A. No. Microsoft also offers FORTRAN PowerStation 32 for Windows NT. FORTRAN
	  PowerStation for MS-DOS shares some of the same technology as the Windows NT
	  product, with some shared components using NT in their names. This product is
	  targeted at 32-bit MS-DOS; Windows NT is not a supported or required element
	  of this package.
	
	3. Q. Can I distribute the DOS extender with executables created with FORTRAN
	  PowerStation royalty free?
	
	  A. Yes. You have the right to distribute the DOS extender files DOSXMSF.EXE
	  and DOSXNT.386 with programs that you create with FORTRAN PowerStation. There
	  is no royalty required.
	
	  The font files COURB.FON, HELVB.FON and TMSRB.FON are owned by BitStream, Inc.
	  If you want to distribute these files with a program, you will need to get
	  permission from BitStream. The other .FON files may be freely distributed
	  (including those in the SAMPLES\TECHNOTE\FONTS directory).
	
	4. Q. How does virtual memory work under FORTRAN PowerStation? Is there any way
	  I can change this functionality?
	
	  A. PowerStation virtual memory management is considerably different depending
	  on whether you are running your application under MS-DOS or under Windows.
	
	  If you run your PowerStation application under MS-DOS, virtual memory is
	  managed by the Phar Lap DOS-extender. When your application loads into
	  memory, all declared data must load into memory. If you don't have sufficient
	  available extended memory, the DOS-extender will use virtual memory on the
	  disk where DOSXMSF.EXE is located. This process is automatic and requires no
	  interaction on the part of the program. If you want to relocate the location
	  used for virtual memory, you can set the DOSX environment variable with the
	  command:
	
	  "SET DOSX=-SWAPDIR X:\MYSWAP" (without the quotation marks)
	
	  Note that X: is the drive/partition you want to use and MYSWAP is the
	  directory in which you want to place the virtual memory file. If you want to
	  turn off use of virtual memory, you can set the DOSX environment variable as
	  follows:
	
	  "SET DOSX=-NOVM" (without the quotation marks)
	
	  If you are running your program in an MS-DOS session under Windows, then
	  virtual memory is managed by Windows. You can control the size and type of
	  your Windows swap file by starting the Control Panel application and
	  selecting the 386 Enhanced icon. Please consult your Windows documentation
	  for further details.
	
	Programs Won't Run
	------------------
	
	1. Q. I compiled and linked my program and it runs fine on the machine where
	  FORTRAN PowerStation is installed but when I take it to another machine it
	  won't run. How can I make this application run on another machine?
	
	  A. There are two additional files that need to be installed on the machine
	  where you are going to run the FORTRAN application: DOSXMSF.EXE and
	  DOSXNT.386. DOSXMSF.EXE is the actual DOS extender that allows your 32-bit
	  program to run under MS-DOS. DOXSNT.386 is a DPMI device driver that allows
	  your program to run as a 32-bit DOS-extended program under Windows. Both
	  files may be freely distributed (royalty free).
	
	  You need to install DOSXMSF.EXE either in the same directory as the FORTRAN
	  program or in a directory that is in your DOS PATH environment variable. To
	  install DOSXNT.386, you need the following entry in the SYSTEM.INI file under
	  the [386Enh] section:
	
	  "device=C:\F32\BIN\dosxnt.386" (without the quotation marks)
	
	  (C:\F32 may be different if you installed PowerStation in a different
	  directory.)
	
	2. Q. I am compiling and linking in two separate steps from the command-line.
	  When I go to run the executable file I get the error:
	
	  This program cannot be run in DOS mode.
	
	  What did I do wrong?
	
	  A. Because PowerStation applications use an MS-DOS-extender, there is an
	  additional step required to allow the executable to run under MS-DOS. You
	  need to run the BINDMSF.EXE utility on your executable to install a small
	  piece of code called a "stub-loader." For example, for an executable file
	  called MYEXE.EXE, you would use the command line:
	
	  "BINDMSF MYEXE.EXE" (without the quotation marks)
	
	3. Q. When I run my program on a machine with a large amount of memory I get no
	  error. But when I run it on a machine with less memory I get the run-time
	  error:
	
	  DOSXMSF : fatal error DX1020: unhandled exception: Page fault
	
	  A. This is an MS-DOS-extender error that indicates that the program attempted
	  to access memory that was not owned or allocated by the program. A common
	  cause of this error is an array subscript that goes beyond the array's
	  declared range. An attempt to access an array beyond the range of the array
	  does not cause the DX1020 error to occur immediately. On machines with less
	  physical memory (RAM), this error occurs more often because any attempt to
	  access virtual memory on the disk will cause an initial nonexception page
	  fault; however, if the request for memory is invalid, the DX1020 error will
	  occur. Check the code carefully to be sure that all array access uses an
	  array index within the proper range. Also, use the /4Yb compiler option to
	  install additional debug error checking. This option can be set in the Visual
	  Workbench by choosing Project from the Options menu and then choosing the
	  Compiler button. Then, select the category Language Extensions and the
	  Extended Error Handling option.
	
	Compile Time Errors
	-------------------
	
	1. Q. When I compile with the /Zi option from the command line I get the
	  following error:
	
	  Usage: cvpack [-p] [-help] exefile
	  LINK32() : warning LNK4527: CVPACK error
	
	  A. Check your path and make sure that F32\BIN is the first directory in the
	  path. If you have other language products in your path before F32\BIN, the
	  version of CVPACK.EXE that is used by LINK32.EXE may be incorrect. If you
	  type CVPACK at the DOS command line and press ENTER, you should see the
	  following message:
	
	  Microsoft (R) Debugging Information Compactor Version 4.25.00
	  Copyright (c) Microsoft Corp 1987-1993. All rights reserved.
	
	  If you see a version number earlier that the one above, you need to correct
	  the order of directories in your path so that F32\BIN is first.
	
	2. Q. I get linker errors that start with LNK. Where can I find more information
	  about these errors?
	
	  A. The LINK32 errors are available in the ERRORS.HLP Windows Help file and in
	  the ERRORS.TXT ASCII text file. Access to ERRORS.HLP is available only from
	  Windows. You can access this file from the Visual Workbench by selecting the
	  Help menu and choosing Search For Help On. Type in "errors" in the Help
	  Keyword text field and then choose OK. You can also access the file by
	  opening the File Manager and double-clicking the ERRORS.HLP file in the
	  \F32\HELP directory.
	
	  The ERRORS.TXT file is in the F32\README directory. It can be read or printed
	  from MS-DOS or Windows like any other text file.
	
	Run Time Errors
	---------------
	
	1. Q. I have some FORTRAN code that reads a file that used to work with
	  Microsoft FORTRAN version 5.1. The code now receives an error when it is
	  almost finished reading the file. What is the problem?
	
	  A. Earlier versions of Microsoft FORTRAN had some limited support for
	  end-of-file handling using the "CTRL+Z" character. This character, which is
	  number 26 in the ASCII table, is placed in files by some editors and other
	  file-creation utilities. FORTRAN PowerStation no longer treats this character
	  as a special character and gives an error message when attempting to read it
	  into a variable. Make sure that files being read by FORTRAN PowerStation
	  programs do not contain this character, which resembles a small
	  right-pointing arrow when displayed by editors capable of displaying all
	  characters in a file.
	
	2. Q. I am getting some errors that begin with DX. Where can I get more
	  information on these errors?
	
	  A. The DX errors are Phar Lap DOS-extender errors and are available in the
	  ERRORS.HLP Windows Help file and in the ERRORS.TXT ASCII text file. Access to
	  ERRORS.HLP is available only from Windows. You can access this file from the
	  Visual Workbench by selecting the Help menu and choosing Search For Help On.
	  Type in "errors" in the Help Keyword text field and then choose OK. You can
	  also access the file by opening the File Manager and double-clicking the
	  ERRORS.HLP file in the \F32\HELP directory.
	
	  The ERRORS.TXT file is in the F32\README directory. It can be read or printed
	  from MS-DOS or Windows like any other text file.
	
	3. Q. Why do I get a "General protection fault?"
	
	  A. General protection faults are typically caused by attempting to access
	  memory beyond the scope of your program. This is typically caused by running
	  off the end of an array (accessing element 100 of a 10 element array).
	
	  Protection faults can also be caused by problems in the runtime library,
	  although this is more rare. If it appears that a runtime intrinsic or routine
	  is causing a protection fault, check the arguments to be sure they are valid.
	  Microsoft currenlty knows of one such cause for protection faults: using EOF
	  or BACKSPACE on an unopened unit number. To workaround this problem, be sure
	  that all unit numbers passed to EOF or BACKSPACE have been previously opened.
	
	4. Q. Why doesn't CTRL+C or CTRL+BREAK terminate my program?
	
	  A. You are probably using GetCharQQ. This intrinsic returns the ASCII value 03
	  when these key combinations are used, instead of terminating the program.
	
	Using The Visual Workbench
	--------------------------
	
	1. Q. When I attempt to build a project using the PowerStation Visual Workbench,
	  I get an error dialog box that says:
	
	  Internal error. Timed out waiting for "C:\F32\BIN\WINTEE.EXE" to start.
	  Please contact Microsoft Product Support Services.
	
	  What can I do to correct this problem?
	
	  A. The problem is probably caused by a Windows configuration setting that
	  causes Windows-based applications to get 100 percent of the computer's
	  processing time whenever a Windows-based application is active. This causes
	  MS-DOS-based applications to fail to run whenever a Windows-based application
	  is running. To correct the problem, from the Main program group, start the
	  Control Panel application. Choose the "386 Enhanced" icon. Be sure that the
	  Exclusive In Foreground check box is not checked. Choose OK and close the
	  Control Panel application. The problem should now be corrected.
	
	2. Q. When I try to use the PowerStation Visual Workbench browser I get the
	  error:
	
	  Cannot open the browser database file. Share is not installed or is not
	  active for this drive.
	
	  How can I avoid this error?
	
	  A. The Visual Workbench browse utility requires that SHARE.EXE, an MS-DOS file
	  access arbitration utility, is installed prior to starting Windows. The
	  easiest way to do this is put the statement "C:\DOS\SHARE" in your
	  AUTOEXEC.BAT file (assuming you have installed MS-DOS into C:\DOS). Make sure
	  that you put the SHARE command before any line in the AUTOEXEC.BAT that says
	  "win" or "dosshell."
	
	3. Q. When I use the PowerStation's Visual Workbench to compile and build
	  programs, it takes a very long time to compile and link. What can I do to
	  improve this process?
	
	  A. The system requirements state that you must be running MS-DOS and that you
	  need 4 megabytes (MB) of available memory, with 6 MB or more preferred. If
	  you have only 4 MB of physical memory, then under Windows you probably have
	  less than 4 MB of physical memory available and are intensively using your
	  Windows swap file. Make sure that your swap file is as large as it can be and
	  that you are using a permanent swap file. You can also decrease the amount of
	  memory that SMARTDRV or any other disk caching utility is consuming. The most
	  effective solution is to add more physical memory to your machine.
	
	4. Q. If I have created a project, how do I delete it and its associated files?
	
	  A. If you have created a project named TEST and want to delete it and all of
	  its associated files, you need to delete
	
	          TEST.FMK   This is the project makefile.
	          TEST.FPW   This is the project status file.
	          TEST.WSP   This is the project workspace file.
	
	  The easiest way to maintain projects is to have a single project in a
	  directory. After saving your source code, you can delete the entire directory
	  to delete the project.
	
	5. Q. How can I get the editor in the Visual Workbench to do column selections
	  or use macros?
	
	  A. These are not currently features that are available in the FORTRAN Visual
	  Workbench editor. If you have a DOS editor that has these capabilities, it is
	  often convenient to add the DOS editor to the Tools menu in FORTRAN Visual
	  Workbench. You can do this by selecting the Options.Tools menu item and
	  clicking the Add button. When you find the DOS editor executable file, select
	  it and click OK. In the resulting dialog box in the Arguments text entry
	  line, type
	
	  "$file" (without the quotation marks)
	
	  and click the OK button. You will now have an entry under your Tools menu
	  that, when selected, will bring up your DOS editor with the file that is
	  currently in the active window in FORTRAN Visual Workbench. You can then edit
	  your file, and when you exit from the DOS editor you will return to FORTRAN
	  Visual Workbench. The FORTRAN Visual Workbench will then allow you to reload
	  the edited file.
	
	6. Q. I created a project with the PowerStation Visual Workbench and several of
	  my source files have include statements. When I modify one of these include
	  files and then build the project, the source file does not recompile. Why
	  isn't there a build dependency for the include files?
	
	  A. You are probably using the $INCLUDE metacommand and not the INCLUDE
	  statement in your source files. The Visual Workbench build engine does not
	  create dependencies for files on $INCLUDE metacommands. Change all the
	  metacommands to FORTRAN statements and then force the project to rescan
	  dependencies by selecting Project and then choosing Scan All Dependencies.
	
	7. Q. Sometimes when I start up the PowerStation Visual Workbench I can't see
	  some of the windows I had set up when I closed it; they are listed in the
	  Windows menu, but I can't see or access them. What happened and how can I see
	  my windows again?
	
	  A. You probably had the inaccessible child windows minimized within the Visual
	  Workbench frame and then closed the Visual Workbench while it was itself
	  minimized. This can easily happen if you exit Windows when the Visual
	  Workbench is still active and minimized. To avoid this problem, never exit
	  the Visual Workbench application when it is in a minimized state. You can
	  make any inaccessible child windows visible by selecting the Window menu and
	  choosing Cascade.
	
	8. Q. When I use the PowerStation debugger under the Visual Workbench, it
	  sometimes proceeds very slowly and occasionally performs erratically. What
	  can I do to improve this situation?
	
	  A. The system requirements for FORTRAN PowerStation state that the product
	  requires 4 MB of available memory. This is an absolutely minimum requirement.
	  Under Windows, the PowerStation tools may not perform optimally without an
	  adequate size Windows swap file. Make sure that you have the largest Windows
	  swap file possible. The most effective way to improve performance of the
	  PowerStation tools is to add physical memory (RAM) to your machine. For
	  optimal performance while debugging, make sure that you are not running any
	  other applications. In particular, make sure that you are not running any
	  other MS-DOS applications or MS-DOS prompts.
	
	Mixed Language Programming
	--------------------------
	
	1. Q. I have a number of assembly-code modules that I would like to use with
	  FORTRAN PowerStation. How can I do this?
	
	  A. 16-bit assembly code must be modified to work with 32-bit applications. The
	  assembly code will need to be converted to use a 32-bit flat memory model
	  and, in some cases, will have to adjust for the fact that the application is
	  running in 32-bit protected mode and not in real mode. Object modules
	  produced by assemblers will probably be OMF-type files. They will need to be
	  converted to COFF-type object modules. It is recommended that MASM 6.1 (or
	  later) be used for 32-bit programming. Please consult your MASM manual and
	  Chapter 18 of the FORTRAN PowerStation User's Guide.
	
	  An extended example of 32-bit MASM programming is provided with the GRDEMO
	  sample project in the F32\SAMPLES\GRAPHICS\DEMO directory. The file MOUSE.ASM
	  is a MASM routine used in the sample. The comments in this file include tips
	  on assembly language programming.
	
	2. Q. I used to do mixed-language programming with high-level languages (such as
	  C) and FORTRAN. Can I do this with FORTRAN PowerStation?
	
	  A. Yes. Object modules compiled with Microsoft Visual C++ 32-bit edition, can
	  be linked with FORTRAN PowerStation. For more details, please see the
	  information in the F32\SAMPLES\MIXED_C directory. 16-bit C/C++ object modules
	  (created by earlier versions of Microsoft C or Visual C++ 16-bit edition) can
	  not be linked with 32-bit FORTRAN; these must be recompiled with a 32-bit
	  compiler.
	
	  For complete support of mixed 32-bit C and FORTRAN programming, Microsoft
	  offers development tools for Windows NT: Visual C++ 32-bit edition and
	  FORTRAN PowerStation 32 for Windows NT. Microsoft Windows NT is a true 32-bit
	  operating system (in contrast to a 32-bit DOS extender on top of 16-bit
	  MS-DOS) allowing full integration between the two languages. Mixing of C and
	  FORTRAN is also possible in a pure 16-bit world, such as MS-DOS or Windows,
	  with Microsoft FORTRAN 5.1 and Microsoft Visual C++ 16-bit edition.
	
	Differences from FORTRAN Version 5.1
	------------------------------------
	
	1. Q. Why is a program sometimes faster when compiled with FORTRAN 5.1?
	
	  A. In some cases, code compiled with optimization disabled (-Od) may be faster
	  with FORTRAN 5.1. We chose to provide a fast compile (-Od, default) and a
	  fast execute (-Ox) option. FORTRAN 5.1 did some optimization even with -Od,
	  while FORTRAN PowerStation does not. Also, by default, FORTRAN PowerStation
	  does no optimization, but -Ox is the default when using FORTRAN 5.1. Since
	  the default optimization is different between these versions, it is important
	  to be careful and compare using the same level of optimization.
	
	2. Q. In FORTRAN version 5.1 there is an option, /Fs, to create a source listing
	  file. Can I do this with PowerStation?
	
	  A. No, this PowerStation product does not support the source listing option.
	  Most of the functionality of source listings is available though different
	  options in the Visual Workbench. Source browser information, for example,
	  provides a visual means of locating variable definitions and references.
	
	Additional query words: 1.00a q&a nofpsnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3
	Version           : :1.0a
	
	=============================================================================
	
