---
layout: page
title: "Q182512: XADM: Information Store Fails With Server Specific Error 4294966"
permalink: kb/182/Q182512/
---

## Q182512: XADM: Information Store Fails With Server Specific Error 4294966

	Article: Q182512
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the information store after a restore on a recovery
	server or a new Exchange Server computer, you may receive the following error:
	
	  Server Specific 4294966234
	
	CAUSE
	=====
	
	This error occurs if the original Exchange Server computer was installed with
	code pages, but the Exchange Server computer where the information store is
	being restored does not have the same code pages installed.
	
	WORKAROUND
	==========
	
	Install the code pages on the recovery computer and attempt to start the
	information store again.
	
	MORE INFORMATION
	================
	
	Error 4294966234 refers to Jet Error -1062 (0xfffffbda) =
	JET_errInvalidLanguageId
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q160028 Adding Code Pages to Windows NT Server 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
