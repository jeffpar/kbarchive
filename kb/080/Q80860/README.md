---
layout: page
title: "Q80860: Uses of the LANMAN.INI RASLANNETS Entry"
permalink: kb/080/Q80860/
---

## Q80860: Uses of the LANMAN.INI RASLANNETS Entry

	Article: Q80860
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The ability to restrict remote users to specified networks is a security feature
	that is not well known. This article describes security features made possible
	through the RASLANNETS entry in the LANMAN.INI file.
	
	MORE INFORMATION
	================
	
	The example below illustrates why an administrator may want to restrict remote
	users to a specific server network.
	
	Example
	-------
	
	A development group is using Remote Access Service (RAS) to support split-site
	development in the following manner:
	
	      ---------------------
	      |RAS, SQL, LM server|    \\SERVERNAME
	      ---------------------
	               ||
	
	----Loopback----||---------------Corp Net-------------
	
	where "servername" is a LAN Manager and a SQL Server that the group is using for
	tracking bugs and for file sharing with a codeveloper. The codeveloper uses RAS
	that runs on the server to access SQL Server and the files on the server. The
	server is configured to operate over the following two networks:
	
	  Loopback network
	  Corporate network
	
	The RASLANNET LANMAN.INI parameter is set so that the developer can access
	resources only in the loopback network. This parameter enables the developer to
	copy files to \\SERVERNAME and access the SQL RAID database; however, it
	prevents the developer from using resources on the corporate network if he or
	she accesses the network from a remote location.
	
	If it becomes necessary for the developer to access more machines, the loopback
	network can be changed to be a small LAN; it is not necessary to use a loopback
	network, and place all other machines on that network.
	
	Additional query words: 2.10 2.10a 2.20 RASLANNETS security
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
