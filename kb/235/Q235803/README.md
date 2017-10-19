---
layout: page
title: "Q235803: SMS: Resource Explorer Doesn't Work As MMC Console Snap-in"
permalink: /kb/235/Q235803/
---

## Q235803: SMS: Resource Explorer Doesn't Work As MMC Console Snap-in

	Article: Q235803
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbsms200 kbsms200bug kbResX kbsmsAdmin kbsmsUtil
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Systems Management Server (SMS) Resource Explorer doesn't function as
	expected when it is added as a snap-in to a custom MMC Console. In the
	Add/Remove Snap-In option box on the Console menu in a custom MMC console, you
	can see two choices listed for SMS:
	
	- SMS Administrator Console
	
	- SMS Resource Explorer
	
	If you select the SMS Resource Explorer and add it to the MMC, and then select
	that SMS Resource Explorer node, you receive a "Connection Failed" message in
	the console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Do not add the SMS Resource Explorer as a snap-in on a custom console, because
	it is dependent upon the SMS Administrator Console to function.
	
	If the snap-in is thereafter removed from MMC 1.1, you receive a series of error
	messages similar to the following:
	
	  _com_error exception in MMC Admin UI!
	  COM Error : Invalid pointer
	  Source :
	  Description :
	
	  Entry Point : CComponentDataImp::tm_SetDefaultVerb
	  Operation :
	  Command Line: "D:\WINNT\System32\mmc.exe"
	  Trace :
	
	This error message is not displayed when you use MMC 1.2. The snap-in is
	gracefully removed.
	
	
	Additional query words: prodsms snapin problem res
	
	======================================================================
	Keywords          : kbConfig kbMMC kbsms200 kbsms200bug kbResX kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
