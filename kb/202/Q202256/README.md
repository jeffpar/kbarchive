---
layout: page
title: "Q202256: SMS: Referencing Package, Collection, and Job IDs to Their Names"
permalink: kb/202/Q202256/
---

## Q202256: SMS: Referencing Package, Collection, and Job IDs to Their Names

	Article: Q202256
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbQuery
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Status messages and log files refer to objects such as Collections, Packages,
	and Advertisements their IDs (for example, SMS00024). The Administrator Console
	only displays the names for these objects. This article describes the methods
	you can use to trace the object ID to the object name.
	
	MORE INFORMATION
	================
	
	All of the object IDs are exposed in the Windows Management Instrumentation
	(WMI) class, so you can query on them directly or create queries to generate a
	cross-reference listing.
	
	To create these types of queries, create a new query and give it an appropriate
	name and comments:
	
	1. Click <unspecified> for the object type.
	
	2. Click Edit Query Statement.
	
	3. Type the query statement.
	
	   - To query on a specific ID, type the following command:
	
	  select * from <class name> where <class property>="<object ID>"
	
	     For example:
	
	  select * from sms_collection where collectionID = "sms00024"
	
	   - To query for a cross-reference listing, type the following command:
	
	  select <class property>, Name from <Class>
	
	     For example:
	
	  select PackageID, Name from SMS_Package
	
	It is also possible to find object IDs within the Administrator Console when you
	start the console using the following command line:
	
	  mmc.exe /sms:NodeInfo=1 <installationpath>\sms.msc
	
	This adds an extra property page (tab) to every property sheet called Node
	Information. The Node Information property page displays the underlying WMI
	(WBEM) class with all its properties and instance information, which is useful
	for debugging. The object ID is found in the Store Name section on this page.
	For additional information about node information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q216242 SMS: Troubleshooting Information Exposed in the Administrator Console
	
	REFERENCES
	==========
	
	For additional information on WMI classes and objects, please refer to the
	following Microsoft System Management Server documentation:
	
	- Administrators Guide Appendix E: Attributes, Attribute Classes, and WBEM
	  Class Names
	
	- Resource Guide Appendix B: SMS Object Properties
	
	Additional query words: prodsms tshoot smstshoot swdist ui node info
	
	======================================================================
	Keywords          : kbsms200 kbQuery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
