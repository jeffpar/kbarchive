---
layout: page
title: "Q317300: SMS: &quot;Couldn't Get Defined Architecture&quot; Responses"
permalink: kb/317/Q317300/
---

## Q317300: SMS: &quot;Couldn't Get Defined Architecture&quot; Responses

	Article: Q317300
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Database maintenance of aged discovery data occurs by default for discovery data
	that is more than 90 days old. You can review the Smsdbmon.log file to determine
	how many records are deleted, as described in the following Microsoft Knowledge
	Base article:
	
	  Q263913 SMS: Delete Aged Discovery Task Always Reports Zero Items Deleted
	
	If you review the Smsdbmon.log file, you may see architectures other than System
	that report:
	
	  CTriggerManager::ExecuteTask - beginning Delete Aged Discovery Data process.
	  CTriggerManager::ExecuteTask - deleting discovery items that haven't been
	  discovered in 90 days
	  CMachine::DeleteMachine - couldn't get defined architecture
	  DeleteDiscoveryItems deleted 0 rows of architecture User Group
	  DeleteLostMachines deleted 0 inventory items
	
	Note that this entry is not an error. This entry may occur for other discovery
	architectures such as User or IP_Network.
	
	MORE INFORMATION
	================
	
	This entry is the result of queries that are run during the database maintenance
	tasks. The first query that is run is:
	
	  "select * from DiscoveryArchitectures"
	
	Multiple queries are then run against the results from the first query. One query
	is run for each DiscArchName entry that results from the DiscoveryArchitectures
	query. The query format is
	
	  "Select ArchitectureName,ArchitectureKey,Mode from ArchitectureMap where
	  ArchitectureName = "<DiscArchName>"
	
	where <DiscArchName> is one of the values that is returned from the
	DISCARCHNAME field that resulted from the first query.
	
	Except for the System architecture, all of the queries result in no records
	(because the respective architecture in the ArchitectureMap table is not
	present). These architectures are processed one by one; if there is no response,
	"CMachine::DeleteMachine - couldn't get defined architecture" is logged.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
