---
layout: page
title: "Q153401: User Profile Editor Does Not Save System Default Profiles"
permalink: kb/153/Q153401/
---

## Q153401: User Profile Editor Does Not Save System Default Profiles

	Article: Q153401
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 SP4 
	- Microsoft Windows NT Server version 3.51 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Service Pack 4 (SP4) for Windows NT 3.51, you use User Profile
	Editor to save System Default Profiles. No error message is displayed, but the
	new settings do not take effect.
	
	CAUSE
	=====
	
	User Profile Editor uses the MoveFileEx API internally. This API is does not
	work in SP4. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	Q149857MoveFileEx API Does Not Work After Applying SP4
	
	RESOLUTION
	==========
	
	Install the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the product listed. This problem
	was corrected in the latest Windows NT 3.51 U.S. Service Pack. For information
	on obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt MoveFileEx SP4 Q149857
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp4 kbWinNTW351SP4
	Version           : :3.51 SP4
	
	=============================================================================
	
