---
layout: page
title: "Q161827: PRB: &quot;Object Server Not Correctly Registered&quot; Error in VB4-32"
permalink: /kb/161/Q161827/
---

## Q161827: PRB: &quot;Object Server Not Correctly Registered&quot; Error in VB4-32

	Article: Q161827
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400 kbVBp500 kbGrpDSVB
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose Custom Controls from the Tools menu in Microsoft Visual Basic
	4.0, the following error message appears:
	
	  Object Server not correctly registered
	
	The problem is caused by the registration process of other components within the
	system registry. This article explains one cause of the problem.
	
	CAUSE
	=====
	
	If you install a custom control developed with the Control Creation Edition of
	Visual Basic 5.0, an erroneous CLSID key is added to your registry that could be
	causing this error message.
	
	RESOLUTION
	==========
	
	In addition to the bona fide registry key for the control developed with the
	Control Creation Edition of Visual Basic 5.0, the following erroneous extra
	registry key is created when you install a control developed with the Control
	Creation Edition of Visual Basic 5.0:
	
	  HKEY_CLASSES_ROOT
	                   \CLSID
	                         \{0DE86A52-2BAA-11CF-A229-00AA003D7352}
	
	This key causes a blank item to appear in the list of ActiveX controls when it is
	displayed in Access95 and Visual Basic 4.0. The key also causes the "object
	server not correctly registered" error message to appear when you open the
	Custom Controls dialog box in the Control Creation Edition of Visual Basic 5.0.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	If you are familiar with editing the Registry, you can delete the key manually
	with the RegEdit Utility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	  Q196296 FILE: Objsrv.exe Contains Fix for "Object Server Not.." Error
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVBA500Search kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
