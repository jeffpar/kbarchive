---
layout: page
title: "Q229687: Err Msg: &quot;Workstation Is Locked&quot; with Invalid Screen Saver"
permalink: /kb/229/Q229687/
---

## Q229687: Err Msg: &quot;Workstation Is Locked&quot; with Invalid Screen Saver

{% raw %}

	Article: Q229687
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart a computer running Microsoft Windows NT Server and no one has
	logged on, you are unable to log on to the computer (locally or to the domain)
	and the following error message is displayed:
	
	  This workstation is in use and has been locked.
	  The workstation can only be unlocked by \ or an administrator.
	  Press CTRL + ALT + DELETE to unlock this workstation.
	
	If you try to unlock the computer, the following error message is displayed:
	
	  This workstation is locked. Only \ or an administrator can unlock this
	  workstation.
	
	Or, if a user has logged on and off, you are unable to log on to the computer
	(locally or to the domain), and the following error message is displayed:
	
	  This workstation is in use and has been locked.
	  The workstation can only be unlocked by <domain\user> or an
	  administrator.
	  Press CTRL + ALT + DELETE to unlock this workstation.
	
	If you try to unlock the computer, the following error message is displayed:
	
	  This workstation is locked. Only <domain\user> or an administrator can
	  unlock this workstation.
	
	CAUSE
	=====
	
	This problem occurs in Windows NT 4.0 Service Pack 4 when you change the default
	screen saver program to a nonexistent screen saver program or to one that is
	corrupted.
	
	The registry location for screen saver program information is
	HKEY_USERS\.Default\Control Panel\Desktop.
	
	RESOLUTION
	==========
	
	To resolve this problem, use another screen saver program (such as Logon.scr)
	that has password functionality.
	
	To work around this problem and still be able to log on when the error message
	states that it is locked by \:
	
	1. When the logon screen appears, clear the Username box.
	
	2. Clear the Domain Name box, and then clear the Password box.
	
	3. Press CTRL+ALT+DELETE, and log on normally.
	
	To work around this problem and still be able to log on when the error message
	states that it is locked by <domain\user>:
	
	1. Press CTRL+ALT+DELETE to unlock the computer.
	
	2. Type the logon information for the last logged on user, and then click OK.
	
	3. When the unlock computer dialog box disappears, press CTRL+ALT+DELETE, and
	  then log on normally.
	
	NOTE: If you do not use one of these methods to log on, you must restart the
	computer and log on before the screen saver program starts. You can use the
	Shutdown utility in the Windows NT Resource Kit to shut down the computer.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99590 How to Activate the Screen Saver During Logon
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
