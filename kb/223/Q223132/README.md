---
layout: page
title: "Q223132: FIX: Error Loading Repository Add-In in Non-English VB6 Versions"
permalink: /kb/223/Q223132/
---

## Q223132: FIX: Error Loading Repository Add-In in Non-English VB6 Versions

	Article: Q223132
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbIntl kbString kbVBp600bug kbLocalization kbGrpDSVB kbVS600sp3fix kbDSupport k
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the French, Italian, or Spanish versions of Visual Basic 6.0, when adding
	control details to the repository, the following error message occurs:
	
	in French:
	
	  "Ordinals 27000->27012, 27106->27109, 27111->27113 introuvables"
	
	in English:
	
	  "Ordinals 27000->27012, 27106->27109, 27111->27113 not found"
	
	If no controls have been added to the form yet, the Add-in should load without
	error, but if a control is subsequently added to the form, the same error
	occurs.
	
	CAUSE
	=====
	
	In the string localization process, some strings in repvbrc.dll that should not
	have been changed, were localized; specifically, STR 1, 27000->27012,
	27106->27109, 27111->27113. That change produces the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install French Visual Basic 6.0 on a clean French machine.
	
	2. Open the file VBaddin.ini in the Windows directory, and add the following
	  line:
	
	  Repository.vbaddin=0
	
	3. Start Visual Basic 6.0 with a Standard EXE project. Form1 is created by
	  default.
	
	4. Add any control to the form.
	
	5. From the Complements (Add-ins) menu, select Gestionnaire de complements
	  (Add-in manager).
	
	6. Load the Complement Microsoft Repository pour Visual Basic (Repository VB
	  Add-in). The error listed above occurs.
	
	NOTE: If there are any controls on the form, the error listed above occurs when
	the Add-in is loaded. If no controls have been added to the form yet, the Add-in
	should load without error, but if a control is subsequently added to the form,
	the same error will then occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbIntl kbString kbVBp600bug kbLocalization kbGrpDSVB kbVS600sp3fix kbDSupport kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
