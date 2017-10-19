---
layout: page
title: "Q302481: FIX: Persistent Storage Manager Disallows Access to Snapshots"
permalink: /kb/302/Q302481/
---

## Q302481: FIX: Persistent Storage Manager Disallows Access to Snapshots

	Article: Q302481
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Server Appliance Kit (SAK), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the Reliability Framework is installed and the system rebooted, Persistent
	Storage Manager (PSM) will no longer allow access to snapshots.
	
	CAUSE
	=====
	
	The watchdog timer overwrites the registry key:
	
	  HKYEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session
	  Manager\BootExecute
	
	PSM writes the value psmready into this key, and when this value is overwritten,
	PSM no longer works correctly.
	
	RESOLUTION
	==========
	
	A hotfix has been created to fix this problem. Contact your technical account
	manager (TAM), OEM representative, or Microsoft Product Support Services
	(http://support.microsoft.com/directory/) to obtain this hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: SAK QFE VMWatchdog psmready psm
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbSAK200 kbAudDeveloper kbSAKSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
