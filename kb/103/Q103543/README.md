---
layout: page
title: "Q103543: Multiple-Configuration Menu Statements in AUTOEXEC.BAT Fail"
permalink: /kb/103/Q103543/
---

## Q103543: Multiple-Configuration Menu Statements in AUTOEXEC.BAT Fail

{% raw %}

	Article: Q103543
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your second parameter in the AUTOEXEC.BAT GOTO command is not correctly
	capitalized or both parameters are not enclosed in quotation marks, your
	AUTOEXEC.BAT file may not be processed correctly.
	
	CAUSE
	=====
	
	When you use multiple-configuration menus, both expressions on either side of
	the double-equal sign (==) (for the GOTO command) must be enclosed in
	double-quotation marks. Also, the expression on the right side of the == is case
	sensitive.
	
	RESOLUTION
	==========
	
	Ensure your GOTO command in the AUTOEXEC.BAT file uses the proper syntax (noted
	above).
	
	Additional query words: 6.22 6.20 upper lower multiple configurations
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
