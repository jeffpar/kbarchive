---
layout: page
title: "Q221083: BUG:Can't Insert CE ActiveX Control on Dialog in Resource Editor"
permalink: /kb/221/Q221083/
---

## Q221083: BUG:Can't Insert CE ActiveX Control on Dialog in Resource Editor

{% raw %}

	Article: Q221083
	Product(s): Microsoft C Compiler
	Version(s): 2.1,5.0
	Operating System(s): 
	Keyword(s): _IK920 kbActiveX kbATL kbCtrl kbCtrlCreate kbMFC kbVC500bug kbVC600bug kbOSWinCEsearch
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 5.0 
	- The Microsoft Active Template Library (ATL) 2.1, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inserting a WCE ActiveX control onto a dialog box in the Resource Editor causes
	the following error:
	
	  The ActiveX control {XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX} is not registered
	  on this computer. Register control and try again.
	
	CAUSE
	=====
	
	The Resource Editor is looking for a desktop (x86) version of the control.
	
	RESOLUTION
	==========
	
	Right-click the dialog box in the Resource Editor and select the option Insert
	WCE ActiveX Control. Select the control and it will be inserted onto the dialog
	box. This resolution still causes the same error message to appear when you open
	the dialog box in the Resource Editor, but the message is harmless and can be
	ignored.
	
	To avoid the error message altogether, you can build a desktop version of the
	control and insert this version instead of the WCE version. You'll need to
	create a Win32 build configuration:
	
	1. From the Build menu, click Configurations.
	
	2. Click Win32 (WCE x86em) Release.
	
	3. Click Add.
	
	4. Select Win32 from the Platform drop-down list.
	
	5. Click OK to create the new configuration.
	
	Select the Win32 Release configuration and rebuild the control. You also need to
	register it by clicking Register Control from the Tools menu. To insert the
	desktop version of the control, just select it from the list of Registered
	ActiveX Controls instead of Registered WCE ActiveX Controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Project menu, click Add To Project, then Components and Controls.
	
	2. Select the control under Registered WCE ActiveX Controls.
	
	3. Select the control in the Controls toolbar.
	
	4. Click the dialog box to insert the control.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q229579 PRB: CE ActiveX Control Is Not in List of Insertable Controls
	
	Additional query words: mfc atl
	
	======================================================================
	Keywords          : _IK920 kbActiveX kbATL kbCtrl kbCtrlCreate kbMFC kbVC500bug kbVC600bug kbOSWinCEsearch kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbWinCETKVCSearch kbWinCESearch
	Version           : :2.1,5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
