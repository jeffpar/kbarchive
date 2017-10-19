---
layout: page
title: "Q175086: Regional Settings Specified in User Profile Are Not Applied"
permalink: /kb/175/Q175086/
---

## Q175086: Regional Settings Specified in User Profile Are Not Applied

	Article: Q175086
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If user profiles are enabled in Windows 95, and you specify settings using the
	Regional Settings tool in Control Panel that are different from the default
	regional settings, your regional settings may not be applied when you log on to
	Windows 95.
	
	If you use the "Close all programs and log on as a different user" option to shut
	down Windows 95, the regional settings for the previous user are applied. If you
	restart Windows, the default regional settings are applied.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes:
	
	Date       Time     Version     Size      File name     Platform
	-----------------------------------------------------------------------
	12/18/98   4:27pm   4.00.962    127,488   Mprserv.dll   Windows 95 (all)
	4/9/97     4:21pm   4.00.952    411,648   Kernel32.dll  Windows 95 & OSR1
	5/22/98    3:29pm   4.00.1112   437,248   Kernel32.dll  OSR2
	11/11/99   4:01pm   4.03.1216   433,664   Kernel32.dll  OSR2.1 & OSR2.5
	
	NOTE: This issue is not resolved by later versions of these files.
	
	
	
	
	To work around this behavior, follow these steps:
	
	1. Restart your computer, and then click Cancel when you are prompted to log on.
	  This logs you on as the default user.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Regional Settings.
	
	4. Make the appropriate changes to your regional settings, click OK, and then
	  close Control Panel.
	
	5. Restart your computer.
	
	6. Click Start, point to Settings, and then click Control Panel.
	
	7. Double-click Passwords, and then click the User Profiles tab.
	
	8. Click "Users can customize their preferences and desktop settings. Windows
	  switches to your personal settings whenever you log in", and then click OK.
	
	9. Click Yes when you are prompted to restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2).
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	The regional settings that are affected by this problem are Currency, Number,
	and Time and Date formats.
	
	For additional information about issues resolved by updates to these components,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q198035 User Profiles Not Copied to Server with Updated Mprserv.dll File
	
	  Q181869 Desktop Folders Are Not Deleted Under Roving Profiles
	
	  Q181868 Config.pol File Attributes Change After Supervisor Logs On
	
	  Q174979 Screen Saver Password Is Not Changed with Domain Password
	
	  Q172647 Server Copy of User Profile May Be Overwritten By Local Copy
	
	  Q165402 Windows 95 Update to Encrypt Passwords in Memory
	
	  Q148336 Memory Leak in Windows 95 Kernel Using Windows Sockets
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	  Q245134 Windows 95 Updates May Not Install in OSR 2.1 or 2.5
	
	
	  Q145935 BUG: CopyFile Fails with Read-Only Files
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020Implementing Windows 95 Updates
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
