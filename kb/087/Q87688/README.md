---
layout: page
title: "Q87688: PRB: &quot;Not a Database File&quot; Error Using a Database File"
permalink: kb/087/Q87688/
---

## Q87688: PRB: &quot;Not a Database File&quot; Error Using a Database File

	Article: Q87688
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 23-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Attempting to open a database file in Microsoft FoxPro fails with either a
	
	  "Not a database file"
	
	or a
	
	  "Not a Table"
	
	error message.
	
	CAUSE
	=====
	
	The database file header has been corrupted.
	
	RESOLUTION
	==========
	
	Even though FoxPro includes no method to rebuild the damaged database header,
	several third-party database-recovery utilities are available. Some utilities
	are listed below.
	
	MORE INFORMATION
	================
	
	For information about performing table maintenance using FoxPro low-level file
	functions, please see the following article in the Microsoft Knowledge Base:
	
	  Q135905 How to Retrieve Records that were Previously Zapped
	
	The following list of database-recovery utilities is provided for your
	convenience. Products are listed in alphabetical order by product name. None of
	the products on the list is recommended over any other, nor over products not on
	the list. Please notify us of any additions, updates, or corrections to the
	list.
	
	These utilities are supported by the third-party developers that wrote the
	utilities, not by Microsoft. The utilities on the list below have not been
	tested by Microsoft. The products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	  dSalvage
	  Comtech Publishing, Limited
	  P.O. Box 12340
	  Reno, NV 89510
	  Phone: (702) 825-9000
	
	  DTools
	  EL Software
	  3809 Plaza Drive, #107-360
	  Oceanside, CA 92056
	  Phone: (619) 439-6617
	  Fax: (619) 439-9612
	
	  HeadFix or QuickFix-2
	  Hilco Software
	  11266 Barnett Valley Road
	  Sepastopol, CA 95472-9555
	  Phone: (707) 829-5011
	  Fax: (707) 829-5710
	
	  MemoPlus
	  Rory Data International
	  17 Thornburn Road
	  North Potomac, MD 20878
	  Phone: (301) 251-0497
	  Fax: (301) 258-6862
	
	  Recover 2.0
	  Abri Technologies
	  HC 62, Box 100K
	  Great Cacapon, WV USA 25422
	  Phone: (304) 947-7129
	  Fax: (304) 947-7628
	  Web site: http:\\www.abri.com
	  CompuServe: FoxForum/VFox libraries
	
	
	Additional query words: data corrupt damaged salvage dbfix norton 3rd third party list listing errmsg err msg not a table/dbf
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300bMac kbVFP300 kbVFP500
	Version           : :2.0,2.5,2.5a,3.0,3.0b,5.0
	Issue type        : kbprb
	
	=============================================================================
	
