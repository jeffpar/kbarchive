---
layout: page
title: "Q115183: Running WINHELP.EXE with Command Line Switches"
permalink: /kb/115/Q115183/
---

## Q115183: Running WINHELP.EXE with Command Line Switches

	Article: Q115183
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use certain command-line arguments on the running of
	WINHELP.EXE to go immediately to areas of the help file other than the contents.
	
	MORE INFORMATION
	================
	
	When calling WINHELP.EXE, but before specifying the help file name, use the
	following switches:
	
	   -k  Go to keyword (set up with the K footnote within the help file).
	
	  -n  Go to context number (set up with the # footnote within the help
	      file).
	
	  -i  Go to context ID (set up with the # footnote within the help file
	      using a #defined string).
	
	  -h  Run WINHELP.EXE with the WINHELP.HLP file (no other help file is
	      necessary).
	
	
	EXAMPLES
	--------
	
	The following examples can be tested by typing them into the Run dialog box that
	opens when you choose Run from the File menu in the Program Manager.
	
	To run the file MYHELP.HLP and jump to the keyword "jumphere", type the
	following:
	
	  " WINHELP.EXE -kjumphere myhelp.hlp" (without the quotation marks)
	
	To run the file TEST.HLP and jump to the topic with context ID number 101, type
	the following:
	
	  " WINHELP.EXE -n101 test.hlp" (without the quotation marks)
	
	To run the file CIJUMP.HLP and jump to the topic with context ID "MY_JUMPID"
	(which had previously been set within the .HLP file with #define MY_JUMPID 102),
	type the following:
	
	  " WINHELP.EXE -iMY_JUMPID cijump.hlp" (without the quotation marks)
	
	To run the file "Help on Help", type the following:
	
	  " WINHELP.EXE -h" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
