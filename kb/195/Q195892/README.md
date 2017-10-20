---
layout: page
title: "Q195892: Client Logon Fails When Password Change Required in User Mngr"
permalink: /kb/195/Q195892/
---

## Q195892: Client Logon Fails When Password Change Required in User Mngr

{% raw %}

	Article: Q195892
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Windows 95 client may report a logon failure if the "User Must Change
	Password At Next Logon" check box is selected on the User Record, and the SNA
	client's sponsor connection is active.
	
	This only occurs with the SNA Server 4.0 Service Pack 1 client for Windows 95.
	
	CAUSE
	=====
	
	The SNA client for Windows 95 retries the sponsor connection after successfully
	processing the password change but fails because the service table entries and
	the cached index are not synchronized.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 SP1. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : WINDOWS:4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
