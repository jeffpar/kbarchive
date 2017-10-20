---
layout: page
title: "Q142654: Winsock Memory Access Violation in Ws2help.dll Or Msafd.dll"
permalink: /kb/142/Q142654/
---

## Q142654: Winsock Memory Access Violation in Ws2help.dll Or Msafd.dll

{% raw %}

	Article: Q142654
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your Proxy server, a pop-up message appears stating a memory access violation
	occured in one of the winsock *.DLL files, most likely Ws2help.dll or Msafd.dll.
	In some cases this can cause heap corruption and provoke an access violation in
	some other *.DLL files. This problem is much more common on a multi-processor
	than a single-processor computer.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below or wait for the next Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
