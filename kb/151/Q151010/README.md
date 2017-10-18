---
layout: page
title: "Q151010: IIS IDC: Err Msg: Error Performing Query"
permalink: kb/151/Q151010/
---

## Q151010: IIS IDC: Err Msg: Error Performing Query

	Article: Q151010
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With Basic Authentication enabled on the Internet Information Server (IIS), when
	you try to open an .IDC, you will get the following error message:
	
	  Error Performing Query.
	
	CAUSE
	=====
	
	The error occurs when you do not have access to the file and have not been
	authenticated by the server. The Basic Authentication dialog box should be
	displayed instead of the error.
	
	The Internet Database Connector (Httpodbc.dll) tries to open the file using
	IUSER_COMPUTERNAME and can not because of security. The server sends the above
	error instead of an error 401 Authentication Required to the client.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
