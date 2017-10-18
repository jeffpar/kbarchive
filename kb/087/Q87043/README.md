---
layout: page
title: "Q87043: SMTP: Recommended Command-Line Parameters"
permalink: kb/087/Q87043/
---

## Q87043: SMTP: Recommended Command-Line Parameters

	Article: Q87043
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles describes the parameters normally recommended for use with the
	Microsoft Mail Gateway to SMTP:
	
	- D
	
	- Ci
	
	- Lacsy
	
	- P001
	
	MORE INFORMATION
	================
	
	The following are descriptions of each of the parameters listed above:
	
	  Parameter   Description
	  ---------   -----------
	  -D          Denotes that the letter following it is the drive
	              defined as the mail database directory. For example,
	              -DN denotes that drive N is mapped to the mail database
	              directory.
	
	  -Ci         Denotes that all types of messages are logged to the
	              log file.
	
	  -Lacsy      Denotes that the maximum amount of information is
	              saved in the log file created by the gateway. The -L
	              option will create the log file if no log file exists.
	              The log file is called SMTPGATE.LOG and is found under
	              the mail database directory LOG.
	
	  -P001       Denotes that the gateway has a process number of 001.
	              The numbers following the -P0 can range from 01 to FF.
	              This number should be unique in your environment; that
	              is, any external (external programs and gateways)
	              process that accesses the mail database on this
	              postoffice should have a unique -P0nn value.
	
	For more information on all the options available, see the "Command Line Options"
	section in Chapter 4 of the "Microsoft Mail Gateway to SMTP Administrator's
	Guide."
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
