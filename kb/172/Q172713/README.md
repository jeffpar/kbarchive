---
layout: page
title: "Q172713: Registry Entries for Winpopup.exe in Windows 95"
permalink: /kb/172/Q172713/
---

## Q172713: Registry Entries for Winpopup.exe in Windows 95

{% raw %}

	Article: Q172713
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the registry entries used by Winpopup.exe in Windows 95.
	
	MORE INFORMATION
	================
	
	The registry entries for Winpopup.exe are stored in the following registry key:
	
	  HKEY_LOCAL_MACHINE\software\Microsoft\Windows\CurrentVersion\Applets\ 
	     Popup
	
	Winpopup Registry Entries
	-------------------------
	
	AlwaysOnTop:
	
	  Specifies that the Winpopup window is in front.
	
	MaxOnMsgRcv:
	
	  Specifies that Winpopup is maximized when a message is received.
	
	MultiUserWarn:
	
	  Specifies that a warning should be given if <user name> is already
	  logged on to the network. Because Winpopup uses <user name> for
	  broadcast messages, if you are logged on at more than one computer,
	  <computer name> must be specified for messages to reach a computer.
	
	Sound:
	
	  Specifies that Winpopup plays the default sound to announce receipt of
	  a message.
	
	All values are Binary values with the following format:
	
	  Value        Description
	  ------------------------
	  0000 00 00   Disabled
	  0000 01 00   Enabled
	
	Because of the structure of the registry key listed above, Regedit shows these
	values as "Invalid DWORD value." However, this does not prevent the key from
	being used.
	
	Additional query words: Popup Pop Up
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
