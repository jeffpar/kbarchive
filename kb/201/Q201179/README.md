---
layout: page
title: "Q201179: SMS: How To Run Smsman.exe and Specify an NDS Logon Point"
permalink: /kb/201/Q201179/
---

## Q201179: SMS: How To Run Smsman.exe and Specify an NDS Logon Point

{% raw %}

	Article: Q201179
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install a Systems Management Server 2.0 client, do the following:
	
	1. Run Smsman.exe for a Novell Directory Services (NDS) client and use the /C
	  switch.
	
	2. When the "Welcome to Systems Management Installation Wizard" dialog box
	  appears, click Next to continue. You will then see a screen with Specify
	  Installation Location selected. (The Automatically Select Installation
	  Location (recommended)\ option is read-only and is not available.)
	
	3. Type the directory path to the NDS volume that contains the Smslogon
	  directory. The proper syntax is:
	
	  \\treename\.volumename.ou.o
	
	  such as:
	
	  \\microsoft\.sms.ncsms.mssms
	
	  where tree = microsoft, volume = sms, ou = ncsms, and o = mssms
	
	Additional query words: prodsms netware client install cli32nw
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
