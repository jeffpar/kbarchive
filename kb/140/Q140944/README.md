---
layout: page
title: "Q140944: XADM: DirSync Imports Treated Differently by Exchange"
permalink: /kb/140/Q140944/
---

## Q140944: XADM: DirSync Imports Treated Differently by Exchange

	Article: Q140944
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an import file for Microsoft Mail for PC Networks is imported into the
	Directory Synchronization Stream with the -E command line option (IMPORT -E),
	and the 34th character does not contain the address type, Microsoft Exchange,
	acting as the Directory Server, puts these entries away and does nothing with
	them nor does it register an error in Event Viewer.
	
	On page 328 and 329 of the Microsoft Mail "Administrator's Guide," it states that
	if the address type is omitted, it uses the PCM type by default. This was true
	with Microsoft Mail acting as the Directory Synchronization Server but not with
	Microsoft Exchange acting as the Directory Synchronization Server.
	
	CAUSE
	=====
	
	Microsoft Exchange Server version 4.0 required an address type to be declared.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
