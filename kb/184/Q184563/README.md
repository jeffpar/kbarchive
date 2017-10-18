---
layout: page
title: "Q184563: FixAcls /Q Switch Causes Access Violation"
permalink: kb/184/Q184563/
---

## Q184563: FixAcls /Q Switch Causes Access Violation

	Article: Q184563
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation may occur if you start the FixAcls program with the
	following command line:
	
	  FIXACLS /Q
	
	RESOLUTION
	==========
	
	This error has been resolved in the latest version of FixAcls. The latest
	version of FixAcls is available for free download at the following ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Windows
	NT Server Resource Kit Version 4.0, Supplement Three.
	
	MORE INFORMATION
	================
	
	The /Q switch is used for so-called "quiet" operation. When the /Q switch is
	used, FixAcls will run automatically without displaying a window.
	
	Additional query words: ms_press ntrk reskit nt40 1-57231-344-7 1-57231-559- 8 1-57231-626-8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
