---
layout: page
title: "Q167128: SMS: Network Ports Used by Remote Helpdesk Functions"
permalink: /kb/167/Q167128/
---

## Q167128: SMS: Network Ports Used by Remote Helpdesk Functions

	Article: Q167128
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbsms200 smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Systems Management Server Helpdesk uses the following ports during its
	operations:
	
	  Purpose                  TCP/IP      IPX
	  ------------------------------------------
	
	  Verification of Rights     1761     0x8138
	  Remote Control             1762     0x8238
	  Remote Reboot              1761     0x8138
	  Remote Chat                1763     0x845F
	  File Transfer              1764     0x4100
	  Remote Execute             1761     0x8138
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	
	  
	
	  Q256884 TCP and UDP Ports Used by Remote Control Have Changed in SP2
	
	
	
	Additional query words: prodsms winsock winsock.dll windows nt winnt GPF
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbsms200 smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
