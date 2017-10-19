---
layout: page
title: "Q155938: PRB: SET PRINTER TO Does Not Create File in VFP for Macintosh"
permalink: /kb/155/Q155938/
---

## Q155938: PRB: SET PRINTER TO Does Not Create File in VFP for Macintosh

	Article: Q155938
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using triple question marks with the SET PRINTER TO <filename> command
	does not create a file in Visual FoxPro 3.0b for Macintosh.
	
	WORKAROUND
	==========
	
	Use one of the following methods to print to a file. The two examples below
	create text files that contain both phrases on one line. The first uses the
	double question marks and the SET PRINTER TO command. The following code example
	demonstrates this concept:
	
	     SET PRINTER TO  Test.txt
	     SET PRINTER ON
	     ?? 'Hello world'
	     ?? 'This is a test'
	     SET PRINTER TO
	     SET PRINTER OFF
	
	Also, the SET ALTERNATE command produces a text file. The following code creates
	a file using the SET ALTERNATE command:
	
	     SET ALTERNATE TO Test.txt
	     SET ALTERNATE ON
	     ?? 'Hello'
	     ?? 'This is a test'
	     SET ALTERNATE OFF
	     SET ALTERNATE TO
	
	According to the Visual FoxPro Help file, the SET ALTERNATE command functions
	only with single and double question marks, and the DISPLAY and LIST commands.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In previous versions of FoxPro, the SET PRINTER TO <filename> and triple
	question marks produces a text file. However, in Visual FoxPro 3.0b for
	Macintosh, this technique does not produce a file, even though the code runs
	without error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following code into the Command window or a program:
	
	     SET PRINTER TO Test.txt
	     ??? 'Hello World'
	     ??? 'This is a test'
	     SET PRINTER TO
	
	The above code does not create a text file when executed under Visual FoxPro for
	Macintosh. However, the code creates a file on the Windows, MS-DOS, and
	Macintosh versions of FoxPro 2.x, and Visual FoxPro 3.0 and 5.0 for Windows.
	
	Adding the SET PRINTER ON command to the code example creates a text file;
	however, the file contains no information. The code example below demonstrates
	this behavior:
	
	     SET PRINTER TO Test.txt
	     SET PRINTER ON
	     ??? 'Hello World'
	     ??? 'This is a test'
	     SET PRINTER OFF
	     SET PRINTER TO
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
