---
layout: page
title: "Q88779: SMTP: Examples of Typical SMTP Addresses"
permalink: kb/088/Q88779/
---

## Q88779: SMTP: Examples of Typical SMTP Addresses

	Article: Q88779
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here are some examples of SMTP address syntax:
	
	- USER@COMPANY.COM
	
	- USER@UNIVERSITY.EDU
	
	- USER@GOVERNMENT.APPS.GOV
	
	- USER@US.NAVY.MIL
	
	The "USER" portion is mapped to the mailbag name when the gateway receives the
	message. This name can be no longer than 10 characters--something you should
	consider when planning your naming conventions if an SMTP gateway will be used
	in the environment.
	
	The gateway maps everything after the @ sign to a network and postoffice name.
	For more information on this topic, see the "Mapping Microsoft Mail Addresses to
	SMTP Addresses" section in Chapter 3 of the "Microsoft Mail Administrator's
	Guide."
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
