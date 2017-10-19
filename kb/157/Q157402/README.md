---
layout: page
title: "Q157402: HOWTO: Use Config.fpw Files with OLE Automation Servers"
permalink: /kb/157/Q157402/
---

## Q157402: HOWTO: Use Config.fpw Files with OLE Automation Servers

	Article: Q157402
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reference specific configuration variables when
	Visual FoxPro is set up as an OLE Automation Server. When you define an OLE
	server, you can either reference the Visual FoxPro Application object or create
	custom OLE classes. These two types of OLE objects require different methods to
	read environment settings.
	
	MORE INFORMATION
	================
	
	Visual FoxPro exposes FoxPro as an OLE server. The Application object provides
	the top level of the hierarchy. For example, in an OLE client application, you
	can run the following command to create an OLE object:
	
	     CREATEOBJECT("VisualFoxPro.Application")
	
	If you are referencing the VisualFoxPro.Application object, the normal
	configuration file conventions are adopted since an instance of Vfp.exe is
	launched (assuming you use CreateObject() and not GetObject()). This means it
	references the Config.fpw file in the default directory, or you can add to a
	registry key the -C startup switch that specifies the path to the Config.fpw
	file. The registry key to modify follows:
	
	  HKEY_CLASSES_ROOT\CLSID\{GUID}\LocalServer32
	
	The GUID is different for every install of Visual FoxPro. The value of this key
	for Visual FoxPro 5.0 is:
	
	  C:\VFP5\VFP.EXE /automation -CC:\CONFIG.FPW
	
	For Visual FoxPro 6.0, the value of this key is:
	
	  C:\Program Files\Microsoft Visual Studio\Vfp98\vfp6.exe /automation -
	  CC:\CONFIG.FPW
	
	When you create your own custom OLE Automation servers, the OLE classes you
	create are delivered in either a .dll or an .exe file. Before you build the .exe
	or .dll, add the Config.fpw file into the project and make sure it is marked as
	included. At run time, the Config.fpw that resides inside of the .exe or .dll
	file is used.
	
	To specify a different Config.fpw file once an OLE Automation Server is
	distributed, you can use the same procedure as above and modify the registry key
	for the OLE server.
	
	NOTE: If you have included the Config.fpw file in the project, the -C switch is
	ignored.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
