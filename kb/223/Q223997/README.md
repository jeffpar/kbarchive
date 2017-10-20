---
layout: page
title: "Q223997: Logon Attempt Does Not Work on New Installation of Windows NT"
permalink: /kb/223/Q223997/
---

## Q223997: Logon Attempt Does Not Work on New Installation of Windows NT

{% raw %}

	Article: Q223997
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: The hotfix described in this article must be applied to Windows NT
	Workstation, Windows NT Server, or Windows NT Server, Enterprise Edition during
	the update to Windows NT 4.0 Service Pack 4 or Service Pack 5. This hotfix is
	not compatible with computers running an earlier service pack.
	
	The following problem may occur when you are updating to a service pack
	immediately after you initially install Windows NT. This problem may also occur
	during the next logon attempt to a computer if its account is deleted from and
	then added to the domain again.
	
	When you attempt to log on to a computer on which you just installed Windows NT,
	the following error message may be displayed:
	
	  The system cannot log you on because the system's computer account in it's
	  primary domain is missing or the password on that account is incorrect.
	
	CAUSE
	=====
	
	This problem is caused by Netlogon.dll on the client computer. The update
	created to correct the problem must be installed on the client computer.
	
	When a Windows NT-based computer joins a domain during installation or a computer
	is added to the domain (or is re-added), a machine account is created on the
	primary domain controller (PDC). If the PDC is running Windows NT 4.0 Service
	Pack 4 or later, the new account is not replicated to backup domain controllers
	(BDCs) until the next scheduled Netlogon replication interval. Prior to Service
	Pack 4, the PDC would replicate all machine account updates immediately. When a
	domain user logs on or an auto-logon to the domain is performed, the client
	computer establishes a session with either the PDC or one of the BDCs. If a BDC
	does not have the computer account in its database, it will return "User
	Unknown" response to the client computer logon request. Upon receiving this
	response, the client computer stops processing the logon request and displays
	the above message.
	
	NOTE: The default Netlogon replication pulse is five minutes, but is
	configurable. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q142692 Minimizing WAN Traffic
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size      File name      Platform
	  ----------------------------------------------------
	  04/28/99  05:41p   188,176   Netlogon.dll   x86
	  04/27/99  05:38p   310,544   Netlogon.dll   Alpha
	
	
	NOTE: There is also a version of this hotfix that replaces the Netlogon.dll file
	that is included with Windows NT 4.0. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q243643 Logon Attempt Does Not Work After New Windows NT Installation
	
	You must use both updates to fully correct the problem described in this article.
	The changes in both versions allow the client computer to continue processing
	logon responses until it receives a valid response or until a time-out occurs.
	The time-out period is related to several factors, but is typically three to
	five seconds. The error message is displayed if a time-out occurs and a valid
	logon response has not been received by the client.
	
	This hotfix is typically applied to systems during the update to either Service
	Pack 4 or Service Pack 5. If you need to install this hotfix after one of these
	service packs is already installed, follow the "Automatic Installation"
	instructions in the Readme.txt file included with the hotfix.
	
	When you install the hotfix at the same time as a service pack, you need to
	modify the folder containing the service pack files. In this case, you must use
	over-the-network installations or installations that pre-copy the files to the
	local hard disk. You cannot use the hotfix when installing the service pack from
	a standard Windows NT CD-ROM or Windows NT service pack CD-ROM.
	
	To install the hotfix along with the service pack update, use the following
	steps:
	
	1. In the appropriate platform service pack installation folder (I386 or Alpha),
	  create a subfolder called "Hotfix."
	
	2. Copy the following files from this update into the Hotfix folder:
	
	   - Hotfix.exe
	
	   - Hotfix.inf
	
	   - Netlogon.dll
	
	3. Run Update.exe to install the service pack. Update.exe automatically calls
	  Hotfix.exe when it is finished to install the updated Netlogon.dll file.
	
	NOTE: When you use this method, an uninstallation folder is not created for this
	hotfix.
	
	WORKAROUND
	==========
	
	You can use one of the following methods to work around this problem:
	
	- Add all computer accounts prior to installing Windows NT on the computers,
	  making sure that the entire domain is synchronized before continuing with
	  installation.
	
	- Use an LMHOST file that has a #PRE #DOM entry with the primary domain
	  controller's IP address specified.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0.
	
	Additional query words: announce immediate
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
