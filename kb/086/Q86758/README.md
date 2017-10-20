---
layout: page
title: "Q86758: Disabling Print Manager in (WIN.SRC) Source File"
permalink: /kb/086/Q86758/
---

## Q86758: Disabling Print Manager in (WIN.SRC) Source File

{% raw %}

	Article: Q86758
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up Windows on a network (using Setup /N) and you manually disable
	Print Manager by changing Spooler=Yes to Spooler=No in the [windows] section of
	the WIN.SRC file, the Spooler=Yes change does not remain in your personal
	WIN.INI file. The setting reverts back to Spooler=Yes.
	
	CAUSE
	=====
	
	The only way to disable Print Manager is to clear the Use Print Manager check
	box in the Printers option of Control Panel.
	
	In Windows 3.1, the WIN.SRC (source file) that is found in the shared network
	directory (created by running Setup /A) is used as a source file for a user's
	WIN.INI file (created by running Setup /N).
	
	Additional query words: 3.10 3.11 WIN.SRC Spooler Print Manager
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
