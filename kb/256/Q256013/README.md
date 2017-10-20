---
layout: page
title: "Q256013: Problems Deleting Package While Package Share Changes Occur"
permalink: /kb/256/Q256013/
---

## Q256013: Problems Deleting Package While Package Share Changes Occur

{% raw %}

	Article: Q256013
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use Systems Management Server (SMS) version 2.0 to specify a
	distribution point share name other than the default name, SMSPKGx$. Normally,
	using a non-default share name on a distribution point is not a problem. After
	the non-default share name has been specified and the share has been created, it
	is possible to change the name of the share by entering a different share name.
	When the share name is changed, the process to implement the change starts
	immediately. If the package for which the change is being made is deleted while
	the system is processing the share name change, you may experience the following
	symptoms:
	
	- The package is deleted from the Packages panes in the SMS Administrator
	  Console, but the share name for the package on the hard disk may not be
	  deleted. Instead, it may remain as the original share name or be re-created
	  as the new share name, and this is dependant on what point during the process
	  the deletion is triggered in the SMS Administrator Console.
	
	- When you view the "Under System Status\Package Status" object, the package
	  name is not deleted.
	
	- Distribution Manager may begin to generate error messages about an inability
	  to delete this package.
	
	CAUSE
	=====
	
	This problem can occur when the package is deleted while a change is being made
	to the package share name. When this occurs, SMS may not delete all of the
	references to the package because modifications continue to be written even
	after the package has been deleted in the SMS Administrator Console.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: When you edit the SQL database directly, you must use caution because
	improper editing may result in a site that is not usable. As with all procedures
	of this type, Microsoft recommends that you create a backup of the databases
	before proceeding.
	
	Open the SMSPACKAGES table through ISQL/w (SQL 6.5) or Query Analyzer (SQL 7.0),
	and then manually remove the row that contains the old package ID by using the
	following SQL command:
	
	NOTE: Verify that the focus is on the SMS database before you run this command.
	
	  Delete from SMSPackages where PkgID = <your package ID>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
