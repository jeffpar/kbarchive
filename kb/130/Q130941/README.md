---
layout: page
title: "Q130941: How to Change the SQL Login ID for the SMS Database"
permalink: /kb/130/Q130941/
---

## Q130941: How to Change the SQL Login ID for the SMS Database

	Article: Q130941
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	System Management Server uses a SQL Login Id to manage the its database on a SQL
	Server. Systems Management Server uses the SQL Server System Administrator (SA)
	account by default. The following procedure outlines how to change the SQL Login
	Id.
	
	MORE INFORMATION
	================
	
	1. Use the SQL Server Administrator Utility to login to the SQL Server 4.21a (or
	  later) containing the Systems Management Server database. Login with an SA
	  account.
	
	2. Open up the System Logins Window. If the Login Id you intend to use already
	  exits on the SQL server proceed with Step 5.
	
	3. Choose Manage/Add Login...
	
	4. Specify the Login ID and password in the appropriate fields and choose OK.
	
	5. Open the Query Window.
	
	6. In the Query Window, type the following information:
	
	  use SMS
	  go
	  sp_changedbowner "login id", true
	  go
	
	7. Execute the Query.
	
	8. Run the System Management Server setup utility on the Primary Site Server.
	
	9. Choose continue, then choose Operations.
	
	10. Choose SMS Database.
	
	11. Change the Login ID and password.
	
	12. Choose OK.
	
	The Setup program will restart the Systems Management Server services. Once this
	has completed the setup program can be exited.
	
	NOTE: The Login ID that you give to Systems Management Server should not be a
	user of the database prior to executing Step 6. If the Login ID is a user of the
	database, drop the Login ID from the database before proceeding with Step 6.
	
	Additional query words: prodsms sms loginid login_id
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
