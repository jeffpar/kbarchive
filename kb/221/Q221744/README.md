---
layout: page
title: "Q221744: FIX: C0000005 Fatal Error During Build w/ Invalid Preprocessors"
permalink: /kb/221/Q221744/
---

## Q221744: FIX: C0000005 Fatal Error During Build w/ Invalid Preprocessors

{% raw %}

	Article: Q221744
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbProjManager kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building a project that contains an invalid preprocessor directive causes an
	error. Depending on the version of Visual FoxPro being used, one of the
	following error messages appears:
	
	Visual FoxPro 3.x for Windows displays a message box with the following message:
	
	  Internal Consistency Error
	
	Visual FoxPro 3.0b for Macintosh displays a message box with the following
	message:
	
	  The application "Microsoft Visual FoxPro" has unexpectedly quit, because an
	  error of type 2 occurred.
	
	Depending on the version of Windows, Visual FoxPro 5.x and Visual FoxPro 6.0
	display one of the following messages:
	
	Under Windows 9x:
	
	  This program has performed an illegal operation and will be shut down.
	
	Under Windows NT 4.0:
	
	  An application error has occurred and an application errorlog is being
	  generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior occurs when a preprocessor directive references an object that is
	read-only.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Add a new main prg using the following code:
	
	  #UNDEF _DEBUG
	  #IF Application.ActiveProject.Debug
	     #DEFINE _DEBUG
	  #ENDIF
	
	3. Build an application from the project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbProjManager kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
