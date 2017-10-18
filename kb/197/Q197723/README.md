---
layout: page
title: "Q197723: XFOR: Understanding Message Flow for New GroupWise Connector"
permalink: kb/197/Q197723/
---

## Q197723: XFOR: Understanding Message Flow for New GroupWise Connector

	Article: Q197723
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Prior to the new GroupWise connector (Web 3 C&M drop), basic messaging
	between GroupWise users and Exchange Server users was accomplished using SMTP
	or, in some cases, X.400. The new GroupWise connector will only support SMTP for
	messaging. This article describes the basic messaging flow between both mail
	systems.
	
	MORE INFORMATION
	================
	
	Exchange Server to GroupWise
	----------------------------
	
	1. Exchange Server user composes mail, selects a GroupWise Custom Recipient (CR)
	  from the global address list, then sends the mail.
	
	2. The message transfer agent (MTA) routes it to the Internet Mail Service where
	  it is delivered to the GroupWise SMTP agent. This step assumes that the
	  Internet Mail Service is already configured with the new address type of
	  GWISE.
	
	3. The message is delivered using GroupWise's internal mechanism to the target
	  recipient.
	
	Additional note: The GroupWise custom recipient's SMTP proxy address is not the
	standard Exchange Server-based proxy address. The SMTP address is based on the
	configuration in the GroupWise connector, or pulled individually for each
	GroupWise user if their SMTP addresses are different
	
	GroupWise to Exchange Server
	----------------------------
	
	1. GroupWise user composes mail, selects an Exchange Server user as a recipient,
	  and sends e-mail.
	
	2. API Gateway takes the message and drops it in the API_OUT directory on the
	  Novell server.
	
	3. The GroupWise Router for Novell takes the message the from API_OUT and
	  rewrites the headers before dropping the message in the API_IN, for example:
	  Header of original mail message from GroupWise to Exchange Server found in
	  API_OUT:
	
	  From=
	      WPD= BETA 5;
	      WPPO= PETALING JAYA;
	      WPU= efong;
	      FUA= efong@grpwise.petaling.com;
	      FN= Eddie;
	      LN= Fong;
	      S= Fong;
	      G= Eddie; ;
	  To=
	      WPD= Exchange;
	      WPPO= WasteLand;
	      WPU= EvilE;
	      WPPONUM= 1;
	      WPUNUM= 1;
	      FUA= EvilE@WasteLand.com;
	      FN= Evil;
	      LN= Eye;
	      Dept=  ;
	      TTL=  ;
	      TEL=  ;
	      FAX=  ;
	      S= Eye;
	      G= Evil;
	    CDBA= 0001:0001; ;
	
	  Header of modified mail message placed in API_IN:
	
	  From=
	      WPD= BETA 5;
	      WPPO= PETALING JAYA;
	      WPU= efong;
	      ;
	  To=
	      WPD= Beta 5;
	      WPPO= SMTP;
	      WPU= "EvilE@WasteLand.com";
	      ;
	
	4. The API Gateway takes the message from API_IN, matches the alias "SMTP" as
	  belonging to the GroupWise SMTP Agent, and hands it off accordingly. Note
	  that the alias name was written by the GWROUTER program based on the
	  configuration set in the GroupWise Connector.
	
	5. The GroupWise SMTP agent then connects with the Internet Mail Service in
	  Exchange Server to complete the delivery of the message back to Exchange
	  Server.
	
	Additional query words: messaging, SMTP, Exchange to Groupwise
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
