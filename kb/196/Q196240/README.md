---
layout: page
title: "Q196240: Characters Above 127 Were Incorrectly Mapped By NvRunCmd"
permalink: /kb/196/Q196240/
---

## Q196240: Characters Above 127 Were Incorrectly Mapped By NvRunCmd

	Article: Q196240
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a NvRunCMD command is issued which contains characters with ASCII character
	codes greater than 127 (decimal), the command is executed successfully. However,
	the resulting output from the command is returned or displayed incorrectly.
	
	CAUSE
	=====
	
	NvRunCMD uses ANSI to EBCDIC character conversion, while Cmd.exe (Command
	Prompt) sometimes returns ASCII characters rather than ANSI characters. When
	this occurs, characters with ASCII character codes greater than 127 may be
	mapped incorrectly.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	After you apply the update, the following registry entry can be added to force
	NVRunCMD to put returned data through a ASCII-to-ANSI conversion to prevent the
	incorrect mapping. To add this registry entry, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NVRunCMD\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: ConvertOEMtoANSI
	     Data Type: REG_SZ
	     Value: <I BRACKETS="YES">any value</I>
	
	  NOTE: The value can be set to anything as the registry entry is enabled if it
	  exists.
	
	3. Quit Registry Editor.
	
	Additional query words: nvruncmd
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
