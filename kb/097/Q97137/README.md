---
layout: page
title: "Q97137: PC WRmt: Mail Hangs in Connection Dialog If No Timer Available"
permalink: /kb/097/Q97137/
---

## Q97137: PC WRmt: Mail Hangs in Connection Dialog If No Timer Available

{% raw %}

	Article: Q97137
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When version 3.2 of Microsoft Mail Remote for Windows attempts to make a modem
	connection, the application will stop responding (hang) in the Connection dialog
	box if no timers are available from Microsoft Windows.
	
	If no timers are available to use to create the communication session, Mail
	Remote issues the following message:
	
	  Cannot schedule connection.
	  Close down other time-based applications and restart mail.
	
	This message does not appear if the user does not request a scheduled or periodic
	connection.
	
	In the Session Setup dialog box, if no timer is available, the periodic and
	scheduled options are not available in the connection group.
	
	When Mail Remote for Windows starts, the error message above appears only if your
	MSMAIL.INI file specifies the auto connect option.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
