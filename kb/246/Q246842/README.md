---
layout: page
title: "Q246842: SMS: Access Violation in Remote.exe When Encryption Disabled"
permalink: /kb/246/Q246842/
---

## Q246842: SMS: Access Violation in Remote.exe When Encryption Disabled

	Article: Q246842
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200fix kbHelpDesk kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Microsoft Windows NT-based clients that are configured with French regional
	settings (by using the Regional Settings tool in Control Panel), the Remote
	Control tool may stop working with an access violation in Remote.exe or
	Ldwmnt.dll after a few minutes.
	
	CAUSE
	=====
	
	This behavior is caused by improper negotiation of the encryption state. The
	state can be either Active or Inactive. The configuration of the regional
	settings determines the encryption level.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of the post Service Pack 1 fix should have the following file
	attributes or later:
	
	  
	  Date       Time   Version       Size       File name    Platform
	  ----------------------------------------------------------------
	  03/03/2000 8:27p 2.00.1380.1132 1,292,991  Remctrl.exe  Intel
	  03/03/2000 8:25p 2.00.1380.1132   567,280  Ldwmnt.dll   Intel
	  04/02/2000 9:22p                       67  Compver.ini  
	  03/03/2000 8:30p 2.00.1380.1132 1,657,666  Remctrl.exe  Alpha
	  03/03/2000 8:25p 2.00.1380.1132   850,704  Ldwmnt.dll   Alpha
	
	
	
	The English version of the post SP2 fix should have the following file attributes
	or later:
	
	  Date       Time   Version       Size       File name          Platform
	  -----------------------------------------------------------------------
	  06/10/2000 5:40a 2.0.92.01      1,346,654  Remctrl.exe        Intel
	  06/10/2000 5:40a 2.00.1493.2121   567,280  Ldwmnt.dll         Intel
	  06/10/2000 5:40a 2.00.1493.2121   300,576  Wuser32.exe        Intel
	  06/10/2000 5:40a                       67  CompverRemCtrl.ini  
	  06/10/2000 5:40a 2.0.92.01      1,685,097  Remctrl.exe        Alpha
	  06/10/2000 5:40a 2.00.1493.2121   850,704  Ldwmnt.dll         Alpha
	  06/10/2000 5:40a 2.00.1493.2121   424,720  Wuser32.exe        Alpha
	
	The French version of the post SP2 fix should have the following file attributes
	or later:
	
	   Date      Time   Version       Size       File name         Platform
	  --------------------------------------------------------------------
	  07/30/2000 5:40a 2.0.92.01      1,350,105  Remctrl.exe        Intel
	  07/30/2000 5:40a 2.00.1493.2121   575,984  Ldwmnt.dll         Intel
	  06/10/2000 5:40a 2.00.1493.2121   300,576  Wuser32.exe        Intel
	  06/10/2000 5:40a                       67  CompverRemCtrl.ini  
	  07/30/2000 5:40a 2.0.92.01      1,688,702  Remctrl.exe        Alpha
	  07/30/2000 5:40a 2.00.1493.2121   858,896  Ldwmnt.dll         Alpha
	  06/10/2000 5:40a 2.00.1493.2121   424,720  Wuser32.exe        Alpha
	
	The International Client Pack 1 (ICP1) version of the post SP2 fix should have
	the following file attributes or later:
	
	  Date       Time   Version       Size       File name        Platform
	  ----------------------------------------------------------------
	  07/29/2000 5:40a 2.0.92.01      1,710,884  Remctrl.exe       Intel
	  07/29/2000 5:40a 2.00.1493.2121   567,280  Ldwmnt.dll        Intel
	  06/10/2000 5:40a 2.00.1493.2121   301,056  Wuser32.exe       Intel
	  06/10/2000 5:40a                       67  CompverRemCtrl.ini  
	  07/29/2000 5:40a 2.0.92.01      2,595,906  Remctrl.exe       Alpha
	  07/29/2000 5:40a 2.00.1493.2121   850,704  Ldwmnt.dll        Alpha
	  06/10/2000 5:40a 2.00.1493.2121   424,720  Wuser32.exe       Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms remctrl exe idwmnt dll wuser32 compverremctrl ini
	
	======================================================================
	Keywords          : kbsms200fix kbHelpDesk kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : :2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
