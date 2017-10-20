---
layout: page
title: "Q69768: MIRROR Command Returns &quot;Invalid Parameter(s)&quot; Error"
permalink: /kb/069/Q69768/
---

## Q69768: MIRROR Command Returns &quot;Invalid Parameter(s)&quot; Error

{% raw %}

	Article: Q69768
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the MS-DOS version 5.0 MIRROR command, you may receive the following
	error message:
	
	  Invalid parameter(s) specified.
	
	CAUSE
	=====
	
	This error message is returned when you attempt to use the MIRROR command on an
	ASSIGNed, JOINed, SUBSTed, or network drive. The MIRROR command (including its
	delete tracking function) is not intended to be used on ASSIGNed, JOINed,
	SUBSTed, or network drives.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
