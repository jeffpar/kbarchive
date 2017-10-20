---
layout: page
title: "Q189469: Cluster Administrator Can Connect to All NetBIOS Names"
permalink: /kb/189/Q189469/
---

## Q189469: Cluster Administrator Can Connect to All NetBIOS Names

{% raw %}

	Article: Q189469
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cluster Administrator can connect to both Node A or Node B, as well as the
	virtual cluster name. This can be beneficial in some instances when the RPC
	service stops responding (hangs) in some manner because of errors relying on
	dependencies that do not exist, or are in some way not functioning.
	
	MORE INFORMATION
	================
	
	It can be beneficial as well to use the command-line switches that are built
	into Cluster.exe. These switches are detailed in the "Appendix" section of the
	documentation that is included with Windows NT Server, Enterprise Edition,
	version 4.0 on the first CD-ROM in the Support\Books\Mscsadma.doc file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
