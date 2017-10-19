---
layout: page
title: "Q161281: Error ID 1069 After Reinstalling FPNW"
permalink: /kb/161/Q161281/
---

## Q161281: Error ID 1069 After Reinstalling FPNW

	Article: Q161281
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove, reinstall, and reboot File and Print Services for NetWare
	(FPNW), an error message may occur indicating that the FPNW Service has not
	started and suggesting that you check the Event Viewer for details. If you
	attempt to start FPNW from Control Panel, Services, the following error message
	results:
	
	  Error ID 1069. The Service Did Not Start Due to Logon Failure.
	
	NOTE: Also, if the FPNW service has not been stopped / restarted before this
	error appears, another symptom that may occur is that "If_Member_Of" Statements
	in the user's login script will not produce the desired results. For example:
	
	  If_member_of <groupname> map M: \\<servername>\<share>
	
	The mapping will not occur.
	
	CAUSE
	=====
	
	If no password is selected when FPNW is installed, the password is set to
	<NULL> and a random password is provided by the system. When FPNW is
	reinstalled, the passwords do not match.
	
	RESOLUTION
	==========
	
	Clear the password entries for the Supervisor account and the FPNW Service
	Account, then click OK to save. The FPNW service should now restart
	successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This issue generally arises after a problem has occurred with FPNW requiring
	that it be removed and reinstalled.
	
	FPNW may be removed by going into Control Panel, Network, under the Installed
	Network Services window (for Windows NT 3.51) or on the Services tab (Windows NT
	4.0). To remove FNPW, highlight it then select the Remove button. When the
	computer is rebooted, FPNW may then be reinstalled in the normal manner,
	requiring another reboot.
	
	Additional query words: fpnw nt
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
