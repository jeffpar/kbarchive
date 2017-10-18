---
layout: page
title: "Q163060: ODE97: Uninstalling ODE Tools Breaks 32-bit Visual Basic Pro 4.0"
permalink: kb/163/Q163060/
---

## Q163060: ODE97: Uninstalling ODE Tools Breaks 32-bit Visual Basic Pro 4.0

	Article: Q163060
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	If you uninstall (remove) Microsoft Office 97 Developer Edition (ODE) from a
	computer that has Microsoft 32-bit Visual Basic Professional Edition, version
	4.0 installed, you may receive the following error messages the next time that
	you start Visual Basic:
	
	  'comdlg32.ocx' could not be loaded -- Continue Loading Project?
	  'richtx32.ocx' could not be loaded -- Continue Loading Project?
	  'comctl32.ocx' could not be loaded -- Continue Loading Project?
	  'dblist32.ocx' could not be loaded -- Continue Loading Project?
	
	CAUSE
	=====
	
	This problem occurs when you perform the following events in order on your
	computer:
	
	1. Install Microsoft Office 97 Developer Edition.
	
	2. Install Microsoft 32-bit Visual Basic Professional Edition, version 4.0.
	
	3. Uninstall Microsoft Office 97 Developer Edition.
	
	The Setup program for Microsoft Visual Basic version 4.0 does not register its
	dependency on the ActiveX control files that both applications share. When you
	uninstall the ODE Tools, there is no indication to the ODE Tools Setup program
	that another application is using the ActiveX control files, so Setup removes
	them.
	
	RESOLUTION
	==========
	
	You must uninstall Microsoft 32-bit Visual Basic Professional Edition, version
	4.0, and then reinstall it.
	
	1. Start the Setup program for Microsoft Visual Basic.
	
	2. When the installation maintenance screen appears, click Remove All. Confirm
	  that you want to remove the application.
	
	  NOTE: If you just click the Reinstall button to reinstall Visual Basic, you
	  will receive this error message before Setup is finished, and Setup will
	  fail:
	
	  VBCustom_Controls_Actions_Reg_Comdlg was unable to register itself in the
	  system registry.
	
	3. Run Setup to reinstall Microsoft 32-bit Visual Basic Professional Edition,
	  version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Setup for Microsoft Office 97 Developer Edition Tools (ODE Tools), and
	  perform a Complete installation.
	
	2. Run Setup for Microsoft 32-bit Visual Basic Professional Edition, version
	  4.0, and perform a Complete installation.
	
	3. Run the ODE Tools Setup program again. When the installation maintenance
	  screen appears, click Remove All. Confirm that you want to remove Microsoft
	  ODE Tools.
	
	4. After ODE Tools is removed from your computer, start Visual Basic. Note that
	  you receive the error messages.
	
	Additional query words: VB removing comdlg32 ocx richtx32 ocx comctl32 ocx dblist32 ocx
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVBSearch kbOfficeSearch kbAudDeveloper kbOffice97Search kbVB400Search kbOffice97 kbVB400 kbOffice97DevSearch
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
