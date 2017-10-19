---
layout: page
title: "Q220833: XFOR:How to Capture &amp; Replay Messages Through PROFS Connector"
permalink: /kb/220/Q220833/
---

## Q220833: XFOR:How to Capture &amp; Replay Messages Through PROFS Connector

	Article: Q220833
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As part of the troubleshooting steps for the Exchange OV/VM (PROFS) Connector,
	it may be required to capture messages sent from the host to Exchange Server,
	and subsequently reproduce the same problem locally. This article describes an
	undocumented feature of the OV/VM Connector included with Microsoft Exchange
	Server 5.5 Service Pack 2.
	
	MORE INFORMATION
	================
	
	1. Install Exchange Server 5.5 and apply Service Pack 2.
	
	2. Install and configure the OV/VM (PROFS) connector from Service Pack 2. Refer
	  to the PROFS Connector documentation for further details if necessary.
	
	3. Locate the Exchconn.ini file in the Exchsrvr\Connect\Exchconn folder.
	
	4. Edit the Exchconn.ini file so that the following line is present in the
	  [LME-PROFS] section. In the majority of cases, this parameter will already be
	  present, but commented out.
	
	  debug = Yes
	
	5. Restart the OV/VM (PROFS) Connector for this to take effect. Note that this
	  setting should only be used for troubleshooting purposes. It should be
	  removed as soon as the problem is resolved, otherwise, every message sent
	  from the host to Exchange Server is archived.
	
	6. Create a secondary PROFS address for a mailbox recipient in Exchange Server
	  that matches the intended recipient of that message, depending on the
	  customer's environment and problem.
	
	7. Start the Exchange Connectivity Administrator program.
	
	8. Go to the Process Manager window.
	
	9. Select, and then stop the following process:
	
	  NJE Server or LME-PROFS-NJE
	
	10. Open a command window and change directory to Exchsrvr\Connect\Exchconn.
	
	11. Type in the following command to put your modified message back into the
	  mail stream:
	
	  "xfmload -nLME-PROFS-VMDIA -pCONTROL-SERVICE -i njeXXXX.dat" (without the
	  quotation marks)
	
	  where XXXX represents the sequential ordering of each archived file.
	
	12. You see the following output:
	
	C:\exchsrvr\CONNECT\exchconn>xfmload -nlme-profs-vmdia -pcontrol-service -i nje0
	000.dat
	17:37:57- 3 00504:lme-profs-vmdia started
	> stdmain(883)
	entering xfmlServEventTimer
	exiting xfmlServEventTimer
	entering xfmlServEventTimer
	exiting xfmlServEventTimer
	max ru size specified in CT record is 1024
	entering xfmlServEventTimer
	nje0000.dat files not found...continuing
	exiting xfmlServEventTimer
	17:38:27- 2 00500:An ABNORMAL SHUTDOWN request has been received
	> stdmain(920)
	17:38:27- 2 01108:Event server-lsnje.f-1.r has been destroyed, but is still registered with the event manager
	> evtsem(335)
	
	C:\exchsrvr\CONNECT\exchconn>
	
	13. After the message has been reintroduced into Exchange Server, the NJE Server
	  process needs to be manually restarted.
	
	Additional query words: profs, replay
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
