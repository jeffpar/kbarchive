---
layout: page
title: "Q134878: BUG: Error: &quot;An errror occurred reading the index file&quot;"
permalink: /kb/134/Q134878/
---

## Q134878: BUG: Error: &quot;An errror occurred reading the index file&quot;

	Article: Q134878
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 2.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 2.2 
	- Microsoft Visual C++, 32-bit Learning Edition, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing Books Online from the Help menu you receive this error:
	
	  An errror occurred reading the index file.
	
	Note: This article does not apply to Visual C++ 4.0.
	
	CAUSE
	=====
	
	There is an error in the VC20BKS.HDX file.
	
	RESOLUTION
	==========
	
	This error can be safely ignored. The error does not occur if you access Books
	Online from the Visual C++ version 2.0 program group or by pressing the F1 key.
	
	You can work around the problem by adding a tool to your Visual Workbench Tools
	menu. To add a tool follow these steps:
	
	1. On the Tools menu, click Customize.
	
	2. Click the Tools tab.
	
	3. Click the Add button.
	
	4. In the Add Tool dialog box, browse for Contents.exe in the Visual C++ Bin
	  directory, and click OK.
	
	5. In the Menu Text field of Tools dialog box, enter:
	
	  " Books Online " (without the quotation marks)
	
	6. In the Arguments field, enter the following, and be sure to include the
	  quotation marks for these entries:
	
	  " "Visual C++ 2.0" "Books Online" " (without the quotation marks)
	
	7. Click Close to save the settings. A mew menu entry, "Books Online," is now
	  created in the Visual Workbench Tools menu, which can be used instead of
	  accessing it from the Help menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: error 2.20
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC32bitSearch
	Version           : winnt:
	
	=============================================================================
	
