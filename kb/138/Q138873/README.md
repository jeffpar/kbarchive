---
layout: page
title: "Q138873: BUG: Window Colors Cannot Be Customized from Developer Studio"
permalink: kb/138/Q138873/
---

## Q138873: BUG: Window Colors Cannot Be Customized from Developer Studio

	Article: Q138873
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbui kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbN
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Not all the window colors change when you customize the window foreground and
	background colors in Visual C++ Developer Studio. The colors for the Project
	Workspace window and the Resource Editor window remain unchanged.
	
	RESOLUTION
	==========
	
	If you need to change the color for the Project Workspace window and the
	Resource Editor window, you need to do it from the operating system's control
	panel:
	
	- Under Windows 95, Windows 98, Windows Millennium Edition (Me), Windows NT
	  4.0, or Windows 2000, click My Computer. Then click Control Panel, and click
	  Display, and click Appearance.
	
	  -or-
	
	  You can also right-click the Desktop window, and then click Properties to get
	  the Display Properties dialog box. Then click the Appearance tab. In the Item
	  box, select Window. Then choose the foreground or background color. This will
	  affect every window in your system.
	
	- Under Windows NT 3.51, click Control Panel, and then click Color. Click Color
	  Palette, and then select Window Background or Window Text under Screen
	  Element. Then choose the color. This will affect every window in your system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the Developer's Studio Tools menu, click Options to bring up the Options
	  Dialog box. The Format tab holds the settings for the windows and text in
	  Developer's Studio.
	
	2. Select the All Windows category, and change the foreground or background
	  color.
	
	3. Click OK, and note that all windows except the Workspace window change color.
	  The color for the Resource Editor window also remains unchanged.
	
	4. In the Options dialog box, click Reset All to restore all of the original
	  settings.
	
	5. In the Format settings, from the category list, select Workspace Window.
	  Notice that the buttons to change the colors for background and foreground
	  are disabled (grayed out) and can't be changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
