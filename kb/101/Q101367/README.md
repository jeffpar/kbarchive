---
layout: page
title: "Q101367: PC WRmt: Err Msg: Mail Remote Driver Not Compatible..."
permalink: /kb/101/Q101367/
---

## Q101367: PC WRmt: Err Msg: Mail Remote Driver Not Compatible...

{% raw %}

	Article: Q101367
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail Remote for Windows, with the option Connect on
	Exit of Mail selected, the following incorrect error message may appear if you
	do not have mail to send in your Outbox when you exit:
	
	  This Microsoft Mail Remote driver is not compatible with your messaging
	  system.
	
	This message is incorrect and misleading.
	
	If you have mail waiting in your Outbox, this error message does not appear.
	
	This problem is also documented in the README.TXT file under section 2J. The
	README.TXT file is located on Disk 1.
	
	NOTE: To find the Connect on Exis option, click Session Setup on the Mail menu.
	Then slect Connection Times.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If there is mail in the Outbox, the error message does not appear. Instead, this
	message appears:
	
	  There is unsent mail in your Outbox. Do you wish to send it?
	
	If you select Yes, the connection occurs and mail exits. If you select No, Mail
	exits with no error message. This behavior is the same whether or not the
	Connect At Exit option has been selected.
	
	If you are using the Microsoft Mail System Selector and have an active mail
	session in which you have selected the Connect On Exit Of Mail option, the
	selector appears to stop responding to mouse input after the incorrect error
	message appears. If you select OK with the keyboard (by pressing the ENTER key),
	the selector closes as it should.
	
	Additional query words: 3.20 hang err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
