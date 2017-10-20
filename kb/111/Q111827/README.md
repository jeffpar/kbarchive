---
layout: page
title: "Q111827: Using At Work PC Fax with Other Communications Software"
permalink: /kb/111/Q111827/
---

## Q111827: Using At Work PC Fax with Other Communications Software

{% raw %}

	Article: Q111827
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you start Microsoft Mail with Microsoft At Work PC Fax installed, you may
	be unable to use other communications programs. By default, At Work PC Fax is
	set to Auto Answer. This means that At Work PC Fax takes control of the serial
	port so that other communications programs are unable to use it.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following:
	
	- Choose the Exit And Sign Out command in Microsoft Mail.
	
	  -or-
	
	- Turn off At Work PC Fax with one of the following methods:
	
	  Method 1
	
	  1. In Microsoft Mail, choose Mode from the Fax menu.
	
	  2. Select Off for Answer Mode, then choose OK.
	
	     The Fax icon should now display "Answer Off." This setting is saved; the
	     next time you enter Microsoft Mail, At Work PC Fax remains in "Off" mode.
	     (The Fax icon displays "Idle.")
	
	  Method 2
	
	  1. Open Control Panel.
	
	  2. Choose the Fax icon. Choose Setup, select Off under Answer Mode, and
	     choose the OK button.
	
	Additional query words: 3.11 efax terminal comm.drv
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
