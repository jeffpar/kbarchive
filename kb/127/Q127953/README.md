---
layout: page
title: "Q127953: PC WRmt: Remote Mail to Group with New User Not Delivered"
permalink: /kb/127/Q127953/
---

## Q127953: PC WRmt: Remote Mail to Group with New User Not Delivered

{% raw %}

	Article: Q127953
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft Mail Remote for Windows user sends a message to an existing
	group, after the group has just been modified to contain newly created users,
	mail may not be delivered to those new users. In addition, no error message will
	be returned.
	
	RESOLUTION
	==========
	
	Restart External to force the updated information to be stored memory, including
	the new group definition.
	
	MORE INFORMATION
	================
	
	When mail addressed to a group is sent by Remote Mail for Windows, EXTERNAL.EXE
	performs the group address resolution after it receives the mail. If the group
	definition has been modified to include newly created users, and EXTERNAL.EXE
	has not reached IntervalUpdate time, it will not know about these new users, and
	new mail will not be created for them. If the group is made up of all new users,
	mail will appear to have disappeared, and no error message will be generated.
	
	EXTERNAL.EXE loads group information among other definitions into its memory at
	start up. It also checks for updated information regularly based on the
	IntervalUpdate setting. The default is set to 5 minutes.
	
	For additional information, please see version 3.2 of Microsoft Mail for PC
	Networks "Administrator's Guide," page 248.
	
	
	Additional query words: 2.10 3.00 3.20 3.20a pole group disappear
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
