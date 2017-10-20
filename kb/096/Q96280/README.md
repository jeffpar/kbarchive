---
layout: page
title: "Q96280: Mac Wkst: FindMail Prevents Notification"
permalink: /kb/096/Q96280/
---

## Q96280: Mac Wkst: FindMail Prevents Notification

{% raw %}

	Article: Q96280
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The notifier window in version 3.1 of Microsoft Mail for AppleTalk Networks will
	not appear if the FindMail utility is the active window. Mail notification of
	new mail is prevented if the active window was created by the dialog manager.
	
	MORE INFORMATION
	================
	
	The notification window will only appear when it is safe to do so. If there is
	an active dialog box open, Mail will wait until it is no longer the active
	window either by changing to another application, or when the window gets
	closed.
	
	Additional query words: 3.10 mac macmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
