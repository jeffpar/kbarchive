---
layout: page
title: "Q263271: SMS: Queries May Not Be Saved in a New Query-Based Collection"
permalink: /kb/263/Q263271/
---

## Q263271: SMS: Queries May Not Be Saved in a New Query-Based Collection

	Article: Q263271
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbServer kbsms200 kbsms200bug kbsms200fix kbCollections kbQuery kbsmsAdm
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a collection that is based on a query in Systems Management
	Server (SMS) version 2.0, the query may be removed silently when you save the
	collection. Also, when this occurs, you do not receive an error message that
	states the query has not been saved.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	In a hierarchy with multiple service pack levels, all sites that have SMS
	Service Pack 2 (SP2) applied either have the query added successfully or
	generate an error message. If the site does not have SP2 or higher, then the
	query may not be saved by the collection when the collection is saved in the
	Administrator console.
	
	In SP2, an error message is now generated when a collection that is based on an
	invalid query is created. An additional method has also been added to the
	provider to validate query rules before the query runs.
	
	The following sample query (that searches for Office 97 SR-1) does not get saved
	on an SP1 or earlier site while it is saved to a collection in an SP2 site.
	
	select distinct SMS_R_System.Name from  SMS_R_System inner join 
	SMS_G_System_SoftwareFile on SMS_G_System_SoftwareFile.ResourceID = SMS_R_System.ResourceId where SMS_R_System.SystemRoles is NULL and (SMS_G_System_SoftwareFile.FileName = "excel.exe" and 
	(SMS_G_System_SoftwareFile.FileVersion = "8.0a" or 
	SMS_G_System_SoftwareFile.FileVersion = "8.0b" or 
	SMS_G_System_SoftwareFile.FileVersion = "8.0c" or 
	SMS_G_System_SoftwareFile.FileVersion = "8.0d")) or 
	(SMS_G_System_SoftwareFile.FileName = "winword.exe" and 
	SMS_G_System_SoftwareFile.FileVersion = "8.0" and 
	SMS_G_System_SoftwareFile.FileSize = 5324560)
	
	The new method is:
	
	  boolean SMS_CollectionRuleQuery::ValidateQuery([in] string WQLQuery);
	
	This modifies the query, converts it to SQL, and allows SQL to parse the query
	without actually running it. If it passes this, it should be alright.
	
	Added validation of the rule (by using the SQL "set parseonly on/off" command,
	you can have SQL validate the resulting query without actually running it) to
	Membership Rule properties. This is done by using a new provider method that
	validates the rule to see if it will be accepted when it is added to the
	collection.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbServer kbsms200 kbsms200bug kbsms200fix kbCollections kbQuery kbsmsAdmin kbsmsProvider kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
