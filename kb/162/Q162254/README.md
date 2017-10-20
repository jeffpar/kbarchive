---
layout: page
title: "Q162254: BUG: Container in Grid Column Fires Wrong Event"
permalink: /kb/162/Q162254/
---

## Q162254: BUG: Container in Grid Column Fires Wrong Event

{% raw %}

	Article: Q162254
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 5.0a,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a grid column text object is replaced with a container object, methods fire
	incorrectly. Specifically, when the column gets focus, the GotFocus() method
	does not fire. When the column loses focus, the LostFocus method fires twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Place the following code in a program called Colfocus.prg:
	
	         * Begin ColFocus.prg
	
	        CLEAR ALL
	        CLEAR
	        CLOSE ALL
	        USE HOME()+ "SAMPLES\DATA\EMPLOYEE"  && In Visual FoxPro 6.0, locate
	                                             && the employee table and adjust
	                                             && the path accordingly.
	
	        *-- Create a form
	        MyForm=CREATEOBJECT("Form")
	        WITH MyForm
	           .AutoCenter= .T.
	           .WindowType=1       && Modal
	           .AddObject("Edit1", "EditBox")
	           WITH .Edit1
	             .Visible=.T.
	             .Height= 23
	             .Width= MyForm.Width
	             .Value="Column3.Container.GotFocus() never fires"
	           ENDWITH
	
	        *-- Add a Grid
	        .AddObject("Grid1", "Grid")
	        WITH .Grid1
	           .Top=40
	           .Visible= .T.
	           .ColumnCount=2
	
	           *-- Add a container to a column
	           .AddObject("Column3", "Column")
	           .Column3.RemoveObject("Text1")
	           .Column3.AddObject("Container1", "MyContainer")
	           .Column3.Visible= .T.
	           .Column3.Container1.Visible=.T.
	        ENDWITH
	        .SHOW()
	        ENDWITH
	
	        *-- GotFocus() and LostFocus() container
	        DEFINE CLASS MyContainer as Container
	          BackColor=RGB(255,0,0)
	          BackStyle=1
	
	          PROCEDURE GotFocus
	            ACTIVATE SCREEN
	            ?" In GotFocus of Column 3"
	          ENDPROC
	
	          PROCEDURE LostFocus
	            ACTIVATE SCREEN
	            ?"In LostFocus of Column 3 "
	          ENDPROC
	
	        ENDDEFINE
	
	     * End ColFocus.prg
	
	2. Run ColFocus.prg.
	
	3. When the Form appears, tab or arrow over to Column 3 of the grid. NOTE: The
	  GotFocus() method of Column 3 does not fire.
	
	4. Move off of Column 3.
	
	  NOTE: The LostFocus() method of Column 3 fires twice.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 5.0a,3.0,3.0b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
