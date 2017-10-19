---
layout: page
title: "Q197985: PDC Performs Only Full Synchronizations to BDCs"
permalink: /kb/197/Q197985/
---

## Q197985: PDC Performs Only Full Synchronizations to BDCs

	Article: Q197985
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The primary domain controller (PDC) uses full synchronizations rather than
	partial synchronizations to update the backup domain controllers (BDCs) in the
	domain. This can be seen on the PDC's System Log as the following events:
	
	  Event ID: 5712
	  Source: NETLOGON
	  Description: The partial synchronization request from the server
	  <BDCName> failed with the following error:
	  Data Section: 0000: 34 01 00 c0
	  
	  Event ID: 5713
	  Source: NETLOGON
	  Description: The full synchronization request from the server <BDCName>
	  completed successfully. X object(s) has(have) been returned to the
	  caller.
	
	This problem can also be seen on the BDC's System Log as the following events:
	
	  Event ID: 5716
	  Source: NETLOGON
	  Description: The partial synchronization replication of the LSA database
	  from the primary domain controller <PDCname> failed with the following
	  error:
	  Data Section: 0000: 34 01 00 c0
	  
	  Event ID: 5717
	  Source: NETLOGON
	  Description: The full synchronization replication of the LSA database
	  from the primary domain controller <PDCname> completed successfully.
	
	CAUSE
	=====
	
	This problem can be caused if the following three conditions exist:
	
	- "File and Object Access" auditing is enabled on the domain.
	
	- The Security Log on the PDC is full. The Security Log Settings on the primary
	  domain controller default to "Maximum log size of 512 Kilobytes" and the
	  Event Log Wrapping setting defaults to "Overwrite Events Older than 7 Days."
	  The problem can also happen if the Event Log Wrapping setting is set to "Do
	  Not Overwrite Events (Clear Log Manually)."
	
	- An application on the network is making multiple API calls in rapid
	  succession to access SAM database information on the PDC.
	
	RESOLUTION
	==========
	
	Disable "File and Object Access" auditing on the domain within User Manager or
	change the Event Log Settings, Event Log Wrapping to "Overwrite Events as
	Needed" on the PDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information on full synchronization problems, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q173882 Netlogon Synchronization Errors
	
	Additional query words: 560 562 events full synchronization 5712 5713 5716 5717 AddOrChangeLsaPolicy netlogon.chg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
