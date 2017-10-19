---
layout: page
title: "Q320010: 100 % CPU Utilization and Event ID 8 Warnings After MC_ALLOCATE"
permalink: /kb/320/Q320010/
---

## Q320010: 100 % CPU Utilization and Event ID 8 Warnings After MC_ALLOCATE

	Article: Q320010
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC transaction program may cause Host Integration Server 2000 to log
	multiple Event ID 8 messages and cause CPU utilization to reach 100 percent.
	
	Details of the Event ID 8
	-------------------------
	
	Event Type:	Warning
	Event Source:	SNA Server
	Event Category:	None
	Event ID:	8
	Description:
	(1174) Internal Protocol Violation
	
	EXPLANATION
	A protocol violation has occurred at the interface between the SNA 
	Service and another SNA component (for example, the emulator or link 
	service).
	
	SUBCODE INFORMATION
	X'1105'  Insufficient space to copy data into node buffer.
	X'1112'  Received unknown message type at the node interface.
	X'1144'  Received illegal message at the node interface.
	X'1151'  Received unrecognized message from the link service component.
	X'1174'  Received invalid session limits message from Host Integration 
	         Server SNA Manager.
	X'1175'  Received invalid CNOS command.
	X'1188'  Received invalid CNMS message.
	
	ACTION
	Provide network support personnel with the event log file(s) related to
	SNA, SNA trace file(s), and the number and description of the displayed 
	subcode. For information about SNA log and trace files, see the 
	"Microsoft Host Integration Server Online Books."
	
	When this problem occurs, you must stop and restart the SNA Server service.
	
	CAUSE
	=====
	
	This problem occurs if the following conditions exist:
	
	- An APPC mode has been configured with an automatic activation limit, and an
	  explicit partnership has been defined.
	
	- An invoking APPC transaction program issues an MC_ALLOCATE request by using
	  the FQPLU_NAME (fully-qualified partner LU name) field instead of the
	  PLU_ALIAS (partner LU alias) field. However the string that the transaction
	  program specifies in the FQPLU_NAME field actually represents the partner LU
	  alias instead of the fully-qualified partner LU name.
	
	When the APPC transaction program issues an MC_ALLOCATE request under these
	conditions, the SNA Server service enters an internal loop. This looping causes
	the service to generate the symptoms that are listed in the "Symptoms" section
	of this article.
	
	RESOLUTION
	==========
	
	To resolve this problem, correct the APPC transaction program by using one of
	the following methods:
	
	- Change the invoking APPC transaction program so that it uses the PLU_ALIAS
	  field of the MC_ALLOCATE instead of the FQPLU_NAME field.
	
	- Change the invoking APPC transaction program so that it specifies a
	  fully-qualified partner LU name in the FQPLU_NAME field instead of specifying
	  a partner LU alias.
	
	Additional query words: his2000 spin tp
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
