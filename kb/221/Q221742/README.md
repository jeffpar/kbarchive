---
layout: page
title: "Q221742: FIX:C0000005 Fatal Error With Big Array Property"
permalink: /kb/221/Q221742/
---

## Q221742: FIX:C0000005 Fatal Error With Big Array Property

	Article: Q221742
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2fix kbVS600sp3fix kbG
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In Visual FoxPro 5.x and 6.0, dimensioning a two-dimension array greater than its
	maximum allows value, which is 32500, causes the following or some other memory
	related error message:
	
	  C0000005 Fatal Error
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Cut and paste the program below into a .PRG:
	
	  x1 = CREATEOBJECT( "cBigArray" )
	  x1.aBig[1,1] = 1
	  x1.aBig[1000,1] = 1
	  x1.aBig[10000,1] = 1
	  x1.aBig[30000,1] = 1
	
	  DEFINE CLASS cBigArray AS Custom
	     DIMENSION aBig[33000,2]
	  ENDDEFINE
	
	2. Save and run the .PRG.
	
	  NOTE: Visual FoxPro causes a C0000005 Fatal Error and terminates.
	
	  After the fix in Visual Studio Service Pack 3, Visual FoxPro shows this error
	  message when the maximum allowed value is greater then 32500 on a two-
	  dimensional array:
	
	  Too Many Variables
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2fix kbVS600sp3fix kbGrpDSFox kbVS600SP1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
