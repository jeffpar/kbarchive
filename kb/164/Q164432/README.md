---
layout: page
title: "Q164432: Accented Greek Characters Are Not Being Created"
permalink: /kb/164/Q164432/
---

## Q164432: Accented Greek Characters Are Not Being Created

{% raw %}

	Article: Q164432
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the Greek input locale, accented Greek characters are not being
	created correctly.
	
	CAUSE
	=====
	
	When you select a specific input locale in the Keyboard dialog box in Control
	Panel, Windows NT uses this setting to select a code page that it uses to map
	keyboard input to characters. The incorrect Greek character problem is caused by
	an incorrect codepage being used; codepage 869 is used when Windows NT should be
	using codepage 737.
	
	RESOLUTION
	==========
	
	A fix to Keyboard.sys has been provided by Microsoft that corrects the codepage
	usage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: keyboard layout winnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
