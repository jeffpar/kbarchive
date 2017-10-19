---
layout: page
title: "Q198622: XCON: Adjustment of MTA Reliable Transfer Service Values"
permalink: /kb/198/Q198622/
---

## Q198622: XCON: Adjustment of MTA Reliable Transfer Service Values

	Article: Q198622
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server's message transfer agent (MTA) uses Reliable
	Transfer Service Element (RTSE) values that you can manually edit. These values
	ensure reliable transfer of the information objects (messages) between MTAs.
	These settings determine:
	
	- How much information is transferred before a checkpoint is inserted
	  (Checkpoint Size in Kilobytes).
	
	- How long to wait after an error to restart message transfer (Recovery Timeout
	  in Seconds).
	
	- The number of checkpoints that can go unacknowledged before mail transfer is
	  suspended. In other words, after X number of checkpoints, the remote server
	  must acknowledge reception of recent checkpoints and request more (Window
	  Size).
	
	The default settings are sufficient for most networks. However, by adjusting
	these values you can improve message delivery, particularly over limited
	bandwidth and unreliable links.
	
	MORE INFORMATION
	================
	
	The Reliable Transfer Service (RTS) settings are located in two different places
	in the Exchange Server Administrator program.
	
	- Intrasite RTS values are located in the properties of the MTA Site
	  Configuration object, on the Messaging Defaults tab, in the RTS Values area.
	  These settings also affect connections across a site connector. You must
	  restart all MTAs in the site for any changes made here to take effect.
	
	- You can also change RTS values on an X.400 Connector's property page, on the
	  Override tab, in the RTS Values area. These values override any MTA Site
	  Configuration values; be sure they match at each end of the connector. You
	  must also restart the MTA at each server for these changes to take effect.
	
	- Checkpoint Size (K): The amount of data to be transferred before a checkpoint
	  is inserted. A checkpoint consists of one synchronization point (session
	  level) inside an IP packet, about 59 bytes long. Inserting a checkpoint
	  reduces transmission speed but increases the reliability of the connection.
	  If an error occurs and the message must be transferred again, the process
	  restarts from the most recent checkpoint.
	
	  If you specify 0, no checkpoint is set. Microsoft does not recommend a
	  checkpoint size of 0. A checkpoint of 5 improves reliability over an
	  unreliable network, but reduces transmission speed. A checkpoint of 1
	  requires that every packet be explicitly requested before you can send the
	  next. The default value is 30.
	
	- Recovery Timeout in Seconds: The amount of time after an error occurs that
	  the MTA waits for a reconnection (initiated locally or remotely) before it
	  deletes checkpointed information and restarts the transfer from the
	  beginning. The default value is 60.
	
	- Window Size: The number of checkpoints that can go unacknowledged before data
	  transfer is suspended. The greater the window size, the greater the transfer
	  rate. The lower the window size, the more reliable the transfer. Only specify
	  window size if the checkpoint size is greater than 0. The default value is 5.
	
	Additional query words: "rts values", "reliable transport service"
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
