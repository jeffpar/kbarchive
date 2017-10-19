---
layout: page
title: "Q89895: Setting Up a Postoffice Across the Network"
permalink: /kb/089/Q89895/
---

## Q89895: Setting Up a Postoffice Across the Network

	Article: Q89895
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Windows for Workgroups Mail, the Workgroup Postoffice can be set up from
	one computer to another computer across the network.
	
	MORE INFORMATION
	================
	
	Assume the following in this example of a remotely created and administered
	Workgroups Postoffice:
	
	- The postoffice is set up and administered from machine 1.
	
	- The postoffice files are actually kept on machine 2.
	
	  NOTE: The user on machine 1 is the Post Office Manager, but the postoffice
	  files are stored on Machine 2
	
	- Machine 1 is a Windows for Workgroups machine.
	
	- Machine 2 is a machine with server/sharing capabilities, such as a Windows
	  for Workgroups machine, a LAN Manager 2.1 server, or a Novell server.
	
	  NOTE: Novell servers require some special attention. For more information,
	  query on the following in the Microsoft Knowledge Base:
	
	  novell and netware and server and wgpo
	
	After Windows for Workgroups setup is complete on machine 1, the designated
	administrator of the Workgroups Mail postoffice should take the following
	steps:
	
	1. On machine 1, from the Main group, start Workgroups Mail.
	
	2. Choose Create A New Workgroup Postoffice.
	
	3. To connect to machine 2, choose the Network button.
	
	  If Machine 2 is a Windows for Workgroups machine or a LAN Manager 2.1 server,
	  type the server name and share name (that is, \\server\share) where you want
	  the postoffice created, then choose the OK button.
	
	  NOTE: You must have access rights to the \\server\share.
	
	  If Machine 2 is a Novell server, you must be logged onto the Novell server and
	  have the correct permissions. Then you should connect to the server using one
	  of these conventions:
	
	  server/share:directory
	  \\server\share\directory
	  remapped drive:\directory
	
	  For more information on the Novell naming conventions, check your Novell
	  NetWare documentation.
	
	4. After the Workgroup Postoffice has been created, check to ensure that the
	  postoffice is shared properly on machine 2.
	
	Additional query words: 3.10 3.11 novell wgpo post office
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
