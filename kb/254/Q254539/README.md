---
layout: page
title: "Q254539: INFO: HLP Files Not Supported on 64-Bit Windows"
permalink: /kb/254/Q254539/
---

## Q254539: INFO: HLP Files Not Supported on 64-Bit Windows

{% raw %}

	Article: Q254539
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Driver writers may provide driver Help files in Windows Help (*.hlp) format.
	However, because Windows Help was written to run on a 16-bit code base and does
	not support Unicode, it displays garbage characters for languages that use an
	extended character set (for example, Eastern European and Far Eastern
	languages). Further, Windows Help is not supported on the 64-bit code base.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that driver providers convert their help files to HTML Help
	(*.chm) format. This new HTML Help format is supported both on 32-bit and 64-bit
	code bases.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
