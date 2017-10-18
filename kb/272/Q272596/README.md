---
layout: page
title: "Q272596: IIS: Enabling HTTP Compression Returns Content with 1997 Date"
permalink: kb/272/Q272596/
---

## Q272596: IIS: Enabling HTTP Compression Returns Content with 1997 Date

	Article: Q272596
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable HTTP compression on a Microsoft Windows 2000 Server that is
	running Internet Information Services (IIS) version 5.0, all compressed content
	is returned with an expiration date of January 1, 1997.
	
	CAUSE
	=====
	
	All compressed content is set to expire in the past to prevent proxy servers
	from caching the content and returning compressed content to a client that does
	not understand HTTP compression.
	
	MORE INFORMATION
	================
	
	For more information, see the "About Capacity Planning" and "Enabling HTTP
	Compression" in the online documentation for IIS 5.0 on a Windows 2000 server at
	the following sites:
	
	  http://localhost/iishelp/iis/htm/core/iiprftn.htm
	
	  http://iisteam/iishelp/iis/htm/core/iihttpc.htm
	
	For additional information about HTTP compression, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q259760 Compression Is Not Enabled on POST Request
	
	  Q234497 How to Specify Additional Document Types for HTTP Compression
	
	  Q241428 HTTP Compression Does Not Compress Office Documents
	
	  Q255951 HTTP Compression Methods and Files Used by IIS 5.0
	
	  Q255801 How to Determine if HTTP Compression Is in Use
	
	  Q255844 Default Document Is Not Compressed When Compression Is Enabled
	
	  Q258721 HTTP Compression Will Not Work with URLs that Include a Forward Slash
	  "/"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
