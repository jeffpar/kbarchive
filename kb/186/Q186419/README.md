---
layout: page
title: "Q186419: SMS Error: Insufficient Privileges to Edit Pending Jobs"
permalink: kb/186/Q186419/
---

## Q186419: SMS Error: Insufficient Privileges to Edit Pending Jobs

	Article: Q186419
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a user account to manage only Packages and Jobs, you therefore
	restrict the access in Systems Management Server Security Manager to VIEW access
	for Sites, and FULL access for Packages and Jobs. When the user attempts to
	modify a Pending Job, the following error message may appear:
	
	  You have insufficient privileges to edit or create these objects. To edit
	  this data, you need FULL access to the following security objects: SITES and
	  SITE GROUPS
	
	WORKAROUND
	==========
	
	Give the user FULL access to Sites, Site Groups, Packages and Jobs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: smsprod
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
