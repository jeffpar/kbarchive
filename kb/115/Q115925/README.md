---
layout: page
title: "Q115925: Network Setup with Customized SETUP.INF Doesn't Work"
permalink: /kb/115/Q115925/
---

## Q115925: Network Setup with Customized SETUP.INF Doesn't Work

{% raw %}

	Article: Q115925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Windows or Microsoft Windows for Workgroups
	version 3.1 or later with a customized network installation, you receive the
	following error message:
	
	  Windows Setup
	
	  Cannot find the SETUP.INF file necessary to run Setup. Be sure that the file
	  is in a directory of the default path.
	
	For example, using the following command could generate the above error message
	
	  setup /n /o:example.inf
	
	where /o: is pointing to a customized SETUP.INF file (in this case,
	EXAMPLE.INF).
	
	Also, no customized files specified to be copied in the [win.copy] section (or
	similar sections) are actually copied, and no new Program Manager groups are
	created.
	
	
	CAUSE
	=====
	
	This error occurs because the character-mode portion of the Windows Setup
	program uses the customized name for the SETUP.INF file, but the graphical
	portion of Setup expects to find the actual SETUP.INF filename.
	
	WORKAROUND
	==========
	
	To avoid this error, you must not use the /O switch when you use the /N option.
	If you need customized setup files, make a backup copy of SETUP.INF, then copy
	your customized .INF (EXAMPLE.INF in the example above) over SETUP.INF and run
	SETUP /N.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11 3.1 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
