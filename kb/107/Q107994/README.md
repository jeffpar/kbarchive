---
layout: page
title: "Q107994: &quot;Not Enough Memory&quot; Error Occurs When Browsing"
permalink: /kb/107/Q107994/
---

## Q107994: &quot;Not Enough Memory&quot; Error Occurs When Browsing

	Article: Q107994
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to browse network connections from a Windows for Workgroups 3.11
	workstation, you receive the following error message:
	
	  There is not enough memory available.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually insert the path for the computer name and
	share name.
	
	You may also be able to work around this problem by doing one of the following:
	
	- Run MS-DOS Prompt from the Program Manager Main group, and type "exit"
	  (without the quotation marks) to return to Windows for Workgroups.
	
	- Run MS-DOS Prompt from the Program Manager Main group, type "net view"
	  (without the quotation marks) and then type "exit" (without the quotation
	  marks) to return to Windows for Workgroups.
	
	- Increase the available conventional memory. Depending on your system
	  configuration, you'll need 475 to 600K free for Windows for Workgroups to
	  browse correctly.
	
	- Remove all applications from your Program Manager Startup group.
	
	- Use only one protocol.
	
	- If you are using a third-party shell, switch back to Program Manager.
	
	- The protocol file may be corrupt. Reinstall the protocol.
	
	- Disabling NETWORK DDE may allow you to browse when memory optimization fails.
	
	NOTE: If running MS-DOS Prompt corrects the problem, create a one-line batch file
	that reads COMMAND.COM /C. If running NET VIEW from MS-DOS Prompt corrects the
	problem, create a one-line batch file that reads COMMAND.COM /C NET VIEW. Name
	the batch file FIX.BAT and create an icon in the Startup group using FIX.BAT as
	the command line and Browse Fix as the Description.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you try to connect to a network drive in File Manager, you may see only a
	workgroup name listed in the browse list. Trying to force the list of computers
	to appear by choosing the workgroup name may cause the error above to be
	displayed.
	
	This error occurs only if the local computer is not providing the browse list.
	
	
	Additional query words: 3.11 browsemaster unc universal naming convention browselist winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
