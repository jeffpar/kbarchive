---
layout: page
title: "Q107098: X400: README.TXT: Gateway to X.400, Version 3.0"
permalink: /kb/107/Q107098/
---

## Q107098: X400: README.TXT: Gateway to X.400, Version 3.0

	Article: Q107098
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the text of the Microsoft Mail Gateway to X.400 Readme file.
	
	This document contains important information for administrators running version
	3.0 of Microsoft Mail Gateway to X.400. It supplements the information in the
	Microsoft Mail Gateway to X.400 Administrator's Guide. This document covers the
	following topics:
	
	- System Requirements
	
	- New X400GATE MS-DOS ErrorLevel Return Codes
	
	- New X400GATE Command-Line Options
	
	- Additional Aspects of the Advanced Address Mapping
	
	- Changes/Additions to the Administrator's Guide
	
	   - Administrator Program Error Messages
	
	   - Additions to the List of the O/R_Attribute Keyword.
	
	   - Break Absolute Option
	
	   - Expanded Format Section in Appendix G
	
	   - Call User Data Field
	
	   - User Facility Field
	
	SYSTEM REQUIREMENTS
	-------------------
	
	We recommend that the X.400 gateway machine have at least 400K conventional
	memory free before loading the X400GATE.EXE program.
	
	NEW X400GATE MS-DOS ERRORLEVEL CODES
	------------------------------------
	
	The X400GATE ErrorLevel codes as documented in Chapter 5, Running the Gateway
	X.400 MTA, have been changed and are now as follows:
	
	  60 The program halted upon reaching the break absolute time as specified with
	  the -BT option or upon reaching the break absolute date as specified with the
	  -BD option.
	
	  63 The program halted upon reaching the break relative time as specified with
	  the -BR option.
	
	  65 The program halted due to an error.
	
	  66 The program was halted manually.
	
	NEW X400GATE COMMAND-LINE OPTIONS
	---------------------------------
	
	The following X400GATE program command-line options are additions to the ones
	documented in Chapter 5, Running the Gateway X.400 MTA.
	
	-AP[8883 | 1]  Application Protocol Option
	------------------------------------------
	
	This option sets the application protocol value on outgoing connections.
	
	-AP8883 is for ISO.
	-AP1 (the default) is for CCITT.
	
	Most systems accept either value.
	
	-RPLY  Enable Reply MessageID Capture
	-------------------------------------
	
	With this option all Microsoft Mail messages bound for an X.400 system are
	scanned to determine whether they are a reply to a message that originated from
	an X.00 messaging system. If this is the case, the IPMessage ID of the original
	message that is being replied to is extracted and is converted to the InReplyTo
	field of the outgoing message.
	
	NOTE: This only works if the user replying to the message copies the original
	message text into the reply.
	
	This option also displays the O/R name component of IPMessageIDs on incoming
	X.400 messages.
	
	-F[A311 | NIST]  Profile Selection Option
	-----------------------------------------
	
	This option affects how the Teletex bodypart is encoded.
	
	-FA311 selects the A/311 profile and causes the teletexNonBasicParams.pageFormats
	field to be set to '01'H on outgoing Teletex bodyparts as per the A/311
	profile.
	
	-FNIST (the default) selects the NIST profile and causes the
	teletexNonBasicParams field to be left to its default.
	
	For more information on bodypart types see "Specifying BodyPart Types" in Chapter
	4 of the Administrator's Guide.
	
	-PMF[0 |1][0|1][0|1][0|1] PerMessageFlag Option
	-----------------------------------------------
	
	This option controls the values of the perMessageFlag found in the P1 envelope of
	outgoing X.400 messages.
	
	-PMFxxxx, where 'x' is either '0' or '1'
	
	      |---- contentReturnRequest
	     |----- alternateRecipientAllowed
	    |------ conversionProhibited
	   |------- discloseRecipients
	
	Note that the command-line option -Rc also controls the value of the
	'contentReturnRequest' flag (sets it to '0'). The -Rc parameter takes precedence
	over the -PMF parameter. If both -PMF0001 and -Rc appeared on the command line
	the perMessageFlag would be '0000'.
	
	The default value for the permessage flag is '0001'.
	
	You can specify fewer than all 4 flags.
	
	-PMF1 ---> perMessageFlag = 1001
	-PMF01 --> perMessageFlag = 0101
	
	-Ar Reverse Address Rendering Option
	------------------------------------
	
	This option reverses the address rendering order when addresses are rendered in
	abbreviated mode.
	
	For example, the default rendering is:
	
	  "surname, givenname initials, generationQualifier"
	
	-Ar cause the address to be rendered as
	
	  "givename, initials surname, generationQualifier"
	
	-HA Expose Hidden Attachment Option
	-----------------------------------
	
	This command-line switch will expose the hidden attachments generated by the PC
	Mail system. These attachments contain information about OLE objects. The
	default (when this parameter is not specified) is to remove these attachments
	when the message is converted to X.400 format.
	
	ADDITIONAL ASPECTS OF ADVANCED ADDRESS MAPPING
	----------------------------------------------
	
	This section contains further aspects of advanced address mapping. It supplements
	"Advanced Address Mapping" in Chapter 4, Maintaining the Gateway
	
	Multiple Entries for a Single Recipient
	---------------------------------------
	
	In a single Advanced Address Mapping file there may be more than one entry for a
	single Microsoft Mail recipient. This allows a Microsoft Mail user to receive
	mail addressed to more than one X.400 address. This is illustrated with the
	following advanced address mapping file:
	
	  MSM:Msoft/WGC/Peter      X400:o=Msoft;s=Gron;g=Peter;i=E
	  MSM:Msoft/WGC/Peter      X400:o=Msoft;s=Gron;g=Peter
	  MSM:Msoft/WGC/Peter      X400:o=Msoft;s=Gron
	
	This file allows the Microsoft Mail user to receive X.400 mail addressed to
	either of these three X.400 addresses. When this user originates X.400 mail, the
	first address in the above list will be used in the originator field.
	
	An additional example is shown below. A Microsoft Mail user is in the process of
	moving to a new postoffice and would like all new X.400 mail delivered to the
	new mailbox but would still like to be able to send mail from the old mailbox.
	The following advanced address mapping file allows this.
	
	  MSM:NewNet/NewPO/NewMBX       X400:o=Msoft;s=Gron;g=Peter
	  MSM:OldNet/OldPO/OldMBX       X400:o=Msoft;s=Gron;g=Peter
	
	All incoming X.400 mail addressed to "o=Msoft;s=Gron;g=Peter" is delivered to
	"NewNet/NewPO/NewMBX" but all outgoing mail from either mailbox (new or old)
	will have the same X.400 originator's address (which will cause any replies to
	be delivered to the new mailbox).
	
	Wildcard Characters
	-------------------
	
	The wildcard character (*) can be used in X.400 address attributes in the
	advanced address mapping file. When mapping a Microsoft Mail address to X.400
	format, the wildcard does not have any value. When mapping an X.400 address to
	Microsoft Mail format, the wildcard will match any value.
	
	Here is an example:
	
	  MSM:Msoft/WGC/Peter      X400:o=Msoft;ou=*;s=Gron;g=Peter
	
	For an incoming X.400 address, this entry will match an X.400 address with any
	(or no) value for organization unit. On outgoing mail, the address produced will
	have no organizational unit.
	
	CHANGES/ADDITIONS TO THE ADMINISTRATOR'S GUIDE
	----------------------------------------------
	
	Administrator Program Error Messages
	------------------------------------
	
	Some of the Administrator program error messages refer the administrator to
	Appendix B of the Administrator's Guide. This is correct only if you have
	version 2.1 of the Administrator's Guide.
	
	Additions to the List of the O/R_Attribute Keyword
	--------------------------------------------------
	
	This list of O/R_Attribute Keywords replaces the list that appears in "Creating
	and Maintaining the Routing Table" in Chapter 4, Maintaining the Gateway.
	
	  O/R_AttributeKeyword::=  'C'|
	
	                           'A'|
	                           'X121'|
	                           'T-ID'|
	                           'P'|
	                           'O'|
	                           'UA-ID'|
	                           'S'|
	                           'OUn'|
	                           'DDA.VALUEn'|
	                           'DDA.TYPEn'
	
	(DDA.TYPEn was missing from the list in the Administrator's Guide.)
	
	Break Absolute Option
	---------------------
	
	Page 88 on Command-Line Options:
	
	The following statement should replace the one on Page 88 Under the description
	on the -BDmm-dd-yy Break (Absolute) Date Option:
	
	  Note: This example is for ......If you enter the day, month and year in a
	  different order and with different separators than the ones shown here, the
	  date you enter WILL NOT BE PROPERLY INTERPRETED by the program.
	
	Expanded Format Section in Appendix G
	-------------------------------------
	
	The first example in the Expanded Format section of Appendix G should be replaced
	with the following:
	
	  c=ca; a=Telecom; p=CDN; dda.type=RFC-822; dda.value=Peter(a)Microsoft
	
	Call User Data Field
	--------------------
	
	On pages 32 and 38 under "Call User Data:" the following replaces the third
	sentence:
	
	  It can contain a maximum of 16 characters. Hexadecimal values may be entered
	  in the following format $XX$XX$XX..., where X is a hex digit ranging from 0
	  to 9 and A to F.
	
	User Facility Field
	-------------------
	
	On pages 32 and 38 under "User Facilities:" the following replaces the second
	sentence:
	
	  It can contain a maximum of 64 characters. Hexadecimal values may be entered
	  in the following format $XX$XX$XX..., where X is a hex digit ranging from 0
	  to 9 and A to F.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
