---
layout: page
title: "Q218441: Err Msg: Server Encountered Bad Data from the Client"
permalink: kb/218/Q218441/
---

## Q218441: Err Msg: Server Encountered Bad Data from the Client

	Article: Q218441
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse a Web site that uses SSL (Secure Sockets Layer), the browser
	loses its connection, and the following error message is displayed:
	
	  Server encountered bad data from the client
	
	On the server, the following error is recorded in the event log:
	
	  Event ID: 115
	  Description: Service could not bind instance 5. The data is the error code.
	
	NOTE: This error also occurs for instances 3 and 10.
	
	CAUSE
	=====
	
	If the server has more than one certificate, in certain situations Schannel.dll
	may send the wrong certificate to the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 Service Pack 4.
	
	Additional query words: secure sockets layer netscape internet explorer ie errmsg kberrmsg certificate server akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
