---
layout: page
title: "Q166305: HOWTO: Reconnecting a Visual C++ Project to Source Control"
permalink: /kb/166/Q166305/
---

## Q166305: HOWTO: Reconnecting a Visual C++ Project to Source Control

	Article: Q166305
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbVC kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	From time to time, the connection between a Visual C++ project and its
	associated SourceSafe project is lost or damaged. In this case, you may find it
	necessary to reconnect the existing Visual C++ project to the SourceSafe
	project.
	
	MORE INFORMATION
	================
	
	The reconnect the existing Visual C++ project to the SourceSafe project:
	
	1. Open the Visual C++ project on the local hard drive in Developer Studio.
	
	2. Add the Visual C++ project to source control.
	
	  In Visual C++ 4.x:
	
	  Tools.Source Control.Add to Source Control
	
	  In Visual C++ 5.0:
	
	  Project.Set Active Project and select the project Project.Source Control.Add
	  to Source Control
	
	3. You are prompted to locate the project in SourceSafe. Highlight the
	  SourceSafe project that corresponds to the project on your local drive and
	  delete the project name from the Project field in the "Add to SourceSafe
	  Project" dialog box. Click OK.
	
	4. A dialog box appears asking you whether to reconnect to the existing project.
	  Click Yes.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q180945 HOWTO: Disconnect a Project from Source Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbVC kbVC400 kbVC410 kbVC420 kbVC500 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC400a kbVC420b kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbVC500Search
	Issue type        : kbhowto
	
	=============================================================================
	
