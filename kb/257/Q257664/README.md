---
layout: page
title: "Q257664: FIX: Creating an Object in a VB DLL on a Non-UI Thread"
permalink: kb/257/Q257664/
---

## Q257664: FIX: Creating an Object in a VB DLL on a Non-UI Thread

	Article: Q257664
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbThread kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Standard EXE project creates a new thread (irrespective of the language
	in which the thread is created), and that thread creates an object in a Visual
	Basic ActiveX DLL, then the application is no longer able to show a non-modal
	form.
	
	CAUSE
	=====
	
	The problem occurs due to a flag underlying the App.NonModalAllowed object that
	is set to be global instead of per-thread. It is set for the entire process to
	the value of the last loaded thread. Because the new thread has no message
	filter and no component manager, the flag is cleared and it removes the EXE's
	modeless capabilities.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActiveX kbThread kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
