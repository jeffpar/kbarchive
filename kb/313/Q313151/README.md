---
layout: page
title: "Q313151: COMTI TCP/IP MS Link Fails If Less Data Is Returned Than Sent"
permalink: /kb/313/Q313151/
---

## Q313151: COMTI TCP/IP MS Link Fails If Less Data Is Returned Than Sent

	Article: Q313151
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use COM Transaction Integrator (COMTI) and TCP/IP by means of MS Link,
	with a modified version of the Microsoft supplied child server sample program
	(Mscmtics.cbl), and if the data that is returned from the mainframe host program
	is fewer bytes than what was sent to the mainframe host program, you receive an
	error message that is similar to the following:
	
	  COMTI Event 102:
	  Runtime error 2159 : the tcp transport received a socket error while
	  attempting to receive user data expected length 34, received length 25.
	  IP ADDRESS : (address) port number (port).
	  Trans ID : (trans ID)
	
	CAUSE
	=====
	
	This problem occurs when the child server program on the mainframe is designed
	to return fewer bytes of data than are received from COMTI.
	
	The Microsoft-supplied Mscmtics.cbl child server sample program is designed to
	return at least as many bytes of data as are sent to the host, even if the COMTI
	type library is designed to expect fewer bytes of data to be returned. If the
	type library is designed to receive fewer bytes, the COMTI runtime ignores the
	additional bytes that are returned by the Mscmtics.cbl child server program.
	
	For example, the error scenario occurs as follows:
	
	- The host expects to receive 34 bytes of data to process, for example, a first
	  name, a last name, and an address.
	
	- The host takes that 34 bytes of information and goes to a database to get
	  additional information to return.
	
	- The host returns only 25 bytes (for example, the phone number).
	
	- The modified version of the child server program sends only 25 bytes of data
	  back to the COMTI runtime.
	
	  In this case, if COMTI receives only 25 bytes from the host, this error occurs
	  because the COMTI runtime was designed to expect to receive at least as many
	  bytes of data as it sent (34 bytes).
	
	RESOLUTION
	==========
	
	For SNA Server 4.0, the product will not be changed to allow for returning less
	data than is sent to the host when using TCP/IP by means of MS Link.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server Version
	4.0.
	
	MORE INFORMATION
	================
	
	A COMTI tracebits trace of a method call that sends 34 bytes to the mainframe
	and receives 25 bytes in return shows the TCP Transport Link exiting abnormally
	as follows:
	
	Feb 15 17:19:07.296	18060	TCP Transport DistribLink is sending user data, length = 34
	Feb 15 17:19:07.296	18010	TCP Transport SendBuf entered, 34 bytes to send
	Feb 15 17:19:07.296	18130	TCP Transport SendBuf: Bytes sent=34.
	Feb 15 17:19:07.296	18011	TCP Transport SendBuf exited normally
	Feb 15 17:19:07.531	18016	TCP Transport ReceiveBuf entered, maximum 34 bytes to receive
	Feb 15 17:19:07.531	18090	TCP Transport RecvBuf: Remaining=34, receive size=34.
	Feb 15 17:19:07.531	18092	TCP Transport RecvBuf: Bytes received=25, total received so far=25.
	Feb 15 17:19:07.531	18090	TCP Transport RecvBuf: Remaining=9, receive size=9.
	Feb 15 17:19:07.531	18091	TCP Transport RecvBuf: Shutdown occurred.
	Feb 15 17:19:07.531	18017	TCP Transport ReceiveBuf exited normally, 25 bytes rcvd, Data Complete = 1
	Feb 15 17:19:07.531	18024	TCP Transport Link exited abnormally, HRESULT = 0000000b
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
