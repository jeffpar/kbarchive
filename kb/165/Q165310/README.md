---
layout: page
title: "Q165310: 5250 Print Sessions Don't Reconnect After Connection Outage"
permalink: /kb/165/Q165310/
---

## Q165310: 5250 Print Sessions Don't Reconnect After Connection Outage

	Article: Q165310
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	5250 print sessions defined under the Host Print service for SNA Server 3.0 stay
	in an Inactive state after the SNA Server connection to the AS/400 recovers from
	a connection outage. This occurs even though the 5250 print sessions are
	configured for Automatic activation in SNA Server Manager.
	
	This problem will occur even if the connection outage is caused by a planned
	outage, such as an AS/400 IPL.
	
	SNA Server Manager will show that the connection to the AS/400 has been
	reactivated via the normal retry algorithm of SNA Server, but the 5250 print
	sessions are still Inactive.
	
	CAUSE
	=====
	
	5250 print sessions do not try to reestablish the APPC conversation after the
	APPC conversation was terminated by a connection outage.
	
	RESOLUTION
	==========
	
	The workaround is to manually start the 5250 print sessions after a connection
	outage has occurred.
	
	The Host Print service has been updated so that 5250 print sessions will try to
	reactivate the APPC conversation using configurable parameters that set the
	number of retry attempts and the retry interval between attempts. These two
	parameters are configurable via the following registry parameters
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \SnaPrint\Parameters\ActivationRetryLimit: REG_DWORD: <limit>
	
	where: <limit> is the number of retries. The default value is -1
	(infinite), if this parameter is not set.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \SnaPrint\Parameters\ActivationRetryInterval: REG_DWORD: <interval>
	
	where <interval> is the retry interval in seconds. The default value is 10
	seconds, if this parameter is not set. The updated module is:
	
	  <Snaroot>\System\Ppd5250.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
