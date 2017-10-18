---
layout: page
title: "Q153038: How to Automate Dial-Up Networking Connections"
permalink: kb/153/Q153038/
---

## Q153038: How to Automate Dial-Up Networking Connections

	Article: Q153038
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; Win2000:95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUpkbfaq
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to automate a Dial-Up Networking connection in
	Windows 95. The following topics are discussed:
	
	- Installing the Dial-Up Scripting tool
	
	- Assigning a script file to a Dial-Up Networking connection
	
	MORE INFORMATION
	================
	
	Windows 95 and Microsoft Plus! include a Dial-Up Scripting tool that you can use
	to automate Dial-Up Networking connections using script files. A script file
	contains scripting commands, parameters, and expressions that provide
	information to and retrieve information from the remote computer you are
	connecting to. This information may include your user name and password, port
	information, carriage returns, line feeds, and pauses. Script files are created
	using a text editor (such as Notepad) and are assigned to an existing Dial-Up
	Networking connection using the Dial-Up Scripting tool.
	
	Installing the Dial-Up Scripting Tool
	-------------------------------------
	
	If you are not using Microsoft Plus!, follow these steps to install the Dial-Up
	Scripting tool:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab, click Have Disk, type the path to the
	  Rnaplus.inf file in the Copy Manufacturer's File From box, and then click OK.
	  The Rnaplus.inf file is located in the Admin\Apptools\Dscript folder on the
	  Windows 95 CD-ROM.
	
	  NOTE: The Dial-Up Scripting tool is included in the CD-ROM version of Windows
	  95, but not in the floppy disk version. If you are using the floppy disk
	  version of Windows 95 and want to use the Dial-Up Scripting tool, please see
	  the following article in the Microsoft Knowledge Base for information about
	  the availability of the Dial-Up Scripting tool:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	3. Click the SLIP And Scripting For Dial-Up Networking check box to select it,
	  and then click Install.
	
	If you are using Microsoft Plus!, follow these steps to install the Dial- Up
	Scripting Tool:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Install/Uninstall tab, click Microsoft Plus! For Windows 95 in the
	  list of installed programs, and then click Add/Remove.
	
	3. Click Add/Remove, click the Internet Jumpstart Kit check box to select it,
	  and then click Continue.
	
	NOTE: If you have difficulty adding this component, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q137294 Cannot Install the Internet Components in Microsoft Plus!
	
	Assigning a Script File to a Dial-Up Networking Connection
	----------------------------------------------------------
	
	To use the Dial-Up Scripting tool to assign a script file to a Dial-Up Networking
	connection, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, and then
	  click Dial-Up Scripting Tool.
	
	2. In the Connections box, click the Dial-Up Networking connection you want to
	  automate.
	
	3. In the File Name box, type the full path (including the file name) to the
	  script file you want to assign to the connection, and then click OK. Note
	  that you can click Browse to locate the script file instead of typing the
	  full path for the script file.
	
	Additional query words: scripts w95cnfaq
	
	======================================================================
	Keywords          : dun win95 kbDialUp kbfaq
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95; Win2000:95
	
	=============================================================================
	
