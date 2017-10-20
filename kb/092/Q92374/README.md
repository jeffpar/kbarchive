---
layout: page
title: "Q92374: PC Win: Err Msg: That User's Mailbox Is Corrupt..."
permalink: /kb/092/Q92374/
---

## Q92374: PC Win: Err Msg: That User's Mailbox Is Corrupt...

{% raw %}

	Article: Q92374
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the postoffice administrator deletes a mailbox between the time you log in to
	Mail and the time you send mail to that mailbox, you receive the following error
	message:
	
	  That user's mailbox is corrupt. Please contact your system administrator.
	
	CAUSE
	=====
	
	Microsoft Mail cannot find the mailbox so it marks it as corrupted. Mail should
	instead give you the following error:
	
	  There is no user with that name on your Mail server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	for Windows. This problem was corrected in version 3.0b.
	
	RESOLUTION
	==========
	
	Exit from Microsoft Mail for Windows and restart it.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
