---
layout: page
title: "Q184167: SMS: Using the 'Group Not' Function in Queries"
permalink: /kb/184/Q184167/
---

## Q184167: SMS: Using the 'Group Not' Function in Queries

	Article: Q184167
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 'Group Not' function allows a query to locate information in the Systems
	Management Server database that does not contain a specific property or set of
	properties. For example, a common use of this function is to locate all personal
	computers in the Systems Management Server database that do not have Microsoft
	Excel or any other specific software application installed.
	
	MORE INFORMATION
	================
	
	To query against installed software, first use a software inventory package or
	perform a software audit so that Systems Management Server clients have reported
	what is installed on their systems. After the software inventory data has been
	collected and subsequently reported to the Systems Management Server database, a
	query can be created to examine this data. To implement the example for
	Microsoft Excel, first create the following expression in the query:
	
	     MICROSOFT|SOFTWARE|1.0:Software Name is 'Microsoft Excel 95'
	
	When this expression is executed, all systems that reported Excel in software
	inventory are returned in the query results. To locate systems that do not have
	Excel, highlight this expression and then click the Group Not button. The
	expression changes to the following:
	
	     NOT IN(MICROSOFT|SOFTWARE|1.0:Software Name is 'Microsoft Excel 95')
	
	Executing this query correctly returns all systems that did not report Excel in
	their inventory. This expression differs from one using the "is not" operator.
	If the following "is not" expression is used, the query returns only those
	systems that did not have Excel as the first package. Therefore, this query
	would not return the desired results.
	
	     MICROSOFT|SOFTWARE|1.0:Software Name is not 'Microsoft Excel 95'
	
	Similar queries can be used to locate systems that do not have Pentium processors
	or that do not meet other hardware requirements.
	
	Additional query words: prodsms opposite CNOTIN
	
	======================================================================
	Keywords          : kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
