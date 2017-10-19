---
layout: page
title: "Q189849: Setting up Windows 98 Client on SBS May Result in GP Fault"
permalink: /kb/189/Q189849/
---

## Q189849: Setting up Windows 98 Client on SBS May Result in GP Fault

	Article: Q189849
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0,4.0a;Windows:98
	Operating System(s): 
	Keyword(s): win98
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up the client disk on a computer running Windows 98, you may
	receive a general protection fault (GP fault) error message in Setup.exe from
	source IPDETECT while installing the networking options.
	
	CAUSE
	=====
	
	This problem occurs if the following options are not installed:
	
	- TCP/IP
	
	- File and Print Sharing for Microsoft Networks
	
	- Client Services for Microsoft Networks
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Make sure you have the TCP/IP protocol installed with no other protocols
	  installed.
	
	- Make sure the File and Print Sharing for Microsoft Networks service is
	  installed.
	
	- Remove the Microsoft Family logon service.
	
	- Add Client Services for Microsoft Networks
	
	After you set up all of these options, restart the computer running Windows 98
	and rerun the client setup disk.
	
	If your setup attempt does not work and you have checked the above information
	(and the client applications still do not install correctly), perform the
	following on the server:
	
	1. In Manager Server Console, click More Task, and then click Manage Computers.
	
	2. Select the Windows 98 computer you are installing.
	
	3. Click Add software.
	
	4. Select the user that will be using this computer.
	
	5. Select all the applications you would like to install.
	
	6. Log off the client computer and log back on as the user. The client
	  application should install correctly now.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time       Size      File name      Platform
	  --------------------------------------------------------
	  08/19/99   1:34 PM    105,824   Ipdetect.exe   x86
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft BackOffice Small
	Business Server 4.0 and 4.0a and Microsoft Windows 98.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : win98 
	Technology        : kbOSWin98 kbAudDeveloper kbOSWinSearch kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a;Windows:98
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
