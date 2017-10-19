---
layout: page
title: "Q156090: BUG: LOCATE NEXT n or LOCATE REST Fail If Started from BOF"
permalink: /kb/156/Q156090/
---

## Q156090: BUG: LOCATE NEXT n or LOCATE REST Fail If Started from BOF

	Article: Q156090
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp260aBUGkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the LOCATE REST or LOCATE NEXT n commands are used at the beginning of a
	file (BOF), and if the first record matches the FOR condition, the FOUND()
	function returns .F., and the record pointer cannot be moved off the BOF.
	
	WORKAROUND
	==========
	
	Do not use the LOCATE REST or the LOCATE NEXT n commands when at BOF.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	    * Start of code example
	     *
	     CLEAR
	     CREATE TABLE test (field1 c(40))
	     INSERT INTO test VALUES ('test 1')
	     INSERT INTO test VALUES ('test 2')
	     GO TOP
	     SKIP -1                         && Moves to BOF
	     ? 'BOF() after SKIP -1:', BOF()
	     LOCATE REST FOR !EMPTY(field1)
	     ? 'FOUND():', FOUND()           && Incorrectly returns .F.
	     ? 'RECNO():' + STR(RECNO(),2)   && Returns 1 even if BOF() = .T.
	     ? 'BOF():', BOF()               && Should return .F. - should have gone
	                                     && to record 1
	     GO TOP
	     ? 'BOF() after GO TOP:', BOF()
	     LOCATE REST FOR !EMPTY(field1)
	     ? 'FOUND():', FOUND()           && Correctly returns .T.
	     ? 'RECNO():' + STR(RECNO(),2)   && Returns 1
	     ? 'BOF():', BOF()               && Returns .F. as expected
	     *
	     * End of code example
	
	2. The first FOUND() function returns .F., although for the first record, field1
	  is not Empty. The BOF() function returns .T., though the record pointer
	  should have been moved by the LOCATE() function.
	
	NOTES:
	
	- The LOCATE NEXT n command behaves the same way as the LOCATE REST command.
	  The LOCATE RECORD, LOCATE ALL, and LOCATE commands with no scope clause work
	  properly.
	
	- If the first record does not satisfy the FOR condition, as long as another
	  record matches the FOR condition, the record pointer is moved and the FOUND()
	  and the BOF() functions are updated correctly.
	
	- If no record satisfies the FOR condition, both the BOF() and the EOF()
	  functions return .T.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp260aBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
