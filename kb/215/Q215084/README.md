---
layout: page
title: "Q215084: SMS: Misleading Error Message with SMS Service Manager"
permalink: /kb/215/Q215084/
---

## Q215084: SMS: Misleading Error Message with SMS Service Manager

{% raw %}

	Article: Q215084
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Systems Management Server (SMS), when a user attempts to start SMS
	Service Manager, he or she may receive the following error message:
	
	  Error communicating with the specified SMS Site Server
	
	CAUSE
	=====
	
	This behavior can occur if the user attempting to start SMS Service Manager does
	not have appropriate SMS Administrator rights.
	
	WORKAROUND
	==========
	
	To resolve this issue, grant appropriate rights to the user attempting to start
	SMS Service Manager. See the "More Information" section for a more detailed
	discussion.
	
	MORE INFORMATION
	================
	
	Using SMS Service Manager
	-------------------------
	
	You can view the status of SMS components (services and threads) using SMS
	Service Manager. SMS Service Manager allows you to view the state of all SMS
	services and SMS Executive threads that run on a particular site system.
	
	Any user with permissions to the SMS Administrator Console items for a site can
	use this console to connect to a site database and administer the site. A user
	can have file permissions to open Microsoft Management Console (MMC) with the
	SMS snap-in, but the user may not have any WBEM permissions and, therefore, may
	not be able to connect to the site. In such a case, the user receives a
	"Connection Failed" error message. The only way to gain access to the SMS site
	is to have the necessary WBEM permissions over and above the file permissions.
	In addition, if the user is logging on to the SMS server directly (as opposed to
	remotely), the user must also have NTFS permissions to the SMS directory.
	
	Managing SMS User Accounts
	--------------------------
	
	SMS 2.0 automatically provides SMS security rights for the following two
	accounts:
	
	   - NT Authority\System (local Microsoft Windows NT operating system)
	- The account of the logged-on user who installed SMS, such as SMSADMIN
	
	By default, SMS grants these accounts a complete set of SMS security rights. If
	administrators need other accounts to use the system, they must receive the
	appropriate SMS security rights. To grant security rights to other
	administrators, the SMS administrator needs to log on using the same account
	that installed SMS.
	
	To configure security rights for an object type, you must have Administrator
	permissions for the specific object type -- for example, an Advertisement object
	type. You can enable users to administer site settings by granting them
	permissions for the site object or the appropriate instances of the object.
	
	To assign Administrator security rights, follow these steps:
	
	1. Navigate to the Security Rights folder from the SMS Administrator Console.
	
	2. Click Manage SMS Users on the All Tasks option in the Security Rights folder,
	  and then follow the SMS Users Wizard guidelines to add, modify, or delete a
	  user or group account.
	
	You can also view and configure security rights on the Security tab in the object
	property dialog boxes. The Security tab displays the security rights that users
	and groups have for an object. If you have Administrator permissions for any
	object type, you can view the Security tab. You can also configure the security
	rights displayed on the tab if you have Administrator permissions for a specific
	object type.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
