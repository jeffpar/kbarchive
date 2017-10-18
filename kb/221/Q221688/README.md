---
layout: page
title: "Q221688: FIX:_VFP.Eval() Only Accepts Strings of 255 Characters or Less"
permalink: kb/221/Q221688/
---

## Q221688: FIX:_VFP.Eval() Only Accepts Strings of 255 Characters or Less

	Article: Q221688
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbOOP kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbV
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Eval() method of the _VFP system variable cannot accept a string longer than
	255 characters.
	In Visual FoxPro 6.0, the following error appears:
	
	  OLE exception code 0 from Visual FoxPro for Windows:10 :Syntax error...
	
	In Visual FoxPro 5.0x, this error appears:
	
	  OLE exception code 0 from Visual FoxPro for Windows: Syntax error...
	
	This problem normally occurs when a COM client is calling the EVAL() method on
	the Visual FoxPro server.
	
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
	
	In the Command window, type the following line of code:
	
	  _vfp.EVAL("MESSAGEBOX('" + REPLICATE("a",242) + "')")
	
	The error mentioned in the Symptoms section appears.
	
	NOTE: The MessageBox() function is 12 characters, two more for the quotes and
	then replicating the letter "a" 242 times makes 256 characters within the
	_vfp.EVAL() function.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbOOP kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
