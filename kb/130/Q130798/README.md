---
layout: page
title: "Q130798: BUG: &quot;File Does Not Exist&quot; Occurs After FoxPro Is Maximized"
permalink: /kb/130/Q130798/
---

## Q130798: BUG: &quot;File Does Not Exist&quot; Occurs After FoxPro Is Maximized

	Article: Q130798
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbvfp260aBUGkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an application, if FoxPro or Visual FoxPro is minimized and then
	maximized, a "File <filename> Does Not Exist" error occurs when you run a
	program from the menu.
	
	RESOLUTION
	==========
	
	If a READ is in effect at the time FoxPro is minimized, the error does not
	occur. The READ may be in effect either through a Foundation READ implemented in
	the menu or after the menu has been displayed, as in the READ CYCLE described in
	Step 6 below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an application that has these components:
	
	  a. With a menu as the MAIN component, create a single menu option ("Do
	     Program") as a COMMAND "DO xtest.prg."
	
	  b. In the XTEST.PRG, add this code:
	
	        WAIT WINDOW "okay"
	
	2. Build the application.
	
	3. Delete or rename the following source files: XTEST.PRG and XTEST.FXP.
	
	4. Run the application, and click "Do Program." The wait window should be
	  displayed.
	
	5. Minimize FoxPro, and then maximize it. Click "Do Program." The wait window is
	  not displayed in Visual FoxPro, and an error occurs. In Visual FoxPro for
	  Macintosh, switch to Finder and then back to FoxPro.
	
	6. Clear the error. In the Command window, issue these commands:
	
	     DO xtest.app
	     @1,1 GET mvar DEFAULT SPACE(5)
	     READ CYCLE
	
	7. Minimize FoxPro, and then maximize it. Click "Do Program." The wait window is
	  displayed correctly. In Visual FoxPro for Macintosh, switch to Finder and
	  then back to FoxPro.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbvfp260aBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
