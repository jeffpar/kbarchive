---
layout: page
title: "Q157013: XCON: MTA Terminates Unexpectedly with Event 3080 and 9405"
permalink: /kb/157/Q157013/
---

## Q157013: XCON: MTA Terminates Unexpectedly with Event 3080 and 9405

{% raw %}

	Article: Q157013
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) might terminate unexpectedly
	with the following sequence of events:
	
	  EventID:9405
	  Source:MSExchangeMTA
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception e0050c08 occurred at Address 77f3cbcd. [BASE OPERATOR 35] (16)
	
	  EventID:3080
	  Source:MSExchangeMTA
	  Description:
	  A fatal MTA database server error was encountered. [XAPI OPERATOR 35 245] (16)
	
	  EventID:2190
	  Source:MSExchangeMTA
	  Description:
	  An MTA database server error was encountered while creating a queue. Called
	  from XAPI. Procedure 245. Database error code: ODXAATRW - I/O Error on AAT
	  file (read/write). Queue name:
	  /O=MICROSOFT/OU=NA/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (MARS-IMC). [DB Server OPERATOR 35 61] (14)
	
	  EventID:2127
	  Source:MSExchangeMTA
	  Description:
	  An MTA database server error was encountered. Error accessing object
	  attribute(AAT) on a Read/Write operation. Filename:
	  D:\EXCHSRVR\mtadata\.\DB000030.DAT. File operation: 0. Operating system
	  error: 4096. Referenced object: OPEN (00000000 => N/A). Referenced object
	  error 00000000. [0 DB Server OPERATOR 35] (14)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	You will need to restart the MTA and it should continue to process mail without
	further incident.
	
	The call stack when viewed through a debugger might be similar to the following:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0698fd50  020b7ad1  e0050c08 00000000 00000000 KERNEL32!RaiseException+0x6a
	0698fdf4  02006647  00000010 00000029 00000c08 EMSMTA!sgplinfo+0xb301f
	0698fec8  020a99d1  00000029 00000c08 00000000 EMSMTA!sgpminfo+0x97e
	0698fef0  0211d03e  00000023 026a62c8 026a62ac EMSMTA!oxpginfo+0x47
	0698ff18  02126bbf  00000023 026ab844 00ad5bc6 EMSMTA!oxpuqdel+0x39c
	0698ff4c  020aacf8  00000023 0698ff8c 020a9d67 EMSMTA!oxpgrcvr+0x7c0e6
	0698ff58  020a9d67  00000023 00000578 00000023 EMSMTA!oxpgstrt+0x16
	0698ff68  0208fb3e  00ad5bc6 00000578 00000023 EMSMTA!oxpginit+0x70(...)
	0698ff8c  02016755  00ad5bc6 01000198 00000023 EMSMTA!oxpcmain+0xe(...)
	0698ffb8  77f26c2a  00000023 00ad5bc6 01000198 EMSMTA!sbpiwbep+0x5c
	0698ffec  00000000  020166f9 00000023 00000000
	KERNEL32!BaseThreadStart+0x61
	
	The final critical error occurred in oxpginfo(). This passed the error code (C08
	hex = 3080 decimal) up the call stack where the exception was raised. The
	unexpected termination of the MTA might have been caused by an XAPI entity
	deletion being performed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
