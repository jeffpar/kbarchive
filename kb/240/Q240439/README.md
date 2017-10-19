---
layout: page
title: "Q240439: XFOR: Host Messages Backed Up on OV/VM Connector"
permalink: /kb/240/Q240439/
---

## Q240439: XFOR: Host Messages Backed Up on OV/VM Connector

	Article: Q240439
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages on the host may be stuck in the Remote Spooling Communications
	Subsystem (RSCS) queue even though the Microsoft Exchange OfficeVision/VM
	(OV/VM) Connector is working properly. Stopping and then restarting the Exchange
	OV/VM Connector clears the backlog.
	
	CAUSE
	=====
	
	The RSCS link definition for the Microsoft Exchange Server VM Node may be
	incorrectly configured for multiple threads. The Exchange OV/VM Connector
	supports only one thread.
	
	RESOLUTION
	==========
	
	Contact your local VM administrator, who has access to the host mainframe.
	
	1. Open the RSCS configuration file.
	
	2. Ensure that the STREAMS or ST parameter is set to 1. For example:
	
	  PARM RSCSLINK BUFF=3072 ST=1 TA=0
	
	  The default for RSCS communications between OV/VM systems is for multiple
	  threads.
	
	3. You must restart the RSCS system for any changes to take effect.
	
	MORE INFORMATION
	================
	
	The following information is documented in Microsoft Exchange Connector for IBM
	OfficeVision/VM Installation and Configuration in Chapter 2:
	
	  
	
	  RSCS PARM Statement:
	
	  The following table describes the PARM statement you need for the link.
	
	  NOTE: Do not set the RLPASS, RNPASS, TLPASS, and TNPASS parameters in this
	  statement. If you do, the connector cannot sign on to the host. You can allow
	  other parameters to default.
	
	  RSCS PARM Statement Definition:
	
	  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | Parameter | Value | Description                                                                                                                                                                                                                                                             | 
	  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | BUFF      | 1024  | The maximum size RU (Request/Response Unit) this link can accept from VTAM. This value must fall within the range of 300 to 32765. The default is 1024. Increasing the buffer size results in more efficient data transmission because of reduced protocol handshaking. | 
	  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | STREAMS   | 1     | The maximum number of files that RSCS can transmit simultaneously. The current version of the connector supports one simultaneous stream of data in each direction.                                                                                                     | 
	  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	  | TA        | 0     | The number of the transmission algorithm RSCS uses to determine how to select files for transmission. You must set this value to 0 to use IBM-supplied algorithms.                                                                                                      | 
	  +---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	Additional query words: rscs.config
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
