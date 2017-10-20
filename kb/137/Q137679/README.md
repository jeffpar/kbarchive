---
layout: page
title: "Q137679: SMS: CNOTIN.EXE and Direct Architectures"
permalink: /kb/137/Q137679/
---

## Q137679: SMS: CNOTIN.EXE and Direct Architectures

{% raw %}

	Article: Q137679
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smsgeneral smsutil kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use CNOTIN.EXE on a non-Personal Computer architecture, such
	as JobDetails, SMSEvents, PackageLocation, the following error messages appear:
	
	  Could not create temp table
	  Could not create Machine Group.
	
	The same error messages appear if you run CNOTIN.EXE against a Personal Computer
	architecture, but choose attributes that can have only one current value, such
	as Identification|DomainName or Identification|SMSID.
	
	CAUSE
	=====
	
	CNOTIN was not designed to work with any direct architectures, such as,
	SMSEvents, JobDetails, UserGroups, and PackageLocation because it is
	unnecessary. The reason a "NOT IN" query is needed for machine-related
	architectures is because there can be multiple rows per group, which is not the
	case for direct architectures. Additionally, machine groups cannot be created
	from non-machine architectures.
	
	For groups with multiple rows, such as Disk, the SMS Administrator's "IS NOT"
	operator will return a machine if ANY of the rows meets the "NOT" query,
	regardless of whether or not the other rows fail the query.
	
	For example, if you query for computers that do not have a Disk Index of C, the
	Systems Management Server Administrator query utility will return any machine
	that has a Disk Index of A, B, D, E etc. regardless of whether that machine also
	has a Disk Index of C.
	
	CNOTIN returns only the computers where ALL the rows in a group meet the "NOT"
	query.
	
	RESOLUTION
	==========
	
	To do "NOT" queries on direct or non machine architectures, create the query in
	the Queries window in the Systems Management Server Administrator and use the
	"IS NOT" operator.
	
	Additional query words: prodsms ad hoc
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smsgeneral smsutil kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
