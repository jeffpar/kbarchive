---
layout: page
title: "Q162845: Windows NT 3.51 WINS Admin Err Msg: The Parameter Is Incorrect"
permalink: /kb/162/Q162845/
---

## Q162845: Windows NT 3.51 WINS Admin Err Msg: The Parameter Is Incorrect

{% raw %}

	Article: Q162845
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect to a Windows NT 3.51 Windows Internet Name Service (WINS)
	server from another Windows NT 3.51 server, using the WINS Administrator tool,
	and choose either Configuration or Replication Partners from the Server menu,
	you receive the following error:
	
	  The Parameter is Incorrect.
	
	CAUSE
	=====
	
	This error will occur if you connect to a Windows NT 3.51 WINS Server from a
	Windows NT 4.0 WINS Administrator tool and access either the Configuration or
	Replication Partners choices in the Server Menu. After performing this action,
	when you try to choose either Configuration or Replication Partners on the
	server using the Windows NT 3.51 WINS Administration tool, you may get the
	error.
	
	The reason for this error is that, in Windows NT 4.0, the following key:
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Wins\Parameters
	is defined as follows:
	
	  BackupDirPath:REG_EXPAND_SZ
	
	In Windows NT 3.51, the following key:
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Wins\Parameters
	is defined as follows:
	
	  BackupDirPath:REG_SZ
	
	When the Windows NT 4.0 WINS Administration tool is used to access the Windows NT
	3.51 WINS server, and the Configuration or Replication Partners menu option is
	selected, the BackupDirPath is changed from REG_SZ to REG_EXPAND_SZ. The result
	is that the Windows NT 3.51 WINS Administration tool will not (from that point
	on) recognize the information stored in that key's value field, and will return
	the error.
	
	RESOLUTION
	==========
	
	The Windows NT 3.51 WINS Administration tool was changed so that it recognizes
	the BackupDirPath when it is defined as REG_EXPAND_SZ. Apply the hotfix to the
	Windows NT 3.51 WINS Server.
	
	NOTE: Be certain to rename the original Winsadmn.exe before copying the hotfix
	version into your System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt wins manager registry
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
