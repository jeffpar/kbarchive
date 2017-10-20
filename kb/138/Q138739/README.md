---
layout: page
title: "Q138739: Service Pack 2 Upgrade Causes Macintosh Volumes Not To Appear"
permalink: /kb/138/Q138739/
---

## Q138739: Service Pack 2 Upgrade Causes Macintosh Volumes Not To Appear

{% raw %}

	Article: Q138739
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 3.51 Service Pack 2, the Macintosh volumes in
	Services for Macintosh do not appear and a red "X" is marked next to the volume
	icon. In addition, the following system event appears in the Event Viewer:
	
	  Event ID: 12035
	  Description:
	  Volume information for "<volume name>" could not be loaded. Setting
	  defaults.
	
	CAUSE
	=====
	
	The volume catalog database format has changed in Windows NT 3.51 Service Pack
	2.
	
	RESOLUTION
	==========
	
	Wait for several minutes or longer after you reboot the server for the first
	time. It may take a while for the catalog to appear, because the catalog has to
	be built. Subsequent starts of Windows NT 3.51 allow the volume to appear
	quicker. The size of the volume and the number of files or directories in the
	volume affect the time to build the database. For example, servers with volumes
	over 10 gigabytes (GB) may take over an hour for the volume to appear.
	
	
	Additional query words: prodnt sfm mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
