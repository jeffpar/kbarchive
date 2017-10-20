---
layout: page
title: "Q111947: X400: Profile in X400ADM.EXE"
permalink: /kb/111/Q111947/
---

## Q111947: X400: Profile in X400ADM.EXE

{% raw %}

	Article: Q111947
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 implements a new program to help
	with the administration tasks of the gateway. This article defines the X.400
	Profile for the Local MTA.
	
	MORE INFORMATION
	================
	
	The X.400 Profile screen has 6 areas:
	
	1. Application Protocol
	
	2. Profile
	
	3. Message Timeout
	
	4. Address Rendering
	
	5. Disclose Recipients
	
	6. IA5 Translation Tables
	
	- Application Protocol
	
	  Either 1 (for the X.400 P1 protocol defined by CCITT), or 8883 (for the MOTIS
	  P1 protocol with some variations defined by ISO). The latter is seldom used.
	  This field sets the applicationProtocol value in the PConnect data element
	  for establishing an outgoing RTS connection.
	
	- Profile
	
	  Either NIST (functional profile specified by NIST agreement) or A311
	  (functional profile specified by EWOS/ETSI agreement). Profile determines how
	  the Teletext bodypart is encoded. Selecting A311, sets pageFormats in the
	  TeletextNonBasicParams field to the hexadecimal value 01. Selecting NIST
	  leaves pageFormats at the default value.
	
	- Message Timeout
	
	  The maximum length of time a message waits at the gateway to be delivered. If
	  the message has not been transmitted by the end of the timeout period, a
	  nondelivery report is sent to the originator. Message timeouts can be set for
	  normal, nonurgent and urgent messages. The maximum value that you can define
	  is 99 hours:59 minutes. To configure messages to remain in the delivery queue
	  indefinitely until they are delivered, set the timeout period to zero.
	
	  Here are the default message timeout periods:
	
	  Microsoft Mail         X.400 Mail          Default timeout 
	  ---------------------------------------------------------------------
	  priority               priority            period
	  Normal                 Normal              24 hours
	  Low                    Non-urgent          36 hours
	  High                   Urgent              45 minutes
	
	  When the gateway restarts, all messages currently waiting in the delivery
	  queue are assigned a normal priority, even if their originator specified low
	  or high priority.
	
	- Address Rendering
	
	  Here are the address rendering options for X.400 addresses in the Microsoft
	  Mail message From, To, and Cc fields in inbound mail.
	
	  To                                         Select
	  Print the personal name attributes         Normal
	  only (surname, given name, initials,
	  generation qualifier).
	  Print the X.400 addresses in               Verbose
	  expanded format.
	  Print the personal name attributes         Reverse
	  only in the following reverse
	  sequence: given name, initials,
	  surname, generation qualifier.
	
	- Disclose Recipients
	
	  Here are the X.400 message options you can select.
	
	  To                                         Use this option 
	  ---------------------------------------------------------------------
	
	  Indicate to the receiving                  Disclose Recipients
	  X.400 MTA that the O/R names
	  of all recipients be disclosed.
	
	  Prevent the X.400 recipient MTA            Conversion Prohibited
	  from converting an attachment to
	  a different format.
	
	  Indicate to the receiving X.400            Alternate Recipient
	  MTA that the message be delivered          Allowed
	  to an alternate recipient, if the
	  intended recipient is not
	  available.
	
	  Indicate to the receiving X.400            Content Return
	  MTA that the message contents be
	  included in the nondelivery report,
	  if the X.400 recipient does not
	  exist.
	
	  Include the in-reply-to header             Include In-reply-to
	  in an outbound reply to an inbound         Header
	  message from an X.400 system. The
	  original message must have been
	  copied into the reply.
	
	- IA5 Translation Tables.
	
	  If you communicate with an X.400 MTA that uses a different character set from
	  your local MTA, you need access to IA5 translation tables. The gateway
	  provides tables for German, IRV (International Reference Version), Norwegian,
	  and Swedish. You can specify one table for inbound mail and one table for
	  outbound mail. With both inbound and outbound mail, if you do not specify a
	  translation table, the gateway converts each noncompliant character to a
	  question mark.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
