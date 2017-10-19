---
layout: page
title: "Q253204: PRB: Err Msg: The Server Was Unable to Logon the Windows NT..."
permalink: /kb/253/Q253204/
---

## Q253204: PRB: Err Msg: The Server Was Unable to Logon the Windows NT...

	Article: Q253204
	Product(s): Internet Information Server
	Version(s): WINDOWS:; winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin2000 kbServer kbWebServer kbDSupport kbiis300 kbiis400 kbiis500
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The event log may contain the warning:
	
	  The server was unable to logon the Windows NT account
	  'IUSR_<machinename>' due to the following error: Logon failure: unknown
	  user name or bad password. The data is the error code.
	  For additional information specific to this message please visit the Microsoft
	  Online Support site located at: http://www.microsoft.com/contentredirect.asp.
	
	CAUSE
	=====
	
	Internet Information Server (IIS) attempted to use the Windows NT account
	specified in the Internet Service Manager and was unable to log on with the
	specified account and password.
	
	RESOLUTION
	==========
	
	By default, the anonymous account used by Internet Information Server is the
	IUSR_<machinename> account, where <machinename> is the name of the
	computer. To ensure that IIS is using a valid account and password:
	
	1. Open the Internet Services Manager, right-click the *<machinename> node
	  and select Properties.
	
	2. Click the Edit button next to the WWW Service to display the master
	  properties for the computer.
	
	3. On the Directory Security tab, click Edit in the Anonymous access and
	  authentication control frame. The Anonymous User Account dialog box will
	  appear. Note the account name that IIS is attempting to use for anonymous
	  HTTP requests. Ensure that this account name exists in the Windows NT User
	  Manager for Windows NT 4.0 or the Computer Management Console for Windows
	  2000.
	
	4. If the Allow IIS to Control Password (in Windows 2000) or Enable Automatic
	  Password Synchronization (in Windows NT 4) is selected in the Internet
	  Anonymous User Account dialog box, then IIS will control the password for
	  that account and will set it to a random value. If the anonymous account was
	  missing from the Windows NT User Manager, then restoring the account and
	  ensuring that IIS has permission to set/control the password is usually
	  sufficient to allow IIS to use the account. Always restart IIS after making
	  changes to the anonymous account or password.
	
	5. If you continue to receive the event viewer error, then clear Allow IIS to
	  Control Password (Windows 2000) or Enable Automatic Password Synchronization
	  (Windows NT 4), and manually set the password to a known value in both the
	  Internet Service Manager and the User Manager for Windows.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin2000 kbServer kbWebServer kbDSupport kbiis300 kbiis400 kbiis500 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbiis400 kbiis300 kbPersWebServSearch kbWinAdvServSearch kbZNotKeyword3 kbPersWebServ400NTW400
	Version           : WINDOWS:; winnt:3.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
