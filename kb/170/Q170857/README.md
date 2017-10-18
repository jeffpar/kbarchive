---
layout: page
title: "Q170857: Error Message: HTTP/1.0 403 Access Forbidden"
permalink: kb/170/Q170857/
---

## Q170857: Error Message: HTTP/1.0 403 Access Forbidden

	Article: Q170857
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the Internet Information Server (IIS) from a browser, you
	may get the following error message:
	
	  HTTP/1.0 403 Access Forbidden
	
	CAUSE
	=====
	
	If the Directory Browsing Allowed option is clear (not selected) in Internet
	Service Manager WWW Service Properties Directories, and the Enable Default
	Document option is selected, you will get the above error message.
	
	Also, the default document listed has a different name than the actual default
	document file, for example, the default document name listed is Default.htm, and
	the actual file is Default.html.
	
	WORKAROUND
	==========
	
	Select the Directory Browsing Allowed option, or modify either the default
	document name listed in Internet Service Manager or the actual default document
	file name to ensure that they match.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
