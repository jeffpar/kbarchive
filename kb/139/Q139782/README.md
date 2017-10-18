---
layout: page
title: "Q139782: WINS Logs Event Error 4204"
permalink: kb/139/Q139782/
---

## Q139782: WINS Logs Event Error 4204

	Article: Q139782
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WINS causes event error 4204. The event error has the following description:
	
	  An error was encountered in the database. You might need to restore the
	  database from a backup.
	
	CAUSE
	=====
	
	This error is caused by a the extensive use of a limited memory resource that
	the WINS server uses. When WINS is busy updating or validating a lot of
	information in the WINS database, this error can occur.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in the latest U.S. Service Pack for Windows NT Server
	version 3.51. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt event viewer log
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
