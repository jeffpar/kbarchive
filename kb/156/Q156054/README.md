---
layout: page
title: "Q156054: IIS FTP Server Will Not Start"
permalink: /kb/156/Q156054/
---

## Q156054: IIS FTP Server Will Not Start

{% raw %}

	Article: Q156054
	Product(s): Internet Information Server
	Version(s): 1.0 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to start the IIS FTP Server services in the Internet Service
	Manager, the service won't start and won't give a message indicating a problem.
	
	Trying to start any of the IIS services with the Services tool in Control Panel
	results in the following error message:
	
	  Could not start the FTP Publishing Service service on \\computername
	
	  Error 10048:
	
	No text is given with the above error number.
	
	The following system event appears in the event viewer:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: The FTP Publishing Service service terminated with the
	  following error:
	
	No error description is given with the above system event.
	
	CAUSE
	=====
	
	The Windows NT FTP Server service is running. The Windows NT FTP service and the
	IIS FTP Publishing Service cannot both run at the same time. The two FTP Server
	services conflict.
	
	RESOLUTION
	==========
	
	1. In control panel, click Network.
	
	2. Select the FTP Server, and select Remove.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : 1.0 3.51
	
	=============================================================================
	

{% endraw %}
