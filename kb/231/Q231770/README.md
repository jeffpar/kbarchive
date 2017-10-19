---
layout: page
title: "Q231770: BUG: Windows CE Wizards Not Available After Install"
permalink: /kb/231/Q231770/
---

## Q231770: BUG: Windows CE Wizards Not Available After Install

	Article: Q231770
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbwizard kbVC600bug kbOSWinCEsearch kbDSupport kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After successfully installing the Windows CE Toolkit for Visual C++ 6.0, the
	AppWizards for generating Windows CE projects are not listed in the New Project
	dialog box.
	
	CAUSE
	=====
	
	The Windows CE Toolkit for Visual C++ 6.0 setup may incorrectly install files if
	the Visual Studio \COMMON directory and the Visual C++ \VC98 directory are
	located under different parent directories.
	
	During the installation of any Visual Studio product, the user will be required
	to specify the location where Visual Studio common files are to be installed.
	During the Visual C++ install, the user will then be additionally required to
	specify the location where Visual C++-specific files are to be installed. If the
	user specifies a different parent directory for \COMMON and \VC98, the product
	may not install correctly. The symptom described above is a result of the
	Windows CE AppWizard files (*.awx) being installed in an incorrect directory.
	
	In a default installation, the files would be stored in the following location:
	
	  <System-Drive>:\Program Files\Microsoft Visual
	  Studio\Common\MSDev98\Bin\IDE
	
	RESOLUTION
	==========
	
	Workaround #1:
	
	Uninstall and re-install Visual C++ to reside in the same parent directory as the
	Visual Studio Common directory. This is the preferred solution.
	
	Workaround #2:
	
	Locate the directory that contains the following files in the Visual Studio
	directory structure:
	
	  cedllwz.awx
	  ceexewz.awx
	  celibwz.awx
	  wceapwz.awx
	  wceatl.awx
	  wcedlwz.awx
	  wcectl.awx
	
	If the setup program executed correctly, these files will be located in the
	following directory:
	
	  <drive>:<Visual Studio-root>\Common\MSDev98\Bin\IDE
	
	If the files are not located in this directory, copy the entire contents of the
	incorrect directory to this correct location.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbwizard kbVC600bug kbOSWinCEsearch kbDSupport kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
