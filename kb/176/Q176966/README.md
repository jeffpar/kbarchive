---
layout: page
title: "Q176966: System Policy Editor May Not Disable Slow Link Detection"
permalink: kb/176/Q176966/
---

## Q176966: System Policy Editor May Not Disable Slow Link Detection

	Article: Q176966
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you disable the "Automatically detect slow connections" policy with the
	System Policy Editor tool, the Windows NT-based computer on which the policy is
	applied may continue to detect slow connections.
	
	CAUSE
	=====
	
	This behavior can occur because of an error in the Winnt.adm file that is used
	by System Policy Editor.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the Winnt.adm file that is used
	  by System Policy Editor. This file is typically located in the
	  %SystemRoot%\inf folder.
	
	2. Locate the following section in the Winnt.adm file:
	
	  POLICY !!EnableSlowLinkDetect<BR/>
	  VALUENAME "SlowLinkDetectEnabled"<BR/>
	  END POLICY
	
	3. Modify this section to contain the following lines:
	
	  POLICY !!EnableSlowLinkDetect<BR/>
	  VALUENAME  "SlowLinkDetectEnabled"<BR/>
	  VALUEON NUMERIC  1<BR/>
	  VALUEOFF  NUMERIC  0<BR/>
	  END POLICY
	
	4. Save the Winnt.adm file, quit the text editor, and then restart System Policy
	  Editor.
	
	5. Configure the policy, and then reapply the policy.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following registry value determines the status of slow link detection:
	
	Hkey_Local_Machine\Software\Microsoft\Windows NT\ 
	CurrentVersion\Winlogon\SlowLinkDetectEnabled
	
	If the value data of this entry is 1 (enabled), users can choose between a local
	or a server-based user profile when a slow network connection is detected.
	
	When you enable the "Automatically detect slow connections" policy using System
	Policy Editor, the SlowLinkDetectEnabled value is added to the registry and the
	value data is set to 1 (enabled). When you disable this entry in System Policy
	Editor, the SlowLinkDetectEnabled value is removed from the registry. This
	causes the value data to return to the default value of 1 (enabled).
	
	You can use the modified Winnt.adm file to disable the "Automatically detect slow
	connections" policy with System Policy Editor. When you apply this policy, the
	SlowLinkDetectEnabled value is placed in the registry and the value data is set
	to 0 (disabled).
	
	Additional query words: policies poledit ras remote
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
