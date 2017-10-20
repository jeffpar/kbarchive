---
layout: page
title: "Q172185: C2config.exe Removes All Admin Permissions on International NT"
permalink: /kb/172/Q172185/
---

## Q172185: C2config.exe Removes All Admin Permissions on International NT

{% raw %}

	Article: Q172185
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT 4.0 Resource Kit Utilities 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running C2config.exe on an international configuration of Windows NT, all
	administrator permissions are removed from all user accounts, including the
	administrator account.
	
	C2config.exe is a utility designed to modify Windows NT administration settings
	to conform to the United States of America governmental C2 specification.
	
	CAUSE
	=====
	
	The C2 specification explicitly refers to the "Administrator" account by name.
	If the administrator account is spelled differently than Administrator, then
	C2Config.exe will revoke the administration permissions of that account.
	Non-English translations of Administrator will not be recognized as the
	Administrator account.
	
	WORKAROUND
	==========
	
	The only way to restore administrator permissions to the Administrator account
	is to use a recent Windows NT Emergency Repair Disk (ERD).
	
	
	This workaround is unconfirmed and may NOT work on foreign Windows NT
	configurations. Please note that this workaround has not been tested by
	Microsoft, and may not work or might cause other side-effects.
	
	C2config.exe may be usable on foreign Windows NT configurations if a new account
	named Administrator is created and given all administrator permissions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the utility C2config.exe
	included with the Microsoft Windows NT Server Resource Kit version 4.0 (ISBN
	1-57231-344-7), Supplement One (ISBN 1-57231-559-8), and Supplement Two (ISBN
	1-57231-626-8).
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	This problem has been reported to affect C2config when run on German or French
	configurations of Microsoft Windows NT.
	
	
	MORE INFORMATION
	================
	
	C2config.exe is a utility designed to modify Windows NT administration settings
	to conform to the United States of America governmental C2 specification.
	
	Running C2config.exe on non-English versions of Microsoft Windows NT can cause
	serious side effects, including loss of all administrator permissions on all
	user accounts. (including the administrator account if not named
	Administrator).
	
	
	Additional query words: bookbug ntrkit reskit non-US foreign NT
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
