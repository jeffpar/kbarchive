---
layout: page
title: "Q194558: Print Server Translates Characters Below 0x40 to Spaces (0x20)"
permalink: /kb/194/Q194558/
---

## Q194558: Print Server Translates Characters Below 0x40 to Spaces (0x20)

	Article: Q194558
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	SNA Print Server translates EBCDIC characters below 0x40, including null
	characters (0x00), to ASCII spaces (0x20). This can cause unwanted lines and
	incomplete sections in HP-GL plots.
	
	CAUSE
	=====
	
	In the HP-GL language, an ASCII space is treated as a command terminator. An
	HP-GL print job from a host may contain null characters in the middle of a
	command. When SNA Print Server translates the null to a space, it may cause the
	plotter to terminate the command in the wrong place, possibly in the middle of a
	plot address. This can cause the address to be truncated and a line to be
	plotted incorrectly.
	
	EBCDIC characters below 0x40 are control codes that are not normal printable
	characters. Therefore, the SNA Server Print Server is designed to convert these
	to ASCII spaces.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	Note: A fix is also available for SNA Server 3.0, which is newer than SNA Server
	3.0 SP4. The updated module is PPD3270.DLL, which needs to be applied on the SNA
	Server 3.0 SP4 computer.
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	In addition to the fix, a registry entry is required to enable the translation of
	characters below 0x40. After applying the hotfix:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\Parameters
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	  Value Name: HonorCharsUnder0x40 Data Type: REG_SZ Value: (leave blank)
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
