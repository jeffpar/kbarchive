---
layout: page
title: "Q151214: XADM: Send &amp; Receive logs in MDBDATA directory"
permalink: /kb/151/Q151214/
---

## Q151214: XADM: Send &amp; Receive logs in MDBDATA directory

{% raw %}

	Article: Q151214
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A set of log files is created in the \Mdbdata subdirectory of Microsoft Exchange
	Server when you set Sending and Delivering diagnostics logging for either the
	private and public information stores to Maximum.
	
	MORE INFORMATION
	================
	
	The log files have the following format:
	
	  Dlv.log
	  Snd.log
	  Dlvxxxxx.log
	  Sndxxxxx.log
	
	where xxxxx starts with 00001 and is incremented as necessary. The Dlv.log and
	Snd.log are the last logs created. These logs contain XAPI properties as
	manipulated between the MTA and the store. These logs are not meant to be used
	by mail system administrators and are only useful for troubleshooting and when
	requested by Microsoft support or development personnel.
	
	It is safe to delete these log files at any time
	
	WARNING: The store transaction logs names have the following format: Edb.log,
	Edb00000.log. When you delete the trace logs, be careful not to delete any
	transaction logs or you may lose the ability to recover a full store if a backup
	needs to be restored.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
