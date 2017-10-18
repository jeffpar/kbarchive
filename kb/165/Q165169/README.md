---
layout: page
title: "Q165169: PRB: Using ARROW Keys Ignores Page Deactivate Event NODEFAULT"
permalink: kb/165/Q165169/
---

## Q165169: PRB: Using ARROW Keys Ignores Page Deactivate Event NODEFAULT

	Article: Q165169
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0x, moving between pages in a PageFrame using an ARROW key
	ignores the NODEFAULT keyword in the Deactivate Event of a page. Moving between
	pages using a mouse click with the NODEFAULT keyword in the Deactivate Event
	works as expected.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form (TEST.SCX) with a two-page PageFrame.
	
	2. Type in NODEFAULT in the Deactivate Event of the first page.
	
	3. Save and run the Form (TEST.SCX).
	
	NOTE: Ensure that the focus is on the first page, then try to move to the second
	page by using the RIGHT ARROW key. The focus is set to the second page.
	
	WORKAROUND
	==========
	
	Here is a workaround for the behavior illustrated in the above example:
	
	1. Set the Form KEYPREVIEW property to .T.
	
	2. Put the following code in the KeyPress Event of the Form:
	
	        IF THISFORM.ACTIVECONTROL.BASECLASS="Page" AND ;
	           (nKeyCode=4 OR nKeyCode=19) AND ;
	           !THISFORM.ACTIVECONTROL.DEACTIVATE()
	              NODEFAULT
	        ENDIF
	
	3. Type in the following code in the Deactivate Event of first page:
	
	        NODEFAULT
	        RETURN .F.
	
	Additional query words: page frame no default
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
