---
layout: page
title: "Q294786: SMS: How to Use a Non-Domain Administrator Service Account"
permalink: kb/294/Q294786/
---

## Q294786: SMS: How to Use a Non-Domain Administrator Service Account

	Article: Q294786
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbSecurity kbServer kbsms200 kbsmsAdmin
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0 Service Pack 2 (SP2) and later,
	administrators can set up the SMS Service account as a non-domain administrator
	in both Microsoft Windows NT 4.0-based and Microsoft Windows 2000-based domains.
	For details about using this configuration, including important warnings, read
	the "SMS Security Essentials" white paper that is located online at the
	following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/techdetails/secessentials.asp
	  (http://www.microsoft.com/smsmgmt/techdetails/secessentials.asp)
	
	MORE INFORMATION
	================
	
	By default, SMS Setup requires the Service account to be a domain administrator
	and does not allow the installation to finish if you are using a non-domain
	administrator account. To install SMS by using a non-domain administrator
	Service account:
	
	1. Create the SMS Service account.
	
	2. Ensure that the SMS Service account is a local administrator of all potential
	  site systems (site servers, Client Access Points, Logon Points, or
	  Distribution Points).
	
	3. Run Setup.exe with the /nodomainadmin switch (for example, "setup.exe
	  /nodomainadmin").
	
	Setup.exe is located in the Smssetup\Bin\I386 folder on the CD-ROM.
	
	
	If you attempt to change the SMS Service Account account or password through SMS
	Setup (a site reset), you may receive the following error message:
	
	  Setup has detected that the service account
	  <Domain>\<Serviceacct> is not in the Domain Admins group in
	  domain <Domain>, do you want to add it to the Domain Admins group.
	
	To work around this issue, change the SMS Service account user name and password
	in the SMS Administrator tool:
	
	1. Locate the site whose SMS Service account you want to change.
	
	2. Right-click the site, and then click Properties.
	
	3. In the Site Properties dialog box, click the Accounts tab, and then click
	  Set.
	
	4. Type the SMS Service account information again.
	
	Or, you can initiate a site reset by starting Setup.exe with the /nodomainadmin
	switch from a local drive or CD-ROM.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbConfig kbSecurity kbServer kbsms200 kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
