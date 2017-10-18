---
layout: page
title: "Q168579: How to Set Up Locally-Based System Policies"
permalink: kb/168/Q168579/
---

## Q168579: How to Set Up Locally-Based System Policies

	Article: Q168579
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT system policies are designed for when a user logs on to a domain
	account database. There are times, however, that it is necessary to have
	policies on a Windows NT workstation or server computer that is not
	participating in a domain or when you need a different policy for users who are
	logged on to the local account database.
	
	MORE INFORMATION
	================
	
	There are two basic ways to set up locally-based system policies. To use these
	on a workstation or server running Windows NT 4.0 (not a domain controller),
	follow one of the following procedures:
	
	- Automatic Update Method
	- Remote Update Method
	
	NOTE: Poledit.exe only accepts Global Groups and not Local Groups for the
	policies that it creates on Terminal Server.
	
	Automatic Update Method
	-----------------------
	
	1. Share the Winnt\System32\Repl\Import\Scripts folder (where Winnt is the name
	  of your Windows directory) as Netlogon.
	
	2. Grant the group Everyone "Read" Permissions and the group Administrators
	  "Full Control" to this share.
	
	3. Start System Policy Editor (Poledit.exe).
	
	4. On the File menu, click New Policy and make the changes for your policy.
	  Start with something simple such as "Remove Run command from Start Menu" from
	  Shell/Restrictions in the Users Properties window.
	
	5. On the File menu, click Save As, and then save the policy file in the
	  Netlogon shared folder as Ntconfig.pol.
	
	6. On the File menu, click Open Registry.
	
	7. Double-click Local Computer, double-click Network, double-click System
	  Policies Update, and then click the Remote Update check box to select it.
	
	8. In the Update Mode box, click Automatic (Use Default Path), and then click
	  OK.
	
	9. Save your policy to the location listed above as Ntconfig.pol, and then quit
	  Policy Editor.
	
	10. Restart Windows NT for the changes in the policy to take effect.
	
	NOTE: This configuration allows you to use both a local and a domain-wide system
	policy, depending on which user account database the user logs on to.
	
	Remote Update Method
	--------------------
	
	1. Start System Policy Editor(Poledit.exe) and make the changes for your policy.
	
	2. On the File menu, click Save As, and then save the policy file on your hard
	  disk. For example, save the file as:
	
	  c:\ntconfig.pol
	
	3. On the File menu, click Open Registry.
	
	4. Double-click Local Computer, double-click Network, double-click System
	  Policies Update, and then click the Remote Update check box to select it.
	
	5. In the Update Mode box, click Manual (Use Specific Path), type a path name in
	  the Path for Manual Update dialog box (for example, c:\winnt\
	  system32\repl\import\scripts\Ntconfig.pol), and then click OK.
	
	  Note that to display error messages if the policy file is not found when
	  Windows NT starts, you can click the Display Error Message check box to
	  select it.
	
	6. Save your policy to the location listed above as Ntconfig.pol, and then quit
	  Policy Editor.
	
	  Note that while using the Manual Update, you may name the policy file anything
	  you would like; just be sure to enter it into the path in step 5 above.
	
	7. Restart Windows NT for the changes in the policy to take effect.
	
	TIP: Every person or computer that logs on after a policy is in place is subject
	to the policy. Therefore, it is a good idea to not edit the default user or
	computer until you are familiar with System Policies. A good idea to use is to
	make a test user/group account in "User Manager" and then make a specific policy
	for this user/group in System Policy Editor. After you have the policy working
	properly you can then transfer the policy to the production environment.
	
	
	For information about how to use system policies on a standalone computer running
	Windows 95, see the following article in the Microsoft Knowledge Base:
	
	  Q147381 How to Use System Policies On a Standalone Computer
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
