---
layout: page
title: "Q164739: BUG: &quot;Invalid Coordinates&quot; Error Message Received when Sending @"
permalink: /kb/164/Q164739/
---

## Q164739: BUG: &quot;Invalid Coordinates&quot; Error Message Received when Sending @

	Article: Q164739
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Invalid coordinates" error message is received when sending @..SAYs to a
	text file when the coordinates for the @..SAY reach a certain number. The
	certain number is dependent on the FontSize property of _SCREEN. The smaller the
	_SCREEN.FontSize, the larger the coordinate values can be.
	
	RESOLUTION
	==========
	
	The following code can be used as a workaround to this problem, depending on the
	circumstances:
	
	  SET ALTERNATE TO test.txt
	  SET ALTERNATE ON
	  SET CONSOLE OFF
	
	  FOR i=1 TO 35000
	  ? "Row "+STR(i)
	  ENDFOR
	
	  SET ALTERNATE OFF
	  SET ALTERNATE TO
	  SET CONSOLE ON 
	
	The code above uses the ? command instead of @...SAY's to output. The ? command
	is placed inside a FOR...ENDFOR loop for illustration purposes. In an actual
	application, the FOR...ENDFOR loop would likely be replaced with what actually
	needs to be output to the text file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The "Invalid coordinates" error message is error number 1959. The Help file
	states that the coordinate values must be between -32768 and 32767. Visual
	FoxPro 3.x for Windows and Macintosh, and FoxPro for Windows can use coordinates
	within the range specified by the Help file without error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Enter the following commands in the Visual FoxPro Command window:
	
	        SET DEVICE TO PRINTER
	        SET PRINTER TO test.txt
	        @ 32700,1 SAY "Hello"     && This line will cause the error
	        SET PRINTER TO
	        SET DEVICE TO SCREEN
	
	Although these few lines of code are all that is needed to reproduce the error,
	it may be useful to find out what the maximum coordinate can be in a particular
	situation. Continue with the next few steps to determine the maximum coordinate
	that can be used.
	2. Place the following code in a new program file and save it:
	
	     IF FILE("test.txt")
	          DELETE FILE "test.txt"
	     ENDIF
	
	     _SCREEN.FONTNAME="Arial"
	     _SCREEN.FONTSIZE=10
	
	     SET DEVICE TO PRINTER
	     SET PRINTER TO test.txt
	     FOR i=1 TO 32770
	     @ i, 1 SAY "Hello "+ STR(i)
	     ENDFOR
	
	     SET PRINTER TO
	     SET DEVICE TO SCREEN
	     MODIFY FILE test.txt
	
	3. Run the program. Because you should get the "Invalid coordinates" error,
	  cancel the program when the error dialog box comes up.
	
	4. Finish out the program by entering the following commands in the Visual
	  FoxPro Command window:
	
	  SET PRINTER TO SET DEVICE TO SCREEN MODIFY FILE test.txt
	
	5. If the text file is not at the bottom, scroll down until the end is reached.
	  The maximum coordinate should be listed. With _SCREEN.FontSize set to 10, the
	  maximum coordinate should be about 2,047. If the _SCREEN.FontSize is set to
	  4, the maximum coordinate should be about 5,461. _SCREEN.FontSize won't
	  accept sizes less than 4 point. The program code in step 2 above has a
	  command for changing the FontSize property of _SCREEN.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
