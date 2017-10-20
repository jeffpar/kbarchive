---
layout: page
title: "Q295750: Error Message: Unable to Set Default Formats and Patterns"
permalink: /kb/295/Q295750/
---

## Q295750: Error Message: Unable to Set Default Formats and Patterns

{% raw %}

	Article: Q295750
	Product(s): Microsoft Exchange
	Version(s): 3.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbExchange550 kbiis300
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to forward or reply to a message in Microsoft Outlook or when you
	try to access your Outlook Calendar on a computer that has Internet Information
	Server (IIS) 3.0 and Exchange Server 5.5 installed, you may receive the
	following error message:
	
	  Unable to set default formats and patterns
	
	CAUSE
	=====
	
	This behavior can occur if you installed Outlook on the same computer as
	Exchange Server 5.5 and IIS 3.0.
	
	RESOLUTION
	==========
	
	To resolve this behavior:
	
	1. Open a Command Prompt window.
	
	2. Go to the Winnt\System32 folder.
	
	3. Run the following command:
	
	regsvr32 cdo.dll
	When you run this command, the Cdo.dll file is registered again.
	
	MORE INFORMATION
	================
	
	For more information about file conflicts between Exchange Server 5.5, IIS 3.0,
	and Outlook, refer to the Readme.doc file that is located on the Exchange Server
	5.5 CD-ROM.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbExchange550 kbiis300 
	Technology        : kbiisSearch kbExchangeSearch kbExchange550 kbiis300 kbZNotKeyword2
	Version           : :3.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
