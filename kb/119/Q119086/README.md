---
layout: page
title: "Q119086: Windows for Workgroups Hangs w/ ArcNet Cards &amp; Novell NetWare"
permalink: /kb/119/Q119086/
---

## Q119086: Windows for Workgroups Hangs w/ ArcNet Cards &amp; Novell NetWare

{% raw %}

	Article: Q119086
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your machine stops responding (hangs) at the logo screen when you start Windows
	for Workgroups 3.11 with Novell NetWare NETX and an ArcNet card.
	
	
	NOTE: If you are using the Novell VLM redirector, the machine does not hang,
	instead, File Manager reports Novell server drives do not exist when you select
	them.
	
	CAUSE
	=====
	
	Most ArcNet cards come with the factory defaults settings of IRQ 2 and I/O Base
	02E0. IRQ 2 is reserved for the cascading BIOS, and 02E0 can cause a conflict
	with an installed COM 2 port. This problem can occur with any hardware conflict
	and is not limited to the default settings.
	
	RESOLUTION
	==========
	
	To correct this problem, reconfigure the ArcNet card for a different interrupt
	and a different port address.
	
	
	Additional query words: 3.11 shell lockup logo trxnet
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
