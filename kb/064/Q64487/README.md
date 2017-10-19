---
layout: page
title: "Q64487: Cannot Close Files After UPS Service Warning Message"
permalink: /kb/064/Q64487/
---

## Q64487: Cannot Close Files After UPS Service Warning Message

	Article: Q64487
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	After a power failure occurs on an uninterruptible power supply (UPS) protected
	server, this message appears at the workstation:
	
	  A power failure has occurred at \\SERVER1. Please terminate all activity with
	  this server.
	
	Attempting to save open files fails and an error message appears, indicating that
	the path is no longer available.
	
	CAUSE
	=====
	
	The power failure message is sent to all session connected workstations,
	MESSDELAY seconds after power is lost. Then, unless the UPS has the capability
	to inform the server of a low-power state (see note below), the UPS server stops
	the SERVER service BATTERYTIME seconds after the point of initial power loss.
	
	MESSDELAY defaults to 5 seconds and BATTERYTIME defaults to 60 seconds. Thus, by
	default, all files must be closed within 55 seconds of receiving the warning
	message. If the files are not closed within (BATTERYTIME minus MESSDELAY)
	seconds from the initial power failure warning, you then cannot close the files
	because the server service has stopped.
	
	RESOLUTION
	==========
	
	When the server service is properly stopped, as it is when it is stopped by the
	UPS service, all open files are safely closed in the state they were in when
	they were last saved.
	
	Using a NET USE command at the workstation shows that connections to the stopped
	server are in a "disconnected" state. After power returns and the server service
	is restarted, workstation application files can be closed safely.
	
	EXAMPLE
	=======
	
	1. At a network workstation, a Microsoft Word document is opened from a remote
	  share-point linked to drive F.
	
	2. Power is lost at the server. All open files are closed and the server service
	  is stopped before the user has a chance to save the Word document.
	
	3. The user tries to save the Word document and receives a "disk error" message
	  notification. Drive F is now in a "disconnected" state.
	
	4. Power is restored to the server and the server service is restarted; shares
	  are re-established.
	
	5. The user tries again to save the Word document (as described in step 3
	  above). Drive F is automatically reconnected and the Word document is saved
	  successfully.
	
	Note: If the UPS has the capability to inform the UPS service of a "low battery"
	state, and the SIGNALS' second digit is accordingly set to 1, the UPS service
	ignores BATTERYTIME and does not initiate server shutdown until it receives the
	low-power signal from the UPS.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.2 2.20
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
