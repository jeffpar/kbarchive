---
layout: page
title: "Q235932: FIX: Memory Exception Receiving Messages from AS400"
permalink: /kb/235/Q235932/
---

## Q235932: FIX: Memory Exception Receiving Messages from AS400

	Article: Q235932
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbMSMQ kbMSMQ100 kbMSMQ100bug kbMSMQ100fix kbGrpDSPlatform kbDSupport kbMQSeriesBridge
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Message Queue (MSMQ) messages sent from AS400 result in event log
	errors indicating memory exception.
	
	CAUSE
	=====
	
	The bridge attempts to receive messages starting with a zero length buffer. This
	should result in a error that is handled by the bridge and returns the size of
	the required buffer. The bridge should then allocate an appropriate size buffer
	and receives the message. However, the AS400 is not sending a valid length when
	you first perform do MQGET with a zero length buffer. Instead it is returning an
	extremely large value that is greater than the size of available memory. This
	only happens when first receiving messages from the queue after initialization
	and when the size of the received message is less than 112 bytes.
	
	RESOLUTION
	==========
	
	The bridge code was changed to use a minimum of 1024 bytes when calling MQGET.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. service pack for SNA Server
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Fixed in SNA Server Version 4.0 SP3
	
	MORE INFORMATION
	================
	
	The event log will indicate a memory exception as shown in this sample log
	entry:
	
	  d:\Program Files\MSMQ-MQSeries Bridge\Q2QGW.EXE (thread 300) ->
	  Q2FD_Thread: Error in e:\vss\falconmq\wing\q2q\q2qgw\q2qgw.cpp (), line 113
	  (compiled 18:43:49 on Dec 17 1998)
	  <<Passing it on>>
	  CQ2QChannel::Run: Error in e:\vss\falconmq\wing\q2q\q2qgw\q2qchnls.cpp (), line 206
	  (compiled 18:43:24 on Dec 17 1998)
	  <<Passing it on>>
	  CQ2QChannelQ2FD::MsgPipeQ2FD::MoveBatch: Error in
	  e:\vss\falconmq\wing\q2q\q2qgw\q2qchnls.cpp ()
	  <<Passing it on>>
	  CQ2QMQSeriesR::Receive: Error in e:\vss\falconmq\wing\q2q\q2qgw\q2qmqsr.cpp
	  (from ), line 778
	  (compiled 18:43:52 on Dec 17 1998)
	  <<Passing it on>>
	  CQ2QMsgQ::Buf: Error in e:\vss\falconmq\wing\q2q\q2qgw\q2qcmsg.cpp (from) , line 621
	  (compiled 18:43:31 on Dec 17 1998)
	  <<Memory exception>>
	
	Additional query words: msmq bridge memory error
	
	======================================================================
	Keywords          : kbMSMQ kbMSMQ100 kbMSMQ100bug kbMSMQ100fix kbGrpDSPlatform kbDSupport kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbMSMQSearch kbMSMQ100
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
