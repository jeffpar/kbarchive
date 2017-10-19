---
layout: page
title: "Q191962: FAX: Problems Configuring Gateway to Stop in Year 2000 or Later"
permalink: /kb/191/Q191962/
---

## Q191962: FAX: Problems Configuring Gateway to Stop in Year 2000 or Later

	Article: Q191962
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 18-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following symptoms when you attempt to use
	the Profile.exe program to configure the Microsoft Mail Gateway to Fax:
	
	- If you attempt to set the absolute break date to January 1, 2000 or later,
	  the following error message is displayed:
	
	  Invalid value.
	
	- If you set the relative break time so that the gateway is configured to stop
	  on January 1, 2000, and then start the gateway, the expected stop date is
	  displayed as "01-01-19100" (without quotation marks) instead of "01-01-2000".
	
	- If you set the absolute break date to January 1, 2000 or later, and then
	  attempt to start the gateway, the following error message may be displayed:
	
	  Break Date (year) "00" not valid
	
	  Note that this problem can only occur if the individual fix for the first
	  problem listed above has been applied. If this fix has not been applied, you
	  cannot set the absolute break date to January 1, 2000 or later.
	
	- If you set the absolute break date to January 1, 2000 or later, and then
	  start the gateway, the expected stop date is displayed as "01-01-19100"
	  (without quotation marks) instead of "01-01-2000".
	
	  Note that this problem can only occur if the individual fix for the third
	  problem listed above has been applied. If this fix has not been applied, you
	  cannot start the gateway after setting the absolute break date to January 1,
	  2000 or later.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  Faxgtw.exe    7/24/98   1:23p   139,926 bytes (version 3.0.3)
	  Profile.exe   7/24/98   1:25p    49,199 bytes (version 3.0.3)
	  Profile.glb   7/29/98   5:16p       529 bytes (version 3.0.3)
	
	This hotfix has been posted to the following Internet location as Faxgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	The BREAKDATE= line in the Profile.glb file was modified to appear as follows:
	
	     BREAKDATE=12/31/35
	
	NOTE: If you have customized the default Profile.glb file, you should not use the
	Profile.glb file that is included with this fix. Instead, you should modify the
	BREAKDATE= line in your custom file so that it appears as above. If you use the
	Profile.glb file that is included with this fix, your custom changes will be
	lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail Gateway to
	Fax version 3.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	
	MORE INFORMATION
	================
	
	Before you apply the fix, the default absolute break date for the gateway is
	December 31, 1999. After you apply the fix, the default absolute break date is
	December 31, 2035.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
