---
layout: page
title: "Q167635: XADM: Error Msg: &lt;File&gt; In Use By Another Application"
permalink: /kb/167/Q167635/
---

## Q167635: XADM: Error Msg: &lt;File&gt; In Use By Another Application

{% raw %}

	Article: Q167635
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade to Microsoft Exchange Server version 5.0, you may
	receive the following error message:
	
	  The file C:\EXCHSRVR\CONNECT\MSMCON\BIN\MTPERF.DLL
	  is in use by another application.
	
	You then have the options to Abort, Retry, or Ignore. If you click Ignore, you
	may receive similar error messages, but for different files. Such files may be:
	
	  C:\EXCHSRVR\CONNECT\MSMCON\BIN\XTNPERF.DLL
	  C:\EXCHSRVR\BIN\MDBPERF.DLL
	  C:\EXCHSRVR\BIN\MTAPERF.DLL
	  C:\EXCHSRVR\BIN\GWPERF.DLL
	  C:\EXCHSRVR\BIN\IMCPERF.DLL
	
	CAUSE
	=====
	
	If any of the above files are locked open by other applications, such as virus
	checking programs, Simple Network Management Protocol (SNMP) programs, or
	Performance Monitor (which may be running remotely against the Exchange Server
	computer), then the upgrade process cannot replace these files.
	
	WORKAROUND
	==========
	
	To work around this problem, temporarily stop the program (usually by stopping
	the corresponding service in the Windows NT Control Panel Services applet) that
	may be locking the DLL open. Click the Retry option and continue with setup.
	After setup completes successfully, restart any services you stopped in the
	Windows NT Control Panel Services applet.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
