---
layout: page
title: "Q216952: ERROR 12035 on SFM Volume Creation After Installing SP4"
permalink: /kb/216/Q216952/
---

## Q216952: ERROR 12035 on SFM Volume Creation After Installing SP4

	Article: Q216952
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new volume after installing Windows NT 4.0 Service Pack 4, you
	get the following message in the error log:
	
	  Event ID: 12035
	  Source: MacFIle
	  Error description: "Volume information for "volume name" could not be loaded.
	  Setting defaults."
	
	CAUSE
	=====
	
	This problem occurs because error checking for volume information was enhanced
	in the Windows NT SP4 release and, because the volume has not yet been created,
	the Services for Macintosh service cannot find this information.
	
	RESOLUTION
	==========
	
	To work around this problem, do a controlled restart of the computer and you
	will see that no errors are posted to the event log and that the volume is
	functioning normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: sfm regression
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400xsearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	
	=============================================================================
	
