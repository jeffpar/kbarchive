---
layout: page
title: "Q190309: BUG: Treeview Display Corrupted with DragMode=Automatic"
permalink: /kb/190/Q190309/
---

## Q190309: BUG: Treeview Display Corrupted with DragMode=Automatic

{% raw %}

	Article: Q190309
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the DragMode property of a Treeview control on a form is set to "1 -
	Automatic", the Treeview control displays incorrectly at run-time.
	
	RESOLUTION
	==========
	
	Use the OLEDragMode property of the Treeview control in place of the DragMode
	property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following sample code:
	
	Sample Code
	-----------
	
	     PUBLIC ox
	     ox=NewObject("test")
	     ox.Show
	
	     DEFINE CLASS test AS form
	
	        Caption = "Form1"
	        Name = "Form1"
	
	        ADD OBJECT olecontrol1 AS olecontrol WITH ;
	           OleClass = "MSComCtlLib.TreeCtrl.2", ;
	           DragMode = 1, ;
	           Top = 24, ;
	           Left = 36, ;
	           Height = 180, ;
	           Width = 276, ;
	           Name = "Olecontrol1"
	
	        PROCEDURE olecontrol1.Init
	        this.nodes.add(,,"r","Test")
	     ENDPROC
	
	     ENDDEFINE
	
	The Test node does not display in the Treeview, and the Treeview border does not
	display correctly.
	
	Additional query words: kbbug kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
