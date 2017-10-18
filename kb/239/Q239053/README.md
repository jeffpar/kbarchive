---
layout: page
title: "Q239053: How to Enable Directory Browsing on Virtual Directories"
permalink: kb/239/Q239053/
---

## Q239053: How to Enable Directory Browsing on Virtual Directories

	Article: Q239053
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Personal Web Manager, directory browsing can only be enabled or
	disabled at a global level. In other words, all content, whether in the root
	directory or a virtual directory, will either have directory browsing enabled or
	disabled as a whole.
	
	WORKAROUND
	==========
	
	To enable or disable directory browsing for a single virtual directory, perform
	the following steps for each virtual directory that you want to change:
	
	1. In Windows Explorer, browse to the directory that you want to change.
	
	2. Right-click the directory and then click Properties.
	
	3. Click the Web Sharing tab.
	
	4. Click Share this folder.
	
	5. Make sure that the name of the virtual directory is the alias you want to use
	  when accessing it from a browser (you may want the name to be different).
	
	6. Click to highlight the name of the alias you created, and then click Edit
	  Properties.
	
	7. To enable directory browsing, make sure the check box is selected (checked).
	  To disable directory browsing, make sure the check box is unchecked.
	
	8. Click OK when you have finished making your choices, and then click OK again
	  to return to Windows Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	Additional query words: iis pwm iis5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
