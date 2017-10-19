---
layout: page
title: "Q181281: BUG: ListBox Text Property Not Functional"
permalink: /kb/181/Q181281/
---

## Q181281: BUG: ListBox Text Property Not Functional

	Article: Q181281
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Text property of a ListBox always returns an empty string.
	
	RESOLUTION
	==========
	
	Use the List and ListIndex properties to return the text of the currently
	selected item. For example, use:
	
	  Dim sMyString
	      sMyString = List1.List(List1.ListIndex)
	
	instead of:
	
	  Dim sMyString
	      sMyString = List1.Text
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: vbce wince vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
