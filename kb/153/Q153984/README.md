---
layout: page
title: "Q153984: NTBackup Utility Unusable; Err Msg: &quot;NTBackup Error&quot;"
permalink: /kb/153/Q153984/
---

## Q153984: NTBackup Utility Unusable; Err Msg: &quot;NTBackup Error&quot;

	Article: Q153984
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NTBackup utility is unusable. The following error message may appear when
	you try to start your backup procedure:
	
	  NTBackup error
	
	CAUSE
	=====
	
	This usually happens when the default rights in %Systemroot% or
	%Systemroot%\System32 have been modified. Changing the rights in the
	%Systemroot%\System32 directory to restrict access may render the utility
	NTBackup unusable.
	
	For example, the default rights in the %Systemroot%\System32 directory are as
	follows:
	
	  Administrators       Full Control
	  Creator Owner        Full Control
	  Everyone             Change
	  Server Operators     Change
	  System               Full Control
	
	An administrator may want to change the rights of the group Everyone if users are
	logging on to the console to perform various administration tasks (such as back
	up system, check application log files, file maintenance, and so forth). After
	modification, the rights are as follows:
	
	  Administrators       Full Control
	  Creator Owner        Full Control
	  Everyone             Read (RX) (RX)
	  Server Operators     Change
	  System               Full Control
	
	A user who performs nightly backups and who is only a member of the Backup
	Operators group will not be able to back up the system. This is because NTBackup
	creates its Backup.log file in the %Systemroot% directory (the default location)
	and temp files(catalog files) created by NTBackup are created in the same
	directory where NTbackup.exe is located. The Backup.log file can be moved to any
	location on the hard disk by changing the default location in the Backup
	Information dialog box in NTBackup, but the temp files created by the
	application cannot be changed.
	
	RESOLUTION
	==========
	
	There are three workarounds to this problem:
	
	- Give the group Backup Operators Change rights to System32.
	
	  -or-
	
	- Give the group Everyone Change rights (RWXD) to System32.
	
	  -or-
	
	- Move NTbackup.exe to another directory on the hard disk, such as c:\backup,
	  and assign appropriate rights.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
