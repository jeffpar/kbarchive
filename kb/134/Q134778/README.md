---
layout: page
title: "Q134778: Cannot Print from MS-DOS to JetDirect Printer in Direct Mode"
permalink: /kb/134/Q134778/
---

## Q134778: Cannot Print from MS-DOS to JetDirect Printer in Direct Mode

{% raw %}

	Article: Q134778
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to capture a printer port to a printer attached to a Hewlett-
	Packard (HP) JetDirect device in Direct mode (without a NetWare server), you may
	receive the following error message:
	
	  Windows Networking
	  The following error occurred while trying to connect
	  LPT1 to \\HP_Network_Printers\<printername>
	
	  The computer or sharename could not be found. Make sure you typed it
	  correctly, and try again.
	
	You may see this error message when you click Yes in the Add Printer Wizard when
	you are prompted "Do you print from MS-DOS-based programs?".
	
	CAUSE
	=====
	
	You can connect to HP JetDirect devices in Direct mode with Universal Naming
	Convention (UNC) connections only. You cannot capture a printer port to an HP
	JetDirect device in Direct mode.
	
	WORKAROUND
	==========
	
	A workaround for this problem is to use Novell's CAPTURE command in your login
	script. The Windows 95 login script processor recognizes this command, and it
	spawns the results to all subsequent VMs.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When the Add Printer Wizard prompts you to capture a printer port, the network
	path is automatically inserted and cannot be changed (as the error message
	stated above suggests). Many MS-DOS-based programs cannot print unless the
	network printer is redirected through a local port.
	
	Additional query words: jet admin direct
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
