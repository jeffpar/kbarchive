---
layout: page
title: "Q190792: FIX: Transform on String Greater Than 255 Crashes VFP 6.0"
permalink: /kb/190/Q190792/
---

## Q190792: FIX: Transform on String Greater Than 255 Crashes VFP 6.0

{% raw %}

	Article: Q190792
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual FoxPro causes an exception error when using the Transform()
	function to transform a string greater than 255 characters.
	
	
	RESOLUTION
	==========
	
	The following workaround should work for strings of arbitrary length and has
	being tested with "@!" picture.
	
	Sample Code
	-----------
	
	     CLEAR
	     m.string = REPLICATE("HelloWorld", 26)
	     ? "Initial string length: ", LEN(m.string)
	     m.string = transgt255(m.string, "@!")
	     ? "Return value from function: ", m.string
	     ? "Length of returned string: ", LEN(m.string)
	
	     * Function TRANSGT255
	     * Purpose: Apply a string transformation to a string longer than 255
	     * characters passed: string to transform (lcText), transform string to
	     * apply (lcTransType).
	     * Returns: Transformed string (lcRetString).
	
	     FUNCTION transgt255
	
	     PARAMETERS lcText, lcTransType
	
	     * Define a string length safely smaller than 255, doesn't matter for
	     * these purposes.
	
	     #DEFINE MAX_LENGTH 253
	
	     liNumPasses = INT(LEN(lcText) / MAX_LENGTH)
	     liLastPass = MOD(LEN(lcText), MAX_LENGTH)
	
	     lcRetString = ""
	     FOR i = 1 TO liNumPasses
	        lcWorkString = SUBSTR(lcText, (i - 1) * MAX_LENGTH + 1, MAX_LENGTH)
	        lcRetString = lcRetString + ;
	           TRANSFORM(lcWorkString, (lcTransType))
	     NEXT
	
	     lcWorkString = RIGHT(lcText, liLastPass)
	     lcRetString = lcRetString + ;
	        TRANSFORM(lcWorkString, (lcTransType))
	
	     RETURN lcRetString
	
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
	
	1. Create a .prg file.
	
	2. Place the following code in the .prg file:
	
	  lcText=REPLICATE("HelloWorld",26)
	  ? LEN(lcText)
	  ? TRANSFORM(lcText,"@!")
	
	3. Save and run the .prg file.
	
	NOTE: Visual FoxPro 6.0 experiences an exception error and terminates. When
	changing the value of 26 to 25 in the Replicate() function, the preceding code
	runs correctly without any error.
	
	The error message displayed is partially dependent on the file that the code is
	contained within. Assuming that the preceding code is in a program named
	Test.prg and the program is located in the C:\FoxData directory, the error
	message would be as follows:
	
	  Fatal error: Exception code = C0000005
	  Called from - test line 3 {C:\FoxData\test.prg}
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
