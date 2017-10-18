---
layout: page
title: "Q103854: PROFS: Maximum Mailbag Size Reads 00000000 on Host Access"
permalink: kb/103/Q103854/
---

## Q103854: PROFS: Maximum Mailbag Size Reads 00000000 on Host Access

	Article: Q103854
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.3,3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.2, 3.3, 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Once you have properly uploaded and configured the Host Access component of
	versions 3.2, 3.3, and 3.4 of the Microsoft Mail Gateway to PROFS, you must log
	on the MSGATE ID again to allow certain files and parameters to be properly
	initialized.
	
	The ID comes up as normal, but you receive this header message:
	
	  Maximum mailbag size (bytes) that can currently be processed: 00000000
	
	CAUSE
	=====
	
	If you IPL the ID without first logging off, the Host Access component is not
	properly initialized.
	
	RESOLUTION
	==========
	
	Correctly log off the VM ID, and then log back on. This allows the files and
	parameters to initialize properly.
	
	
	Additional query words: 3.20 3.30 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS330 kbMailGateIBMPROFS340
	Version           : :3.2,3.3,3.4
	
	=============================================================================
	
