---
layout: page
title: "Q74879: ZEOS SCSI Adapter and RLL Controller Requires EMMEXCLUDE"
permalink: /kb/074/Q74879/
---

## Q74879: ZEOS SCSI Adapter and RLL Controller Requires EMMEXCLUDE

{% raw %}

	Article: Q74879
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to ZEOS technical support, the ZEOS HFIO SCSI Host adapter and the
	DTC-7287 RLL Controller require an EMMEXCLUDE statement in the [386Enh] section
	of the SYSTEM.INI file. The line should read as follows:
	
	     EMMEXCLUDE=C800-CBFF
	
	MORE INFORMATION
	================
	
	For more information, contact ZEOS technical support.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.00a win30 3rdparty exclude emm KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
