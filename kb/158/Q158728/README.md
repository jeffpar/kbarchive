---
layout: page
title: "Q158728: Gopher Types Not Implemented w/ Internet Information Server 2.0"
permalink: kb/158/Q158728/
---

## Q158728: Gopher Types Not Implemented w/ Internet Information Server 2.0

	Article: Q158728
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Gdsset.exe to create a Gopher service tag file, you may get the
	following error message:
	
	  Unable to write tag file.
	
	CAUSE
	=====
	
	The Internet Information Server documentation incorrectly indicates the
	following tag file types are supported:
	
	Code       Type
	----       ----
	2          CSO Phone-book Server
	6          uuencoded files
	8          Telnet
	T          TN3270
	
	These Gopher tag types are not implemented and are not supported under the
	Internet Information Server version 2.0 Gopher services.
	
	MORE INFORMATION
	================
	
	
	Additional query words: gopher tag file
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis200
	Version           : winnt:2.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
