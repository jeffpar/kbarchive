---
layout: page
title: "Q89880: Toolbar Buttons Extend Beyond the Toolbar in File Manager"
permalink: /kb/089/Q89880/
---

## Q89880: Toolbar Buttons Extend Beyond the Toolbar in File Manager

{% raw %}

	Article: Q89880
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you customize the toolbar in File Manager, some buttons may extend to the
	right beyond the edge of the File Manager window and become inaccessible.
	
	CAUSE
	=====
	
	This most often occurs if you use Windows for Workgroups at lower video
	resolutions. At lower resolutions you may not be able to use all of the icons
	available for the toolbar because they extend into an inaccessible area of File
	Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and 3.11 QWIII.DRV. We are researching this problem and will post new
	information here as it becomes available.
	
	RESOLUTION
	==========
	
	There is no workaround for this problem. You can avoid the problem by maximizing
	File Manager to determine the maximum number of toolbar icons that you can have.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install the VGA driver that is provided with Windows for Workgroups.
	
	2. From the Main group, start File Manager.
	
	3. From the Options menu, choose Customize Toolbar.
	
	4. Choose the first button in the Available Buttons list, then choose the Add
	  button.
	
	5. Continue with step 4 until the Available Buttons list is empty, then choose
	  the Close button.
	
	6. Maximize File Manager and note that all the toolbar icons cannot be accessed.
	
	KBCategory: kbdisplay kbbuglist
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
