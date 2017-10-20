---
layout: page
title: "Q138549: FTP Server Fails to Open New Daily Log"
permalink: /kb/138/Q138549/
---

## Q138549: FTP Server Fails to Open New Daily Log

{% raw %}

	Article: Q138549
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 3.5 and 3.51 FTP service can be configured for three different
	download logging options using the following registry parameter:
	
	  LogFileAccess
	  Value Type: REG_DWORD
	  Default: 0 (don't log file accesses)
	  Description: This value controls the logging of file accesses. This
	               value can be one of the following:
	
	               0 = Don't log file accesses
	               1 = Log file accesses to FTPSVC.LOG
	               2 = Log file accesses to FTyymmdd.LOG, where yy is the
	                   year, mm is the month, and dd is the day. A new log
	                   file will be opened every day as necessary.
	
	If option 2 is used, and the LogFileDirectory is on an NTFS partition where not
	Everyone has full permissions, then the FTP server mail fail to open a new
	logfile each day.
	
	CAUSE
	=====
	
	The FTP server creates a new thread for each user that logs in. The thread
	impersonates the user account that is specified in the logon. This may be
	"guest" or "anonymous", for example.
	
	When the first file is retrieved or stored after the system date has changed to a
	new date, the thread that is attempting to do the logging is also used to open a
	new log file. If this thread is impersonating a user who does not have adequate
	permissions to the LogFileDirectory, then the file cannot be opened and the
	server will stop logging until it is stopped and restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available. This article does not apply to
	Windows NT 4.0
	
	WORKAROUND
	==========
	
	The best known workaround is to give everyone who will be using the FTP service
	at least "add" permissions to the LogFileDirectory. The LogFileDirectory is
	specified with the following registry entry:
	
	  LogFileDirectory
	  Value Type: REG_SZ
	  Default: %SystemRoot%\System32
	  Description: This value specifies the target directory for log files.
	  This value is only used if LogFileAccess is not 0.
	
	File Manager can be used to set permissions on this directory.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
