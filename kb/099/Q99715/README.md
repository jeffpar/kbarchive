---
layout: page
title: "Q99715: 3COM: Err Msg: Error 2 -- Cannot Verify Logon User/Admin ID..."
permalink: /kb/099/Q99715/
---

## Q99715: 3COM: Err Msg: Error 2 -- Cannot Verify Logon User/Admin ID...

{% raw %}

	Article: Q99715
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	3Com Mail Conversion Utilities may generate the following error message
	indicating incorrect logon parameters have been used:
	
	  ERROR 2 - CANNOT VERIFY LOGON USER/ADMIN ID
	  AUTHORIZATION FAILURE
	
	CAUSE
	=====
	
	This may be caused by using an invalid Microsoft Mail Administrator account
	and/or password for the gateway. It may also be attributed to having Enhanced
	Security turned on for a Microsoft Mail version 3.0 or 3.2 postoffice.
	
	RESOLUTION
	==========
	
	The 3Com Mail Conversion Utility was made with the security level of Microsoft
	Mail version 2.1; the postoffice must be returned to that level of security when
	the folder conversion utilities are being used. New installations of Microsoft
	Mail versions 3.0 and 3.2 have Enhanced Security turned on by default.
	
	To return the postoffice to the security level of version 2.1, install the disk
	labeled SERVER VERSION - DISK 1 and run the UPDATE.EXE utility on the
	postoffice. Choose No when asked if you want Enhanced Security, and choose Yes
	when asked if you want to uninstall the previously installed Enhanced Security.
	
	The update process installs the current executables from the Install disks onto
	the postoffice. If you have installed additional releases beyond the version on
	your set of disks, reinstall those additional releases after running UPDATE.EXE
	for the server copies of the executables. The update process does not alter your
	user information or messages.
	
	Additional query words: 1.00 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
