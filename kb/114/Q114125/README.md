---
layout: page
title: "Q114125: PC WRmt: Simple MAPI Programs Only Send Mail with Remote"
permalink: /kb/114/Q114125/
---

## Q114125: PC WRmt: Simple MAPI Programs Only Send Mail with Remote

{% raw %}

	Article: Q114125
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, versions 3.2, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Microsoft Mail Remote for Windows driver, a Simple Messaging
	Application Programming Interface (MAPI) application only sends mail and does
	not receive mail from an asynchronous session with the postoffice called,
	regardless of whether or not the Mail Remote driver is set to receive mail.
	
	CAUSE
	=====
	
	When the application closes the Simple MAPI session, the spooler begins to shut
	down. The spooler checks for mail in the outbox, spools the mail to an
	intermediate storage location, and begins sending the mail automatically,
	without prompting for user confirmation.
	
	The Mail Remote driver cannot control the spooler, so when the intermediate
	storage location is checked for mail, an asynchronous session is started; mail
	is only sent, not received.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.20 API
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
