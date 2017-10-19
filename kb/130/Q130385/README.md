---
layout: page
title: "Q130385: PC Mac: Err Msg: Error 43: Unable to Create Working Directory"
permalink: /kb/130/Q130385/
---

## Q130385: PC Mac: Err Msg: Error 43: Unable to Create Working Directory

	Article: Q130385
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you save an attachment from versions 3.0 and 3.2 of Microsoft Mail for PC
	Networks, Macintosh workstation, you may receive the following error message:
	
	  Error 43: Unable to create working directory file_name.
	
	The attachment will be correctly saved if you select OK after you get the above
	error.
	
	CAUSE
	=====
	
	This problem is caused by the LOWRCASE.GLB file being located in the GLB
	subdirectory of the Microsoft Mail postoffice database.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the LOWRCASE.GLB file from the GLB subdirectory.
	You can either rename the file or delete it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks, Macintosh workstation. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	NOTE: The problem occurs in versions 3.0.3 to 3.0.6 of the Macintosh workstation.
	
	MORE INFORMATION
	================
	
	The LOWRCASE.GLB file is only required on postoffices located on some NFS- type
	(like Sun's PC-NFS) network operating systems and possibly on AT&T's Starlan
	network operating system. It is usually not required on postoffices located on
	other network operating systems. Therefore, a workaround for this problem is to
	simply remove all LOWRCASE.GLB files located in the GLB subdirectories of any
	postoffices that are not stored on NFS-type or AT&T's Starlan network
	operating systems.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q127079 PC Mac DB: Purpose and Location of LOWRCASE.GLB
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
