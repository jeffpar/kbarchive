---
layout: page
title: "Q186681: BUG: Selecting Item in DBCombo Locks Up Form"
permalink: /kb/186/Q186681/
---

## Q186681: BUG: Selecting Item in DBCombo Locks Up Form

{% raw %}

	Article: Q186681
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,97,97sp1,97sp2,97sp3
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio versions 97, 97sp1, 97sp2, 97sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When selecting an item in the drop-down box of a DBCombo control with a mouse
	click, the form no longer responds to the mouse.
	
	CAUSE
	=====
	
	This is a bug in the Visual Basic 5.0 version of DBLIST32.OCX. The problem only
	occurs if DoEvents is used within the DBCombo Click event or a procedure called
	by the Click event.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Remove the DoEvents statement from the Click event.
	
	  -or-
	
	- Revert to the Visual Basic 4.0 version of DBLIST32.OCX.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The Visual Basic 4.0 version of the DBCombo control does not have this problem.
	It is possible that the installation of the Visual Basic 5.0 version of
	DBLIST32.OCX could cause an application built with Visual Basic 4.0 to display
	this problem.
	
	Additional query words: kbDSupport kbdss kbVBp400 kbVBp500 kbCtrl kbVBp500bug kbVS97sp1bug kbVS97sp2bug kbVS97sp3bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVS97 kbVS97SP1 kbVS97SP2 kbVS97SP3 kbVS97Search
	Version           : :5.0,97,97sp1,97sp2,97sp3
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
