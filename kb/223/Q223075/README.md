---
layout: page
title: "Q223075: FIX:GDI Resource Problem w/Many Forms and Intrinsic Data Control"
permalink: /kb/223/Q223075/
---

## Q223075: FIX:GDI Resource Problem w/Many Forms and Intrinsic Data Control

	Article: Q223075
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbDAOsearch kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpD
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some users have found that projects containing large numbers of forms using the
	intrinsic (DAO) data control encounter GDI resource problems when running in
	Visual Basic 6.0. Projects that used to run successfully in Visual Basic 5.0 may
	run out of memory or generate a General Protection Fault in Visual Basic 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbDAOsearch kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
