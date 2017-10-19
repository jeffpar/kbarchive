---
layout: page
title: "Q154097: How to Change the Default MSN Chat Program"
permalink: /kb/154/Q154097/
---

## Q154097: How to Change the Default MSN Chat Program

	Article: Q154097
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 1.3, 2.0, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you are using MSN, The Microsoft Network, you can participate in Chats,
	which are multiple-user group forums in which you can send and receive text and
	thereby be part of a discussion. Windows 95 includes a Chat program for use with
	MSN, but several third-party alternatives are available that can replace the
	default program. However, these alternative Chat programs set themselves as the
	default program, and some do not offer a way to change back to the standard Chat
	program. This article describes how to change back to the standard Chat program
	by editing the registry.
	
	MORE INFORMATION
	================
	
	Examples of third-party Chat programs for MSN are SuperChat and UK Chat. Both
	programs offer the standard functionality of the standard Chat program, but
	include other features such as customizable user icons, private messages, and
	macro keystrokes. These programs may not offer a way to change back to the
	standard Chat program without removing the program. You can edit the registry to
	change the default Chat program.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change back to the standard Chat program, modify the Filename value in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MOS\Applications\App #4
	
	Set the Filename value to the path for the standard Chat program (Textchat.exe).
	For example, set the path to:
	
	  C:\Program Files\The Microsoft Network\Textchat.exe
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msn mschat
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
