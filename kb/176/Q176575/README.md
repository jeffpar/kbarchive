---
layout: page
title: "Q176575: How to Log On to a Windows NT Domain Using a PPTP Connection"
permalink: kb/176/Q176575/
---

## Q176575: How to Log On to a Windows NT Domain Using a PPTP Connection

	Article: Q176575
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to configure your computer to use the Point-to- Point
	Tunneling Protocol (PPTP) to connect and log on to your Windows NT domain
	through a connection to your Internet service provider (ISP).
	
	MORE INFORMATION
	================
	
	When you establish a Dial-Up Networking (DUN) connection using PPTP, you are
	required to provide a valid Windows NT user name and password. However, when you
	provide this user name and password you are not automatically logged on to the
	Windows NT domain. If you are not logged on to the Windows NT domain, you may
	not have access to some network resources. For example, you may be prompted to
	provide a user name and password when you attempt to access a network resource.
	In addition, your logon script is not processed when you establish the PPTP
	connection.
	
	To log on to your Windows NT domain using PPTP, you must log on to the domain
	after establishing the PPTP connection. To do so, use the appropriate method:
	
	NOTE: These procedures assume all of the following conditions exist:
	
	- You have created a Dial-Up Networking phone book entry to connect to your
	  ISP.
	
	- You have created a Dial-Up Networking phone book entry to connect to your
	  PPTP server.
	
	- Your computer has a valid machine account on the Windows NT domain.
	
	For additional information about configuring PPTP, see the following article in
	the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q161410
	TITLE : How to Set Up a Private Network Over the Internet Using PPTP
	
	ARTICLE-ID: Q172227
	TITLE : Network Address Translators Can Block Netlogon Traffic
	
	If Your Computer Has Not Joined the Windows NT Domain
	-----------------------------------------------------
	
	1. Log on to your computer using a local user account with administrator rights.
	
	2. Configure your registry so that DUN connections are preserved after you log
	  off. To do so, use the following steps.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	
	  a. Add a new string value named KeepRasConnections to the following registry
	     key:
	
	     HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	  b. Set the string value for KeepRasConnections to 1.
	
	3. Use Dial-Up Networking to connect to your ISP.
	
	4. Use Dial-Up Networking to connect to your PPTP server.
	
	5. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	6. On the Identification tab, click Change, click Domain, type your Windows NT
	  domain name in the Domain box, and then click OK.
	
	7. If you receive a "Welcome" message from the domain, click OK.
	
	8. Click Close.
	
	9. When you are prompted to restart your computer, click Yes.
	
	10. Log on to your computer using a local user account with administrator
	  rights.
	
	11. Use Dial-Up Networking to connect to your ISP.
	
	12. Click Start, click Shut Down, click "Close all programs and log on as a
	  different user," and then click OK. The Dial-Up Networking connection to
	  your ISP should remain connected.
	
	13. When you are prompted, press CTRL+ALT+DELETE to log on.
	
	14. Type your domain user name and password. In the Domain box, click the name
	  of your Windows NT domain. Click the Logon Using Dial-Up Networking check
	  box to select it, and then click OK.
	
	15. In the Phone Book Entry To Dial box, click the phone book entry that you use
	  to connect to your PPTP server, and then click Dial. Confirm your user name,
	  password, and domain, and then click OK.
	
	If Your Computer Has Already Joined the Windows NT Domain
	---------------------------------------------------------
	
	1. Log on to your computer using a local account with administrator rights.
	
	2. Configure your registry so that DUN connections are preserved after you log
	  off. To do so, follow these steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	
	  a. Add a new string value named KeepRasConnections to the following registry
	     key:
	
	     HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	  b. Set the string value for KeepRasConnections to 1.
	
	3. Use Dial-Up Networking to connect to your ISP.
	
	4. Click Start, click Shut Down, click "Close all programs and log on as a
	  different user," and then click OK. The Dial-Up Networking connection to your
	  ISP should remain connected.
	
	5. When you are prompted, press CTRL+ALT+DELETE to log on.
	
	6. Type your domain user name and password. In the Domain box, click the name of
	  your Windows NT domain. Click the Logon Using Dial-Up Networking check box to
	  select it, and then click OK.
	
	7. In the Phone Book Entry To Dial box, click the phone book entry that you use
	  to connect to your PPTP server, and then click Dial. Confirm your user name,
	  password, and domain, and then click OK.
	
	Additional query words: login RAS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
