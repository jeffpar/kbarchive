---
layout: page
title: "Q296255: Setting the MaxFailedObjects Key in Microsoft Directory Synchron"
permalink: /kb/296/Q296255/
---

## Q296255: Setting the MaxFailedObjects Key in Microsoft Directory Synchron

{% raw %}

	Article: Q296255
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Services for NetWare version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MSDSS does not migrate a specific object in an otherwise successful directory
	synchronization, The service writes 150 objects, and then it records the
	following event message in the local System log:
	
	  MSDSS Event ID: 46
	  The maximum number of failed objects (150) have been added to the failed
	  object list The session has teminated. to allow more entries to be added,
	  please increase the value of the 'MaxFailedObjects' key in the Dirsync
	  registry parameters setting.
	
	CAUSE
	=====
	
	This behavior occurs because MSDSS defaults to writing 150 records if a specific
	object is not successfully added during a directory synchronization.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you can overwrite the default setting by modifying the
	MaxFailedObjects registry setting. The key that you need to add is in the MSDSS
	registry key, and not the Dirsync key (as indicated in the event message). The
	correct registry entry is:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSDSS\Parameters\
	  Value: MaxFailedObjects
	  Type: DWORD
	
	You need to add this entry by using Regedt32.exe because it does not exist by
	default.
	
	If the MaxFailedObject key is set to 0, MSDSS continues to write all records if a
	single object does not migrate.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbServicesNetware500 kbServicesNetwareSearch
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
