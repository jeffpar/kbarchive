---
layout: page
title: "Q156864: FIX: Debugger Hangs Expanding TreeView in Debug Watch Window"
permalink: kb/156/Q156864/
---

## Q156864: FIX: Debugger Hangs Expanding TreeView in Debug Watch Window

	Article: Q156864
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Expanding the \Objects\Nodes section of a TreeView Control object in the Watch
	Window of the debugger causes Visual FoxPro for Windows to freeze.
	
	CAUSE
	=====
	
	The problem is with the TreeView control and not the debugger.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Form and add a TreeView Control to it as following:
	
	   - Choose OLE Container Control in the Form Controls toolbar and then click
	     the Form.
	
	   - When the Insert Object dialog comes up, select the Insert Control option
	     and then select the TreeView Control from the Control Type list. Click OK
	     to return to the Form Designer.
	
	2. Add a Command button to the form with the following code in the Click event:
	
	     USE HOME()+"samples\data\customer"
	     SELECT customer
	     oNodes = THISFORM.oleControl1.Nodes
	     oNodes.CLEAR
	     SCAN
	        oNodes.ADD(,1,ALLTRIM(cust_id),ALLTRIM(company),0)
	     ENDSCAN
	
	3. Run the Form. Click on the Command button to populate the TreeView object.
	
	4. Open the debugger and enter the following in the Watch Window, and then press
	  the Enter key:
	
	     _SCREEN.ACTIVEFORM.OleControl1
	
	5. In the Watch window, expand the "SCREEN.ACTIVEFORM.OleControl1" watch
	  expression.
	
	6. Expand the Objects section of the TreeView OleControl.
	
	7. Expand the Nodes section of the Objects section.
	
	At this point, Visual FoxPro for Windows will freeze and you will not be able to
	perform any functions from within Visual FoxPro for Windows or the Debugger
	window.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbinterop kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
