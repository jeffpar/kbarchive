---
layout: page
title: "Q126058: Err Msg: Cannot Create C:&#92;AUTOMAP&#92;USERDATA&#92;USA.MAP"
permalink: /kb/126/Q126058/
---

## Q126058: Err Msg: Cannot Create C:&#92;AUTOMAP&#92;USERDATA&#92;USA.MAP

	Article: Q126058
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Road Atlas for Windows, versions 1.06, 1.1, 3.0, 3.02, 3.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Road Atlas for Windows is opened, you may receive the following error
	message
	
	  Cannot Create <drive>:\AUTOMAP\USERDATA\USA.MAP
	
	  -or-
	
	  Cannot Create <drive>:\AUTOMAP\USERDATA\UK.MAP
	
	where <drive> is your hard drive (for example C).
	
	CAUSE
	=====
	
	This error may occur if Road Atlas has been moved to a new location, or if the
	AUTOMAP.INI file is corrupt.
	
	RESOLUTION
	==========
	
	To correct this problem, delete the AUTOMAP.INI file from the WINDOWS directory
	and restart Road Atlas.
	
	CAUTION: A partial installation of the Road Atlas 3.02 CD will stop working when
	the AUTOMAP.INI file is deleted. To correct this, reinstall Road Atlas from the
	CD after deleting the AUTOMAP.INI file from the WINDOWS directory.
	
	Additional query words: auto auto-map automap reference 3.0 Cannot Create c:\AUTOMAP\USERDATA\UK.MAP Cannot Create c:\AUTOMAP\USERDATA\USA.MAP
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapRoadAtlas106 kbAutomapRoadAtlas110 kbAutomapRoadAtlas300 kbAutomapRoadAtlas302 kbAutomapRoadAtlas303
	
	=============================================================================
	
