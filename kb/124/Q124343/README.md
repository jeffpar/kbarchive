---
layout: page
title: "Q124343: MSDLC T1 Timer Does Not Back Off"
permalink: kb/124/Q124343/
---

## Q124343: MSDLC T1 Timer Does Not Back Off

	Article: Q124343
	Product(s): Microsoft Windows NT
	Version(s): 2.2,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a link is lost or temporarily unavailable, Microsoft data link control
	(MSDLC) clients retransmit frames at the default value for T1, rather than
	backing off exponentially.
	
	CAUSE
	=====
	
	This problem occurs due to an error in the MSDOS-based version of MSDLC
	algorithm for backing off the T1 timer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MSDLC. A fix to this problem is
	in development, but has not been regression-tested and may be destabilizing in
	production environments. Microsoft does not recommend implementing this fix at
	this time. Contact Microsoft Product Support Services for more information on
	the availability of this fix.
	
	
	NOTE: Although T1 will back off exponentially after installing this hotfix, by
	specification, it is not allowed to exceed the current value of Ti. Therefore,
	if the value of Ti is set low, T1 will only back off until doubling it again
	would cause it to exceed Ti.
	
	Additional query words: wfw wfwg prodnt 3.10 2.20 MSDLC client
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbLanManSearch kbWFWSearch kbWFW311 kbLanMan220
	Version           : :2.2,3.11
	
	=============================================================================
	
