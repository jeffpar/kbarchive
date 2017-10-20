---
layout: page
title: "Q139787: RECEIVE_ALLOCATE Fails With F011 on Windows 95 Clients"
permalink: /kb/139/Q139787/
---

## Q139787: RECEIVE_ALLOCATE Fails With F011 on Windows 95 Clients

{% raw %}

	Article: Q139787
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following errors were observed on the SNA Server Windows 95 client software
	by a 32-bit Windows APPC application after it is autostarted and then issues a
	RECEIVE_ALLOCATE as a operator started transaction program. The RECEIVE_ALLOCATE
	may fail with the following error:
	
	  
	
	  primary_rc   = 0xF011     (unexpected DOS error)
	  secondary_rc = 0x000002a2 (internal error, unable to add entry
	                            to internal SNA client service table)
	
	Also, when you stop the APPC application, the following error may also occur on
	the Windows 95 client:
	
	  Page fault in snakrnl.dll
	
	CAUSE
	=====
	
	This is caused due to an internal error in the SNA Server Windows 95 client
	software.
	
	
	RESOLUTION
	==========
	
	This problem is fixed in an update to the SNA Server Windows 95 client
	software.
	
	Microsoft has updated the following files to correct this problem:
	
	  <win95root>\SYSTEM\DMODAPPC.DLL
	  <win95root>\SYSTEM\SNAKRNL.DLL
	  <win95root>\SYSTEM\SNADMOD.DLL
	  <sna95>\SNABASE.EXE
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
