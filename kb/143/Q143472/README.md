---
layout: page
title: "Q143472: FPNW Blue Screens Accessing or Creating Folders with Long Paths"
permalink: kb/143/Q143472/
---

## Q143472: FPNW Blue Screens Accessing or Creating Folders with Long Paths

	Article: Q143472
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 13-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If your network client uses Novell's MS-DOS real-mode redirector, NETX, you may
	experience one of the following problems:
	
	- When you attempt to create a directory where the total path length is greater
	  than 255 characters on a FPNW server, you may experience a blue screen error.
	
	- When you attempt to access a directory where the total path length is greater
	  than 128 characters on a FPNW server, FPNW becomes unstable and a blue screen
	  error normally occurs during the shut down of FPNW.
	
	CAUSE
	=====
	
	You experience a blue screen error when you attempt to create a folder with a
	path greater than 255 characters because FPNW does not perform limit checking on
	the path length when the request is made. This problem only affects NETX clients
	because all other Novell NetWare clients perform limit checking before they
	submit the request to the server.
	
	You experience a blue screen error when you attempt to access a folder with a
	path greater than 128 characters due to problems converting the folder path
	string to Unicode within the FPNW server. This only affects NETX clients because
	all other Novell NetWare clients' use different NCP's (Network Control Protocol)
	which do not experience this problem when they submit a change directory
	request.
	
	RESOLUTION
	==========
	
	Perform one of the following steps to resolve these problems:
	
	- Obtain the hotfix mentioned below.
	
	- Use a Novell's VLM client on MS-DOS-based computers instead of NETX.
	
	- Do not create folders with paths greater than 128 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51 and 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the Following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 4.00 csnw
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : 3.51 4.0
	Issue type        : kbbug
	
	=============================================================================
	
