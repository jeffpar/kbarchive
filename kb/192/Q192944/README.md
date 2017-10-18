---
layout: page
title: "Q192944: PRB: &quot;Class Not Registered&quot; Error on ImgEdit Property Page Show"
permalink: kb/192/Q192944/
---

## Q192944: PRB: &quot;Class Not Registered&quot; Error on ImgEdit Property Page Show

	Article: Q192944
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbRegistry kbVBp kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Windows 98 and Visual Basic 5.0 SP3, attempting to bring up the custom
	property page for the Kodak Imaging Controls results in the following error:
	
	  "Class not registered: Looking for object with CLSID
	  0BE35201-8F91-11CE-9DE3-00AA004BB851".
	
	CAUSE
	=====
	
	This CLSID corresponds to the stock "Color Property Page" found in MFC42.DLL.
	The DLL that contains this property page has not been registered correctly.
	
	RESOLUTION
	==========
	
	Using REGSVR32.EXE as follows to unregister and then re-register MFC42.DLL will
	place the correct entries into the system registry and allow the property page
	for ImgEdit, which makes use of the stock Color Property Page, to be displayed:
	
	Unregister MFC42.DLL as follows:
	
	     regsvr32.exe -u MFC42.DLL
	
	Re-register MFC42.DLL as follows:
	
	     regsvr32.exe MFC42.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This is a problem for any Kodak Imaging Control that makes use of the stock
	Color Property Page. These are:
	
	  ImgThumbnail
	  ImgAnnTool
	  ImgEdit
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a freshly-configured machine with Windows 98 and Visual Basic 5.0 SP3,
	  create a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu to show the Components Dialog.
	
	3. Check "Kodak Image Edit Control" and click OK.
	
	4. Place an instance of the Image Edit control on Form1.
	
	5. Alternate-click and select "Properties." If MFC42.DLL is not properly
	  registered, you see the following message dialog box:
	
	  "Class not registered: Looking for object with CLSID
	  0BE35201-8F91-11CE-9DE3-00AA004BB851".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbRegistry kbVBp kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
