---
layout: page
title: "Q169182: SNA Server Print Server Always Inserts CR/LF"
permalink: kb/169/Q169182/
---

## Q169182: SNA Server Print Server Always Inserts CR/LF

	Article: Q169182
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
	
	When printing, SNA Server Print Server will insert its own carriage return/line
	feed (CR/LF) at the column that is indicated in the Default Page Width value in
	the Printer Properties. However, some print jobs control their CR/LF with 3270
	Orders using Set Buffer Address (SBA), in an SCS Code ('15' EBCDIC or '0A'
	ASCII), and/or in Escape Sequences (either in transparent sections or not).
	
	NOTE: The Escape sequence that tells the printer to do the wrapping is:
	
	  <Esc>&s0C <-End-of-line wrap = 0
	
	  0 = enable End of line Wrap
	  1 = Disable End of Line Wrap
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. To prevent SNA Print Server from
	inserting its own CR/LF, apply the fix referenced below and then edit the
	registry as follows:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	HKEY_LOCAL_ MACHINE\system\currentcontrolset\ 
	  services\snaprint\parameters\ 
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  Value Name: LineWrap
	  Data Type: REG_SZ
	
	4. Click OK.
	
	5. In the String field, input the string TRUE and then click OK.
	
	6. Stop SNAPrint Service and SNA Server Manager.
	
	7. Copy the fixed DLLs to the <Snaroot>\System directory.
	
	8. Restart SNAPrint Service and SNA Server Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The definition of End Of Line Wrap, as stated in the PCL 5 Comparison Guide
	Manual, part no. 5961-0941, is:
	
	  When end of line wrap is enabled, a character or space that moves the cursor
	  to the right of the right margin executes a CR-LF(prior to the printing of
	  the character or space).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
