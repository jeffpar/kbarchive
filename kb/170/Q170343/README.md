---
layout: page
title: "Q170343: Administrator Cannot Set Logon Banner on ZAK Workstation"
permalink: kb/170/Q170343/
---

## Q170343: Administrator Cannot Set Logon Banner on ZAK Workstation

	Article: Q170343
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set a logon banner on a Windows NT Zero Administration Kit (ZAK)
	client workstation by editing the registry after logging in locally as the
	domain administrator, the settings are gone at the next logon.
	
	CAUSE
	=====
	
	This behavior is caused by policies set on the ZAK server. Policy settings
	override local Windows NT Workstation registry settings.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the logon banner by configuring the policy file for
	the ZAK client workstation. The policy file resides on the ZAK server and can be
	modified by using the following steps:
	
	1. Log on to the ZAK server (this is the primary domain controller for the
	  network) as the domain administrator.
	
	2. Start Policy Editor (Poledit.exe) and open the Ntconfig.pol file in the
	  following folder:
	
	     %SystemRoot%\System32\Repl\Import\Scripts
	
	3. If one does not exist already, create a computer icon for the ZAK client. To
	  do so, click Add Computer on the Edit menu, type the computer name of the
	  Windows NT ZAK client workstation, and then click OK.
	
	4. Double-click the computer icon for the ZAK workstation, double-click Windows
	  NT System, and then double-click Logon. Click the Logon Banner check box to
	  select it.
	
	5. Type the text you want to be displayed in the Caption and Text boxes. Click
	  OK.
	
	6. Save the file and quit Policy Editor.
	
	You may need to log off and back on to the ZAK client workstation one time before
	the policy takes effect.
	
	
	MORE INFORMATION
	================
	
	For additional information about setting a logon banner in Windows NT, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q101063 Windows Logon Welcome, Displaying Warning Message
	
	Additional query words: legalcaptiontext legalnoticetext warning 1.00
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:
	
	=============================================================================
	
