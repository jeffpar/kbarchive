---
layout: page
title: "Q132831: SBS Computer Prompts You for Network Logon Twice"
permalink: /kb/132/Q132831/
---

## Q132831: SBS Computer Prompts You for Network Logon Twice

	Article: Q132831
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a Windows 95 Server-Based Setup (SBS) computer, you may be
	prompted twice for a network logon.
	
	NOTE: A Server-Based Setup computer is a computer that is running Windows 95 from
	files that exist on a network server.
	
	CAUSE
	=====
	
	On an SBS computer, the NET LOGON command is added to the Autoexec.bat file
	during Windows 95 Setup. If a NET LOGON command already exists in the
	Autoexec.bat file, the command is not overwritten, resulting in two NET LOGON
	commands.
	
	RESOLUTION
	==========
	
	Use a text editor, such as Notepad, to remove one of the NET LOGON commands from
	the Autoexec.Bat file.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
