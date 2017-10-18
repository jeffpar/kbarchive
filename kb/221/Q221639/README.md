---
layout: page
title: "Q221639: FIX: Empty Memo Shows Trash Data With Trace Window Mouse Over"
permalink: kb/221/Q221639/
---

## Q221639: FIX: Empty Memo Shows Trash Data With Trace Window Mouse Over

	Article: Q221639
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbMiscTools kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp2 kbVS600SP
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a memo field is empty and the mouse is moved over a reference to the memo
	field in the Trace window of the Debugger, "garbage" characters are displayed in
	the ToolTip message.
	
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
	
	1. Create a new program file and enter or paste in the following code:
	
	  LOCAL iCounter
	  CREATE TABLE TEST (iInt i, mMemo M)
	  FOR icounter=1 TO 5
	      INSERT INTO TEST (iInt) values (m.iCounter)
	  NEXT
	  GOTO TOP
	  SET STEP ON
	  m.mMemo=TEST.mMemo
	
	2. Save and run the program.
	
	3. In the Trace window of the Debugger, put the mouse over the last line of the
	  program: (m.mMemo=test.mMemo).
	
	4. Observe the text displayed in the ToolTip.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbMiscTools kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
