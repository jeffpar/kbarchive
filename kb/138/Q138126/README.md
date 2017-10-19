---
layout: page
title: "Q138126: Event ID: 9 and 7000 if AppleTalk Zone Names Exceed 21 Chars."
permalink: /kb/138/Q138126/
---

## Q138126: Event ID: 9 and 7000 if AppleTalk Zone Names Exceed 21 Chars.

	Article: Q138126
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create an AppleTalk Zone in Windows NT with a name containing more
	than 21 characters and you restart Windows NT, the following error messages
	appear in the system log:
	
	  Event ID: 9 Description: "No default zone was specified for adapter
	  <your_adapter>"
	
	  Event ID: 7000 Description: "The Apple Talk Protocol service failed to start
	  due to the following error: A device attached to the system is not
	  functioning."
	
	If you attempt to start Services for Macintosh by running Control Panel and
	choosing Services, the following error message appears:
	
	  1068 Dependency Errors
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt Mac sp2
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
