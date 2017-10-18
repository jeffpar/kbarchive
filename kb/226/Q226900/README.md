---
layout: page
title: "Q226900: SMS: Package Instruction Files Are Distribution Server-Specific"
permalink: kb/226/Q226900/
---

## Q226900: SMS: Package Instruction Files Are Distribution Server-Specific

	Article: Q226900
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbPackage
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some organizations choose to modify the Microsoft Systems Management Server
	software distribution model to lessen the load on their respective wide area
	networks (WANs). SMS 2.0 includes the courier sender feature to allow package
	distribution without taxing the WAN. When the courier sender is used, an
	administrator creates an SMS package by selecting "This package contains source
	files" on the Data Source tab of the package properties. The package is created
	using the procedures outlined in SMS, except that the Source Directory box on
	the Data Source tab of package properties contains only a small subset of the
	files required to install the package. The administrator allows the distribution
	process to create distribution points on distribution servers, and to create and
	distribute package instruction files. When the package is successfully
	distributed throughout the organization's WAN, a compact disc image is used to
	manually copy the rest of the source files to distribution points on the WAN.
	
	This modified distribution model eliminates much of the network usage that
	otherwise results from having SMS distribute the package.
	
	The key is to allow SMS software distribution mechanisms to create distribution
	point shares and package instruction files. Package instruction files contain
	information regarding the distribution servers that the package can be found on,
	and are read by the Advertised Programs Monitor on client systems. SMS does not
	require that all package source files be found and distributed from the package
	Data Source directory.
	
	MORE INFORMATION
	================
	
	If this method of software distribution is used, it is important that the
	"Update distribution points on a schedule" option is not selected on the Data
	Source tab for the package properties.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbPackage 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
