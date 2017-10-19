---
layout: page
title: "Q259051: Compass Client Shuts Down Unexpectedly"
permalink: /kb/259/Q259051/
---

## Q259051: Compass Client Shuts Down Unexpectedly

	Article: Q259051
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Metadirectory Services (MMS) Compass client may stop responding
	(hang) or shut down unexpectedly. This may occur frequently. This may also occur
	when you attempt to gain access to a specific object in the directory.
	
	CAUSE
	=====
	
	The Compass client caches files locally to improve the speed of directory
	access. If the cached files become corrupted, the Compass client may hang or
	shut down unexpectedly.
	
	RESOLUTION
	==========
	
	Clear the entire contents of the cache folder. The default cache location is the
	Program Files\Zoomit\Compass\Cache folder or the Program Files\Microsoft
	Metadirectory Services\Compass\Cache folder.
	
	To clear the cache, use Windows Explorer to delete the entire contents (files and
	folders) of the Program Files\Zoomit\Compass\Cache folder or the Program
	Files\Microsoft Metadirectory Services\Compass\Cache folder. The cache contents
	are re-created automatically when you next start Compass.
	
	Additional query words: VIA Zoomit
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
