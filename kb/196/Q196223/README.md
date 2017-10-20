---
layout: page
title: "Q196223: SMS: How to Configure SMS Security for Individual User Accounts"
permalink: /kb/196/Q196223/
---

## Q196223: SMS: How to Configure SMS Security for Individual User Accounts

{% raw %}

	Article: Q196223
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbSecurity kbsms120 kbsmsAdmin
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can configure Systems Management Server to provide individual user account
	permissions for database access, and to limit Remote Control access to specific
	users.
	
	This article describes the steps necessary to configure SQL Server and Systems
	Management Server to allow a Systems Management Server administrator to provide
	user-level access permissions for a user group.
	
	MORE INFORMATION
	================
	
	To grant permissions to domain user accounts, SQL Server must be made aware of
	the domain user accounts. To do this, you must configure SQL Server to use Mixed
	or Integrated security, using the following steps:
	
	1. In Windows NT User Manager for Domains, create a group for the user accounts
	  you want to be given access to Systems Management Server. For this example,
	  the group will be called SMSUsers. After creating the group, add any user
	  accounts to this group that you want to be able to access Systems Management
	  Server clients.
	
	2. From the SQL Server program group on the SQL Server, start SQL Setup. Click
	  the Continue button until you are able to select Set Security Options. Make
	  sure Set Security options is selected and then click Continue once more. In
	  the Login Security Mode section of the Set Security Options dialog box,
	  select either Mixed or Integrated security and then click OK.
	
	3. Stop and restart the MSSQLServer service.
	
	4. From the SQL Server program group, start SQL Security Manager. On the View
	  menu, click User Privilege.
	
	5. On the Security menu, click Grant New. The Grant User Privilege dialog box
	  appears. Click to select SMSUsers from the list of groups. At the bottom of
	  the dialog box, ensure that the Add Login IDs For Group Members and Add Users
	  To Database options are checked. Ensure that the SMS database is selected in
	  the drop-down list, and then click Grant. After it is finished, click Done.
	  If errors are reported, click Error Detail to view the reasons for the
	  errors.
	
	6. From the Systems Management Server program group, start SMS Security Manager.
	  The user accounts should now be available in the drop down list.
	
	  NOTE: There may be a several minute delay before the new user accounts are
	  visible in the drop down list. Also, any new domain user accounts created
	  after this procedure will need to be added to SQL Security Manager; they are
	  not added automatically. To do this, you can do either of the following:
	
	   - Add the new account(s) to SQL Security Manager individually.
	
	  -or-
	
	   - In SQL Security Manager, remove and re-add the group you created in Step 1
	     of this procedure (in this example, the SMSUsers group). Doing this
	     re-enumerates the group membership list in SQL Security Manager. Note that
	     you should make sure the new accounts have been added to the SMSUsers
	     group before performing this step.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms120 kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
