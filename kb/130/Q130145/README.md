---
layout: page
title: "Q130145: BUG: SourceSafe and Windows Debug Kernel Causes Termination"
permalink: /kb/130/Q130145/
---

## Q130145: BUG: SourceSafe and Windows Debug Kernel Causes Termination

	Article: Q130145
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe kbDSupport kbSSafe300bugkbbuglist
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe terminates or Windows terminates when you perform various operations
	from within the SourceSafe GUI. No error messages are given. To work around the
	problem, do the following:
	
	1. Remove the debug kernel, and restart Windows.
	
	2. Run SourceSafe, and perform all operations on the database.
	
	3. Exit Windows, and restart with the debug kernel.
	
	CAUSE
	=====
	
	This occurs when the user is running the Windows debug kernel and SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft SourceSafe version 3.1. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbDSupport kbSSafe300bug kbbuglist
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
