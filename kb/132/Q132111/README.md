---
layout: page
title: "Q132111: Digiboard Drops DTR After Disconnect"
permalink: /kb/132/Q132111/
---

## Q132111: Digiboard Drops DTR After Disconnect

{% raw %}

	Article: Q132111
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client disconnects from a RAS server, the DTR line on the Digiboard COM
	port may not return. Because the modem is not reset, no additional calls can
	come in on that port. If a client attempts to dial in, the modem picks up the
	line, but the RAS server does not respond. As a result, the client receive a 640
	error message. The RAS server does not log any errors in the event log, but the
	RAS Administrators tool show that the port has been disconnected and is not
	ready.
	
	These symptoms will appear only after the RAS server has been in operation for
	some time. Stress tests indicate that several hundred inbound calls are needed
	to produce the problem.
	
	CAUSE
	=====
	
	There is a problem in the Digiboard DIGIFEP5.SYS driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT version 3.5.
	
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS350search
	Version           : :
	
	=============================================================================
	

{% endraw %}
