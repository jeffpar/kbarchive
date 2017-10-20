---
layout: page
title: "Q165150: How to Use Pragma: No-cache with IIS and IE"
permalink: /kb/165/Q165150/
---

## Q165150: How to Use Pragma: No-cache with IIS and IE

{% raw %}

	Article: Q165150
	Product(s): Internet Information Server
	Version(s): Winnt:3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 26-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To prevent Microsoft Internet Explorer (IE) clients from caching web pages, it
	may be necessary to use the Pragma: No-cache header.
	
	MORE INFORMATION
	================
	
	The following script code can be used in a Microsoft Active Server Page (ASP) to
	insert the Pragma: No-cache tag into the HTTP header.
	
	NOTE: This script code MUST be the first line of the ASP file.
	
	  <% Response.AddHeader "Pragma", "No-Cache" %>
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis300
	Version           : Winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
