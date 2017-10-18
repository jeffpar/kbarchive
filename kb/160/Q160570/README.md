---
layout: page
title: "Q160570: Gopher Query Will Access Violate in Inetinfo.exe"
permalink: kb/160/Q160570/
---

## Q160570: Gopher Query Will Access Violate in Inetinfo.exe

	Article: Q160570
	Product(s): Internet Information Server
	Version(s): Winnt:1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you issue the following gopher query to the server, the server will access
	violate in Inetinfo.exe:
	
	  gopher://<servername>/11 \..
	
	CAUSE
	=====
	
	This is caused by an error in the Internet Information Server gopher code that
	fails when there is no leading "/".
	
	
	WORKAROUND
	==========
	
	Place a leading "/" in your URL:
	
	  gopher://<servername>/11/ \..
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Internet Information
	Server versions 1.0 and 2.0. This problem was corrected in U.S. Service Pack 2.0
	for Microsoft Windows NT. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sp2
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : Winnt:1.0,2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
