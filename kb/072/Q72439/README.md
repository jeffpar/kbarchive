---
layout: page
title: "Q72439: Automatically Running Recorder Macros, Command Line Parameters"
permalink: kb/072/Q72439/
---

## Q72439: Automatically Running Recorder Macros, Command Line Parameters

	Article: Q72439
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	This article discusses an undocumented and unsupported command line
	parameter. Microsoft does not support or encourage the use of this
	parameter, but provides this article as information only. Use this
	parameter at your own risk.
	
	SUMMARY
	=======
	
	The Recorder application (RECORDER.EXE) that is included with Windows 3.0 and
	3.1 can be started with certain command-line parameters that allow Recorder to
	load a file when started and, optionally, automatically run a macro that is
	defined in the file.
	
	1. From the Program Manager, click the Recorder icon.
	
	2. From the File menu, choose Properties.
	
	3. Specify the optional parameters in the Command Line box.
	
	MORE INFORMATION
	================
	
	To start Recorder and load a file, the command line syntax is
	
	  RECORDER.EXE <filename>
	
	where <filename> is the name of the Recorder file you want to load. If the
	file is not in the same directory as Recorder, then the path needs to be
	specified before the filename.
	
	The following starts Recorder and loads the file TEST.REC:
	
	  RECORDER.EXE TEST.REC
	
	Auto-Executing Macros
	---------------------
	
	Optionally, you can have Recorder automatically execute a macro that is defined
	in the macro file. The syntax of the line that does this is
	
	  RECORDER.EXE -h <shortcutkey> <filename>
	
	where <filename> is the Recorder filename you want to load and
	<shortcutkey> is the key defined in the macro that is being loaded. The -h
	switch tells Recorder to use the hotkey defined immediately after the -h.
	
	For example, if a macro is defined in the macro file TEST.REC that used the
	shortcut key ALT+F10, the command line to execute this macro when starting
	Recorder is
	
	  RECORDER.EXE -h %F10 TEST.REC
	
	Note the % in this example. This signifies the ALT key. The following table
	explains the key sequences:
	
	   Key             Sequence
	   ---             --------
	
	   ALT                %
	   CTRL               ^
	   SHIFT              +
	
	It is possible to use all these keys in conjunction with the keys listed in the
	drop-down list box in the dialog box that appears when you choose Properties
	from the Macro menu. A sample command line is as follows:
	
	  RECORDER.EXE -h %^+F10 TEST.REC
	
	Depending on your version of Windows, there are up to three ways to automatically
	run macros when you start Windows.
	
	- To start Recorder from the MS-DOS prompt when you start Windows and have it
	  execute a macro, use the following command line during startup:
	
	  WIN RECORDER.EXE -h %^+F10 TEST.REC
	
	  NOTE: If you are entering this command line into a batch file, you need to use
	  a double percent sign, %%. A single percent sign is interpreted as a null
	  character and does not perform the desired function.
	
	  -or-
	
	- Run the macros from the RUN= or LOAD= line in the WIN.INI file (for example,
	  enter "RUN=mymacro.rec" (without the quotation marks) in the WIN.INI file).
	
	  -or-
	
	- In Windows 3.0, Use the following steps to automatically execute your Windows
	  Recorder macro without having to include the command line parameters:
	
	  a. From File Manager, highlight a Recorder macro document file.
	
	  b. From the File menu, choose Associate.
	
	  c. Type "recorder.exe -h <shortcutkey>" (without the quotation marks),
	     where <shortcutkey> is the hotkey for your macro.
	
	     For example, if a macro was defined in the macro file MYMACRO.REC that used
	     the shortcut key ALT+F12, type the following in the Associate dialog box:
	
	  recorder.exe -h %f12
	
	     NOTE: Using CTRL+Shortcutkey does not work in this situation. The symbol
	     for CTRL "^" is reserved in the [EXTENSIONS] section of WIN.INI. Using
	     CTRL in the hotkey causes the following message:
	
	  No macro file - ignoring shortcut key MACRONAME.REC
	
	  d. Place the name of the macro file on the LOAD= or RUN= line of the WIN.INI
	     file.
	
	  -or-
	
	     Start Windows from MS-DOS, specifying the macro filename ([or example, type
	     "win mymacro.rec" (without the quotation marks)].
	
	Note that all macro files run from any command line, including File Manager and
	the MS-DOS Executive, execute files automatically using the specified shortcut
	key.
	
	Additional query words: 3.00 3.00a 3.0 3.0a win30 win31 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
