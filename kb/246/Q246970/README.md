---
layout: page
title: "Q246970: INFO: Customizing the Visual C++ IDE Programmatically"
permalink: /kb/246/Q246970/
---

## Q246970: INFO: Customizing the Visual C++ IDE Programmatically

	Article: Q246970
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbide kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are no methods available for customizing or modifying the Visual C++
	Integrated Development Environment (IDE) programmatically. The Developer Studio
	object model provides methods to automate tasks in Visual C++, but it doesn't
	provide methods to modify the Visual C++ IDE. So, you cannot add menu commands,
	toolbars, and so forth to the Visual C++ IDE programmatically.
	
	An add-in created for Visual C++ using either Visual C++ or Microsoft Visual
	Basic can create and display a toolbar with toolbar buttons in the Visual C++
	IDE using the Application.AddCommandBarButton method. This is the only method
	that the Visual C++ object model provides for displaying a toolbar control
	within the IDE programmatically. For further information on add-ins, see the
	following Microsoft Web pages:
	
	  AddCommandBarButton method
	  (http://msdn.microsoft.com/isapi/msdnlib2.idc?theURL=/library/devprods/vs6/visualc/vcug/_asug_addcommandbarbutton_method.htm)
	
	  Home Page: Add-ins for the Visual C++ Developer Studio
	  (http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/devprods/vs6/visualc/vcug/_asug_home_page.3a_.developer_studio_add_ins.htm)
	
	
	REFERENCES
	==========
	
	For more information on the Developer Studio object model, see the following
	topics in the MSDN Online library:
	
	  Home Page: Developer Studio Objects
	  (http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/devprods/vs6/visualc/vcug/_asug_home_page.3a_.developer_studio_objects.htm)
	
	  Home Page: Customizing Visual C++
	  (http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/devprods/vs6/visualc/vcug/_asug_home_page.3a_.customizing_developer_studio.htm)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbide kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
