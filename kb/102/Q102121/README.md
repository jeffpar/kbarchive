---
layout: page
title: "Q102121: Mac Wkst: DCA IRMA Workstation Conflict"
permalink: /kb/102/Q102121/
---

## Q102121: Mac Wkst: DCA IRMA Workstation Conflict

{% raw %}

	Article: Q102121
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running version 2.0, 3.0, or 3.1 of Microsoft Mail for AppleTalk Networks
	and versions of DCA's IRMA WorkStation for Mac earlier than version 3.0.1, the
	Macintosh may occasionally freeze or lock up.
	
	CAUSE
	=====
	
	The IRMA driver remaps the keyboard. This particular remapping causes a conflict
	with Microsoft Mail.
	
	RESOLUTION
	==========
	
	DCA has changed the way the keyboard is mapped in versions 3.0.1 and later of
	the IRMA WorkStation, thus resolving this conflict. To correct the situation,
	upgrade to DCA IRMA version 3.0.1 or later.
	
	MORE INFORMATION
	================
	
	The IRMA software provides 3270 emulation for mainframe connectivity.
	
	DCA's IRMA WorkStation for Mac is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 2.00 3.00 3.10 conflict 3rd party
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN200
	Version           : WINDOWS:2.0,3.0,3.1
	
	=============================================================================
	

{% endraw %}
