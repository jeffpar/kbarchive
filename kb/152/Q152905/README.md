---
layout: page
title: "Q152905: XCLN: Err Msg: Upload of Offline Changes Could not be..."
permalink: kb/152/Q152905/
---

## Q152905: XCLN: Err Msg: Upload of Offline Changes Could not be...

	Article: Q152905
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 Service Packs 1, 2 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from the Microsoft Exchange client for Windows 3.x to the
	Microsoft Exchange client for Windows 95, if the Microsoft Exchange client for
	Windows 3.x was included in the Startup group, you might receive the following
	error when you manually start the client from the Startup group or when the
	client starts automatically at system start up:
	
	  Upload of offline changes could not be completed. The client operation
	  failed.
	
	On computers with low amounts of available memory, you might receive an "Out of
	memory" error instead of the error listed above.
	
	MORE INFORMATION
	================
	
	These errors occur when the Microsoft Exchange client for Windows 95 has been
	installed in the Microsoft Exchange client for Windows 3.x subdirectory. By
	default, both will attempt to install in the C:\Exchange directory. The
	Microsoft Exchange client for Windows 95 Setup program detects the existing
	subdirectory and will prompt you to install the Microsoft Exchange client for
	Windows 95 in the same subdirectory. However, it will not replace all of the
	existing files. In addition, it will not detect the presence of the Microsoft
	Exchange client icon in the Startup group so this icon will still point to
	Exchng.exe instead of Exchng32.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0; winnt:4.0
	
	=============================================================================
	
