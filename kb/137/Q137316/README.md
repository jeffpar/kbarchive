---
layout: page
title: "Q137316: PRB: SET ALTERNATE Adds Extra Spaces to the End of Each Line"
permalink: kb/137/Q137316/
---

## Q137316: PRB: SET ALTERNATE Adds Extra Spaces to the End of Each Line

	Article: Q137316
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SET ALTERNATE command to output to a text file can produce a result
	that contains extra spaces on the end of each line.
	
	RESOLUTION
	==========
	
	If you don't want to see the information scroll on the screen while the text
	file is being created, use this command:
	
	     SET CONSOLE OFF
	
	If you want to see the information scroll on the screen, set the _Screen.Fontname
	property to a non-proportional (mono-spaced) font, such as Courier.
	
	By calling the SET CONSOLE OFF or setting the FontName property to a non-
	proportional font, you can prevent the extra spaces from appearing in the text
	file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example uses the Customer table in the Vfp\Samples\Data directory.
	
	1. Create a program containing this code:
	
	     CLOSE ALL
	     SET SAFETY OFF
	     SET CONSOLE ON
	     USE C:\VFP\SAMPLES\DATA\customer.dbf
	     SET ALTERNATE TO test
	     SET ALTERNATE ON
	     GOTO TOP
	     DO WHILE !EOF()
	        ? ALLTRIM(cust_id)+" "+ALLTRIM(company)+" "+ALLTRIM(contact)
	        SKIP
	     ENDDO
	     SET ALTERNATE OFF
	     CLOSE ALTERNATE
	     CLOSE DATABASES
	     SET SAFETY ON
	
	2. Ensure that the _SCREEN.FontName property is set to Arial (or any other
	  proportional font). This can be done using this command:
	
	     _SCREEN.FontName="Arial"
	
	3. Run the program. After running the program, open the Test.txt file and place
	  the insertion point to determine that there are extra spaces added to the end
	  of each line.
	
	Steps to Avoid Behavior
	-----------------------
	
	1. To resolve the problem and display the text file on the screen as it is
	  created:
	
	  a. Add the following two lines of code to the top of the program:
	
	        oldfont=_SCREEN.FontName          && This establishes the name
	        _SCREEN.FontName="Courier"        && of the current font and then
	                                          && sets the font to Courier.
	
	  b. Add the following line of code to the bottom of the program:
	
	        _SCREEN.FontName=oldfont          && This sets the font back to
	                                          && the original setting.
	
	  c. Run the program, and open the Test.txt file. Note that no extra blanks
	     have been added to the end of each line.
	
	2. To resolve the problem without displaying the text file on the screen as it
	  is created:
	
	  a. Change the SET CONSOLE ON line in the program to SET CONSOLE OFF.
	
	  b. Run the program. Now you will not see the Test.txt file scroll on the
	     screen as it is being created. After the program completes, open the
	     "text.txt" file. Note that no extra blanks have been added to the end of
	     each line.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
