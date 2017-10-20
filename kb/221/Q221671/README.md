---
layout: page
title: "Q221671: FIX: OLE Error &quot;Member Not Found&quot; Using MSMQ"
permalink: /kb/221/Q221671/
---

## Q221671: FIX: OLE Error &quot;Member Not Found&quot; Using MSMQ

{% raw %}

	Article: Q221671
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbMSMQ kbMSMQ100 kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFo
	Last Modified: 20-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You execute code that performs automation using Microsoft Message Queue (MSMQ)
	as the server. When you attempt to assign an object reference to the
	AdminQueueInfo property of the message object, you see the following error:
	
	  Program Error
	  OLE error code 0x80020003: Member not found.
	
	This error might also occur assigning object values to automation server
	properties with servers other than MSMQ.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file. You must run this on a
	  machine that has MSMQ installed.
	
	  #DEFINE MQ_RECEIVE_ACCESS	1
	  #DEFINE MQ_SEND_ACCESS	2
	  #DEFINE MQ_PEEK_ACCESS	32
	  #DEFINE MQ_DENY_NONE	0
	  #DEFINE MQMSG_ACKNOWLEDGMENT_FULL_RECEIVE	14
	  #DEFINE MQMSG_ACKNOWLEDGMENT_NONE	0
	  #DEFINE MQMSG_CLASS_ACK_RECEIVE	16384
	  #DEFINE MQMSG_CLASS_NACK_RECEIVE_TIMEOUT	49154
	
	  LOCAL oQuery,oQueue,oMsg
	
	  * Create/locate administration queue
	  oQuery = CREATE("msmq.msmqquery")
	  oQueue = oQuery.LookupQueue(,,"Administration Queue")
	  oQueue.RESET
	  oAdminQueue = oQueue.NEXT
	  IF ISNULL(oAdminQueue)
	     oAdminQueue= CREATE("msmq.msmqqueueinfo")
	     oAdminQueue.pathname = ".\AdminQueue"
	     oAdminQueue.LABEL = "Administration Queue"
	     oAdminQueue.CREATE
	  ENDIF
	
	  * Create/locate destination queue
	  * oQuery = create("msmq.msmqquery")
	  oQueue2 = oQuery.LookupQueue(,,"Destination Queue")
	  oQueue2.RESET
	  oDestQueue = oQueue2.NEXT
	  IF ISNULL(oDestQueue )
	     oDestQueue = CREATE("msmq.msmqqueueinfo")
	     oDestQueue .pathname = ".\DestQueue"
	     oDestQueue .LABEL = "Destination Queue"
	     oDestQueue .CREATE
	  ENDIF
	
	  * Open the destination queue and send the message.
	  oQueue3 = oDestQueue.OPEN(MQ_SEND_ACCESS, MQ_DENY_NONE)
	  IF !oQueue3.IsOpen	&& message queue not open
	     RETURN
	  ENDIF
	  oMsg  = CREATE("msmq.msmqmessage")
	  oMsg.LABEL = "Test Message"
	  oMsg.Body = "This message tests acknowledgment messages."
	  oMsg.Ack = MQMSG_ACKNOWLEDGMENT_FULL_RECEIVE
	  oMsg.AdminQueueInfo = oAdminQueue
	  oMsg.SEND(oQueue3)
	  =MESSAGEBOX("The message was sent.")
	  oQueue3.CLOSE
	  RETURN     
	
	2. The error message listed in Symptoms section appears.
	
	NOTE: Microsoft Message Queue (MSMQ) installs as part of the Windows NT 4.0
	Option Pack.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbMSMQ kbMSMQ100 kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
