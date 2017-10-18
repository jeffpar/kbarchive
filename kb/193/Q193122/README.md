---
layout: page
title: "Q193122: XFOR: 0-Byte Message or Print Spool File Causes VM2DIA to Stop"
permalink: kb/193/Q193122/
---

## Q193122: XFOR: 0-Byte Message or Print Spool File Causes VM2DIA to Stop

	Article: Q193122
	Product(s): Microsoft Exchange
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages may stop flowing from Exchange to a PROFS system through the OV/VM
	LinkAge 3.2 connector. A zero-byte message or a print spool file, sent from the
	PROFS system, may cause the VM2DIA process to stop. This, in turn, causes the
	connector to stop processing all inbound messages until the user manually
	removes the problem message from the queue.
	
	One or more of the following event errors may be logged in the Exchange event
	viewer log:
	
	- Event ID 23853
	
	- Event ID 23923 (Peeking the NJE data record has failed.)
	
	- Event ID 40507, 40517, and 40512 (The RSCS fails in vm2dia.c.)
	
	- Event ID 40003 (Transform terminated.)
	
	- Event ID 23179 (SYSOUT_INBOUND has failed.)
	
	- Event ID 23106
	
	- Event ID 40501
	
	- Event ID 4065 (Critical error when attempting to process an inbound item.)
	
	- Event ID 62302
	
	The following errors will be recorded in the LinkAge browser log:
	
	- LME-PROFS-VMDIA(0124) 4 23713:DATA SET HEADER record received >>
	  rscsclnt(802)
	
	- LME-PROFS-VMDIA(0124) 4 23919:No more data set header received >>
	  rscsclnt(769)
	
	- LME-PROFS-VMDIA(0124) 1 23853:Buffer of size 80 is too small for an NJE
	  record; it must be at least 132 bytes in size >> njeclnt(806)
	
	- LME-PROFS-VMDIA(0124) 1 23923:Error occurred when peeking on an NJE data
	  record from the NJE server >> rscsclnt(955)
	
	- LME-PROFS-VMDIA(0124) 1 40507:RSCS client failed to peek record >>
	  vm2dia(1613)
	
	- LME-PROFS-VMDIA(0124) 1 40517:Failed to identify the contents of the OV/VM
	  data stream >> vm2dia(1496)
	
	- LME-PROFS-VMDIA(0124) 1 40512:Failed to parse the OV/VM distribution >>
	  vm2dia(1522)
	
	- LME-PROFS-VMDIA(0124) 1 40003:Transform has terminated with an error >>
	  vm2dia(1167)
	
	- LME-PROFS-VMDIA(0124) 3 00505:LME-PROFS-VMDIA is ending, last return code was
	  {Successful} >> stdmain(953)
	
	- LME-PROFS-VMDIA(0124) 4 40627:Terminating the RSCS client >>
	  vm2dia(783)
	
	- LME-PROFS-VMDIA(0124) 4 40584:Closed OV/VM note string table >>
	  vmsvc(246)
	
	- LME-PROFS-VMDIA(0124) 4 04101:Queue Manager successfully terminated >>
	  qm(754)
	
	- LME-PROFS-VMDIA(0124) 2 44001:OV/VM-DIA Transform terminated successfully
	  >> vm2dia(865)
	
	- LME-PROFS-DIAVM(01d5) 2 23834:Named pipe to server has been disconnected. NJE
	  Client is shutting down >> njeclnt(2456)
	
	- LME-PROFS-DIAVM(01d5) 1 23929:Error occurred while deallocating a session
	  normally >> rscsclnt(634)
	
	- LME-PROFS-DIAVM(01d5) 1 40508:RSCS client failed to deallocate a session for
	  the outbound distribution >> dia2vm(5382)
	
	- LME-PROFS-DIAVM(01d5) 2 23834:Named pipe to server has been disconnected. NJE
	  Client is shutting down >> njeclnt(2456)
	
	- LME-PROFS-DIAVM(01d5) 1 23928:Error occurred while deallocating a session
	  abnormally >> rscsclnt(629)
	
	- LME-PROFS-DIAVM(01d5) 1 40508:RSCS client failed to deallocate a session for
	  the outbound distribution >> dia2vm(5406)
	
	CAUSE
	=====
	
	A message in the PROFS environment, located in the Exchange-bound queue and
	listed with a 0-byte length, does not match the expected record length in bytes
	in the linked list element. The program then pads the difference, and the buffer
	size is too small, generating a 23853 and then fails peeking the NJE data record
	with a 23923. The RSCS fails parsing the OV/VM distribution and log. After the
	failure, the system attempts an outbound session and generates a 40501, causing
	the subsystem load to fail and generating a critical error 4065. The Directory
	Exchange Manager (DXM) mainline processing function fails, being unable to
	return an error code to the PROFS system, which leaves the bad message in the
	queue.
	
	
	Note that this problem also occurs when a print spool file is sent from the OV
	environment in an MVS system through a JES3 (Job Entry System3) connection to
	the VM system and then routed to the PROFS connector.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name     Date
	  ---------------------
	  Lsvmdia.exe   3/13/98
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LinkAge Message Exchange version
	3.2.
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : 3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
