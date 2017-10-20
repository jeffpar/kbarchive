---
layout: page
title: "Q172294: Win3270 Applet Fails to Connect If Path Longer Than 64 Bytes"
permalink: /kb/172/Q172294/
---

## Q172294: Win3270 Applet Fails to Connect If Path Longer Than 64 Bytes

{% raw %}

	Article: Q172294
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the installation path of the SNA Client is longer than 64 bytes, the Windows
	95 3270 applet (Win3270.exe) returns the error message
	
	  FMIS3270.DLL not found
	
	and fails to connect.
	
	CAUSE
	=====
	
	When the 3270 applet builds the full path to the FMI driver, a maximum path of
	64 bytes is allowed.
	
	RESOLUTION
	==========
	
	The 3270 applet FMI call now uses MAX_PATH and is not limited to a 64-byte path
	name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
