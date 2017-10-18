---
layout: page
title: "Q162159: SAMPLE:TREESCRL Scrolls in a Tree Control During Drag-and-Drop"
permalink: kb/162/Q162159/
---

## Q162159: SAMPLE:TREESCRL Scrolls in a Tree Control During Drag-and-Drop

	Article: Q162159
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbui kbMFC kbTreeView KbUIDesign kbVC kbVC200 kbVC400 kbVC420 kb
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A TreeView control is one capable of displaying items in a tree-like
	hierarchical fashion. The control supports drag-and-drop. When an item is
	dragged to the top or bottom of the control, the control does not automatically
	scroll vertically.
	
	Treescrl.exe shows how to add scrolling functionality to a tree control during
	drag-and-drop.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  TreescrA.exe
	  (http://download.microsoft.com/download/vc42ent/Sample23/1/W9XNT4/EN-US/TreescrA.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	TREESCRL uses the CTreeView view class that encapsulates the functionality of a
	view and a tree control. The sample's drag-and-drop functionality is similar to
	the one demonstrated in CMNCTRLS, a sample shipped with the Visual C++ product.
	When TREESCRL is built and run, an SDI window with a CTreeView comes up. When
	you grab a tree control item (parent or child), and drag it above/below the
	top/bottom of the view window, the tree control starts scrolling
	upward/downward.
	
	The idea behind TREESCRL is to install a timer when a drag-and-drop operation
	starts. In the handler for the WM_TIMER message, it is first determined if
	scrolling is needed. If it is, then the appropriate scroll message is sent to
	the control. When the drag-and-drop operation terminates, the timer is killed.
	The sample shows how to draw the drag image and how to select the drop site
	during the dragging phase.
	
	The tree control can scroll in different modes. During the drag phase, when the
	mouse cursor is close to the top or the bottom border of the view, scrolling is
	slow. The control scrolls at this slow speed when the horizontal distance
	between the mouse and the corresponding view border (top/bottom) is less than
	the width of a horizontal scrollbar. Scrolling speeds up when the mouse is taken
	further away from either border.
	
	SLOWSCROLL_FREQUENCY is a macro symbol in the view's .cpp file. This symbol
	determines the relative speeds of normal and slow scrolling. Normal scrolling
	occurs approximately every 75 milliseconds (the frequency of the timer). In the
	sample, SLOWSCROLL_FREQUENCY is defined to be three (3), which means slow
	scrolling is three times slower than normal scrolling. To change the slow
	scrolling speed, modify this value to a positive integer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbui kbMFC kbTreeView KbUIDesign kbVC kbVC200 kbVC400 kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbinfo
	
	=============================================================================
	
