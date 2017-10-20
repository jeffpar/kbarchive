---
layout: page
title: "Q237495: SMS Err Msg: ERROR 2 Failed to Run MofComp"
permalink: /kb/237/Q237495/
---

## Q237495: SMS Err Msg: ERROR 2 Failed to Run MofComp

{% raw %}

	Article: Q237495
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify the default Sms_def.mof file that comes with Systems Management
	Server 2.0 Service Pack 1, you may not be able to compile the MOF on the client
	computer during a hardware inventory cycle. The Hinv32.log file contains any of
	the following error messages:
	
	  ERROR 2 - Failed to run MofComp !
	
	or
	
	  Error Syntax 0X007F
	
	CAUSE
	=====
	
	This issue occurs because the MOF Manager tool (Mofman.exe) inserts 8 blank
	classes at the top of the Sms_def.mof file when you save it. When the Hardware
	Inventory Agent on the client computer attempts to compile the new Sms_def.mof
	file, it fails because of the blank classes.
	
	WORKAROUND
	==========
	
	WARNING: The Sms_def.mof file located on the site server is the source for
	hardware inventory data to query on all clients in the site. You need to be
	careful when you edit this file.
	
	To avoid this problem, use Notepad to make changes to the Sms_def.mof file
	instead of the MOF Manager tool. To do this, follow these steps:
	
	1. Open the \SMS\Inboxes\Clifiles.Src\Hinv folder on the site server.
	
	2. Use Notepad to open the Sms_def.mof file.
	
	3. Find the section at the top of the file which looks like the following text:
	
	  //==================================================================
	  // Register SMS CIMV2 Provider
	  //==================================================================
	
	  #pragma namespace ("\\\\.\\root\\cimv2\\SMS")
	
	  	[SMS_Report(FALSE),
	  	SMS_Group_Name(""),
	  	SMS_Class_ID("")]
	  class 
	  {
	  };
	
	4. The following lines should appear eight times in this section. Delete these
	  lines.
	
	  	[SMS_Report(FALSE),
	  	SMS_Group_Name(""),
	  	SMS_Class_ID("")]
	  class 
	  {
	  };
	
	5. Save the SMS_Def.MOF using Notepad. Do not add the .txt extension to the file
	  name when you save the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms SMS20POSTSP1 smsfaqtop
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
