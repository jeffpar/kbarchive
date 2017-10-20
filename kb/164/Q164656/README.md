---
layout: page
title: "Q164656: Windows 95 Stops Responding During 3270 SNA Server Logon"
permalink: /kb/164/Q164656/
---

## Q164656: Windows 95 Stops Responding During 3270 SNA Server Logon

{% raw %}

	Article: Q164656
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server Windows 95 client may encounter an access violation (AV) or a
	page fault when loading the 3270 application, if you click the Cancel button on
	the SNA Server Logon dialog box that appears when you load the 3270 application.
	
	CAUSE
	=====
	
	The problem occurs when Snakrnl.dll asks the transport to shut down and the
	transport is already shut down.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, the
	Snakrnl.dll file queries the transport to determine whether it is still loaded.
	The updated module is:
	
	  <Win95root>\System\Snakrnl.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
