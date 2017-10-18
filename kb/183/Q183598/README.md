---
layout: page
title: "Q183598: XFOR: Multiple &quot;Text/Plain&quot; Body Parts Combined by Default"
permalink: kb/183/Q183598/
---

## Q183598: XFOR: Multiple &quot;Text/Plain&quot; Body Parts Combined by Default

	Article: Q183598
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you send a message that contains multiple "text/plain" body parts to a
	Microsoft Exchange Server computer, the body parts are combined into a single
	body part by default. Combining the body parts may prevent the server from
	verifying the full fidelity of the message. However, you cannot modify this
	default behavior.
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for people to modify the default behavior of an
	Exchange Server computer when it processes messages with multiple "text/plain"
	body parts. We have added an AppendTextBodies registry value with a data type of
	REG_DWORD under the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS
	  \ParametersSystem\InternetContent
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This value allows you to modify the default behavior of the server. If the
	registry value is set to 0, every "text/plain" body part is converted to an
	attachment, unless it is the first body part in a Multipurpose Internet Mail
	Extensions (MIME) message. This is the default value for this registry value. If
	the registry value is set to a value greater than 0, all "text/plain" body parts
	that meet the following criteria are combined into a single body part:
	
	- The body part is not labeled as an attachment.
	
	- The body part's character set matches the character set of the body parts
	  that have already been combined.
	
	This feature is included in the latest Microsoft Exchange Server version 5.5 U.S.
	Service Pack. For information about obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: content type pr_body bodypart
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
