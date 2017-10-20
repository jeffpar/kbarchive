---
layout: page
title: "Q243602: SMS: How to Change the SMS Service Account Password"
permalink: /kb/243/Q243602/
---

## Q243602: SMS: How to Change the SMS Service Account Password

{% raw %}

	Article: Q243602
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbSecurity kbsms200 kbHMan
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Systems Management Server (SMS) service account is the account used by the
	SMS_Site_Component_Manager and SMS_Executive services.
	
	The default name for the SMS service account is SMSService. You can change this
	name during SMS installation or by following the steps in this article. By
	default, the account is a member of the Domain Administrators global group and
	has the "Logon as a Service" advanced user right.
	
	MORE INFORMATION
	================
	
	It is a good idea to create a new account instead of changing the password for
	the existing account. This will avoid error messages from the Status system and
	possible authentication failure/lockout problems caused by domain and SMS
	synchronization. After you establish the new account, you can delete the old
	account.
	
	To create a new account:
	
	1. Start User Manager for Domains.
	
	2. Copy the existing SMS service account and give it a new name, such as
	  SMSSERVICE2. Microsoft recommends giving the account a strong password (a
	  combination of uppercase and lowercase letters, numbers, and symbols).
	
	To update the existing account or specify a new account for the SMS service
	account:
	
	1. Modify the existing account in User Manager for Domains or create a new
	  account. The account must have "Logon as a Service" rights.
	
	2. Run SMS Setup on the site. Choose to modify or reset the current
	  installation, and specify the new account and/or password. The account must
	  be in DOMAIN\ACCOUNT format. Note that on a secondary site, you must run
	  Setup from the SMS CD-ROM or the original source files because there is no
	  local SMS program group.
	
	3. If you are changing the SMS service account used by a secondary site, update
	  the new account information by opening the Site properties for the secondary
	  site. To do this, right-click the secondary site in the Administrator
	  console, click Properties, and then change the account on the Accounts tab.
	  After you update the account in the Site properties, reset the account by
	  clicking "Modify or Reset the current installation" in SMS setup and
	  specifying the new account.
	
	  NOTE: if the site runs Systems Management Server Service Pack 2 or later, you
	  need only change a secondary site's service account password in Site
	  properties at the parent site. The password is updated at the secondary site
	  with no site reset necessary. To verify that the account has been updated at
	  the secondary site, enable and view the Hman.log (hierarchy manager log) file
	  at the secondary site. It indicates that the service account name has
	  changed. A "3309" status message is also generated, indicating the account
	  change.
	
	4. If you have specified the SMSService account (which you have just changed)
	  for other sites to use when they are addressing this site, you must update
	  the account information for every site that has an address for this site. To
	  do this, start the SMS Administrator console, open the Site Hierarchy node,
	  and then locate the Addresses node. Right-click the address for the site
	  whose account has changed, click Properties, and then click Set under
	  Account. You must specify the account in DOMAIN\ACCOUNT format.
	
	5. The sites may have had trouble communicating while the accounts and passwords
	  were not synchronized. After the site status message processing has caught
	  up, reset the component status counts. To determine if there is a backlog of
	  status messages, look at the Sms\Inboxes\Statmgr.box folders. Depending on
	  how long the accounts were not synchronized, it may take from 1 to 2 days for
	  Status Manager to process the messages. To reset the status counts,
	  right-click the components with the error messages and warnings, and then
	  click Reset Counts, All. When you refresh the site status, all the components
	  turn green (no error messages). Note that resetting the counters does not
	  delete status messages. You can still see previous messages in the Status
	  Message Viewer tool. If a component continues to experience an error, it
	  continues to generate status messages and the component status is updated.
	
	For more information about SMS security, refer to the SMS Administrator's Guide,
	Chapter 4, "Creating your Security Strategy." The SMS Administrator's Guide is
	also available by using the online Help.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbSecurity kbsms200 kbHMan 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
