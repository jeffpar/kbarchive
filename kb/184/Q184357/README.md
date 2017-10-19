---
layout: page
title: "Q184357: PRB: Visual C++ Opens Project in Wrong VSS Database"
permalink: /kb/184/Q184357/
---

## Q184357: PRB: Visual C++ Opens Project in Wrong VSS Database

	Article: Q184357
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to open a workspace from source control, the wrong database is
	displayed in the browse window.
	
	CAUSE
	=====
	
	When you attempt to open a workspace from source control, Visual C++ opens the
	database referenced by the following:
	
	      HKEY_LOCAL_MACHINE\Software\Microsoft\SourceSafe = Value:    Current
	      Database
	
	RESOLUTION
	==========
	
	Visual C++ can be forced to browse for a different database by using one of the
	two following methods:
	
	- Browsing for the correct database (from within the Visual SourceSafe
	  Explorer) and selecting the "Open this database next time I run Visual
	  SourceSafe" check box. This sets the path listed below to the desired VSS
	  database:
	
	         HKEY_LOCAL_MACHINE\Software\Microsoft\SourceSafe = Value:    Current
	         Database
	
	- Force Visual C++ to prompt the user to choose the correct database. In
	  Developer Studio, from the Tools menu, select Options. Select the Source
	  Control tab and then click the Advanced button. Choose the Integration tab
	  and select the Prompt radio button in the "Choose SourceSafe Database" group.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC500 kbVC32bitSearch kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbVC500Search
	Issue type        : kbprb
	
	=============================================================================
	
