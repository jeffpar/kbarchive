---
layout: page
title: "Q124045: PROFS: Requirement for Free and Busy Times"
permalink: /kb/124/Q124045/
---

## Q124045: PROFS: Requirement for Free and Busy Times

{% raw %}

	Article: Q124045
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.40a.0041
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, version 3.40a.0041 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using version 3.4a.0041 of Microsoft Mail Gateway to PROFS, free and busy
	times are being sent from PROFS to Microsoft Mail for PC Networks, (ms- csm to
	adminsch), but might not be viewable by the user in Microsoft Schedule+ Planner
	view.
	
	CAUSE
	=====
	
	You may have upgraded to version 3.2a of Mail for PC Networks. Mail for PC
	Networks version 3.2a has a file called TRNSCHED.DLL dated 8-17-94 with a size
	of 12,960 bytes.
	
	RESOLUTION
	==========
	
	The PROFS gateway requires TRNSCHED.DLL dated 3-16-94 with a size of 13,104
	bytes. It is on Disk 1 of the Microsoft Mail Gateway to IBM PROFS and Office
	Vision, version 3.4a.0041. Replace the 3.2a version with this version of the
	TRNSCHED.DLL.
	
	Additional query words: 3.40a.0041
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.40a.0041
	
	=============================================================================
	

{% endraw %}
