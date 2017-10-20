---
layout: page
title: "Q140074: Mac Gty: Removing Gateway Resources from Gateway Mail Server"
permalink: /kb/140/Q140074/
---

## Q140074: Mac Gty: Removing Gateway Resources from Gateway Mail Server

{% raw %}

	Article: Q140074
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you remove the gateway resource from the Macintosh gateway mail server, the
	gateway recipients on the downstream Macintosh servers will also be removed.
	This will include addresses in personal address lists and groups. If the gateway
	resource is reinstalled, the same effect will be seen.
	
	MORE INFORMATION
	================
	
	When you use the connection installer to remove and reinstall the gateway
	resource, the downstream Macintosh postoffices that use the access component
	extracted from the gateway will send their normal requests to the gateway server
	asking for gateway recipient updates. The gateway will respond by sending an
	empty list, even when the identical gateway id and name are used.
	
	Though it is possible to restore the gateway recipient list, the personal lists
	and groups will need to be rebuilt.
	
	
	
	Additional query words: 3.10 CNU gateway recipient resource downstream
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN31xSearch
	Version           : WINDOWS:3.1x
	
	=============================================================================
	

{% endraw %}
