---
layout: page
title: "Q193487: SNACFG Displays APPC Session Security Key in Clear Text"
permalink: /kb/193/Q193487/
---

## Q193487: SNACFG Displays APPC Session Security Key in Clear Text

{% raw %}

	Article: Q193487
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server supports LU6.2 session security, where a hex or character security
	key is configured as part of the Remote APPC LU definition. When you use the
	SNACFG command-line tool to display the configuration, this security key is
	displayed in clear text, which compromises security.
	
	CAUSE
	=====
	
	The SNACFG command-line tool was designed to display the full Remote APPC LU
	definition, including the session security key.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 (through
	SP3) and SNA Server version 4.0 (through SP1). This problem was first corrected
	in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The updated Snacfg.exe command-line tool behaves as follows:
	
	- The encrypted key may now be input and output using the new /SECURITYEX:
	  option.
	
	- The unencrypted security key (/SECURITY option) is no longer displayed.
	
	- It is still possible to enter an unencrypted key using the /SECURITY option.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
