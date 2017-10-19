---
layout: page
title: "Q223008: FP98: FrontPage Hit Counter Displays a Red X in the Browser"
permalink: /kb/223/Q223008/
---

## Q223008: FP98: FrontPage Hit Counter Displays a Red X in the Browser

	Article: Q223008
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to a page containing a FrontPage hit counter, the counter is
	displayed as a red X.
	
	CAUSE
	=====
	
	This problem can be caused by one of the following:
	
	- The Hit Counter Web component or files are damaged.
	
	  -or-
	
	- The permissions for the Web are incorrect.
	
	  -or-
	
	- The FrontPage Server Extensions are not installed.
	
	  -or-
	
	- The FrontPage Server Extensions are configured incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the method appropriate for your situation.
	
	Method 1: Delete and Reinsert the Hit Counter Web Component
	-----------------------------------------------------------
	
	For more information about inserting a hit counter, click "Contents and Index" on
	the Help menu, click the Index tab in FrontPage Help, type the following text
	
	  hit counters
	
	and then double-click the selected text to go to the "To insert a hit counter"
	topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Method 2: Change Web Permissions:
	
	1. Open the Web containing the hit counter by using the HTTP:// URL.
	
	2. On the Tools menu, click Permissions, and then click the Settings tab.
	
	3. Select the "Use unique permissions for this Web" option and click Apply.
	
	4. Click the Users tab. If the Iusr_machinename account is present, remove it.
	
	5. Click the Groups tab. If the Interactive, Network, and Everyone groups are
	  listed, remove them.
	
	6. Click Apply.
	
	7. Click the Users tab. Select the "Everyone has browse access" option and click
	  Apply.
	
	8. Click OK to close the Permissions dialog box.
	
	9. In your browser, browse to the page containing the Hit Counter and refresh
	  the page, if needed.
	
	This should reset the permissions for the hit counter and it should now increment
	correctly.
	
	Method 3: Install FrontPage Server Extensions:
	
	If the FrontPage Server Extensions are not installed, click the Install button in
	the FrontPage Server Administrator.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q194051 FP98: List of FrontPage Components That Require Server Extensions
	
	  Q194134 FP98: Using FrontPage Without the Server Extensions
	
	  Q194102 FP98: How to Install FrontPage Server Extensions for MSPWS
	
	  Q194135 FP98: How to Install FrontPage Server Extensions for IIS 3.0
	
	Method 4: Upgrade the FrontPage Server Extensions:
	
	If the Server Extensions are installed, in the FrontPage Server Administrator,
	select the virtual server and click Upgrade.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q194425 FP98: How to Upgrade the FrontPage Server Extensions
	
	If you are using a custom GIF file make sure the file is present in the path
	specified and that the file is not corrupt.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q181662 FP98: Hit Counter Doesn't Advance Past 1 on IIS
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
