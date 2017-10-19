---
layout: page
title: "Q253640: BUG: Crash When Closing Table with Dirty @...GET and READ Active"
permalink: /kb/253/Q253640/
---

## Q253640: BUG: Crash When Closing Table with Dirty @...GET and READ Active

	Article: Q253640
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbV
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual FoxPro 6.0 crashes with the following Fatal Exception error:
	
	  Fatal Exception Error: Exception code=C0000005
	
	In Visual FoxPro versions 3.0 and 5.0, the crash is an Application Error with the
	following text:
	
	  The instruction at <some memory address> referenced memory at
	  "0x00000000". The memory could not be "read".
	
	-or-
	
	  VFP has generated error and will be closed by Windows. You will need to
	  restart the program.
	
	
	Visual FoxPro for Macintosh crashes with an error of Type 2.
	
	These errors are normally encountered running legacy code from earlier versions
	of FoxPro after editing data in an @...GET field and ending the data entry
	session.
	
	CAUSE
	=====
	
	This crash is caused by closing the table that the @...GETS are using before
	closing the window that the @...GETS are in.
	
	RESOLUTION
	==========
	
	In the code shown below, the "RELEASE WINDOW ctest" line of code should be moved
	so that it appears before the "CLOSE DATABASES" line of code to prevent the
	crash. Release the window the @...GETS are in before closing the table. The
	Endit procedure in the sample code in "More Information" section can be modified
	to prevent the crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The code in the following steps creates a new table and then defines a window
	with two @...GETS. The END key is set up to run a procedure that closes the
	table and then releases the window. This causes Microsoft Visual FoxPro to
	crash. This same code runs fine in FoxPro for Windows or FoxPro for MS-DOS.
	
	1. Create a new program file using the following code:
	
	  CLEAR
	  CLEAR ALL
	  ON KEY LABEL end DO endit
	  SET SAFETY OFF
	
	  CREATE TABLE crashtest (f1 c(10), f2 c(10))
	  USE crashtest
	  APPEND BLANK
	  APPEND BLANK
	
	  DEFINE WINDOW ctest FROM 5,10 TO 25,25
	  ACTIVATE WINDOW ctest
	  @ 1,1 GET crashtest.f1
	  @ 2,1 GET crashtest.f2
	  READ
	  ON KEY LABEL end
	
	  PROCEDURE endit
	  CLOSE DATABASES
	  RELEASE WINDOW ctest
	
	2. Save and run the program.
	
	3. Type some data into one of the @...GET fields and then press the END key.
	  Visual FoxPro should crash.
	
	4. Try repeating the steps above except do not type anything into the @...GET
	  fields before pressing END. Visual FoxPro should not crash.
	
	5. Modify the Endit procedure by placing the RELEASE WINDOW ctest line before
	  the CLOSE DATABASES line. Save and rerun the program, repeating the steps
	  above, and note that Visual FoxPro does not crash.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3 kbGrpDSFox kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
