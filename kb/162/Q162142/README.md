---
layout: page
title: "Q162142: XCLN: Forms: Logon Failed Due to the Following Run Time Error"
permalink: /kb/162/Q162142/
---

## Q162142: XCLN: Forms: Logon Failed Due to the Following Run Time Error

{% raw %}

	Article: Q162142
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbusage
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error may occur when you attempt to access certain items on the
	properties page for the "To:" field in the Microsoft Exchange Forms Designer for
	Microsoft Exchange Server running on a computer running Windows NT Server 4.0:
	
	  Logon failed due to the following runtime error 4:
	  Application-defined or object defined error.
	
	CAUSE
	=====
	
	This error occurs due to a problem with the Component Object Model (COM)
	interface on Windows NT Server 4.0.
	
	STATUS
	======
	
	This problem has been fixed in Microsoft Windows NT Service Pack 2. Note that in
	addition to this service pack, Service Pack 2 for the Microsoft Exchange client
	must also be applied. For information on how to obtain these service packs,
	contact Microsoft Technical Support.
	======================================================================
	Keywords          : kbinterop kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
