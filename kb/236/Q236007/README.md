---
layout: page
title: "Q236007: DC Demotion Causes Out-of-Process Applications to Fail"
permalink: kb/236/Q236007/
---

## Q236007: DC Demotion Causes Out-of-Process Applications to Fail

	Article: Q236007
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
	
	When you demote a domain controller that is being used as an Internet
	Information Services (IIS) 5.0 computer, all applications marked with
	Application Protection: High (isolated) will fail. The following is an example
	of an error message that may occur in the Event Viewer's application log:
	
	  DCOM got error "Logon failure: the user has not been granted the requested
	  logon type at this computer. " and was unable to logon .\IWAM_servername in
	  order to run the server:
	  {3D14228D-FBE1-11D0-995D-00C04FD919C1}
	
	CAUSE
	=====
	
	The IWAM_servername is removed and recreated when the server's demotion occurs.
	The passwords for the COM+ packages are no longer synchronized with the password
	for the IWAM_server account.
	
	RESOLUTION
	==========
	
	To resolve this issue, open a command prompt and go to the \Inetpub\Adminscripts
	directory. Run the Synciwam.vbs script.
	
	Example:
	
	  cscript synciwam.vbs
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
