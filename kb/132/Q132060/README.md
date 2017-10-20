---
layout: page
title: "Q132060: SMTP: SMTP Gateway in Small, Medium, and Large Organizations"
permalink: /kb/132/Q132060/
---

## Q132060: SMTP: SMTP Gateway in Small, Medium, and Large Organizations

{% raw %}

	Article: Q132060
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can deploy the Microsoft Mail Gateway to SMTP in several physical ways
	within an organization. The model you choose depends on both the volume of mail
	moved to and from SMTP and the external-postoffice routes defined within your
	Microsoft Mail for PC Networks postoffice(s).
	
	This may be an issue for your organization because the Gateway to SMTP will only
	move one message in or out of Microsoft Mail at a time. As a result, it may
	become a bottleneck for the SMTP mail flow.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q87045SMTP: What the Gateway to SMTP Does
	
	MORE INFORMATION
	================
	
	Single Gateway Solution (Small Organization)
	--------------------------------------------
	
	Typically, the Gateway to SMTP is installed on one Microsoft Mail postoffice (a
	gateway postoffice) and other postoffices (downstream postoffices) will send or
	receive SMTP mail via the single gateway postoffice . This solution works well
	for most organizations. However, when the volume of an organization exceeds the
	physical limitations of the SMTP gateway: roughly 10,000 messages per day
	(average message size approximately 8 kilobytes) a bottleneck can occur.
	
	     _______                    _______                   _______
	  |Downstm|                 | Gateway |      SMTP      | Smart |
	  |  PO   | -<--External-->-|  PO     |-<---Gateway-->-| Host  |
	   -------                   ---------                  -------
	
	For additional information, please see pages 5 and 17 in the SMTP
	"Administrator's Guide."
	
	Multiple Gateway Solution (Small/Medium/Large)
	----------------------------------------------
	
	One way to workaround the bottleneck described above is to purchase several
	copies of the Microsoft Mail Gateway to SMTP and install them on postoffices
	within the Microsoft Mail environment. The Microsoft Mail downstream postoffices
	may then be logically divided into groups so that they evenly distribute the
	traffic of SMTP mail between the multiple gateways.
	
	This model is useful for organizations that need to move large volumes of SMTP
	mail, and for organizations that have complex external-postoffice routes
	defined.
	
	     _______                   _______                   _______
	  |Downstm|                 |Gateway|     SMTP        | Smart |
	  |  PO   | --<->-|---<->---|  PO   |-----Gateway-<->-|  Host |
	   -------        |          -------                   -------
	                  |                                     ^
	   _______        |                                     |
	  |Downstm|       |                                     |
	  |  PO   |--<->--|                                     |
	   -------        |                                     |
	   _______    External       _______                    |
	  |Downstm|       |         |Gateway|     SMTP          |
	  |  PO   | -<->--|---<->---|  PO   |-----Gateway--<->---|
	   -------        |          -------
	                  |
	   _______        |
	  |Downstm|       |
	  |  PO   | -<->--|
	   -------
	
	Dedicated Send/Receive Gateways (Medium/Large Organization)
	-----------------------------------------------------------
	
	Another way to workaround the bottleneck issue is to divide the responsibilities
	of a single SMTP gateway on to two IBM-compatible computers. One computer is
	dedicated for moving mail from Mail to SMTP (send); the other can be responsible
	for moving mail from SMTP to Microsoft Mail (receive).
	
	Once configured these gateways become independent gateways, each limited only to
	its own capacity (refer to article on Theoretical Performance of the SMTP
	Gateway). However, this configuration should only be used when each dedicated
	gateway has a dedicated gateway postoffice.
	
	The following is a logical drawing of message routing:
	
	   _______
	  |Downstm|
	  |  PO   |                    _______      Sending     _______
	   ------- --<->---|          |Gateway|     SMTP       | Smart |
	                   |-->---->--|  PO   |-->--Gateway->--|  Host |
	                   |           -------                  -------
	   _______         |                                         |
	  |Downstm|--<->---|                                         |
	  |  PO   |        |                                         |
	   -------      External                                     |
	   _______         |                 _______     Receiving   |
	  |Downstm|--<->---|                |Gateway|    SMTP        |
	  |  PO   |        |-----<-----<----|  PO   |-<--Gateway--<--|
	   -------         |                 -------
	                   |
	   _______         |
	  |Downstm|--<->---|
	  |  PO   |
	   -------
	
	Configuration Summary
	---------------------
	
	First configure a single IBM-compatible computer to successfully move SMTP mail
	bi-directionally (as if will be the only computer responsible for SMTP traffic).
	Once this gateway computer is a functional SMTP gateway, then set up a second
	computer with the exact same configuration and batch files, except using a
	different TCP/IP number.
	
	Notes:
	
	- Do not try to load the gateway on both computer simultaneously.
	
	- You do not need to add an Address Record on your Smart Host for the second
	  computer.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q101459 SMTP: GW0645: Configuring the SMTP Gateway & DNS
	
	The first computer will become the gateway responsible for receiving mail from
	SMTP.
	
	1. Copy SMTPGATE.EXE and SMTPPUT.EXE to the local hard drive of this computer.
	  This is required.
	
	  IMPORTANT: Do not copy SMPTGET.EXE to the local drive.
	
	2. Modify your configuration files to locate the local executable files, and
	  remove the server executable location from the path statement.
	
	3. Modify the gateway command line options to configure it for INBOUND SMTP
	  mail.
	
	  NOTE: When this inbound gateway (SMTPGATE.EXE) cycles through its routine, it
	  will try and locate SMTPGET.EXE. It will take approximately three (3) seconds
	  to fail before it proceeds back to its designated receive mode. This error
	  will be displayed on screen.
	
	4. Your first computer is now ready to act as a dedicated "Inbound SMTP
	  Gateway."
	
	  Example Inbound SMTP Command Line:
	
	        SMTPGATE  -w32767 -i63 -md -lascy -ci -gascy
	
	The second computer will become your gateway to send mail to SMTP.
	
	1. Copy SMTPGATE.EXE and SMTPGET.EXE to the local hard drive of this computer.
	  This is required.
	
	2. Modify your configuration files to locate the local executable files, and
	  remove the server executable location from the path statement.
	
	  IMPORTANT: Do not copy SMTPPUT.EXE to the local drive.
	
	3. Modify the gateway command line options to configure it for OUTBOUND SMTP
	  mail.
	
	  NOTE: When this outbound gateway cycles through its routine, it will try and
	  locate SMTPPUT.EXE. It will take approximately three (3) seconds to fail
	  before it proceeds back to its designated receive mode. This error will be
	  displayed on screen.
	
	4. Your second computer is now ready to act as a dedicated "Outbound SMTP
	  Gateway."
	
	  Example Outbound SMTP Command Line:
	
	  SMTPGATE -w120 -q180 -063 -md -ln -ci -gascy -ms
	
	  NOTE: Because the SMTP Gateway is designed to write all temporary files in
	  M:\SMTP\*.*, each dedicated gateway (send or receive) will be using the same
	  temporary directory. If a single postoffice is used to support both dedicated
	  gateways, it will only be a matter of time until the two gateways begin to
	  process each others temporary files (that is, message parts).
	
	  Ultimately, the gateways will lock on a temporary file and halt mail in both
	  directions, requiring human intervention: a reboot of both gateways.
	
	Multiple Dedicated Send/Receive Gateways (Medium/Large Organizations)
	---------------------------------------------------------------------
	
	The above can be adapted for an even more intense SMTP Gateway configuration.
	
	   _______
	       |Downstm|
	  |-<>-|  PO   |--------|           _______      Sending     _______
	  |     -------         |          |Gateway|     SMTP       | Smart |
	  |                     |-->---->--|  PO   |-->--Gateway->--|  Host |
	  |                     |           -------                  -------
	  |      _______        |                                         |
	  |    |Downstm|--------|                                         |
	  |-<>-|  PO   |        |                                         |
	  |     -------      External                                     |
	  |     _______         |                 _______     Receiving   |
	  |    |Downstm|------- |                |Gateway|    SMTP        |
	  |-<>-|  PO   |        |-----<-----<----|  PO   |-<--Gateway--<--|
	  |     ------          |                 -------
	  |                     |
	  |     _______         |
	  |    |Downstm|--------|
	  |-<>-|  PO   |
	  |     -------
	External
	  |     _______
	  |    |Downstm|
	  |-<>-|  PO   |                    _______      Sending     _______
	  |     ------- --------|          |Gateway|     SMTP       | Smart |
	  |                     |-->---->--|  PO   |-->--Gateway->--|  Host |
	  |                     |           -------                  -------
	  |     _______         |                                         |
	  |    |Downstm|--------|                                         |
	  |-<>-|  PO   |        |                                         |
	  |     -------      External                                     |
	  |     _______         |                 _______     Receiving   |
	  |    |Downstm|------- |                |Gateway|    SMTP        |
	  |-<>-|  PO   |        |-----<-----<----|  PO   |-<--Gateway--<--|
	  |     -------         |                 -------
	  |                     |
	  |     _______         |
	  |    |Downstm|--------|
	  |-<>-|  PO   |
	        -------
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
