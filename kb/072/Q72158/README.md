---
layout: page
title: "Q72158: Using run= and load= with Command Line Parameters in Windows"
permalink: /kb/072/Q72158/
---

## Q72158: Using run= and load= with Command Line Parameters in Windows

{% raw %}

	Article: Q72158
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The run= and the load= lines of the WIN.INI file do not allow programs that
	accept command line parameters. A workaround is to set up a file association for
	the data file, causing Windows to load the application with the data file and
	run the other parameters.
	
	MORE INFORMATION
	================
	
	A file association is an entry in the [Extensions] section of the WIN.INI file
	that tells Windows what data file extensions an application uses. This allows
	you to double-click a data file in File Manager and have Windows start the
	application with the data file loaded.
	
	Windows Applications
	--------------------
	
	Let's say you have a program called ONE.EXE that accepts a filename, and has
	keystrokes to start macros as command line parameters. At the DOS prompt you
	could use the following command to load this file in the application during
	startup.
	
	  win one testfile.one a
	
	If you want to do this with the run= or load= statements in the WIN.INI file, you
	will need to make the following changes:
	
	1. Create a file association:
	
	  a. Start File Manager from Windows.
	
	  b. Highlight TESTFILE.ONE.
	
	  c. From the File menu, choose Associate.
	
	  d. Type "c:\one\one.exe a" (without the quotation marks) and choose OK.
	
	2. Add the following to the run= line in the [windows] section of the WIN.INI
	  file:
	
	  run=c:\one\myfiles\testfile.one
	
	When Windows recognizing the association of ".ONE" to be ONE.EXE, Windows will
	load ONE.EXE with the document and run the macro assigned to the A keystroke.
	
	MS-DOS Applications
	-------------------
	
	MS-DOS applications allow for a more extensive use of command line parameters
	through the use of a PIF file. To start a MS-DOS application with command line
	parameters, use the following procedure:
	
	1. Create a PIF file for the MS-DOS program. For more information about this
	  procedure, see the "Microsoft Windows User's Guide," beginning on page 440.
	
	2. On the Optional Parameters line of the PIF, add the appropriate command line
	  parameters for the MS-DOS application.
	
	3. Add the name of the PIF file to the WIN.INI file:
	
	  run=c:\one\one.pif
	
	The run= line causes the PIF file to be invoked, starting the MS-DOS application
	with the command line parameters.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
