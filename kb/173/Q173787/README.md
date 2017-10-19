---
layout: page
title: "Q173787: MDG: Random Error &quot;Sign on ID or Password Incorrect&quot;"
permalink: /kb/173/Q173787/
---

## Q173787: MDG: Random Error &quot;Sign on ID or Password Incorrect&quot;

	Article: Q173787
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
	
	Mail Remote for Windows users receive the following error when attempting to
	connect to their postoffice for transmitting mail:
	
	  Postoffice has not accepted mail item.
	  Sign-on ID or password is incorrect.
	
	However, the postoffice password has not been changed and a new init-disk has no
	affect.
	
	CAUSE
	=====
	
	The External instance(s) in the INI file for the modem(s) do not include a path
	statement to the postoffice. Therefore, the MTA service a remote user connects
	with does not recognize the sign-on ID or password as an existing postoffice.
	When the error message occurs randomly and there are multiple instances
	servicing Mail Remote users and the modems are in a phone number "Hunt group,"
	the instances must be the identical.
	
	RESOLUTION
	==========
	
	To resolve this problem, include the path information to the postoffice in the
	INI file instance section.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	Issue type        : kbprb
	
	=============================================================================
	
