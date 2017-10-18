---
layout: page
title: "Q139813: Event ID 2453 Appears When Using Tabs For USRTOGRP"
permalink: kb/139/Q139813/
---

## Q139813: Event ID 2453 Appears When Using Tabs For USRTOGRP

	Article: Q139813
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the USRTOGRP utility from the Windows NT Resource Kit, Event ID
	2453 appears in the Event Viewer. The description of the system event is:
	
	  Could not find a domain controller for this domain.
	
	CAUSE
	=====
	
	This problem occurs if you use tabs as delimiters between parameters in your
	USRTOGRP data file. For example:
	
	  domain:<tab><domain_name>
	
	RESOLUTION
	==========
	
	To correct this problem, use spaces between parameters in your USRTOGRP data
	file. For example:
	
	  domain:<space><domain_name>
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.50 3.51
	
	=============================================================================
	
