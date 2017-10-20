---
layout: page
title: "Q318461: FIX: Grid Events Are Not Called if Grid Contains No Records"
permalink: /kb/318/Q318461/
---

## Q318461: FIX: Grid Events Are Not Called if Grid Contains No Records

{% raw %}

	Article: Q318461
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute code on a form from the Click, the RightMouse, the MouseUp, and
	the MouseDown events in an empty grid, the code in these events is not called.
	
	CAUSE
	=====
	
	When the grid is empty, the code in these events is not called. If the grid has
	at least one record, the events fire properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows version 7.0. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the following code in a program (.prg) file named Test, and then run
	  the program from the Command window:
	
	  PUBLIC ox
	  CREATE CURSOR Test (f1 c(5), f2 c(10))
	  **INSERT INTO Test VALUES ('xxx','yyy')
	  ox = CREATEOBJECT('form')
	  ox.ADDOBJECT('grd1','grd')
	  ox.grd1.RECORDSOURCE = 'Test'
	  ox.grd1.VISIBLE = .T.
	  ox.SHOW
	
	  DEFINE CLASS grd AS GRID
	
	  	COLUMNCOUNT = 0
	
	  	ADD OBJECT col1 AS COL
	
	  	ADD OBJECT col2 AS COL
	
	  	PROCEDURE RIGHTCLICK
	  	WAIT WINDOW PROGRAM() TIMEOUT 1
	      ENDPROC
	
	  	PROCEDURE CLICK
	  	WAIT WINDOW PROGRAM() TIMEOUT 1
	      ENDPROC
	
	  	PROCEDURE MOUSEUP
	  	LPARAMETERS nButton, nShift, nXCoord, nYCoord
	  	WAIT WINDOW  PROGRAM() TIMEOUT 1
	      ENDPROC
	
	  	PROCEDURE MOUSEDOWN
	  	LPARAMETERS nButton, nShift, nXCoord, nYCoord
	  	WAIT WINDOW PROGRAM() TIMEOUT 1
	      ENDPROC
	
	  ENDDEFINE
	
	  DEFINE CLASS COL AS COLUMN
	
	  	ADD OBJECT hdr1 AS HEADER
	
	  	PROCEDURE hdr1.CLICK
	  	WAIT WINDOW PROGRAM() TIMEOUT 1
	      ENDPROC
	  	PROCEDURE hdr1.RIGHTCLICK
	  	WAIT WINDOW PROGRAM() TIMEOUT 1
	      ENDPROC
	      PROCEDURE MOUSEUP
	  	LPARAMETERS nButton, nShift, nXCoord, nYCoord
	  	WAIT WINDOW  PROGRAM() TIMEOUT 1
	      ENDPROC
	
	  	PROCEDURE MOUSEDOWN
	  	LPARAMETERS nButton, nShift, nXCoord, nYCoord
	  	WAIT WINDOW PROGRAM() TIMEOUT 1
	      ENDPROC
	
	  ENDDEFINE
	
	2. Right-click within the grid. Note that the Click, the RightMouse, the
	  MouseUp, and the MouseDown events do not fire when the grid is empty.
	
	3. Right-click on the grid header. Note that the Click, the RightMouse, the
	  MouseUp, and the MouseDown events for the column also do not fire when the
	  grid is empty.
	
	4. To resolve this problem, open Test.prg, uncomment the following line of code,
	  and then repeat steps 2 and 3:
	
	  INSERT INTO Test VALUES ('xxx','yyy')
	
	5. Repeat Steps 2 and 3, and observe that the events fire.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
