---
layout: page
title: "Q90920: Workgroup Connection Setup Program Is Black &amp; White on an 8514"
permalink: /kb/090/Q90920/
---

## Q90920: Workgroup Connection Setup Program Is Black &amp; White on an 8514

	Article: Q90920
	Product(s): Microsoft Access Distribution Kit
	Version(s): 1.0; MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup program for the Workgroup Connections and the Workgroup Connections
	Mail Client only runs in black and white on systems with an 8514 or compatible
	display subsystem.
	
	CAUSE
	=====
	
	The Workgroup Connections Setup program does not have the ability to detect an
	8514 or compatible display adapter. This is because the necessary 8514 detection
	code has been shown to conflict with some network adapters and can potentially
	cause other problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Workgroup Connections version
	1.0 and Microsoft Workgroup Add-On for MS-DOS version 3.11.
	
	Additional query words: 3.11 1.00 color
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311DOS
	Version           : :1.0; MS-DOS:3.11
	
	=============================================================================
	
