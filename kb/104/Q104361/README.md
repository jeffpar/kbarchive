---
layout: page
title: "Q104361: PC Forms: Attach Defaults to WINDOWS&#92;SYSTEM Directory"
permalink: /kb/104/Q104361/
---

## Q104361: PC Forms: Attach Defaults to WINDOWS&#92;SYSTEM Directory

{% raw %}

	Article: Q104361
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach a file to the routing form included with version 1.0 of
	Microsoft Electronic Forms Designer, the directory listed in the Attach File to
	Be Routed dialog box is the WINDOWS\SYSTEM directory. This may be inconsistent
	with other Windows applications, which default to the WINDOWS directory.
	
	CAUSE
	=====
	
	When you launch a custom form, the MEFLIB.DLL file is activated and the current
	directory is set to MEFLIB.DLL's location: WINDOWS\SYSTEM. When you select the
	Attach File to Be Reviewed button, the resulting dialog box defaults to this
	current directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
