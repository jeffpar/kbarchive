---
layout: page
title: "Q264982: Error Message When You View the Properties of a Metaverse Object"
permalink: /kb/264/Q264982/
---

## Q264982: Error Message When You View the Properties of a Metaverse Object

{% raw %}

	Article: Q264982
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg metadirectory Zoomit MMS
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access the properties of a metaverse object, you may receive one of the
	following error messages:
	
	  C:\program files\Zoomit\Compass\cache doesn't exist. Check your configuration
	  file.
	
	  -or-
	
	  C:\program files\Microsoft Metadirectory Services\Compass\cache doesn't
	  exist. Check your configuration file.
	
	CAUSE
	=====
	
	The currently logged on Microsoft Windows NT user does not have the NTFS file
	system Change permission on the local workstation in either the Program
	Files\Zoomit\Compass\Cache folder in Microsoft Metadirectory Services (MMS) 2.1,
	or the Program Files\Microsoft Metadirectory Services\Compass\Cache folder in
	MMS 2.2.
	
	RESOLUTION
	==========
	
	Add the user to a local security group that has Change permission on the
	Compass\Cache folder or assign the Change permission for the Compass\Cache
	folder to the appropriate user.
	
	MORE INFORMATION
	================
	
	When you access the properties of objects in a metadirectory, Compass writes
	temporary cache files to the Program Files\Zoomit\Compass\Cache folder or to the
	Program Files\Microsoft Metadirectory Services\Compass\Cache folder so that you
	can browse the folder more quickly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg metadirectory Zoomit MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
