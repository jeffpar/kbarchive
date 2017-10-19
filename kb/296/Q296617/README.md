---
layout: page
title: "Q296617: Error w/Password Change After Password Change Utility Installed"
permalink: /kb/296/Q296617/
---

## Q296617: Error w/Password Change After Password Change Utility Installed

	Article: Q296617
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you successfully set up the password change utility, you may receive the
	following error message in the browser when you attempt to change a password:
	
	  The parameter is incorrect.
	
	For additional information on how to set up the password change utility, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q269082 IISADMPWD Virtual Directory Is Not Created During Clean Install of
	  IIS 5.0
	
	CAUSE
	=====
	
	This error occurs if any of the following criteria are met:
	
	- The Web server is a domain controller.
	
	- The Web server is a server in a workgroup.
	
	- A local account is being used on a member server of a domain.
	
	- You do not type the name of the computer before the user name when you change
	  the password.
	
	RESOLUTION
	==========
	
	To make the password change in IIS on a domain controller, a workgroup server,
	or using a local account on a member server, enter the account information in
	the following format:
	
	  <computer_name>\<user_name>
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Browse to the site that is set up for users to change passwords (for example,
	  http://<computer_name>/iisadmpwd). The default page is Aexp.htr.
	
	NOTE: This page uses Secure Sockets Layer (SSL) unless the metabase setting has
	been changed. Note that you should only change the metabase setting if you are
	using the IIS password change utility without using SSL. If the change has been
	made, set the default page for the Iisadmpwd virtual folder to Aexp3.htr by
	using the default document feature in the properties of the Iisadmpwd virtual
	folder.
	
	2. Create a local account on the server. (If the server is a domain controller,
	  create a domain account). Be sure to conform to any password policies.
	
	3. From a remote computer, access
	  http://<computer_name>/iisadmpwd/aexp3.htr (if SSL is NOT being used)
	  or https://<computer_name>/iisadmpwd/aexp.htr (if SSL is being used).
	
	4. Type the account name, the old password, the new password, and the new
	  password confirmation.
	
	NOTE: Make sure that the new password does not conform to the
	<computer_name>\<user_name> format.
	The IIS Password Change Utility is used frequently when Outlook Web Access (OWA)
	is installed on the IIS 5.0 server and is being used for Web-based e-mail. If
	the user's password expires when the user is logging into OWA, the user is
	redirected to a page at which the password can be changed.
	
	If the IIS Password Change Utility will be used for OWA, the default page for the
	Iisadmpwd virtual folder does not need to be changed from Aexp.htr to
	Aexp3.htr.
	
	
	Additional query words: iis 5 iisadmpwd htr .htr password change utility OWA changing enabled
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
