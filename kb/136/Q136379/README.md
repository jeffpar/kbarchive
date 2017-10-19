---
layout: page
title: "Q136379: FFAPI: Err Msg: &#91;021&#93; Message Was Not Delivered Due to..."
permalink: /kb/136/Q136379/
---

## Q136379: FFAPI: Err Msg: &#91;021&#93; Message Was Not Delivered Due to...

	Article: Q136379
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message and later receive a non-delivery message, the following
	message may be included:
	
	  [021] Message was not delivered due to missing routing file.
	
	The message is also placed in the SYSTEM.LOG of the postoffice of the recipient.
	This non-delivery message can be inappropriate in that the recipient has
	received the message.
	
	CAUSE
	=====
	
	Gateways and FFAPI-based applications can contribute to the occurrence of this
	incorrect message. When these programs execute the mailer process, they will
	delete the routing file prior to updating the In queue of the postoffice. When
	the In queue cannot be updated due to file contention, a reference will continue
	to exist for a message that has no associated routing file. This will cause the
	021 message on the next cycle of In queue processing.
	
	
	WORKAROUND
	==========
	
	When possible, the following steps should be taken to reduce the occurrence of
	these errors.
	
	- Use the mailer disable option on gateways that support this option. When you
	  use the mailer disable option, an external program must be available to
	  perform the mailer option. (Version 3.2 and later of the External Mail
	  program (EXTERNAL.EXE will not delete the routing file if the In queue cannot
	  be updated.)
	
	  The SMTP and X400 gateways support -md (mailer disable.)
	
	- Place gateways and FFAPI-based applications on postoffices that have a
	  minimal amount of In queue activity. This will reduce the occurrence of In
	  queue file contention and increase the likelihood that the In queue will be
	  updated successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	Software Development Kit: FFAPI for Gateways and Applications. A fix for this
	problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Contact Microsoft Product Support
	Services for more information on the availability of this fix.
	
	
	
	MORE INFORMATION
	================
	
	Mailer is the process that handles mail that has been posted to the In queue
	mailbag of a postoffice. The process involves posting a message header into each
	recipients mailbag, updating the In queue to remove the reference to the mail
	item, and deleting the routing file that was used to identify local recipients
	of the message.
	
	The 021 error can occur when the mailer process is unable to access the In queue
	to delete the reference to the mail item following mail delivery. On a
	subsequent mailer process, a header is found that no longer has a routing file
	associated with it. This produces the 021 error message in the SYSTEM.LOG and
	results in the non-delivery notice being sent to the sender of the mail item.
	
	NOTE: The problem described in this article will not occur in mail systems that
	have version 3.2 or later of the External Mail program. These versions of
	External will not delete the routing file when the In queue cannot be updated.
	
	Additional query words: 3.00 inqueue3 key pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
