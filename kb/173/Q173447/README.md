---
layout: page
title: "Q173447: Limited Support for MPP for 5250 Printing"
permalink: /kb/173/Q173447/
---

## Q173447: Limited Support for MPP for 5250 Printing

{% raw %}

	Article: Q173447
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	AS/400 applications that require specific page width (or maximum print position)
	settings may not print correctly when printed via a 5250 print session
	configured in SNA Server 3.0 or 3.0 SP1. Print jobs that have truncated lines
	are one example of how this problem may appear.
	
	CAUSE
	=====
	
	The SNA Server print service only supports a limited range of values for the
	Maximum Print Position (MPP) SCS control code for the 5250 data stream. The
	supported values for 5250 printing are 80, 132, 158, and 198.
	
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
	
	With the fix applied, the SNA Server print service accepts MPP SCS control codes
	in the 5250 data stream for any language and to change the line length
	accordingly. The print service will also set an overall MPP value for each print
	job as it starts. To set this value, edit registry as follows.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: This registry parameter is only needed if you want a default MPP value for
	each print job. If each print job includes an MPP SCS control code that sets the
	line length, this registry entry is not required.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\snaprint\ 
	  parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  "Value Name: mpp
	  Data Type: REG_SZ" (without the quotation marks)
	
	  In the Value field, type a value between 40 and 255. The Default value is 132.
	  The range is 40-255.
	
	4. Exit Registry Editor.
	
	This registry parameter is only needed if you want a default MPP value for each
	print job. If each print job includes an MPP SCS control code that sets the line
	length, this registry entry is not required.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
