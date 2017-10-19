---
layout: page
title: "Q136441: Last Known Good Always Restores Original Boot Settings"
permalink: /kb/136/Q136441/
---

## Q136441: Last Known Good Always Restores Original Boot Settings

	Article: Q136441
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you boot Windows NT and choose to use the Last Known Good configuration,
	the original boot settings are restored. Changes that were made during
	subsequent successful boots are not used.
	
	CAUSE
	=====
	
	Winlogon checks for the value ReportBootOK in the registry. If it is set to 1,
	the Service Controller deletes the Clone key. This results in the current boot
	settings being saved as Last Known Good.
	
	Current boot settings are not written to the Clone key because Winlogon doesn't
	report that the boot was successful, so the Service Controller doesn't delete
	the original Clone Key.
	
	
	RESOLUTION
	==========
	
	Upgrade to the latest U.S. Service Pack for Windows NT.
	
	STATUS
	======
	
	This problem was corrected in the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	
	Additional query words: 3.51 prodnt logon loging winlogin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
