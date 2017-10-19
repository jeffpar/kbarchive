---
layout: page
title: "Q190980: FIX: Error Using UsesTransaction for MTSTransactionMode"
permalink: /kb/190/Q190980/
---

## Q190980: FIX: Error Using UsesTransaction for MTSTransactionMode

	Article: Q190980
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbide kbOSWinNT400fix kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an ActiveX DLL application where a procedure has the
	MTSTransactionMode property set to UsesTransaction, the following error occurs
	the first time the application is run:
	
	  You have set the MTSTransactionMode property for one or more Classes in your
	  project(s), but Microsoft Transaction Server is not installed or is the wrong
	  version. This feature requires Windows NT 4.0 with Service Pack 4 or later.
	  MTS functionality will be disabled. Do you want to run anyway?
	
	Any subsequent runnings of the application do not generate the error.
	
	RESOLUTION
	==========
	
	This error occurs when Windows NT SP4 or later has not been installed, or when
	Windows NT Option Pack 4.0 was installed after the installation of Windows NT
	SP4 or later. To resolve this problem you should reapply Windows NT SP4 or
	later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This problem has been resolved in Windows NT SP4.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Microsoft Visual Basic, creating a new ActiveX DLL project. Class1 is
	  created by default.
	
	2. From the Tools menu, click Add Procedure.
	
	3. In the Name box, type "MyProcedure" (without the quotation marks) and click
	  OK.
	
	4. In the Properties window, in the MTSTransactionMode list, click
	  UsesTransaction.
	
	5. From the File menu, click Make Project1.dll.
	
	6. From the Project menu, click Project1 Properties, and then click the
	  Component tab.
	
	7. In the Version Compatibility section, click Binary Compatibility, and then
	  click OK.
	
	8. Press the F5 key to run the application.
	
	  NOTE: Click OK if the Project1 Properties dialog box is displayed with the
	  Debugging tab visible.
	
	9. The error above will appear.
	
	  NOTE: Click Cancel to return to the Visual Basic IDE.
	
	10. Press the F5 key again to run the application. The error message is not
	  displayed a second time and allows for the application to be run.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbide kbOSWinNT400fix kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
