---
layout: page
title: "Q150335: NEC VERSA/P Hangs with Diamond Speedstar 64 Video Adapter"
permalink: /kb/150/Q150335/
---

## Q150335: NEC VERSA/P Hangs with Diamond Speedstar 64 Video Adapter

{% raw %}

	Article: Q150335
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Diamond Speedstar 64 video adapter in a NEC VERSA/P 75
	computer running Windows for Workgroups 3.11, the computer may stop responding
	(hang) when you log on to a Microsoft Windows NT domain if you have logon
	scripts located on the Windows NT domain controller.
	
	CAUSE
	=====
	
	The Diamond Speedstar 64 video adapter driver is not compatible with the NEC
	VERSA/P 75 computer. The Diamond Speedstar video adapter driver causes the
	computer to hang when it runs logon script files from the Windows NT server.
	
	RESOLUTION
	==========
	
	To work around this behavior, use a different video adapter driver (such as the
	standard VGA driver), or install a different video adapter.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
