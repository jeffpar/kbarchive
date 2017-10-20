---
layout: page
title: "Q300219: SChannel Error 80090305 When Installing Key Certificate"
permalink: /kb/300/Q300219/
---

## Q300219: SChannel Error 80090305 When Installing Key Certificate

{% raw %}

	Article: Q300219
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a key certificate in Key Manager under Internet
	Information Server (IIS) 4.0, you may receive the following error message:
	
	  "Unable to install the certificate because the security package could not be
	  loaded. Please contact your system administrator and ask to have your
	  security installation inspected.
	  SChannel error = 80090305"
	
	CAUSE
	=====
	
	The Schannel.dll entry is missing from the SecurityProviders key in the
	registry.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Browse to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders
	
	3. In the right pane, select the SecurityProviders value.
	
	4. On the Edit menu, click String.
	
	NOTE: The String menu selection is unavailable unless a value is selected in the
	right pane.
	
	5. A text box that contains the current dynamic-link libraries (DLLs) that are
	  associated with Security Providers appears. Click the end of the string, then
	  type ", schannel.dll" (without the quotation marks) at the end of the string
	  and click OK.
	
	NOTE: Be sure to type the comma (,)and the space before you type schannel.dll to
	separate the new DLL in the comma delimited string.
	
	6. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
