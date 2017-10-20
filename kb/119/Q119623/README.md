---
layout: page
title: "Q119623: RAS Error 212: Bad Modem or COM Port Failure"
permalink: /kb/119/Q119623/
---

## Q119623: RAS Error 212: Bad Modem or COM Port Failure

{% raw %}

	Article: Q119623
	Product(s): Microsoft Access Distribution Kit
	Version(s): 1.0,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	- Microsoft Remote Access Service, version 1.1a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Workgroup Connections version 1.0 and Remote Access Service
	(RAS) version 1.1a, a modem connection using compression to a Sprintet X.25
	Packet Assembly/Disassembly (PAD) may fail and the following error message may
	appear:
	
	  RAS Error 212
	
	  Bad Modem or COM Port Failure
	
	CAUSE
	=====
	
	After renaming MCOMP.INF to MODEM.INF and dialing to the X.25 PAD, the
	connection drops upon PAD initialization and results in the error message above.
	
	WORKAROUND
	==========
	
	To avoid this problem, use the MODEM.INF file that comes with RAS 1.1a and limit
	the modem transfer rate to 9600 baud.
	
	Additional query words: NTAS 3.10 wfw wconn wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbRASSearch kbWFWSearch kbWFW310 kbRAS110a
	Version           : :1.0,1.1a
	
	=============================================================================
	

{% endraw %}
