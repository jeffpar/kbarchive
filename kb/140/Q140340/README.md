---
layout: page
title: "Q140340: PC WSPlus: Using SPLUSGetFreeBusy Causes a GPF in VB 4.0"
permalink: kb/140/Q140340/
---

## Q140340: PC WSPlus: Using SPLUSGetFreeBusy Causes a GPF in VB 4.0

	Article: Q140340
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ Access Libraries (SAL), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access the Schedule+ Access Libraries (SAL), a call to
	SPLUSReadFreeBusy in a Microsoft Visual Basic version 4.0 application may
	generate a General Protection Fault.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.x of Microsoft
	Schedule+, SPLUS.DLL. A fix for this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. This
	problem has been fixed in SPLUS.DLL version 1.00.4002. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: salapp sal SPLUSGetFreeBusy organizer mapi schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSAL100
	Version           : :1.0
	
	=============================================================================
	
