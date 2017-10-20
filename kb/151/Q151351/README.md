---
layout: page
title: "Q151351: FP: Web Permissions Must Be Unique to Be Modified"
permalink: /kb/151/Q151351/
---

## Q151351: FP: Web Permissions Must Be Unique to Be Modified

{% raw %}

	Article: Q151351
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205254.
	
	For a Microsoft FrontPage 98 version of this article, see Q194670.
	
	SUMMARY
	=======
	
	To modify permissions for a Web, the "Use unique permissions for this Web"
	option must be selected on the Settings tab of the Web Permissions dialog box
	(on the Tools menu, click Permissions).
	
	When "Use same permissions as root Web" is selected on the Settings tab, Add and
	Remove are unavailable (dimmed) on all tabs.
	
	MORE INFORMATION
	================
	
	When new Webs are created using FrontPage Explorer, their default permissions
	are the same as the root Web. This means that all users who have rights to the
	root Web have the same rights on the newly created Web. Therefore, Add and
	Remove are unavailable, because the root permissions cannot be changed within a
	new Web.
	
	Unique permissions can be set so that a new Web will not inherit its permissions
	settings from the root Web. This allows a Web to have unique Administrators,
	Authors, and End Users, even if you make changes to the permissions of the root
	Web at a later time.
	
	To assign a unique permissions to a Web, follow these steps:
	
	1. In FrontPage Explorer, click Permissions on the Tools menu.
	
	2. Click the Settings tab, and click to select the "Use Unique Permissions For
	  This Web" option.
	
	3. Click Apply for the changes to take effect.
	
	Once you have done this, Add and Remove will be available and specific Web
	settings can be set.
	
	For more information about authorizing Web authors, click Microsoft FrontPage
	Help Topics on the Help menu, click the Index tab, and type:
	
	  "Authors, authorizing" (without the quotation marks)
	
	Double-click the selected text to go to the "To authorize a web author" topic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
