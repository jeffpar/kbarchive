---
layout: page
title: "Q213173: SMS: Error When Using DISTINCT Keyword Inside Count Query in WQL"
permalink: kb/213/Q213173/
---

## Q213173: SMS: Error When Using DISTINCT Keyword Inside Count Query in WQL

	Article: Q213173
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DISTINCT keyword inside of the COUNT function in a Web-Based
	Enterprise Management (WBEM) Query Language (WQL) query, an error message
	appears and it fails to run.
	
	For example, if you run the following WQL query:
	
	  SELECT COUNT(DISTINCT CollectionID) from SMS_Collection
	
	the following error message appears:
	
	  Failed to parse WQL stringSELECT COUNT(DISTINCT CollectionID) FROM
	  SMS_Collection
	
	The query should return a generic object with the number of collections as a
	property.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	Using the same example, run the following query:
	
	  SELECT DISTINCT CollectionID from SMS_Collection
	
	If you are doing this programmatically use the appropriate API. If you are using
	WBEMTEST, the number of objects are returned in the Query Result window.
	
	
	Additional query words: prodsms smssql wql query
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
