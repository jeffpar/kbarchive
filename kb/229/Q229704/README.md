---
layout: page
title: "Q229704: IIS 4.0 Supports HTTP 1.1 File Download Resume Capability"
permalink: /kb/229/Q229704/
---

## Q229704: IIS 4.0 Supports HTTP 1.1 File Download Resume Capability

{% raw %}

	Article: Q229704
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you host Web content on a computer running IIS, it is possible for Web
	browsers that support HTTP 1.1 protocol to resume interrupted file downloads
	where they left off, without having to re-download the entire file again. This
	functionality is provided in HTTP 1.1 protocol, as noted in the HTTP 1.1 RFC.
	
	MORE INFORMATION
	================
	
	Specifically, the Range Retrieval Request field allows for the following
	functionality:
	
	  14.36.2 Range Retrieval Requests
	
	  HTTP retrieval requests using conditional or unconditional GET methods may
	  request one or more sub-ranges of the entity, instead of the entire entity,
	  using the Range request header, which applies to the entity returned as the
	  result of the request:
	
	  Range = "Range" ":" ranges-specifier
	
	  A server MAY ignore the Range header. However, HTTP/1.1 origin servers and
	  intermediate caches SHOULD support byte ranges when possible, since Range
	  supports efficient recovery from partially failed transfers, and supports
	  efficient partial retrieval of large entities.
	
	Because IIS 4.0 and Internet Explorer versions 4.0 and 5.0 support HTTP 1.1, a
	client can re-initiate a broken or interrupted download and continue downloading
	the file at the point where the download was interrupted. This can be extremely
	helpful from both a customer satisfaction and network bandwidth management
	viewpoint for companies that host large files for general download on their Web
	site. However, there are some caveats, such as the following:
	
	- The local cache settings on the browser must be set large enough, so that the
	  received portion of the downloaded file fits in the browser cache. If an
	  empty browser cache has a size limit of 10 MB configured and a 15-MB file is
	  being downloaded, the resume feature will not work if more than 10 MB of the
	  file was downloaded before the download was cancelled. Internet Explorer will
	  immediately remove this partially downloaded file from its cache to keep it
	  within the size limit specified. This prevents the resume feature from
	  working properly. To resolve this issue, set the cache size to a value that
	  is large enough to accommodate large files being downloaded.
	
	- If the Web site you are browsing is actually a Web farm located behind some
	  sort of load balancing device, such as a Cisco LocalDirector, the load
	  balancing device will have to be configured to allow a user to remain
	  connected to the specific Web server in the farm that the file was originally
	  being downloaded from. If a user starts and stops the download on one server,
	  and then gets routed to a different identical server in the farm to resume
	  the download, the resume feature will fail. The file resume request must be
	  sent to the same server that the file was originally being downloaded from.
	
	- The default LocalDirector settings assume that it will be used for standard
	  Web server functions. As a result, the configuration is geared toward the
	  small quick sessions typical for Web page service; it not geared towards the
	  larger and longer sessions that are typical for large product downloads. Most
	  notably, the sticky value controls the window in which a user may reconnect
	  to the site and have a guarantee of hitting the same server behind the
	  LocalDirector proxy. By default, this is set to 0 (minutes), which means that
	  a user will never be guaranteed to hit the same server and as such, resumable
	  downloads will not function. By increasing the value modestly (for example,
	  to 10 minutes), resumable downloads can then be supported.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
