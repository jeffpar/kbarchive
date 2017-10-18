---
layout: page
title: "Q123498: NumLock Key State Not Saved When Logging Off"
permalink: kb/123/Q123498/
---

## Q123498: NumLock Key State Not Saved When Logging Off

	Article: Q123498
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log off by choosing Logoff in the File menu of Program Manager, the
	NumLock key state is not saved. By default the NumLock key state is off when you
	log on.
	
	NOTE: This also causes the state of the AutoAdminLogon switch to not be saved.
	
	MORE INFORMATION
	================
	
	The numlock state is not saved if the user is not a member of the administrators
	group. If the user is a member of the administrators group the numlock state is
	saved on logoff.
	
	For more information about changing the NUMLOCK properties after login, please
	see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q102978
	  TITLE:REG: User Preferences Entries, PART 3
	
	The Keyboard entry contains user preferences as defined by choosing the Keyboard
	icon in Control Panel. Entries are found under this Registry path:
	
	  HKEY_CURRENT_USER\Control Panel\Keyboard
	
	  InitialKeyboardIndicators: REG_SZ: NUMBER
	
	  Default: 0
	
	This specifies initial values for keys. 0 means that NUMLOCK is turned off after
	the user logs on; 2 means NUMLOCK is turned on after user logs on. This value is
	set during log off or shutdown to preserve the state of the NUMLOCK key at that
	time.
	
	RESOLUTION
	==========
	
	To correct this problem, press CTRL+ALT+DEL and choose Logoff to log off. This
	procedure permanently saves the NumLock key state when you log off.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.5 4.0
	
	=============================================================================
	
