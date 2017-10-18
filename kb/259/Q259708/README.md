---
layout: page
title: "Q259708: SMS: New SQL Views Are  Available in SMS 2.0"
permalink: kb/259/Q259708/
---

## Q259708: SMS: New SQL Views Are  Available in SMS 2.0

	Article: Q259708
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200sp2fix
	Last Modified: 27-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes new SQL views that have been added to Systems Management
	Server (SMS) 2.0 Service Pack 2 (SP2).
	
	MORE INFORMATION
	================
	
	New SQL views have been added to the SMS 2.0 SP2 database to enable high
	performance data access for reporting programs. The purpose of these views is to
	mirror the Windows Management Instrumentation (WMI) class schema of the SMS
	database as documented in the SMS 2.0 Resource Kit and the SMS 2.0 Software
	Development Kit (SDK).
	
	Please note that WMI is the recommended data-access method for accessing the SMS
	2.0 database.
	
	For more information about SQL views and how to use them, see the SQL Books
	Online or the SQL Resource Kit. For more information about WMI as it relates to
	SMS, please see the SMS 2.0 Administrators Guide, the SMS 2.0 Resource Kit, or
	the SMS 2.0 SDK.
	
	According to the SMS SDK, the majority of the SMS class names in WMI begin with
	"SMS_". In the SQL views, the SMS_ prefix has been removed and replaced with
	"v_".
	
	Most of the property names have been kept the same, except for inventory classes
	where the inventory class names are slightly different because of TSQL string
	manipulation limitations.
	
	The following views have been added to the schema.
	
	- v_SchemaViews: Lists the schema views
	
	- v_GroupMap: Lists inventory classes and their associated history classes
	
	- v_GroupAttributeMap: Lists the attributes of the inventory classes
	
	- v_ResourceMap: Lists resource classes
	
	- v_ResourceAttributeMap: Lists attributes, including array attributes of the
	  resource classes
	
	- v_AgentDiscoveries: Former agent array properties of SMS_R_System, and lists
	  discovered resources and the discovery agent
	
	- v_AuditRootSummarizer: Summarizes the number of actions performed each day,
	  for each user, for each action
	
	- v_AuditSummarizer: Summarizes the number of actions performed each day, for
	  each user, for each action
	
	The following modifications have been made to the WMI schema:
	
	- v_OS_Details: Lists the supported platforms for a program (this was formerly
	  an embedded object of SMS_Program)
	
	- v_CollectionRuleDirect: Lists the resources that are direct members of a
	  collection (this was formerly an embedded object of SMS_Collection)
	
	- v_CollectionRuleQuery: Lists the queries that are used to populate a
	  collection (this was formerly an embedded object of SMS_Collection)
	
	The following stored procedures have been added to enable regeneration of these
	views:
	
	- sp_RenewSMSSchemaViews: Regenerates all views
	
	- sp_RenewCollectionViews: Regenerates collection class views
	
	- sp_RenewResourceViews: Regenerates resource class views
	
	- sp_RenewInvGroupViews: Regenerates inventory group class views
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
