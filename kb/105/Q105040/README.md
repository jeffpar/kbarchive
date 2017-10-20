---
layout: page
title: "Q105040: WFWG Err: ODINSUP Requires BUFFERED Switch in NET.CFG File"
permalink: /kb/105/Q105040/
---

## Q105040: WFWG Err: ODINSUP Requires BUFFERED Switch in NET.CFG File

{% raw %}

	Article: Q105040
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Microsoft Windows for Workgroups version 3.1 with Novell
	NetWare ODI connectivity, you may receive the following message:
	
	  ODINSUP requires the switch BUFFERED in NET.CFG file to function correctly.
	  Press any key to continue.
	
	You may receive this message even if you include the BUFFERED line in your
	NET.CFG file.
	
	CAUSE
	=====
	
	If the BUFFERED line in the NET.CFG file is not indented under the PROTOCOL
	ODINSUP section, it is not processed correctly, resulting in the above error
	message.
	
	RESOLUTION
	==========
	
	The PROTOCOL ODINSUP section of the NET.CFG file should read as follows:
	
	     PROTOCOL ODINSUP
	            BIND <NE2000> (where <NE2000> is the network adapter ODI driver)
	            BUFFERED
	
	MORE INFORMATION
	================
	
	Novell NetWare version 4.0 requires the Novell ODI drivers to function
	properly.
	
	For more information concerning ODI support under Microsoft Windows for
	Workgroups version 3.1, query on the following words in the Microsoft Knowledge
	Base:
	
	  buffered and faxme
	
	Additional query words: NETWARE 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
