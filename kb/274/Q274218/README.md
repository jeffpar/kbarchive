---
layout: page
title: "Q274218: Server Returns &quot;Diagnostic 52&quot; When Deleting Replicated Object"
permalink: /kb/274/Q274218/
---

## Q274218: Server Returns &quot;Diagnostic 52&quot; When Deleting Replicated Object

	Article: Q274218
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 03-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Compass, you cannot delete an object in the directory. When you
	attempt to do so, you receive the following error message:
	
	  Diagnostic returned: 52.
	
	CAUSE
	=====
	
	The object that you are trying to delete was originally created through a
	replication agreement, and therefore contains a referral to the original object
	on the supplier computer, but the supplier computer cannot be contacted. This
	may be either a temporary, or permanent circumstance. When the consumer server
	receives the delete request, it attempts to contact the original (supplier)
	Microsoft Metadirectory Services (MMS) computer. Because that computer cannot be
	reached, the delete attempt does not succeed.
	
	RESOLUTION
	==========
	
	To correct this behavior, you must temporarily modify the mode of the request,
	delete the object, and then reset the mode to its original form. To change the
	mode, follow these steps:
	
	1. In Compass, log on to the consumer MMS server.
	
	2. On the Options menu, click "Refer to", and then click Local Server.
	
	3. Using Compass, right-click the object that you want to remove, and then click
	  Delete.
	
	   - If you want to delete only the selected object, click "Delete selected
	     entries".
	
	   - If you want to delete only the objects below the selected object, click
	     "Delete child entries only".
	
	4. On the Options menu, click "Refer to", and then click The Known Universe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
