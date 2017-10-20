---
layout: page
title: "Q180928: 5250 Applet Fails to Connect, Displaying Error &#91;0003&#93;&#91;00000005&#93;"
permalink: /kb/180/Q180928/
---

## Q180928: 5250 Applet Fails to Connect, Displaying Error &#91;0003&#93;&#91;00000005&#93;

{% raw %}

	Article: Q180928
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following problem may occur when you use the 5250 applet, which is provided
	with SNA Server. Other third-party 5250 emulators, APPC programs, or CPIC
	programs may report a different error message.
	
	After you start a 5250 session and enter an AS/400 Userid and Password in the
	AS/400 logon dialog box, the 5250 session shows a blank screen displaying the
	following message in the lower left corner of the applet:
	
	  Opening Connection to <AS/400_Name>
	
	After a while the following error message appears:
	
	  Could not connect to remote host
	
	  [0003] [00000005]
	
	An APPC program will receive the following error message:
	
	  primary_rc - 0x0003 (AP_ALLOCATION_ERROR) secondary_rc = 0x00000005
	  (AP_ALLOCATION_FAILURE_RETRY)
	
	And a CPIC program will receive the following error message:
	
	  rc = 2 (CM_ALLOCATE_FAILURE_RETRY)
	
	When you connect to an AS/400, this may also coincide with Event 23 with a
	Qualifier = 00AE in the Windows NT application log of the event viewer.
	
	CAUSE
	=====
	
	This error can occur when you configure the Implicit Incoming Remote LU
	(pointing to the Remote LU Alias) from the Local APPC LU folder, and if an APPC
	mode is selected in the Implicit Incoming Mode from the Remote LU folder.
	
	WORKAROUND
	==========
	
	To work around this problem, change both the Implicit Incoming Remote LU and the
	Implicit Incoming Mode to none. Resave the configuration file, and restart the
	affected SNA Server service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0 SP1,
	and 4.0. This problem was corrected in the latest Microsoft SNA Server 4.0 U.S.
	Service Pack 1. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For additional information, please see Knowledge Base article Q166529, "APPC
	Applications Fail to Connect to SNA Server 3.0."
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
