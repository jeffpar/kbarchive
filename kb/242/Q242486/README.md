---
layout: page
title: "Q242486: Slow Performance of NetWare Logon Script with GSNW"
permalink: /kb/242/Q242486/
---

## Q242486: Slow Performance of NetWare Logon Script with GSNW

	Article: Q242486
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may experience very slow NetWare logon script performance on a Terminal
	Server computer with Gateway Services for NetWare (GSNW) installed.
	
	CAUSE
	=====
	
	Microsoft fixed a problem in Terminal Server Edition 4.0 where users had
	restricted permissions based on the preferred server users logged on to. This
	caused a problem for users attempting to log on to a server to which the
	previous user did not have permissions. The previous user's server is used to
	obtain the address of the current logon user's preferred server, but the server
	cannot detect the new user's server.
	
	GSNW is modified in Terminal Server Edition so that the process loops through 10
	servers, rather than just the first two servers in the list. This behavior can
	cause very slow logon script performance. A registry key is added, so that you
	can set the number of logon servers that the Terminal Server computer loops
	through to a value between 2 and 10.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size        File name    Platform
	  -----------------------------------------------------
	  08/04/99   05:27p   155,760     Nwrdr.sys    (Intel)
	  08/13/99   07:43p   1,267,376   Win32k.sys   (Intel)
	  08/04/99   05:32p   278,960     Nwrdr.sys    (Alpha)
	  08/13/99   07:48p   2,073,136   Win32k.sys   (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	After you apply the hotfix, use the following steps to modify the registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\Current Control Set\Services\nwrdr\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: FindServerLessAttempts
	  Data Type: REG_DWORD
	  Value (Decimal): Maximum and default is 10. Use a value less than 10, such as
	  3.
	
	  NOTE: You may have to test values to find the appropriate value for your
	  environment.
	
	4. Quit Registry Editor.
	
	5. Shut down and restart the computer.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q215475 Slow Performance with GSNW on Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : :4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
