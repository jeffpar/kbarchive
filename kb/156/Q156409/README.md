---
layout: page
title: "Q156409: Basic Authentication Prompt Before NT Challenge/Response"
permalink: /kb/156/Q156409/
---

## Q156409: Basic Authentication Prompt Before NT Challenge/Response

	Article: Q156409
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you select both Basic (Clear Text) and Windows NT Challenge/Response
	authentication from WWW Services properties and try to access the web server
	from a client logon to the Internet Information Server's domain, the web client
	should use the client logon credentials from the cache. However, a Username
	Password dialog box will appear on the web client.
	
	CAUSE
	=====
	
	If you select both Basic (Clear Text) and Windows NT Challenge/Response
	authentication from WWW Services properties, Internet Information Server should
	try to authenticate with Windows NT Challenge/Response authentication first. If
	that fails, Internet Information Server should try to authenticate with Basic
	(Clear Text). However, it is a known problem that Internet Information Server
	executes this sequence in reverse order.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. This problem was corrected in Microsoft Internet Information
	Server version 2.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
