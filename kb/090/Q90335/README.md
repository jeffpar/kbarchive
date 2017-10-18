---
layout: page
title: "Q90335: Cannot Find HOME Directory Share on IBM LAN Server"
permalink: kb/090/Q90335/
---

## Q90335: Cannot Find HOME Directory Share on IBM LAN Server

	Article: Q90335
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	When you use Windows for Workgroups with IBM LAN Server 1.3, you cannot connect
	to your HOME directory share on the LAN Server.
	
	CAUSE
	=====
	
	This is not a problem with Windows for Workgroups but a limitation due to the
	design of IBM LAN Server. The HOME directory share on IBM LAN Server does not
	exist until you actually attempt to write to it, at that point, the IBM LAN
	Server creates the directory share on a server. When Windows for Workgroups
	attempts to connect to the HOME directory share, it does not exist.
	
	WORKAROUND
	==========
	
	Have a different user on the network connect to the HOME directory before you
	log on to Windows for Workgroups by executing the NET USE command. This may
	cause the HOME directory share to be created.
	
	
	Additional query words: 3.11 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
