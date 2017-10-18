---
layout: page
title: "Q235853: XWEB: MAPI Message Property PR_PRIORITY Is Not Created with CDO"
permalink: kb/235/Q235853/
---

## Q235853: XWEB: MAPI Message Property PR_PRIORITY Is Not Created with CDO

	Article: Q235853
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send a message using Outlook Web Access (OWA), the MAPI field property
	PR_PRIORITY is not created. The message transfer agent (MTA) uses this field to
	elevate message priority. Without this field, the message is processed with
	normal priority through the MTA.
	
	MORE INFORMATION
	================
	
	In Outlook 97 and Outlook 98, the PR_PRIORTY field is created when the user sets
	the PR_IMPORTANCE by means of the user interface (UI). The PR_PRIORTY field is
	not created in OWA because Collaboration Data Objects (CDO) do not support the
	creation of the PR_PRIORITY field as a result of setting the PR_IMPORTANCE. The
	following table shows the different states for the PR_IMPORTANCE and PR_PRIORITY
	fields.
	
	+--------------------------------------------------------+
	| Client     | Outlook/OWA   | Outlook     | OWA         | 
	+--------------------------------------------------------+
	| MAPI field | PR_IMPORTANCE | PR_PRIORITY | PR_PRIORITY | 
	+--------------------------------------------------------+
	| LOW        | 0             | -1          | N/A         | 
	+--------------------------------------------------------+
	| NORMAL     | 1             | 0           | N/A         | 
	+--------------------------------------------------------+
	| HIGH       | 2             | 1           | N/A         | 
	+--------------------------------------------------------+
	
	Clients listed as Outlook in the above table include all versions of Outlook 97
	and Outlook 98.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
