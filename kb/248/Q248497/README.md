---
layout: page
title: "Q248497: Event ID 113: &quot;Instance 1 Has Invalid Binding Descriptor&quot;"
permalink: /kb/248/Q248497/
---

## Q248497: Event ID 113: &quot;Instance 1 Has Invalid Binding Descriptor&quot;

	Article: Q248497
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, used with:
	   - Microsoft Internet Information Server 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the following entries in Event Viewer:
	
	  Event ID: 113
	  Source: W3SVC
	  Type: Warning
	  Category: NoneDescription: Instance 1 has invalid binding descriptor X
	
	  Event ID: 115
	  Source: W3SVC
	  Type: Error
	  Category: None
	  Description: The service could not bind instance 1. The data is the error
	  code.
	
	CAUSE
	=====
	
	These entries can be caused by invalid information in the Internet Information
	Server (IIS) metabase for SecureBindings. The key is LM\W3SVC\1\SecureBindings.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the SecureBindings setting in the IIS metabase. To
	do this, use the Metaedit tool included with the Microsoft Internet Information
	Server Resource Kit. Change the value in the LM\W3SVC\1\SecureBindings key to a
	valid port. This is typically 443, with ":" on each side of the port number.
	
	You can also change the SecureBindings setting from a command prompt by typing
	"adsutil set w3svc/1/SecureBindings :443:" (without the quotation marks) from
	the Winnt\System32\Inetsrv\Adminsamples folder. Port 443 is the default port for
	SecureBindings, but you can replace it with another port number.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
