---
layout: page
title: "Q139903: Doc Err: File Manager Registry Entries for Users"
permalink: /kb/139/Q139903/
---

## Q139903: Doc Err: File Manager Registry Entries for Users

{% raw %}

	Article: Q139903
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	The "Windows NT Resource Guide," Volume 1, page 607 states that the
	registry value AddOns is type Boolean. The correct type is REG_SZ. The
	value of AddOns is a comma-separated list containing the names of the DLL
	add-ons to File Manager. This error appears in the online help file and the
	printed documentation included in the Windows NT Resource Kit version 3.5.
	This error was corrected in the online help file, but was not the printed
	documentation, for the Windows NT Resource Kit version 3.51.
	
	The corrected text should read:
	
	  Registry path:
	
	     HKEY_CURRENT_USER
	      \Software
	        \Microsoft
	          \File Manager
	            \Settings
	
	  AddOns     REG_SZ
	
	  Range: Comma-delimited list
	  Default: (none)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
