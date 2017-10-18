---
layout: page
title: "Q297830: FIX: Error Assigning Memo Field To _CLIPTEXT Variable"
permalink: kb/297/Q297830/
---

## Q297830: FIX: Error Assigning Memo Field To _CLIPTEXT Variable

	Article: Q297830
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp300bBUG kbvfp300BUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you assign the value of a memo field directly to the _CLIPTEXT variable,
	Visual FoxPro may produce the following error:
	
	  Data type mismatch.
	
	RESOLUTION
	==========
	
	Use the ALLTRIM() function to convert the memo field into a string before
	assigning it to _CLIPTEXT.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Information stored in the _CLIPTEXT variable is available to be pasted as if it
	had been placed on the Clipboard using Cut or Copy operations.
	
	In Visual FoxPro 6.0 and earlier, the following code produces the error:
	
	  *!* Q297830 FIX: Assigning Memo Field To _CLIPTEXT Variable Causes Error
	  CREATE CURSOR test (field1 M)
	  INSERT INTO test ;
	     VALUES ("Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.")
	
	  _CLIPTEXT = test.field1           && This line will produce an error.
	
	  _CLIPTEXT = ALLTRIM(test.field1)  && This line will not.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp300bBUG kbvfp300BUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
