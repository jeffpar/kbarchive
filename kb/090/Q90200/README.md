---
layout: page
title: "Q90200: Connect Network Drive Dialog Box Doesn't List All Shares"
permalink: /kb/090/Q90200/
---

## Q90200: Connect Network Drive Dialog Box Doesn't List All Shares

{% raw %}

	Article: Q90200
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows for Workgroups, your computer name does not appear in the Connect
	Network Drive dialog box if you set up Windows for Workgroups using the /N
	switch (SETUP /N). This happens even if you are running in enhanced mode and can
	successfully share directories.
	
	CAUSE
	=====
	
	Computer names do not appear in the Show Shared Directories list because they
	are running real mode redirectors.
	
	WORKAROUND
	==========
	
	In the Path box, type the computer name in UNC format and choose the OK button:
	
	  \\ComputerName
	
	The shares now appear on the list.
	
	KBCategory: kbnetwork kbdisplay kbprb kbsetup
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 missing incomplete listed display
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
