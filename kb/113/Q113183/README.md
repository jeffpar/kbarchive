---
layout: page
title: "Q113183: Difficulty Adding Support for ODI/NDIS or IPX/SPX"
permalink: /kb/113/Q113183/
---

## Q113183: Difficulty Adding Support for ODI/NDIS or IPX/SPX

{% raw %}

	Article: Q113183
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set up the ODI/NDIS or IPX/SPX support drivers in Microsoft
	Workgroup Add-On for MS-DOS, you are continually prompted to "Add driver for
	network adapter."
	
	CAUSE
	=====
	
	The ODI/NDIS and IPX/SPX support drivers cannot be installed if the Novell
	NetWare drivers are not loaded when you run Workgroup Add-On for MS-DOS Setup.
	
	RESOLUTION
	==========
	
	To correct this problem, ensure that the Novell NetWare drivers are loaded
	before you run Workgroup Add-On for MS-DOS Setup.
	
	Additional query words: 2.0 keeps on prompting over again loop 3.11 3.12 4.0 wgao error message
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	

{% endraw %}
