---
layout: page
title: "Q161048: SNA Server Cannot Find the Share COMCFG or file COM.CFG"
permalink: /kb/161/Q161048/
---

## Q161048: SNA Server Cannot Find the Share COMCFG or file COM.CFG

{% raw %}

	Article: Q161048
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting SNA Server Admin results in an Event ID 633 error stating:
	
	  The sharename COMCFG does not exist, or the SNA Server configuration file
	  com.cfg does not exist.
	
	CAUSE
	=====
	
	This error may be the result of setting the NTFS permissions on Com.cfg to Admin
	Full Control only and on the directory CONFIG to Admin Full Control only. These
	permissions may have worked with Windows NT 3.51, but will fail under Windows NT
	4.0. This problem may also occur with SNA Server versions 3.0 and 4.0 if the
	services are configured to run under the local system account.
	
	RESOLUTION
	==========
	
	Adding the group Everyone with Read access to the permissions will eliminate the
	error. The Com.cfg is located in <snaroot>\system\config directory. In
	addition, the COMCFG share also requires that the group Everyone have Read
	Access. To eliminate the need for Everyone:Read access, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q140556 Securing SNA Server to Not Require Everyone:Read Access
	
	Additional query words: 633
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
