---
layout: page
title: "Q195354: LU3 Print Sessions Don't Support Transparent Print Sections"
permalink: /kb/195/Q195354/
---

## Q195354: LU3 Print Sessions Don't Support Transparent Print Sections

{% raw %}

	Article: Q195354
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	SNA Server's Host Print Server provides a Bypass GDI option for 3270 print
	sessions that is used to indicate whether the host print data is transparent or
	not. If this option is selected, all print data received through this 3270 print
	session will be treated as transparent data, and will be passed directly to the
	physical printer without modification. The Bypass GDI option has no effect for
	LU3 print sessions. LU3 print jobs that contain transparent data such as printer
	control codes (for example, HP PCL commands) or other pre-rendered print data
	will fail to print, or will print incorrectly even if the Bypass GDI option is
	enabled.
	
	CAUSE
	=====
	
	The Host Print Server was not designed to allow the Bypass GDI option to
	
	  function with LU3 print sessions since LU3 print jobs were not intended for
	
	use with transparent print data. IBM originally intended LU3 printing to be used
	for basic 3270 printing. IBM developed LU1 (SCS) printing to allow for more
	complex print jobs including transparent print data.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
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
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	After applying the update, Bypass GDI is supported for LU3 print sessions if the
	print session is also configured to use a PDT (Printer Definition Table) file.
	In addition to applying the update, the following registry entry needs to be
	added:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services \SnaPrint\Parameters
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: BypassGDIForLU3
	     Data Type:  REG_SZ
	     Value:      Yes
	
	     NOTE: Value can be set to anything (for example, Yes, On, and so on).
	     As long as this parameter exists, the Bypass GDI option will be
	     enabled for LU3 print sessions.
	
	4. Quit Registry Editor.
	
	The following Knowledge Base article discusses an update that is included in SNA
	Server 3.0 SP3 and SNA Server 4.0 SP1 that allows the Host Print Server to pass
	EBCDIC X'27' characters for LU3 print sessions.
	
	  Q180150 LU3 Print Job Fails If Data Includes X'27' Control Codes
	
	This capability was added to provide limited transparent section printing for LU3
	sessions. The update for this issue required setting a registry parameter called
	LetHex27Pass to allow EBCDIC X'27' characters to pass through to the printer.
	However, the update described in this article removes support for the
	LetHex27Pass registry entry since the print server has been updated to support
	Bypass GDI for LU3 sessions. Enabling the BypassGDIForLU3 registry entry and
	applying this update will allow EBCDIC X'27' characters to pass through print
	server for LU3 sessions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
