---
layout: page
title: "Q157265: Msbatch.inf Parameters: Disable Password Caching"
permalink: /kb/157/Q157265/
---

## Q157265: Msbatch.inf Parameters: Disable Password Caching

{% raw %}

	Article: Q157265
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disable password caching using the Msbatch.inf
	file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  AddReg=NoPwCache
	
	Also, add the following section and key:
	
	  [NoPwCache]
	  HKLM,"SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\ 
	  Network",DisablePwdCaching,1,01,00,00,00
	
	NOTE: Type the above line all on one line. It will not work if entered as two
	lines.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
