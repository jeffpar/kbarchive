---
layout: page
title: "Q326045: SMS: Distribution Mgr. Does Not Correctly Discover Package Size"
permalink: /kb/326/Q326045/
---

## Q326045: SMS: Distribution Mgr. Does Not Correctly Discover Package Size

	Article: Q326045
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbSoftwareDist
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the standard "Location of stored packages" property to a
	specific drive letter, Systems Management Server (SMS) Distribution Manager does
	not correctly discover the package size. The package size has a value of 1
	kilobyte (KB).
	
	Excerpt from Distmgr.log File
	-----------------------------
	
	Start adding package SR30002F...  
	Package SR30002F uses the compressed copy of the source directory.  
	Package SR30002F doesn't have a compressed copy of the source directory, starting the compression.  
	The size of package SR30002F is 1 KBytes  
	...
	The compressed size of package SR30002F is 19821 KBytes  
	
	Run the following query, and then check the SourceSize and SourceCompSize values
	for the package:
	
	  select PkgID, SourceSize, SourceCompSize from SMSPackages
	
	PkgID    SourceSize  SourceCompSize 
	-------- ----------- -------------- 
	SR30002F 1           19821          
	
	The same values appear in the package status node of the SMS Administrator
	Console.
	
	MORE INFORMATION
	================
	
	You can change the standard "Location of stored packages" property under the
	System Management Server\Site Database\Site Code\Site Settings\Component
	Configuration\Software Distribution branch.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP3,2.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
