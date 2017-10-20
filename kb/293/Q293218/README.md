---
layout: page
title: "Q293218: XWEB: &quot;Failed to Create MAPI.Session&quot; Error Message in OWA"
permalink: /kb/293/Q293218/
---

## Q293218: XWEB: &quot;Failed to Create MAPI.Session&quot; Error Message in OWA

{% raw %}

	Article: Q293218
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to Outlook Web Access (OWA), you may receive the
	following error message in you browser:
	
	  Internal error: failed to create MAPI.Session.
	
	When you click OK, you return to the OWA logon page.
	
	CAUSE
	=====
	
	This issue can occur if the Cdo.dll Collaboration Data Objects library is not
	properly registered.
	
	RESOLUTION
	==========
	
	To resolve this issue, reregister the Cdo.dll library by typing the following
	syntax at a command prompt:
	
	  "regsvr32 c:\winnt\system32\cdo.dll" (without the quotation marks)
	
	After you run this command, you receive the following confirmation message from
	RegSvr32:
	
	  DllRegisterServer in Cdo.dll succeeded
	
	
	
	Additional query words: logon.asp Active Server Pages internal error mapi.session
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
