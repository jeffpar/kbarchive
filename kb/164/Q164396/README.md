---
layout: page
title: "Q164396: STOP 0x0000000A May Occur in Afd.sys Under High Stress"
permalink: /kb/164/Q164396/
---

## Q164396: STOP 0x0000000A May Occur in Afd.sys Under High Stress

	Article: Q164396
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under high stress, a computer running Windows NT 4.0 Server may get Blue Screen
	with a STOP 0x0000000A error in Afd.sys.
	
	CAUSE
	=====
	
	The reference count on the File Object is not incremented before queuing the
	workitem, and the File Object is torn down when it's time to free the workitem.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 3.
	
	Additional query words: prodnt 0xa work item kbwinnt400sp3fix kbwinnt400presp3fix
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
