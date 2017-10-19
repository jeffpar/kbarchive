---
layout: page
title: "Q90324: Workgroups Mail and Mail 3.0 Do Not Work with COMPAQ DOS 3.31"
permalink: /kb/090/Q90324/
---

## Q90324: Workgroups Mail and Mail 3.0 Do Not Work with COMPAQ DOS 3.31

	Article: Q90324
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Workgroups Mail and Microsoft Mail 3.0 do not function properly with COMPAQ
	MS-DOS 3.31 due to changes made to the MS-DOS kernel that affect file-sharing
	capabilities. This is only true for COMPAQ MS-DOS 3.31. Workgroups Mail and Mail
	3.0 work properly with MS-DOS 3.3 or later. COMPAQ is the only OEM that shipped
	MS-DOS 3.31.
	
	For Mail to function properly, upgrade to MS-DOS 5.0 or later.
	
	MORE INFORMATION
	================
	
	Workgroups Mail and Mail 3.0 do byte-range locking of their .MMF files. This
	enables Mail to lock only portions of the .MMF file rather then the entire
	file.
	
	Changes made to the COMPAQ MS-DOS 3.31 kernel do not enable this to function
	properly.
	
	COMPAQ MS-DOS 3.31 is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 msmail 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	
