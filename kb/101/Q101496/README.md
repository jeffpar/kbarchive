---
layout: page
title: "Q101496: Err Msg: VNETWARE.386 Was Not Loaded After Installing Timbuktu"
permalink: /kb/101/Q101496/
---

## Q101496: Err Msg: VNETWARE.386 Was Not Loaded After Installing Timbuktu

{% raw %}

	Article: Q101496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	After installing Farallon's Timbuktu remote communication software in
	Windows 3.1 with Novell NetWare connectivity, the following error
	message may appear:
	
	  VNETWARE.386 Was Not Loaded. All network services have been disabled.
	
	To correct the problem, modify the [386Enh] section of the SYSTEM.INI
	file as follows:
	
	    [386Enh]
	    ;Network=*DOSNET
	    Network=VNETWARE.386
	
	MORE INFORMATION
	================
	
	The Timbuktu remote communication software allows Intel-chip-based computers to
	remotely control Macintosh computers. During the software installation, the
	[386Enh] section of the SYSTEM.INI file is changed from
	
	     NETWORK=VNETWARE.386
	
	to:
	
	     NETWORK=*DOSNET
	
	Timbuktu is manufactured by Farallon, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.1 3.10 3.11 Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
