---
layout: page
title: "Q168501: ASP Downloads Text Instead of Executing"
permalink: kb/168/Q168501/
---

## Q168501: ASP Downloads Text Instead of Executing

	Article: Q168501
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Active Server Pages (ASP) download instead of executing, even after
	you install the ASP fix for IIS.
	
	CAUSE
	=====
	
	You may have a virtual directory defined to a physical directory which parent is
	another virtual directory, and both have different permissions.
	
	Example
	-------
	
	Physical Directory c:\InetPub\wwwroot has an alias of "/" with Read Access
	
	Physical Directory c:\InetPub\wwwroot\cgi-scripts has an alias of "/cgi-scripts"
	with Execute access.
	
	If you were to type in <server>/cgi-scripts/<filename>.asp everything
	would work. However, if you used the 8.3 naming convention ..
	<server>/cgi-sc~1/<filename>.asp, the server would not find the
	virtual directory because it is not aware of long file names and their 8.3
	equivalents). Because it did not find a virtual directory, it would reference
	the file through the physical directory structure. Therefore, it would load the
	ASP file with the roots access of Read.
	
	
	WORKAROUND
	==========
	
	It is recommended that you never create virtual directories to physical
	directories under existing virtual directories.
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
