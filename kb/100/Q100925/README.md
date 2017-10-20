---
layout: page
title: "Q100925: SMTP: Err Msg: Spawn (SMTPget): (2) No Such File or Directory"
permalink: /kb/100/Q100925/
---

## Q100925: SMTP: Err Msg: Spawn (SMTPget): (2) No Such File or Directory

{% raw %}

	Article: Q100925
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP may display this error message:
	
	  ERROR Spawn (SMTPget): (2) No such file or directory
	  NC_incoming: system error
	
	CAUSE
	=====
	
	This indicates that the SMTP Gateway was unable to execute SMTPGET.EXE because
	of one or more of the following conditions:
	
	- SMTPGET.EXE is not located in the same drive and path as SMTPGATE.EXE.
	
	- The PATH statement does not include a path to the SMTPGET.EXE file.
	
	- The actual network path (not the share drive and path) to SMTPGATE.EXE is
	  longer than 64 characters.
	
	- Access rights are incorrect.
	
	- Files or directories of the Mail database are hidden or damaged (that is,
	  MASTER.GLB, NETWORK.GLB, \KEY, \MBG and/or \SMTP).
	
	- SMTPGET.EXE is corrupt or does not exist.
	
	RESOLUTION
	==========
	
	Ensure the above conditions do not exist, and then restart SMTPGATE.EXE.
	
	Additional query words: 2.10 3.00 ERRMSG SMTP GET
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
