---
layout: page
title: "Q175200: Cannot Change the Properties of a Document in the Print Queue"
permalink: /kb/175/Q175200/
---

## Q175200: Cannot Change the Properties of a Document in the Print Queue

{% raw %}

	Article: Q175200
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the properties of a document that is currently in the
	print queue, you may receive the following error message:
	
	  Document properties cannot be saved. You may not have permission to
	  perform this operation.
	
	You may receive this error message even though you are the owner of the print
	job.
	
	CAUSE
	=====
	
	This problem occurs if you do not have Administrator rights. Windows NT allows
	only users with Administrator rights to change the properties of a document that
	is in the print queue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix below, or wait for the next service
	pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
