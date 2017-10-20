---
layout: page
title: "Q274363: MSN Explorer Setup: File Being Copied Is Older Than Files Curren"
permalink: /kb/274/Q274363/
---

## Q274363: MSN Explorer Setup: File Being Copied Is Older Than Files Curren

{% raw %}

	Article: Q274363
	Product(s): The Microsoft Network
	Version(s): 5,6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 6.0, 6.1 
	- the operating system: Microsoft Windows 95 
	- Microsoft Internet Explorer version 5 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing MSN Explorer, a dialog box pops up saying "A file being copied
	is older than the file currently on your computer."
	
	CAUSE
	=====
	
	MSN Explorer may install Dial Up Networking (DUN) (version 1.4). It does this
	installation when it determines that the current DUN was not completely or
	correctly installed.
	
	DUN 1.4 includes one or more files that may duplicate files on a computer from an
	earlier DUN version, but with a lower version number. When this happens, Windows
	will show a dialogue box that says the user is about to replace a newer file
	with and older file and asks if the user wants to continue.
	
	For instance, when Internet Explorer 5.0a is installed on Windows 95, it installs
	DUN 1.3. This DUN includes, among others, a copy of vserver.vxd. Dun 1.4,
	installed by Windows Explorer, also has a copy of this file, but with an earlier
	version number.
	
	So, if MSN Explorer tries to install the DUN over the DUN from Internet Explorer
	5 on Windows 95, it detects that the older file is about to be installed and
	prompts the user. The use is given the choice as to whether they should install
	this older file or not.
	
	RESOLUTION
	==========
	
	Microsoft recommends that the user accept all the files being installed by MSN
	Explorer, even if it appears that one or more files are older than what is on
	the computer.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu MSN Explorer vserver.vxd vxd
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbIEsearch kbOSWinSearch kbMSNSearch kbIE95Search kbIE500Search kbZNotKeyword3 kbIE500Win95 kbMSN600 kbMSN610
	Version           : :5,6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
