---
layout: page
title: "Q162551: FIX: TOBROWSER Error when Closing Class Browser Window"
permalink: kb/162/Q162551/
---

## Q162551: FIX: TOBROWSER Error when Closing Class Browser Window

	Article: Q162551
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to close the Class Browser window using the Close button, a
	"Class Browser" error dialog box may appear. The error occurs about one out of
	three times, or more.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Visual Class Library in the Class Browser using the following
	  command:
	
	        DO HOME()+'BROWSER.APP' WITH HOME()+'SAMPLES\CLASSES\SAMPLES'
	
	2. Open the "datachecker" class by clicking on it with the mouse.
	
	3. Right-click any of the classes in the left pane of the Class Browser window,
	  or right-click any of the methods that show up on the right pane of the Class
	  Browser window.
	
	  NOTE: This displays a context menu where the first choice is "Descriptions."
	
	4. Leaving the Context menu open, click Close in the Class Browser on the top
	  right corner of the window.
	
	  NOTE: A Class Browser dialog box appears with an error that begins with
	  "TOBROWSER is not an object."
	
	5. At this point, click OK to ignore the error, or click Cancel to close the
	  Class Browser. Either choice closes the Class Browser.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
