---
layout: page
title: "Q247895: MSMQ Reports Number of Licenses Exceeded in Windows NT Server"
permalink: /kb/247/Q247895/
---

## Q247895: MSMQ Reports Number of Licenses Exceeded in Windows NT Server

{% raw %}

	Article: Q247895
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Message Queue Server (MSMQ) initiates a transfer session, you
	may receive an error message stating that the number of client licenses has been
	exceeded, and the transfer session does not take place. This may occur on a
	computer running Microsoft Windows NT Server 4.0.
	
	CAUSE
	=====
	
	This behavior can occur when the Windows NT License Logging service is disabled
	on either the local MSMQ Queue Manager computer that sends the error message or
	the remote Queue Manager computer that receives it.
	
	Establishing a message transfer session requires a Windows NT Server 4.0 client
	access license. When the internal license limit has been reached or when no
	Windows NT client access license is available, Queue Manager does not establish
	the session.
	
	RESOLUTION
	==========
	
	To resolve this behavior, enable the License Logging Service in the Services
	tool in Control Panel.
	
	MORE INFORMATION
	================
	
	For additional information on how MSMQ uses licenses, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q183666 INFO: CAL and Connection Usage by MSMQ
	
	Additional query words: Message Queue Server
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
