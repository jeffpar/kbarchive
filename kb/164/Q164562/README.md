---
layout: page
title: "Q164562: SMS: Changing SMS Database Account Name or Password"
permalink: /kb/164/Q164562/
---

## Q164562: SMS: Changing SMS Database Account Name or Password

{% raw %}

	Article: Q164562
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbsmsAdmin smsadmin smshowto smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Problems may arise when you attempt to change the password to the SQL Server
	account accessing the Systems Management Server database within Systems
	Management Server Setup.
	
	MORE INFORMATION
	================
	
	Assuming that you are using a specific account within SQL Server, it is
	necessary to do the following:
	
	1. Create a new account in SQL Server and be sure to give it database owner
	  (DBO) privilege over the database.
	
	2. Change the account within Systems Management Server Setup to the new account.
	
	3. Change the password on the original account in SQL Server Enterprise Manager.
	
	4. Change Systems Management Server back to the original account with the new
	  password.
	
	Changing the account password in this manner will correct problems with Systems
	Management Server accessing its SQL Server database due to account and/or
	password mismatches.
	
	Additional query words: login logon id prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbsmsAdmin smsadmin smshowto smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
