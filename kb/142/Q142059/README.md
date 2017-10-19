---
layout: page
title: "Q142059: Err Msg: &quot;Could Not Set Printer&quot; if Port Name Includes Comma"
permalink: /kb/142/Q142059/
---

## Q142059: Err Msg: &quot;Could Not Set Printer&quot; if Port Name Includes Comma

	Article: Q142059
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to add a printer port in Print Manager that has a comma in the
	port name, the following error message appears:
	
	  Could not set printer: The specified port is unknown.
	
	CAUSE
	=====
	
	Currently, Windows NT does not support the use of comma's in port names. NT Uses
	comma's for separators, thus they are not valid for printer names or port names.
	
	WORKAROUND
	==========
	
	To work around this problem, rename and remove the comma in the port name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt Mac sfm ASCII Apple Queue
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
