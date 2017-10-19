---
layout: page
title: "Q157862: FIX: Memo Field Display Problems in the Debugger Watch Window"
permalink: /kb/157/Q157862/
---

## Q157862: FIX: Memo Field Display Problems in the Debugger Watch Window

	Article: Q157862
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbdisplay kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When looking at a memo field in the Debugger Watch window, extra characters that
	are not a part of the memo field are displayed to the right of the Field's
	value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table as following:
	
	  " CREATE TABLE test1 ( fld1 M ) " (without the quotation marks)
	
	2. Add a record to the table as following:
	
	  " INSERT INTO test1 VALUES ( 'This is a test' ) " (without the quotation
	  marks)
	
	3. Open the Debugger window.
	
	4. In the Watch window enter "Test1.Fld1" (without the quotation marks), to
	  check the value.
	
	5. Look to the right of the "This is a Text" string where you see that there are
	  some characters that are not a part of the Memo field.
	
	If you change the value (Add/Delete characters) in the Memo field, from Visual
	FoxPro, then additional characters appear.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbdisplay kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
