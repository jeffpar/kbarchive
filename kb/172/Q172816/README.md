---
layout: page
title: "Q172816: TN3270 SSCP-LU Sessions Send x'40' Instead of Null RU"
permalink: /kb/172/Q172816/
---

## Q172816: TN3270 SSCP-LU Sessions Send x'40' Instead of Null RU

	Article: Q172816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SNA TN3270 Server will send an x'40' character (space) instead of a Null RU
	when you press the ENTER key on an SSCP screen. When this occurs, the TN3270
	Client will receive the error message:
	
	  Function not supported.
	
	CAUSE
	=====
	
	A previous change to the TN3270 Server component caused an x'40 character,
	instead of an x'7d', to be sent as a null character when you press the Enter key
	during an SSCP-LU session. The x'40 causes the Host to send back an -RSP after a
	DLC Data RQD is sent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Tn3servr.exe sends a Null RU to the host by default. If
	you need the x'40' character, you can modify the registry as shown below.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TN3270\Parameters
	
	3. On the Edit menu, click Add Value, and use the following entry:
	
	  Value Name: ReplaceNullRUs
	  Data Type: REG_SZ
	  Value: YES
	
	4. Exit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
