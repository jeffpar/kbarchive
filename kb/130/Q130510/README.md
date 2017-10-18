---
layout: page
title: "Q130510: Command-Line Switches for Windows Explorer"
permalink: kb/130/Q130510/
---

## Q130510: Command-Line Switches for Windows Explorer

	Article: Q130510
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 02-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists command-line switches you can use when you start Windows
	Explorer (EXPLORER.EXE).
	
	MORE INFORMATION
	================
	
	Syntax
	------
	
	EXPLORER.EXE [/n][/e][,/root,<object>][[,/select],<sub object>]
	
	Switches
	--------
	
	/n:  Opens a new window in single-paned (My Computer) view for each item
	    selected, even if the new window duplicates a window that is
	    already open.
	
	/e:  Uses Windows Explorer view. Windows Explorer view is most similar
	    to File Manager in Windows version 3.x. Note that the default view
	    is Open view.
	
	/root,<object>:  Specifies the root level of the specified view. The
	                default is to use the normal namespace root (the
	                desktop). Whatever is specified is the root for the
	                display.
	
	/select,<sub object>:  Specifies the folder to receive the initial
	                      focus. If "/select" is used, the parent folder
	                      is opened and the specified object is selected.
	
	Examples
	--------
	
	- To open a Windows Explorer view to explore only objects on \\<server
	  name>, use the following syntax:
	
	  explorer /e,/root,\\<server name>
	
	- To view the C:\WINDOWS folder and select CALC.EXE, use the following syntax:
	
	  explorer /select,c:\windows\calc.exe
	
	Additional query words: 4.0 parameters
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE
	Version           : :4.0
	
	=============================================================================
	
