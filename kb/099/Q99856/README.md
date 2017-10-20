---
layout: page
title: "Q99856: SMTP: Err Msg: 552 Error in Local Delivery"
permalink: /kb/099/Q99856/
---

## Q99856: SMTP: Err Msg: 552 Error in Local Delivery

{% raw %}

	Article: Q99856
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 or 3.0 of Microsoft Mail Gateway to SMTP may display these error
	messages:
	
	  ERROR <user> is an invalid Courier Mailbox
	
	  -or-
	
	  ERROR translating message to Microsoft Mail
	
	  -or-
	
	  552 Error in local delivery
	
	CAUSE
	=====
	
	These errors indicate that the SMTP Gateway was unable to identify the recipient
	of the incoming message. These error messages may occur if:
	
	- The recipient name of the address is not a valid Microsoft Mail user name.
	
	  -or-
	
	- The Microsoft Mail user name does not have "external" rights.
	
	RESOLUTION
	==========
	
	Ensure the recipient is a valid Microsoft Mail user name, and that the user has
	been given "external" rights through the Admin program. This is determined by
	the User Access Privileges field of the Local Admin-Modify menu--make sure
	EXTERNAL is selected for this field.
	
	For more information on user access privileges, refer to the "Microsoft Mail
	Administrator's Guide."
	
	Additional query words: 2.10 3.00 errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
