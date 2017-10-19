---
layout: page
title: "Q119640: PC Adm: Incorrect Mailbags for SNADS and  PROFS"
permalink: /kb/119/Q119640/
---

## Q119640: PC Adm: Incorrect Mailbags for SNADS and  PROFS

	Article: Q119640
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Mail administrator creates a SNADS DGN by choosing Gateway,
	DGN, Create, a mailbag and key files are created for the DGN. This mailbag and
	key file are never used because all SNADS gateway mail is queued up in the
	mailbag for the gateway, regardless of the DGN to which the recipient belongs.
	
	This problem does not cause mail to be lost.
	
	RESOLUTION
	==========
	
	Use the Import utility with the -c option to autocreate SNADS DGNs. The Import
	utility does not create mailbag and key files for each DGN.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of the Microsoft
	Mail Administrator program. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The same behavior is exhibited when the Administrator adds a PROFS node through
	the Admin program. When Import is used to autocreate PROFS nodes, it does not
	create a mailbag for each PROFS node.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
