---
layout: page
title: "Q212909: SMS: How to Confirm Number of Resources Contained in Collections"
permalink: kb/212/Q212909/
---

## Q212909: SMS: How to Confirm Number of Resources Contained in Collections

	Article: Q212909
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes useful to know how many Systems Management Server resources are
	contained in a collection or query. This article demonstrates how to find out.
	
	MORE INFORMATION
	================
	
	Steps to Determine the Number of Resources Within a Collection
	--------------------------------------------------------------
	
	1. Open the SMS Administrator console and navigate to the Collections folder.
	
	2. Right-click a collection.
	
	3. Select All Tasks, and then select Update Collection Membership. Wait for the
	  membership update to finish updating.
	
	4. Right-click the same collection, and then click Show Count.
	
	The Show Count dialog box should appear and display the following message:
	
	  
	
	  Total Number of resources in collection is <I>[x]</I>
	
	Steps to Determine the Number of Resources Within a Query
	---------------------------------------------------------
	
	In order to determine the number of resources within a query, you must first turn
	the query into a collection. To turn a query into a collection, follow these
	steps:
	
	1. Right-click the Collections folder, point to New, and then click Collection.
	
	2. Type a name for the collection.
	
	3. On the Membership Rules tab, click Query Rules Property to add a query to the
	  membership rules.
	
	4. In the Query Rule Properties dialog box, click Browse, and then select the
	  query for which you want to get a count.
	
	5. Click OK three times to complete creation of the new collection.
	
	6. Perform the steps that are listed in the first procedure in this section to
	  determine the number of resources that are in your new collection.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
