---
layout: page
title: "Q234157: XCON: Explanation of Fields on X.400 Connector Override Tab"
permalink: /kb/234/Q234157/
---

## Q234157: XCON: Explanation of Fields on X.400 Connector Override Tab

	Article: Q234157
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change the default Microsoft Exchange Server Message Transfer Agent (MTA)
	attributes using a specific X.400 Connector, use the Override tab of the X.400
	Connector Properties page. Override options should be used only when necessary
	to establish communication with a foreign system.
	
	For example, you can configure an override MTA name or password to be used when
	connecting to a foreign system if the local MTA name or password are longer than
	the foreign system can accept. This does not affect message transfer over any
	other connector.
	
	You also use this property page to configure message transfer to a particular
	foreign system manually. This does not affect message transfer over any other
	connector.
	
	If you do not specify an override value, the MTA uses the default values when
	connecting to a foreign system.
	
	MORE INFORMATION
	================
	
	- Local MTA Name: The name to be used when the Microsoft Exchange Server name
	  is too long or contains characters that the foreign system MTA cannot accept.
	
	- Local MTA Password: The local password that the foreign X.400 MTA uses to
	  connect to the Microsoft Exchange Server computer.
	
	  NOTE: The Local MTA Name and Local MTA Password can be used to override what
	  is specified in the MTA General property page under the Servers container.
	
	- RTS Values: Use RTS values to modify values for checkpoint size, recovery
	  timeout, and window size. If you do not specify an override value, the MTA
	  uses the default values or negotiates a configuration automatically when
	  connecting to a foreign system.
	
	   - Checkpoint Size (K): Sets the amount of data to be transferred before a
	     checkpoint is inserted. If an error occurs and the message must be re
	     transferred, the process restarts from the most recent checkpoint.
	
	     If you specify zero, no checkpoint is set. The default is 30.
	
	     Using a checkpoint slightly reduces transmission speed. You should decrease
	     the checkpoint size when the connection is less reliable.
	
	   - Recovery Timeout (sec): Determines the amount of time after an error
	     occurs that the MTA waits for a reconnection before deleting checkpointed
	     information and restarting the transfer from the beginning. The default is
	     60.
	
	   - Window Size: The number of checkpoints that can go unacknowledged before
	     data transfer is suspended. The greater the window size, the greater the
	     transfer rate. The window size determines the amount of resources set
	     aside for the receiving station. Specify window size only if the
	     checkpoint size is greater than zero. The default is 5.
	
	- Connection Retry Values: Use the Override tab on the X.400 Connector
	  Properties page to specify how many times the MTA should try to establish a
	  connection. If you do not specify an override value, the MTA uses the default
	  values or negotiates a configuration automatically when connecting to a
	  foreign system.
	
	   - Max Open Retries: The maximum number of times that the system tries to
	     open a connection before it sends a non-delivery report (NDR). The default
	     is 144.
	
	   - Max Transfer Retries: The maximum number of times that the system tries to
	     transfer a message across an open connection. The default is 2.
	
	   - Open Interval (sec): The amount of time to wait before attempting to
	     reopen a connection after an error. The default is 600.
	
	   - Transfer Interval (sec): The amount of time to wait before resending a
	     message across an open connection after a previous attempt failed. The
	     default is 120.
	
	- Association Parameters: Use the Override tab on the X.400 Connector
	  Properties page to set or modify the association parameters between MTAs. If
	  you do not specify an override value, the MTA uses the default values or
	  negotiates a configuration automatically when connecting to a foreign system.
	
	   - Lifetime (sec): The amount of time to keep an association open to a remote
	     system after a message is sent. The default is 300.
	
	   - Disconnect (sec): The amount of time to wait before terminating a
	     connection because of a previously terminated association. The default is
	     120.
	
	   - Threshold (msgs): The maximum number of queued messages to a remote
	     system. When this is exceeded, the MTA opens another association. The
	     default is 50.
	
	     The threshold value is used to avoid messages being submitted to the
	     Exchange Server MTA queue faster than they are dispatched. When the
	     threshold value is exceeded, the MTA opens another association to the
	     remote system MTA.
	
	- Transfer Timeouts: Use the Override tab on the X.400 Connector Properties
	  page to set the number of times the MTA tries to transfer urgent, normal, or
	  non-urgent messages. If you do not specify an override value, the MTA uses
	  the default values or negotiates a configuration automatically when
	  connecting to a foreign system.
	
	   - Urgent: The amount of time (in sec/K) to wait before sending an NDR for an
	     urgent message. The default is 1,000.
	
	   - Normal: The amount of time (in sec/K) to wait before sending an NDR for a
	     normal message. The default is 2,000.
	
	   - Non-urgent: The amount of time (in sec/K) to wait before sending an NDR
	     for a non-urgent message. The default is 3,000.
	
	NOTE: These definitions are taken from the Online Help (F1) on the Override tab
	and are also available by clicking Help on the Override tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
