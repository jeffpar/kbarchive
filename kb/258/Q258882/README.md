---
layout: page
title: "Q258882: Management Agent Can Be Damaged by Low-Disk-Space Condition"
permalink: kb/258/Q258882/
---

## Q258882: Management Agent Can Be Damaged by Low-Disk-Space Condition

	Article: Q258882
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 18-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Management Agent (MA) icon may not be visible in the Compass client, or if
	the MA icon is visible, commands may be missing from the Actions menu.
	
	CAUSE
	=====
	
	This issue can occur if you run the MA with insufficient disk space. Operating
	the MA with insufficient disk space can cause unpredictable behavior, including
	corruption of the MA.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the available disk space. Monitor the disk space
	on a regular basis to prevent this issue from occurring. You can also run
	Viacompact to resolve this issue, but in most cases you must delete and
	re-create the MA. The database may also be damaged; and you may need to
	reinstall Microsoft Metadirectory Services.
	
	
	Additional query words: VIA mms
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
