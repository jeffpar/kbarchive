---
layout: page
title: "Q148229: How to Get the Full Path from a List Box"
permalink: /kb/148/Q148229/
---

## Q148229: How to Get the Full Path from a List Box

{% raw %}

	Article: Q148229
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ListBox control can display directories and file names from physical drives
	if the RowSourceType property is set to Files. The value property of the list
	box returns only the currently selected file or directory but not the full path.
	This article shows by example how to return the full path from a list box.
	
	MORE INFORMATION
	================
	
	The following sample code creates a form that contains a list box and a label
	that display the entire path to the selected file.
	
	Sample Code
	-----------
	
	  **** Start of ListPath Program
	
	  frmListPath = CREATEOBJECT("ListPath")
	  frmListPath.Show
	  READ EVENTS
	
	  DEFINE CLASS ListPath AS Form
	       AutoCenter=.T.
	       Width = 600
	       DoCreate = .T.
	       Caption = "ListPath"
	       Name = "Form1"
	
	       ADD OBJECT List1 AS ListBox WITH ;
	               RowSourceType = 7, ;
	               Height = 193, ;
	               Left = 24, ;
	               Top = 24, ;
	               Width = 169, ;
	               Name = "List1"
	
	       ADD OBJECT Label1 AS Label WITH ;
	               AutoSize = .T., ;
	               Caption = "", ;
	               Height = 18, ;
	               Left = 216, ;
	               Top = 24, ;
	               Width = 0, ;
	               Name = "Label1"
	
	       PROCEDURE List1.InteractiveChange
	               ThisForm.Label1.Caption = This.List(2)+This.Value
	       ENDPROC
	
	       PROCEDURE list1.click
	              ThisForm.Label1.Caption = This.List(2)+This.Value
	       ENDPROC
	  ENDDEFINE
	  ******End of Program
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
