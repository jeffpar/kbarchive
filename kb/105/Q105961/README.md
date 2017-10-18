---
layout: page
title: "Q105961: PC Win: Failure to Connect to SHARED.INI Skips MSMAIL.INI"
permalink: kb/105/Q105961/
---

## Q105961: PC Win: Failure to Connect to SHARED.INI Skips MSMAIL.INI

	Article: Q105961
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.0b of Microsoft Mail for Windows, if you start up Mail
	offline (not on the network) with the Mail message file (MMF) stored locally, no
	shared extensions commands are available if the SHARED.INI file cannot be found.
	
	CAUSE
	=====
	
	When Mail fails to connect to the SHARED.INI file, it does not read the
	MSMAIL.INI file.
	
	RESOLUTION
	==========
	
	Upgrade to version 3.2 of Microsoft Mail for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0b of
	Microsoft Mail for Windows. This problem was corrected in version 3.2 of
	Microsoft Mail for Windows.
	
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
