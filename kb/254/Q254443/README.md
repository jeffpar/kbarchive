---
layout: page
title: "Q254443: MapPoint 2001: &quot;Error 1305&quot; When You Install Program"
permalink: /kb/254/Q254443/
---

## Q254443: MapPoint 2001: &quot;Error 1305&quot; When You Install Program

{% raw %}

	Article: Q254443
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft MapPoint 2001, you may receive the
	following error message:
	
	  Error 1305: Error reading from file
	  \\<sharename>\msmap\pfiles\msmap\data\usa_cd.mad. Verify that this file
	  exists and that you can access it.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You install MapPoint 2001 from a shared CD-ROM drive.
	
	- You select the Full installation option.
	
	RESOLUTION
	==========
	
	To resolve this issue, insert the Run CD-ROM into the shared CD-ROM drive, and
	then click Retry.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft MapPoint 2001.
	
	MORE INFORMATION
	================
	
	In the error message mentioned in the "Symptoms" section of this article,
	<sharename> is the name of the shared CD-ROM drive.
	
	Additional query words: mp2001 map point network setup
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001 kbMapPoint2002
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
