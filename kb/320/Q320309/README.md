---
layout: page
title: "Q320309: PRB: &quot;File or Project Not Found&quot; Err Msg When You Add User Right"
permalink: /kb/320/Q320309/
---

## Q320309: PRB: &quot;File or Project Not Found&quot; Err Msg When You Add User Right

	Article: Q320309
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add user rights to a project in the Visual SourceSafe Admin
	utility, you may receive the following error message:
	
	  File or project not found
	
	The problem occurs only with some users and does not occur with other users.
	
	CAUSE
	=====
	
	This problem occurs if the user has rights to a project that was previously
	deleted and destroyed.
	
	RESOLUTION
	==========
	
	You can safely ignore the error message. The permission change takes place
	automatically.
	
	Alternatively, use one of the following methods to resolve this problem:
	
	- If the user has several projects that do not have any rights listed, remove
	  these items.
	
	- Remove the user, and then add the user again. To do this, follow these steps:
	
	  1. Save the Ss.ini file of the user in a safe location.
	
	  2. Open the Visual SourceSafe Admin utility, and then delete the user.
	
	  3. Add the user back to Visual SourceSafe.
	
	  4. Reapply the security settings of the user.
	
	  5. Copy the Ss.ini file in the directory of the user to overwrite the default
	     Ss.ini file.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
