---
layout: page
title: "Q192439: SMS: Command Line Smsview.exe Leaves Open Window in Background"
permalink: /kb/192/Q192439/
---

## Q192439: SMS: Command Line Smsview.exe Leaves Open Window in Background

	Article: Q192439
	Product(s): Microsoft Systems Management Server
	Version(s): WINNT:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbDSupport
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use SMSVIEW in a command line format, the program leaves a
	Create Views window open which has an OK button. You must click OK or the
	program does not complete. This causes issues with automatically scheduled
	SMSVIEW command line executions.
	
	CAUSE
	=====
	
	The problem occurs because SMSVIEW does not have a Quiet Mode option.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix should have the following time stamp:
	
	  Date     Time     Size  File Name    Platform
	  ---------------------------------------------
	  09/01/98 01:30PM  29K   Smsview.exe  (Intel)
	  09/01/98 01:30PM  45K   Smsview.exe  (Alpha)
	
	MORE INFORMATION
	================
	
	SMSVIEW has been upgraded in the fix to allow the use of the "/Q" switch (quiet
	mode option) from the command line. The "/Q" switch must be the last parameter
	in the command line. The "/Q" suppresses the Create Views window. The following
	is an example of a command line:
	
	  smsview /s:genesis1 /l:sa /d:sms /q
	
	For information about other switches available for SMSVIEW, refer to the
	"Microsoft BackOffice Resource Kit."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms120 kbDSupport 
	Technology        : kbSMSSearch kbSMS120
	Version           : WINNT:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
