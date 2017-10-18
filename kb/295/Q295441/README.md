---
layout: page
title: "Q295441: SMS: Logon Discovery Agent Creates Multiple Connections"
permalink: kb/295/Q295441/
---

## Q295441: SMS: Logon Discovery Agent Creates Multiple Connections

	Article: Q295441
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Logon Discovery Agent service that is running on domain
	controllers may report errors when the service tries to copy Discovery Data
	Records (DDRs) to Systems Management Server (SMS) site servers. The following
	error message may be recorded hundreds of times in the Logon Discovery Agent log
	file (Ntlgdsca.log) that is located on the domain controller:
	
	  AddConnection to \\SMSServer\SMS_site code success
	  AddConnection to \\SMSServer\SMS_site code success
	  AddConnection to \\SMSServer\SMS_site code success
	  AddConnection to \\SMSServer\SMS_site code success
	  AddConnection to \\SMSServer\SMS_site code success
	  ~Site site code: CopyFile E:\SMSLOGON\DDR.box\HNWADAEG.DDR to
	  \\SMSServer\SMS_site code\inboxes\ddm.box\HNWADAEG.DDR success
	  CancelConnection failed ret=2250, LastError=2250
	  CancelConnection failed ret=2250, LastError=2250
	  CancelConnection failed ret=2250, LastError=2250
	  CancelConnection failed ret=2250, LastError=2250
	
	The preceding entries are typical entries when this problem occurs. For example,
	there are five successful connections to the site server, four attempts to
	delete the connections that fail, although the first one succeeds.
	
	The Logon Discovery Agent may create hundreds of connections to the SMS site
	server when it tries to send up the DDRs.
	
	Over time, the number of connections that are made from the domain controller to
	the SMS site server may increase, and available memory on the domain controller
	may run out.
	
	CAUSE
	=====
	
	Logon Discovery Agent leaks memory (memory usage:Private Bytes) when it re-reads
	the site list from its configuration file (which happens at every DDR copy
	pass).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version        Size       File name     Platform
	  ------------------------------------------------------------------
	  01-Mar-00  11:10  2.0.1493.3190    965,728  Baseobj.dll   Intel
	  01-Mar-00  11:10  2.0.1493.3190     37,728  Ntlgdsca.exe  Intel
	
	  01-Mar-00  11:10  2.0.1493.3190  1,514,768  Baseobj.dll   Alpha
	  01-Mar-00  11:10  2.0.1493.3190     58,640  Ntlgdsca.exe  Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Disable the Windows NT Logon Discovery method to remove the Logon Discovery
	  Agent service from domain controllers.
	
	2. Restart the Logon Discovery Agent service regularly on the domain
	  controllers, for example, as part of a scheduled backup job.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	In addition to the error message that is described in the "Symptoms" section of
	this article, you can run Perfmon.exe and view the memory usage (private bytes)
	on the Ntlgdsca.exe process to determine if a domain controller is affected by
	this problem.
	
	Factors that have an affect on how fast the domain controller may run out of
	memory are:
	
	- The role of the logon server in a shared domain scenario (a PDC is updated
	  much more frequently than a BDC because only the senior site updates the
	  BDCs).
	
	- The logon point update frequency.
	
	- The amount of RAM that is installed on the domain controller.
	
	- The frequency of incoming DDRs. Note that it does not matter if a large batch
	  of DDRs are received or just one; a new connection is appended as long as at
	  least one DDR has been received since the last Logon Server Manager cycle.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
