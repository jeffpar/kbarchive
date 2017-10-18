---
layout: page
title: "Q221747: FIX:C0000005 Fatal Error Passing FGETS() a String &gt; 256 chars"
permalink: kb/221/Q221747/
---

## Q221747: FIX:C0000005 Fatal Error Passing FGETS() a String &gt; 256 chars

	Article: Q221747
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS6
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the FOPEN function to open a file in Unbuffered mode with Read-Only(10) or
	Read-Write(12) privileges, and then using the FGETS function to get a line that
	has more than 256 characters causes Visual FoxPro to generate the following
	error message:
	
	  C0000005 Fatal Error
	
	This can also happen with the FREAD function.
	
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
	
	1. Create a new program file in Visual FoxPro 6.0.
	
	2. Cut and paste the following code into the program file. Note that the
	  StrToFile() function is not available in versions prior to 6.0:
	
	  LOCAL lnFile
	
	  StrToFile(Replicate('0', 300), 'Demo12.dat')
	
	  lnFile = FOpen('Demo12.dat', 10)
	  FGets(lnFile, 300)
	  FClose(lnFile)
	
	3. Save and run the program.
	
	  Visual FoxPro will cause a C0000005 Fatal Error and terminate.
	
	  In Visual FoxPro with Visual Studio 6.0 SP3, attempting FGETS() on a line that
	  has more than 8192 characters generates a "Function argument value, type, or
	  count is invalid" error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2fix kbVS600sp3fix kbGrpDSFox kbVS600SP1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
