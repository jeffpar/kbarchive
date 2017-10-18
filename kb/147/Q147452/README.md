---
layout: page
title: "Q147452: Macintosh Volumes Not Accessible After Reinstalling SFM"
permalink: kb/147/Q147452/
---

## Q147452: Macintosh Volumes Not Accessible After Reinstalling SFM

	Article: Q147452
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
	
	If you re-install Services for Macintosh on a Windows NT 3.51 Service Pack 2 or
	later computer with the original Windows NT 3.51 compact disc and start the
	service, the following events appear in the Event Viewer:
	
	  Event ID: 12035 Description: Volume information for "<volume name>"
	  could not be loaded. Setting defaults.
	
	  Event ID 10014 Description: Failed to register volume "<volume name>"
	  with the File Server for Macintosh Service. This volume may be removed from
	  the registry by using the Server Manager or File Manager Tools.
	
	In addition, when you attempt to re-create a previously shared Macintosh volume,
	the following error message appears:
	
	  A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	This problem occurs if you do not upgrade to Windows NT Service Pack 2 or later
	after you re-install Services for Macintosh. The volume catalog database format
	has changed in Windows NT 3.51 Service Pack 2 and later.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 Service Pack 2 or later.
	
	If you do not want to upgrade to Windows NT 3.51 Service Pack 2 or later, but
	correct the problem:
	
	1. Remove the current shared Macintosh volumes.
	
	2. Rename the root directory names of the Macintosh volumes.
	
	3. Create new directories with the previous directory names.
	
	4. Move all the data to the new directories.
	
	5. Re-share the volumes with the old volume names in Services for Macintosh.
	
	Additional query words: prodnt sfm mac sp2 sp3 sp4
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
