---
layout: page
title: "Q254935: PRB: Visual FoxPro Setup Wizard Does Not Include the Vbame.dll F"
permalink: /kb/254/Q254935/
---

## Q254935: PRB: Visual FoxPro Setup Wizard Does Not Include the Vbame.dll F

	Article: Q254935
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You use the setup wizard to install a Visual FoxPro application on a Hebrew
	version of Microsoft Windows 95, Windows 98, or Windows NT on a computer that
	has never had Visual FoxPro previously installed. When you launch the
	application, the following error occurs:
	
	  "An invalid page fault has occurred in VFP6r.dll..."
	
	CAUSE
	=====
	
	The Visual FoxPro 6.0 Setup Wizard fails to include the required file,
	Vbame.dll, a Middle East support file.
	
	RESOLUTION
	==========
	
	As a workaround to this problem, you can do the following:
	
	1. Copy the Vbame.dll file from the \Vfp98\Distrib.src\System folder to the
	  distribution files folder (that is, the distribution files directory entered
	  at step 1 of the setup wizard).
	
	2. At step 6 of the setup wizard (that is, Change File Settings), ensure that
	  the Vbame.dll file was included and change the Target Dir from AppDir to
	  WinSysDir.
	
	Now when the installation program executes, it installs the Vbame.dll file into
	the Windows System folder.
	
	Additional query words: Localization
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
