---
layout: page
title: "Q198893: Effects of Checking &quot;Use Network Name for Computer Name&quot; in MSCS"
permalink: /kb/198/Q198893/
---

## Q198893: Effects of Checking &quot;Use Network Name for Computer Name&quot; in MSCS

	Article: Q198893
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Applications not specifically designed to run on Microsoft Cluster Server can
	become confused with regard to host names when set up as generic applications or
	services. This confusion can occur when the applications make calls by using the
	GetHostName() or GetComputerName() APIs. Typically, the application will fail
	with regard to the node name as opposed to the cluster name.
	
	MORE INFORMATION
	================
	
	Set the dependencies for the application to include only a dependency on the
	network name to which the application needs access. Under the parameters page,
	make sure that the "Use Network Name for Computer Name" check box is selected.
	Selecting this check box has the effect of setting the environment variable
	_CLUSTER_NETWORK_NAME_ for the context of the application. Calls to
	GetHostName() and GetComputerName() return the value of the variable as opposed
	to the host name of computer name of the node.
	
	NOTE: This variable is ALWAYS a user variable. Do not attempt to set it manually
	to be a system variable. Doing so can cause failures and, in extreme cases, the
	inability to log on.
	
	"Use Network Name for Computer Name" will be unavailable if multiple dependencies
	exist. Set the dependency, click to select the check box, and add other
	dependencies as needed.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q183832 GetHostName() Must Support Alternate Computer Names
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
