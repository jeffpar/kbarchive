---
layout: page
title: "Q150104: Removing Entry from Directory Replication Configuration Fails"
permalink: kb/150/Q150104/
---

## Q150104: Removing Entry from Directory Replication Configuration Fails

	Article: Q150104
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Modifications to the To or From lists in the Directory Replication dialog box
	are not saved when you also change the status of replication (that is, whether
	to import or export directories) before clicking OK to accept the changes and
	close the dialog box. (The Directory Replication dialog box is reached by going
	into Control Panel, clicking the Server icon, then clicking the Directory
	Replication button.)
	
	RESOLUTION
	==========
	
	Make changes to the Directory Replication dialog box in two separate steps.
	
	1. Make desired changes to the To or From lists, then click OK.
	
	2. Reopen the dialog box and make any desired changes in the Do Not Export or Do
	  Not Import buttons. Click OK to save these changes and complete the process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51 and 4.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt replace manage server ntutil
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
