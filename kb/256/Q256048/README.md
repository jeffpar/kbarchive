---
layout: page
title: "Q256048: SMS: Error When Adding User/Group Name to Permitted Viewers List"
permalink: kb/256/Q256048/
---

## Q256048: SMS: Error When Adding User/Group Name to Permitted Viewers List

	Article: Q256048
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a user or group name to the permitted viewers list, the following
	error message may be displayed:
	
	  The Windows NT user name you entered is not valid. Please enter a valid user
	  name.
	
	CAUSE
	=====
	
	This behavior occurs because the user or group name is longer than 36
	characters. Systems Management Server (SMS) requires that user or group names in
	the permitted viewers list be less than or equal to 36 characters in length.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	If you cannot modify the name or group name, create a new group with the
	allowable characters and then add the long name into the new group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT 4.0
	------------------------
	
	- User name can be up to 20 characters
	
	- Global group name can be up to 20 characters
	
	- Local global group can be up to 256 characters
	
	Microsoft Windows 2000
	----------------------
	
	- User account can be up to 20 characters
	
	- Group account can be up to 63 characters
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
