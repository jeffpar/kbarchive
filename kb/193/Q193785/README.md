---
layout: page
title: "Q193785: Naming FPNW Server Same as PDC"
permalink: /kb/193/Q193785/
---

## Q193785: Naming FPNW Server Same as PDC

{% raw %}

	Article: Q193785
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use FPNW, do not alter the "_FPNW" extension given the server. FPNW
	will name the simulated NetWare server portion of Windows NT after the name of
	the Windows NT server it is installed on. For example, if the Windows NT server
	is named SMS1, the FPNW server would be named SMS1_FPNW.
	
	MORE INFORMATION
	================
	
	It has been noted that having FPNW loaded in two domains and altering the FPNW
	extension has caused connectivity issues. Do not rename FPNW servers to match
	the PDCs on which they are loaded. Do not alter the "_FPNW" extension, load, and
	configure in the normal manner.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
