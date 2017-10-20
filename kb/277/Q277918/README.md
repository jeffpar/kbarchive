---
layout: page
title: "Q277918: LU 6.2 Sessions Are Not Automatically Activated After Host IPL"
permalink: /kb/277/Q277918/
---

## Q277918: LU 6.2 Sessions Are Not Automatically Activated After Host IPL

{% raw %}

	Article: Q277918
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Independent LU 6.2 sessions on the SNA Server do not automatically become active
	after a connection is taken down from the mainframe computer.
	
	CAUSE
	=====
	
	The reason why the sessions are not retried in all cases (for example, in the
	case of a sense code 087D/0001, which indicates a serious error in routing
	between SSCPs), is that these types of problems require operator intervention
	(do not recover by themselves).
	
	The only sense codes that SNA Server retries the bind for are 0801, 0805, 0812,
	0837, 0839, 0842, 0845, 084B, 0856, and 0857.
	
	STATUS
	======
	
	The server is working as designed.
	
	MORE INFORMATION
	================
	
	If an SNA Server is configured with auto activated LU 6.2 sessions, when the
	connection to the partner LU is taken down on the mainframe computer (for
	example, during scheduled maintenance), the SNA Server does not automatically
	restart the LU 6.2 sessions. The PU comes back up on the mainframe computer, the
	SNA connection goes active, but the LU 6.2 sessions do not autoactivate.
	
	The following event may show up in the event logs:
	
	  Event Type:	Information
	
	  Event Source:	SNA Server
	
	  Event Category:	None
	
	  Event ID:	38
	
	  Date:		date
	
	  Time:		time
	
	  User:		NT AUTHORITY\SYSTEM
	
	  Computer:	   name
	
	  Description:
	
	  APPC session deactivated abnormally
	
	     Qualifier      = 0003
	
	     Connection     = connection  
	
	     LU alias       = lualias
	
	     PLU alias      = plualias
	
	     Mode name      = modename
	    
	     Session ID     = sessionid
	
	     LFSID          = lfsid
	
	     Client Domain  = clientdomain
	
	     Client User    = clientuser
	
	     Client Machine = clientmachine
	
	  EXPLANATION
	  0003  The session was deactivated because of a permanent (No retry) error,
	  such as a parameter mismatch. Contact the administrator of the partner LU's 
	  system to determine which parameters are mismatched.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	
	=============================================================================
	

{% endraw %}
