---
layout: page
title: "Q247913: Replace a BDC with a New Computer But Use the Same Name"
permalink: /kb/247/Q247913/
---

## Q247913: Replace a BDC with a New Computer But Use the Same Name

{% raw %}

	Article: Q247913
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to replace a backup domain controller (BDC) with a new
	computer and give the new computer the same computer name and Internet Protocol
	(IP) address as the BDC you are replacing.
	
	MORE INFORMATION
	================
	
	1. Change the name and IP address of the existing BDC computer:
	
	  a. In Control Panel, double-click Network.
	
	  b. On the Identification tab, click Change, type a new computer name, and
	     then click OK.
	
	  c. On the Protocols tab, double-click TCP/IP Protocol. On the IP Address tab,
	     change the IP address to a different, valid IP address.
	
	  d. Close the Network dialog box, and then restart the computer.
	
	2. Start Server Manager, and then delete the computer account of the old BDC
	  from the primary domain controller (PDC).
	
	3. Install the new BDC, and give it the computer name that the old BDC used.
	
	4. During installation, use the IP address that the old BDC used, and create a
	  computer account in the domain for the new BDC.
	
	5. To preserve share and file permissions, run the Permcopy.exe utility or the
	  Scopy.exe utility to copy shares and files from the old BDC to the new BDC.
	
	  NOTE: You can find the Permcopy.exe and Scopy.exe utilities in the Microsoft
	  Windows NT Server Resource Kit Supplement 2 or later.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
