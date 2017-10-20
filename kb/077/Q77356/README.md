---
layout: page
title: "Q77356: PC Rmt: Mail Sent to Group via External or Remote Returned"
permalink: /kb/077/Q77356/
---

## Q77356: PC Rmt: Mail Sent to Group via External or Remote Returned

{% raw %}

	Article: Q77356
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail for PC Networks, groups can be composed of users on other
	postoffices. Mail sent to such a group from the Remote Mail client or from
	another postoffice will be delivered to all local users; however, the mail will
	be returned for all users at postoffices other than the one on which the group
	was defined. Sending the mail will generate the error message "Mail retry count
	exceeded."
	
	CAUSE
	=====
	
	Remote Mail users see a group as one user, while local users see the group as
	the members. This can be seen from each client by selecting the group name in
	the To or Cc field, and pressing the RIGHT ARROW key.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	Additional query words: 2.10 2.10a 2.10b 2.10c 3.00 return
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS kbMailRemote210DOS
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
