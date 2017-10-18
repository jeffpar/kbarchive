---
layout: page
title: "Q258004: How to Configure the Nvalert.ini file with the NVAlert Service"
permalink: kb/258/Q258004/
---

## Q258004: How to Configure the Nvalert.ini file with the NVAlert Service

	Article: Q258004
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about how to configure the NetView Alerter
	(NVAlert) initialization file (Nvalert.ini) for use with the NVAlert service
	that is provided by Microsoft SNA Server. This information includes syntax
	description, examples, and references to online and printed materials. This is a
	basic guide to develop NVAlert messages for your specific environment.
	
	MORE INFORMATION
	================
	
	The Microsoft SNA Server installation includes an example of an Nvalert.ini
	file. This example file is used as a reference throughout this article. You must
	have a working 3270 connection to the mainframe computer. The following are
	basic setup procedures to be performed on the SNA Server computer in order for
	the NVAlert service to perform properly.
	
	Configuring the NVAlert Service:
	
	1. In the SNA Manager, select the subdomain, and then click Properties. Click
	  the NV Alert tab. Select a previously configured connection that the NVAlerts
	  messages will be sent to. The NetView management messages can fail under the
	  following settings on the SNA Server computer:
	
	   - If you configure the data encryption for the group Everyone.
	
	   - If the corresponding link service is not configured to run under a user
	     account. To add the user account information, click Control Panel, and
	     then click Services to correct this issue. Select the appropriate link
	     service, for example SNADLC1.
	
	NOTE: Verify the link service name of the connection you are using for NVAlert
	messages. Select Startup, and then type the proper SNA System account username
	and password.
	
	2. Start the NVAlert service. (You can reconfigure this service to start
	  automatically.)
	
	Understanding the Structure and Syntax of the Nvalert.ini File:
	
	The following example is a Nvalert.ini file, which is a flat file that the
	NVAlert service uses to generate the alert:
	
	  
	
	  [Srv.3.2016]
	  ;;wannabe AlertType=02
	  AlertType=03
	  AlertDescription=5008
	  ProbableCauses=1057
	  ;5008 N OUT OF MEMORY; ; 1057 N RESOURCE LIMIT REACHED;
	  FailureCauses=1100,F8c0
	  FailureDetData=00,5A,%C;00,13,%M %I EVENT_SRV_NO_VIRTUAL_MEMORY
	
	- The brackets ([]) represent the Microsoft Windows NT Event Log header message
	  that is monitored by the NVAlert service. This is the Windows NT Event Log
	  header and you must format it this way.
	
	- "Srv" represents the service short name that logs this message. In this
	  example, it is the Windows NT Server Service. The short name is under the
	  source heading in a Windows NT Event Log message or as the key value listed
	  in the registry of this particular service.
	
	- The number "3" represents the level of the error log. In this example, it is
	  an error log message. Please see the various levels of numeric representation
	  for event log messages later in this section.
	
	- The number "2016" represents the message ID number logged in the Event Viewer
	  log for a particular Windows NT event.
	
	- Following the Windows NT event header message is the NetView command
	  structure that posts the NetView alert. Please see the "References" section
	  of this article for an online guide to all the command options for this
	  section.
	
	The following commands are required for every NetView alert:
	
	  AlertType=
	  AlertDescription=
	  ProbableCauses=
	
	These commands provide the type of message that is posted. For specifics on the
	various codes that are acceptable, please see the "Reference" section in this
	article to access an online guide for the possible IBM System Network
	Architecture/Management System (SNA/MS) formats.
	
	NOTE: NetView Alert (on the mainframe computer) can be set to filter on certain
	events. In most cases, alert types "01" and "03" are not filtered. Please
	contact your mainframe NetView Administrator for specific alert types that are
	filtered.
	
	The commands following the previous settings are user defined. The user-defined
	codes are as follows:
	
	- The "FailureCauses=" codes are specific to SNA formats.
	
	- The "FailureDetData=" codes are defined as follows:
	
	- 00 - Means that the NetView code point data is in hexadecimal form.
	
	- 5A - SNA formats the code.
	
	- %C - A wildcard character for the computer name.
	
	- %I - The Event ID.
	
	- %M - The Module name.
	
	- ; - Used for comments.
	
	NOTE: Do not use carriage returns in the NVAlert message. This causes an unwanted
	or undeliverable message.
	
	The Event Log numeric message values are as follows:
	
	+--------------------------------------------+
	| Type of Message | Numeric Value Equivalent | 
	+--------------------------------------------+
	| Success         | 0                        | 
	+--------------------------------------------+
	| Information     | 1                        | 
	+--------------------------------------------+
	| Warning         | 2                        | 
	+--------------------------------------------+
	| Error           | 3                        | 
	+--------------------------------------------+
	| Success Audit   | 4                        | 
	+--------------------------------------------+
	| Failure Audit   | 5                        | 
	+--------------------------------------------+
	
	REFERENCES
	==========
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	IBM SNA Formats Guide (IBM Document GA27-3136-12)
	
	IBM Online documents are located at the following Web address:
	
	  http://publib.boulder.ibm.com/cgi-bin/bookmgr/BOOKS/D50X4001/CCONTENTS
	  (http://publib.boulder.ibm.com/cgi-bin/bookmgr/BOOKS/D50X4001/CCONTENTS)
	
	SNA Server Self-Paced Training (MS Part Number 097-0002090)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
