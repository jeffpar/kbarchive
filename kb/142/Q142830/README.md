---
layout: page
title: "Q142830: BUG: Gauge OCX Has Problems with 256-Color Bitmaps"
permalink: kb/142/Q142830/
---

## Q142830: BUG: Gauge OCX Has Problems with 256-Color Bitmaps

	Article: Q142830
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although both the 16- and 32-bit versions of the Gauge OCX allow you to specify
	a 256-color bitmap for the Picture property, in many cases this bitmap is not
	displayed correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of the article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem also occurs when running a video driver with a color depth of more
	than 256 colors.
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or if it is already running, choose New Project from the
	  File menu.
	
	2. If the Gauge OCX is not in the Toolbox, right click on the Toolbox and select
	  'Custom Controls' from the pop-up menu. In the Custom Controls dialog box,
	  double click on the entry labeled 'MicroHelp Gauge Control' and click OK to
	  add the Gauge control.
	
	3. Click and drag a new Gauge control onto the form.
	
	4. Double-click the gauge's Picture property and set it to a 256 color bitmap.
	  With Windows 3.x or Windows NT, bitmaps called 256color.bmp or Winnt256.bmp
	  exist in the Windows directory. Windows 98 contains Setup.bmp in the Windows
	  directory.
	
	  No corresponding 256 color bitmap comes with Windows 95; however, many bitmaps
	  of this nature are included in Microsoft Plus! for Windows 95 or Windows 98
	  as well as with different third-party software programs. In some cases
	  changing the Picture property is all it takes to replicate the problem. The
	  bitmap will not display correctly on the form.
	
	  If the bitmap displays correctly initially, running the program and switching
	  between different applications and the desktop will demonstrate the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
