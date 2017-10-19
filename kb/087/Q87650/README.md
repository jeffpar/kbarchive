---
layout: page
title: "Q87650: X400: Command-Line Options Available to the X.400 Gateway"
permalink: /kb/087/Q87650/
---

## Q87650: X400: Command-Line Options Available to the X.400 Gateway

	Article: Q87650
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows the new command-line options for the version 3.0 of the
	Microsoft Mail Gateway to X.400.
	
	The following list of command-line options can be found in the README files on
	the gateway floppy disk.
	
	  Option            Description
	  ------            -----------
	
	  -AP[8883 | 1]     Application protocol option
	  -Ar               Verbose address rendering
	  -F[NIST,A311]     Profile selection
	  -HA               Expose hidden attachment option
	  -PMFxxxx          PerMessageFlag
	  -RPLY             Enable Reply MessageID capture
	
	The following list of command-line switches is in the "Microsoft Mail Gateway to
	X.400 Administrator's Guide" for version 3.0.
	
	  Option            Description
	  ------            -----------
	
	  -AP[1,8883]       Application protocol
	  -Av               Verbose address rendering
	  -Bd               Break absolute date
	  -Bt               Break absolute time
	  -Br               Break relative time
	  -D?               Mail database drive letter
	  -F[NIST,A311]     Profile selection
	  -H                Help
	  -Lv               Verbose logging
	  -P???             Program ID
	  -PMFxxxx          PerMessageFlag
	  -Rc               Disable content return request
	  -Re               Disable encapsulation
	  -RPLY             Enable Reply MessageID capture
	  -Rt               Disable message time-out
	  -S?               Message size limit in kilobytes
	  -Svenska          Enable Swedish IA5
	  -T                Time-out interval for NORMAL messages
	  -TN               Time-out interval for NON-URGENT messages
	  -TU               Time-out interval for URGENT messages
	  -W?               Database polling interval in seconds
	  -U?               Restart interval in minutes
	  -V20              Version 2.0 backward compatibility
	  -X                NetBIOS notification
	
	MORE INFORMATION
	================
	
	New X400GATE Command-Line Options
	---------------------------------
	
	The following X400GATE program command-line options are additions to the ones
	documented in Chapter 5, "Running the Gateway X.400 MTA," in the "Microsoft Mail
	Gateway to X.400 Administrator's Guide."
	
	-AP[8883 | 1]  Application Protocol Option
	------------------------------------------
	
	This option sets the application protocol value on outgoing connections.
	
	-AP8883 is for ISO.
	-AP1 (the default) is for CCITT.
	
	Most systems accept either value.
	
	-RPLY  Enable Reply MessageID Capture
	-------------------------------------
	
	With this option, all Microsoft Mail messages bound for an X.400 system are
	scanned to determine whether they are a reply to a message that originated from
	an X.00 messaging system. If so, the IPMessage ID of the original message that
	is being replied to is extracted and converted to the InReplyTo field of the
	outgoing message.
	
	NOTE: This only works if the user replying to the message copies the original
	message text into the reply.
	
	This option also displays the O/R name component of IPMessageIDs on incoming
	X.400 messages.
	
	-F[A311 | NIST]  Profile Selection Option
	-----------------------------------------
	
	This option affects how the Teletex bodypart is encoded.
	
	-FA311 selects the A/311 profile and causes the field
	teletexNonBasicParams.pageFormats to be set to '01'H on outgoing Teletex
	bodyparts as per the A/311 profile.
	
	-FNIST (the default) selects the NIST profile and causes the field
	teletexNonBasicParams to be left to its default.
	
	For more information on bodypart types, see "Specifying BodyPart Types" in
	Chapter 4 of the "Microsoft Mail Gateway to X.400 Administrator's Guide."
	
	-PMF[0 |1][0|1][0|1][0|1] PerMessageFlag Option
	-----------------------------------------------
	
	This option controls the values of the perMessageFlag found in the P1 envelope of
	outgoing X.400 messages:
	
	  -PMFxxxx, where "x" is either 0 (zero) or 1 (one).
	         |---- contentReturnRequest
	        |----- alternateRecipientAllowed
	       |------ conversionProhibited
	      |------- discloseRecipients
	
	Note that the command-line option -Rc also controls the value of the
	contentReturnRequest flag (sets it to 0). The -Rc parameter takes precedence
	over the -PMF parameter. If both -PMF0001 and -Rc appeared on the command line.
	the perMessageFlag would be "0000".
	
	The default value for the permessage flag is "0001".
	
	You can specify less than all 4 flags:
	
	  -PMF1 ---> perMessageFlag = 1001
	  -PMF01 --> perMessageFlag = 0101
	
	-Ar  Reverse Address Rendering Option
	-------------------------------------
	
	This option reverses the address rendering order when addresses are rendered in
	abbreviated mode.
	
	For example, the default rendering is "surname, givenname initials,
	generationQualifier".
	
	-Ar causes the address to be rendered as "givenname, initials surname,
	generationQualifier".
	
	-HA  Expose Hidden Attachment Option
	------------------------------------
	
	This command-line switch exposes the hidden attachments generated by the PC Mail
	system, which contain information about OLE objects. The default (when this
	parameter is not specified) is to remove these attachments when the message is
	converted to X.400 format.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
