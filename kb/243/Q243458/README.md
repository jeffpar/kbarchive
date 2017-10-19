---
layout: page
title: "Q243458: PRB: Err Msg: Fatal Error LNK1104 Cannot Open File &quot;Nafxcwd.lib&quot;"
permalink: /kb/243/Q243458/
---

## Q243458: PRB: Err Msg: Fatal Error LNK1104 Cannot Open File &quot;Nafxcwd.lib&quot;

	Article: Q243458
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbLinker kbMFC kbSEdition kbDSupport kbgrpdsvc
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ Standard Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a program that uses the Visual C++ Microsoft Foundation Classes
	(MFC), the following error occurs:
	
	  LINK : fatal error LNK1104: cannot open file "nafxcwd.lib"
	
	CAUSE
	=====
	
	This can happen if the project settings are set to Use MFC in a Static Library.
	Microsoft Visual C++ 6.0 Standard Edition does not support statically linking
	with the MFC libraries.
	
	RESOLUTION
	==========
	
	To resolve this problem, dynamically link your application to the MFC libraries.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To change your MFC project setting to link dynamically to the MFC libraries,
	perform the following steps:
	
	1. Open your MFC project.
	
	2. From the Project menu, click Settings.
	
	3. In the Settings For combo box, select All Configurations.
	
	4. Click the General tab. If it is not visible, use the tab scroll buttons to
	  scroll to the left.
	
	5. In the Microsoft Foundation Classes combo box, select Use MFC in a Shared
	  DLL.
	
	6. Click OK to save the changes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLinker kbMFC kbSEdition kbDSupport kbgrpdsvc 
	Technology        : kbVCsearch kbAudDeveloper kbVC600
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
