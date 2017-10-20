---
layout: page
title: "Q256236: SYSDIFF.INF: Not Included With Resource Kit"
permalink: /kb/256/Q256236/
---

## Q256236: SYSDIFF.INF: Not Included With Resource Kit

{% raw %}

	Article: Q256236
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When using the SYSDIFF.EXE utility you may receive the following error message:
	
	  Unable to load sysdiff.inf C:\Program Files\Resource Kit\sysdiff.inf.
	
	  This file is required in SNAP and DIFF modes. Consult the Windows 2000 OEM
	  Preinstall Kit documentation for more information.
	
	CAUSE
	=====
	
	The SYSDIFF.EXE utility requires the SYSDIFF.INF file to utilize the /SNAP or
	/DIFF modes. SYSDIFF.INF was not included on the Windows 2000 Resource Kit.
	
	RESOLUTION
	==========
	
	The SYSDIFF.INF file is included in SYSDIFF.ZIP, which is available for download
	at the following ftp site:
	
	ftp://ftp.microsoft.com/reskit/win2000/
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: RESKIT RESOURCE KIT RKBOOK WIN2000 TOOLS
	
	======================================================================
	Keywords          :  
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
