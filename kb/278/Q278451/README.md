---
layout: page
title: "Q278451: PRB: Editing Any String Table Item Changes the First Item"
permalink: /kb/278/Q278451/
---

## Q278451: PRB: Editing Any String Table Item Changes the First Item

	Article: Q278451
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbEditor kbide _IK920 kbVC kbVC500 kbVC600 kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs with the Visual C++ Resource Editor. When you try to edit or
	delete any entries in a string table or accelerator table, only the first entry
	in the list is modified.
	
	CAUSE
	=====
	
	A hardware driver is typically responsible for this behavior. For example, the
	Matrox Millennium G400 Dualhead video card can cause this problem if either the
	Center dialog boxes or the MaxVIEW option is selected.
	
	RESOLUTION
	==========
	
	For the Matrox Millennium G400 Dualhead video driver:
	
	1. Locate the Start menu item, Matrox PowerDesk NT.
	
	2. Click Matrox Display Properties. (If you do not see this menu item, search
	  your hard drive for the Mgapanel.cpl file, and then double-click it.)
	
	3. In the Matrox Display Properties dialog box, click the PowerDesk tab.
	
	4. Make sure that both the Center dialog boxes and MaxVIEW check boxes are not
	  selected (are unchecked).
	
	If you are experiencing this problem and you don't have the Matrox Millennium
	G400 Dualhead video card, you can determine whether your particular video driver
	is at fault. Use the Display application in Control Panel to set the display
	driver to a Standard VGA adapter. Alternatively, you can start up in VGA mode on
	Microsoft Windows NT 4.0 or in safe mode on Microsoft Windows 95, Microsoft
	Windows 98, Microsoft Windows Me, and Microsoft Windows 2000. Both of those
	modes use standard video drivers. If you determine that the video driver is at
	fault, obtain an update for your video driver from the video driver
	manufacturer's Web site.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEditor kbide _IK920 kbVC kbVC500 kbVC600 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
