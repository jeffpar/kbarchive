---
layout: page
title: "Q189790: XFOR: Linkage 3.2 Connectors or Exchange Connectors Crash"
permalink: kb/189/Q189790/
---

## Q189790: XFOR: Linkage 3.2 Connectors or Exchange Connectors Crash

	Article: Q189790
	Product(s): Microsoft Exchange
	Version(s): 5.5 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Various Linkage Message Exchange 3.2 connectors or Microsoft Exchange Server 5.5
	versions of those connectors may crash during message processing if the message
	contains PR_REPLY_RECIPIENT_ENTRIES that do not resolve.
	
	CAUSE
	=====
	
	If the message contains PR_REPLY_RECIPIENT_ENTRIES and a valid value for
	PR_DISPLAY_NAME cannot be found for one of these entries when resolving them
	against the Exchange Server directory, the connector will attempt to access
	unallocated memory, resulting in an access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2. A supported fix is now available, but has not been fully regression-tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	
	MORE INFORMATION
	================
	
	Invalid values for PR_DISPLAY_NAME include a blank entry (NULL), or an entry
	containing only one or more spaces (0x20). Such entries will be obvious in the
	Exchange Global Address Book because there will be no characters under the
	"Display Name" column for the entry.
	
	Neither the Exchange Server Admin UI or the Admin Import will permit a recipient
	to be created with NULL or "spaces only" in the Display Name field. However, the
	SQL based Linkage Directory Exchange (LDE) provides the means to customize the
	"mapping rules" used to populate Exchange custom recipient attributes. These
	rules may not explicitly check for NULL or "spaces only" cases. Because the LDE
	uses lower level DAPI calls to converse with the Exchange Server directory,
	entries with NULLs or spaces can be introduced into the Exchange Server
	directory. Therefore, this issue can be avoided if LDE mapping rules are
	carefully constructed to not permit these cases to propagate into the Exchange
	Server directory.
	
	For more information about LDE mapping rules, please consult the Linkage
	Administrator's Guides and the online Help.
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : 5.5 3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
