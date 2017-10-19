---
layout: page
title: "Q123221: DumpSend: Send Request File Formats"
permalink: /kb/123/Q123221/
---

## Q123221: DumpSend: Send Request File Formats

	Article: Q123221
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	This article describes how to use the DumpSend utility, explains the output
	generated, and shows the different record types and their meanings within
	the Systems Management Server system.
	
	THE DUMPSEND UTILITY
	--------------------
	
	The DumpSend utility is accessed with the DUMPSEND command. It displays the
	binary Systems Management Server send request file in text format for
	review. It has the following syntax:
	
	  DUMPSEND [/P] [send request filename, *.SRS, *.SRQ]
	
	These files reside in the \SMS\SITE.SRV\SENDER.BOX\REQUEST\<outbox>
	directories and can have either a "*.SRQ" (not processed yet) or "*.SRS"
	(processed but not completed) extension.
	
	A Sender monitors its associated outbox directory for the existence of a
	send request file. When this file is seen by the Sender, it parses the
	instructions and attempts to perform the operations requested. Some site to
	site communication problems can be resolved by using DumpSend to determine
	the contents of these files.
	
	A send request file is a variable length file composed of a series of
	records. This file contains, at a minimum, the INFO, STATUS, ADDRESS, and
	INSTRUCTION records.
	
	NOTE: Some record types are not parsed by DumpSend. The information in
	these record types is usually not needed for trouble-shooting.
	
	SEND REQUEST RECORD TYPES
	-------------------------
	
	Following is a list of the various Send Request record types and their
	structures listed in the order that DumpSend displays them:
	
	Send Request RECORD (INFO, Record type 3):
	
	Priority:      SMS Job priority; 1 high, 2 medium, 3 low
	Dest Site:     SMS Site code; 3 character
	Job name:      SMS Job ID; 8 characters
	Job request:   Unique send request ID; 7 characters
	Outbox:        UNC path to outbox directory
	
	Sender/Scheduler RECORD (STATUS, Record type 15):
	
	Sender status:              Contains one of the following status flags:
	                              SREQ_STATUS_NONE
	                              SREQ_STATUS_STARTED
	                              SREQ_STATUS_CONNECTING
	                              SREQ_STATUS_SENDING
	                              SREQ_STATUS_ERROR
	                              SREQ_STATUS_INVALID
	                              SREQ_STATUS_CANCELLED
	                              SREQ_STATUS_SUSPENDED
	                              SREQ_STATUS_OK
	First sender started at:    Date/Time of first send attempt
	Sender started at:          Date/Time of last send attempt
	Sender ended at:            Date/Time of when last send attempt stopped
	Sender gate heartbeat at:   Date/Time interval for next attempt
	Scheduler to restart at:    Date/Time of next send attempt
	Total bytes to send:        Total bytes to send, including package file
	Bytes left to send:         Total bytes left to send
	Sync point is:              Total confirmed bytes sent and acknowledged
	File type is:               0 Sender only, 1 *.INS, 2 *.PKG
	Number of connects:         Number of connection attempts
	Sender ID:                  ID of sender working on send request
	
	CANCEL RECORD (Record type 4):
	
	Cancel Status:   Indicates if Send Request has been canceled.
	
	ACTION CODE RECORD (Record type 14):
	
	Code:   This code is set by the Sender after a send failure. The Scheduler
	       service processes this code: 0 do nothing, 1 retry, 2 delete send
	       request.
	
	ADDRESS RECORD (Record type 5, multiple records allowed):
	
	Address:   Contains the destination \\<SMS Server>\SMS_SITE share and the
	          encrypted account password to access this share.
	
	PACKAGE FILE RECORD (Record type 7):
	
	File:   The universal naming convention (UNC) name of the package file to
	       send. The package file contains a compressed copy of the original
	       package which is to be sent to the despooler at the destination
	       site.
	
	INSTRUCTION FILE RECORD (Record type 8):
	
	File:   The UNC name of the instruction file to send. The instruction file
	       contains the despooler instructions for the package.
	
	Other types of Sender records exist that DumpSend does not parse out at
	this time. Some of these are listed below:
	
	TRANSMISSION STATUS (Record type 1):
	
	Transmission status, errors etc., between sites.
	
	TRANSMISSION INFORMATION (Record type 2):
	
	Transmission statistics.
	
	CANCEL (Record type 4):
	
	Cancel mode.
	
	BOOTSTRAP (Record type 13):
	
	Contains information necessary to start the bootstrap process for
	installing a secondary Systems Management Server Site.
	
	SENDACTION (Record type 17):
	
	This record contains information that is specific to the individual types
	of Senders.
	
	ROUTING (Record type 18):
	
	This record contains routing information but is not implemented for Systems
	Management Server version 1.0.
	
	SAMPLE DUMPSEND OUTPUT
	----------------------
	
	Below is a sample command line and the subsequent output:
	
	     d:\sms\site.srv\sender.box\requests\lan_defa.000>dumpsend 1_2zybpc.srs
	
	     SMS DumpSend v1.0 - Dump Sender files
	     Copyright 1994 by Microsoft Corp., All rights reserved
	
	     SEND REQUEST DATA RECORD
	        Length:       300
	        Priority:     2
	        Dest Site:    CSL
	        Job:          BPC00434
	        Job request:  _2ZYBPC
	        Outbox:       \\CNS-SMS\SMS_SHRD\site.srv\sender.box\requests
	                      \LAN_DEFA.000
	
	     Sender/scheduler RECORD
	        Length:       80
	     ==============================================
	        Sender status:              SREQ_STATUS_OK
	        First sender started at:    (not set)
	        Sender started at:          Mon, Nov 21 1994 12:45
	        Sender ended at:            Mon, Nov 21 1994 12:45
	        Sender gate heartbeat at:   Mon, Nov 21 1994 12:45
	        Scheduler to restart at:    Mon, Nov 21 1994 12:45
	        Total bytes to send:        1596
	        Bytes left to send:         0
	        Sync Point is:              504
	        File type is:               0 (No file)
	        Number of connects:         0
	        Sender ID:
	     ============= End of Dump ==============
	     CANCEL RECORD
	        Length:   4
	        Mode:     Not cancelled
	
	     ACTION CODE RECORD
	        Length:   4
	        Code:     0
	
	     ADDRESS RECORD
	        Length:    181
	        Address:   {}{\\VERMONT\SMS_SITE
	                   2DDEAF90293488DDD7427DB90B5AEB891C48F9
	                   0CF52F68C273D919D3A338EC39B641AF2D2AFADD
	                   9C493B13ABA1DED992959DDEA4A9ADAAFF67B25
	                   E1DB3B75A584CD80F1F198907AE5D3544D39C9C}
	
	     PACKAGE FILE RECORD
	        Length:   59
	        File:     \\CNS-SMS\SMS_SHRD\site.srv\sender.box
	                  \tosend\BPC00434.P00
	
	     INSTRUCTION FILE RECORD
	        Length:   59
	        File:     \\CNS-SMS\SMS_SHRD\site.srv\sender.box\tosend\BPC00434.I00
	
	     UNKNOWN RECORD TYPE 18
	        Length:   544
	
	     UNKNOWN RECORD TYPE 17
	        Length:   61
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : :1.0,1.1
	
	=============================================================================
	
