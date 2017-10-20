---
layout: page
title: "Q142273: Backing up in-use WINS Database Files Can Cause Corruption"
permalink: /kb/142/Q142273/
---

## Q142273: Backing up in-use WINS Database Files Can Cause Corruption

{% raw %}

	Article: Q142273
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows Internet Name Service (WINS) service stops replicating with its
	partners and the following error is logged in the system log:
	
	  4204 - "An error was encountered in the database. You might need to restore
	  the database from a backup."
	
	CAUSE
	=====
	
	Backing up in-use WINS database files on a Windows NT 3.5 or 3.51 system that is
	running the WINS Server service can cause the database files to corrupt.
	
	
	RESOLUTION
	==========
	
	There are two options to resolve this problem:
	
	- If customers wish to protect their WINS databases, use WINSADMN.EXE at the
	  WINS server to enable backups. The WINS database is backed up (by the
	  service) in a consistent state to a subdirectory of the user's choice. A user
	  could then backup the database files from this directory.
	
	  -or-
	
	- Windows NT Backup (NTBACKUP.EXE) will behave this way if Backup Files In Use
	  is enabled. To disable it in NTBACKUP go into the registry under the
	  HKEY_CURRENT_USER subtree under the following subkey:
	
	  \Software\Microsoft\Ntbackup\Backup Engine
	
	  Make sure that the following value name is set to the following value:
	
	     Value Name:     Backup files inuse
	     Value (REG_SZ): 0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.50 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
