---
layout: page
title: "Q181121: Enhanced Event Logging for SNA Server Event 9, 12"
permalink: /kb/181/Q181121/
---

## Q181121: Enhanced Event Logging for SNA Server Event 9, 12

{% raw %}

	Article: Q181121
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	To improve the ability to troubleshoot SNA Server Event 9 (subcode 1117) and
	Event 12 errors, these events have been enhanced to include the following
	additional information:
	
	- Client Domain
	
	- Client User (name)
	
	- LU name (3270 LU)
	
	- FMI Sense Code
	
	When SNA Server logs an Event 9 (subcode 1117), the SNA Server has detected an
	SNA protocol violation by the 3270 emulation product being used. The Event 9
	indicates a non-fatal protocol violation which would not cause a user to lose
	their 3270 session. If SNA Server detects a nonrecoverable 3270 protocol
	violation by the 3270 emulation product, SNA Server logs an Event 12.
	
	Using SNA Server 3.0 (including 3.0 SP1 and SP2), it's not possible to determine
	which client workstation caused these problems to occur, making troubleshooting
	more difficult. These events have been enhanced so that the specific client user
	can be tracked down.
	
	To debug the exact cause of these events, SNA Server 3270 message tracing is
	needed on either the server or the client computer.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	SNA Server 4.0 already includes these enhancements to SNA Server Event 9 and 12.
	These changes have been retrofitted to SNA Server 3.0 Service Pack 3 (SP3) in
	order to improve diagnostic capability for the 3.0 product.
	
	Here is the event message text for these enhanced events:
	
	  
	
	  ===============================
	  Event ID: 9
	  Source:   SNA Server
	  Description:
	  (<subcode>) A protocol error occurred due to a message sent by a 3270
	  emulator or link service
	
	  EXPLANATION
	  A protocol error occurred due to a message sent by a 3270 emulator or
	  link service.
	
	  SUBCODE INFORMATION
	  X'1117'  A 3270 emulator used by the following user caused an error,
	  though the user's 3270 session was not interrupted:
	
	     Client Domain: 
	     Client User:   
	     LU name:       
	     FMI Sense Code:
	
	  ===============================
	
	  Event ID: 12
	  Source:   SNA Server
	  Description:
	  A 3270 Session was lost due to a protocol error in the 3270 emulator.
	
	  A user has lost their 3270 session due to a non-recoverable protocol
	  error caused by the 3270 emulator being used. The following user
	  encountered this error.
	
	     Client Domain:  
	     Client User:    
	     LU name:        
	     FMI Sense Code: 
	
	  ACTION
	  To troubleshoot this problem, capture matching SNA client 3270 message
	  traces from this user's machine and SNA Server DLC and 3270 message
	  traces on the server, and provide them to Microsoft product support.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
