---
layout: page
title: "Q286401: UNCAuthenticationPassThrough Support Limitation in IIS 5.0"
permalink: kb/286/Q286401/
---

## Q286401: UNCAuthenticationPassThrough Support Limitation in IIS 5.0

	Article: Q286401
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbArtTypeISS kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you consult a page that is physically located on a remote virtual
	directory, the UNCAuthenticationPassthrough metabase property allows Internet
	Information Server 5.0 to access remote files using client (browser)
	credentials. However, this option is not currently supported, although this
	feature is documented in the IIS Resource Guide.
	
	MORE INFORMATION
	================
	
	This feature has not been extensively tested by the IIS team with the current
	version of this product. This scenario also increases the number of server
	message block (SMB) sessions between the redirector on IIS servers and the
	remote SMB server, and requires more resources on the SMB servers.
	
	Even if you do not use the UNCAuthenticationPassthrough feature, Microsoft
	recommends that you replicate contents locally to the IIS server rather than
	access file resources on network servers. This approach enables your Web sites
	to scale up and down, and to avoid access to the centralized file server (which
	may become a performance bottleneck). The Site Server Content Replication
	Service may help you to set up your replication environment.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbArtTypeISS kbISS 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
