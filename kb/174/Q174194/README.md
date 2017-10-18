---
layout: page
title: "Q174194: MDG: All Remote Users on Postoffice Get Error"
permalink: kb/174/Q174194/
---

## Q174194: MDG: All Remote Users on Postoffice Get Error

	Article: Q174194
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All Mail Remote for Windows users on one postoffice attempt to connect and send
	new mail, the following errors are returned:
	
	- Postoffice has not accepted mail item.
	
	- Sign-on ID or password is incorrect.
	
	CAUSE
	=====
	
	The "Password" for the postoffice has been changed by the Administrator. The
	postoffice password is located under Config, Password in the Administrator
	program.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Change the postoffice "Password" back to the previous password.
	
	- Provide Remote Mail users with new init-disks.
	
	- Notify all Remote Mail users of the old password and the new password. The
	  postoffice password can be changed in the Remote client under the menu item
	  Mail, Communication Setup, Dialin Password. The old password must be supplied
	  as well as the new password.
	
	MORE INFORMATION
	================
	
	This password is used for all asynchronous communications with the postoffice,
	including remote mail users.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	Issue type        : kbprb
	
	=============================================================================
	
