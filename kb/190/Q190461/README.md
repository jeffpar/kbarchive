---
layout: page
title: "Q190461: BUG: ADIR() with V Attribute May Return Empty String"
permalink: kb/190/Q190461/
---

## Q190461: BUG: ADIR() with V Attribute May Return Empty String

	Article: Q190461
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the current Visual FoxPro default directory is not the root directory, when
	you execute the ADIR() command with the V attribute, which is intended to return
	the volume label of the drive containing the directory passed to the
	ADIR()function, ADIR() populates the destination array with an empty string,
	rather than the correct volume label.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        LOCAL lcCurDir, ax[1]
	        CLEAR
	        lcCurdir = SET('DEFAULT')+CURDIR()
	        CD "c:\program files"
	        =ADIR(aX,"c:\","DV")
	        ?1, aX[1]
	        CD c:\ 
	        =ADIR(aX,"c:","DV")
	        ?2, aX[1]
	        CD (lcCurDir)
	
	The first ADIR() command sets the value of aX[1] to "". The second ADIR() command
	sets the value of aX[1] to <your volume label>.
	
	REFERENCES
	==========
	
	Visual FoxPro Help file; search on: "ADIR()"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbXBase kbVFp500abug kbvfp500
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
