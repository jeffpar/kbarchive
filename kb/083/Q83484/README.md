---
layout: page
title: "Q83484: Windows 3.1 Upgrade: .OS2 Ports Do Not Become .DOS Ports"
permalink: /kb/083/Q83484/
---

## Q83484: Windows 3.1 Upgrade: .OS2 Ports Do Not Become .DOS Ports

{% raw %}

	Article: Q83484
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade from Windows version 3.0 to the Microsoft Windows operating
	system version 3.1, the port selection of LPTx.OS2 (where x is the port number)
	may not change. If an LPT port with the .OS2 extension is present in the [ports]
	section of your WIN.INI file when you upgrade, this port extension of .OS2 does
	not change to .DOS.
	
	MORE INFORMATION
	================
	
	Windows 3.0 installs printer ports LPT1.OS2 and LPT2.OS2. Windows 3.1 installs
	printer ports LPT1.DOS and LPT2.DOS. The .OS2 extension and the .DOS extension
	function the same. This information applies to all LPT ports. For more
	information, query on the following words in the Microsoft Knowledge Base:
	
	  LPT1.OS2 print
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
