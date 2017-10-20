---
layout: page
title: "Q95200: Re-creating the Postoffice Initialization Procedure"
permalink: /kb/095/Q95200/
---

## Q95200: Re-creating the Postoffice Initialization Procedure

{% raw %}

	Article: Q95200
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you first run Windows for Workgroups Mail, you are given the option to
	connect to an existing post office or create a new post office. After you make
	your choice, you cannot go back and choose again. If you want to change your
	initial selection, you must use the steps in this article to reinitialize Mail
	so that you can select the option you want.
	
	Steps to Re-Create the Mail Initialization Procedure
	----------------------------------------------------
	
	1. Open the MSMAIL.INI file in an ASCII text editor, such as Notepad.
	
	2. Disable the ServerPath= and the LOGIN= lines by typing a semicolon (;) at the
	  beginning of each line.
	
	3. Add or edit the CustomInitHandler= line so that it appears as follows:
	
	  CustomInitHandler=WGPOMGR.DLL,10
	
	4. Run Mail. The initialization procedure begins.
	
	MORE INFORMATION
	================
	
	The initialization procedure is defined for Mail in the MSMAIL.INI file on the
	CustomInitHandler= line. This setting is defined as:
	
	       CustomInitHandler=WGPOMGR.DLL,<procedure #>
	
	When you run Mail, it checks for the existence of the CustomInitHandler= line in
	the MSMAIL.INI file. If this line exists, Mail attempts to execute the procedure
	defined by this parameter setting. If the execution fails because the
	dynamic-link library (DLL) file WGPOMGR.DLL cannot be found or the procedure is
	undefined, Mail continues without reporting an error.
	
	The procedure, located in WGPOMGR.DLL, displays the Connect Or Create dialog box
	to allow you to either connect to an existing remote post office or create a new
	workgroup post office.
	
	- If you choose the Cancel button, WGPOMGR.DLL closes Mail.
	
	- If you choose the OK button, WGPOMGR.DLL removes the "CustomInitHandler="
	  line from the MSMAIL.INI file and returns to Mail, automatically signing you
	  in to the post office.
	
	Additional query words: 3.10 3.11 post office
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
