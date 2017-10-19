---
layout: page
title: "Q271071: Minimum NTFS Permissions Required for IIS 5.0 to Work"
permalink: /kb/271/Q271071/
---

## Q271071: Minimum NTFS Permissions Required for IIS 5.0 to Work

	Article: Q271071
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article lists the minimum NTFS access permissions that are needed for an
	IIS 5.0 Web site. When IIS is installed, it should already have the proper NTFS
	access permissions for the default Web site and the default FTP site. There are
	a number of different folders that need the correct NTFS permissions. Incorrect
	settings on any one of these can cause one or more of the following errors:
	
	In the Web browser:
	
	  You are not authorized to view this page
	  You do not have permission to view this directory or page using the
	  credentials you supplied.
	
	  HTTP 401.3 - Access denied by ACL on resource Internet Information Services
	
	-or-
	
	In the Web browser:
	
	  Server Application Error
	  The server has encountered an error while loading an application during the
	  processing of your request. Please refer to the event log for more detailed
	  information. Please contact the server administrator for assistance.
	
	In the system log:
	
	  Event Type: Warning
	  Event Source: W3SVC
	  Event Category: None
	  Event ID: 36
	  Date: 3/5/2001
	  Time: 9:59:40 AM
	  User: N/A
	  Computer: MACHINE-NAME
	  Description:
	  The server failed to load application '/LM/W3SVC/5/Root'. The error was
	  'General access denied error'.
	  For additional information specific to this message please visit the Microsoft
	  Online Support site located at:
	  http://www.microsoft.com/contentredirect.asp.
	
	  Event Type: Error
	  Event Source: DCOM
	  Event Category: None
	  Event ID: 10001
	  Date: 3/5/2001
	  Time: 9:59:40 AM
	  User: NT AUTHORITY\SYSTEM
	  Computer: MACHINE-NAME
	  Description:
	  Unable to start a DCOM Server: {99169CB1-A707-11D0-989D-00C04FD919C1} as
	  ./IWAM_MACHINE-NAME. The error: "Access is denied. " Happened while starting
	  this command: C:\WINNT\System32\dllhost.exe
	  /Processid:{3D14228D-FBE1-11D0-995D-00C04FD919C1}
	
	-or-
	
	In the Web browser:
	
	  Error: Access is Denied.
	
	In the system log:
	
	  Event Type: Warning
	  Event Source: W3SVC
	  Event Category: None
	  Event ID: 30
	  Date: 3/5/2001
	  Time: 10:01:13 AM
	  User: N/A
	  Computer: MACHINE-NAME
	  Description:
	  The server was unable to read the file C:\WINNT\help\iisHelp\common\401-3.htm.
	  The file does not exist. For additional information specific to this message
	  please visit the Microsoft Online Support site located at:
	  http://www.microsoft.com/contentredirect.asp.
	
	CAUSE
	=====
	
	NTFS permissions have been changed from the default settings and are no longer
	sufficient for IIS 5.0 to run properly.
	
	RESOLUTION
	==========
	
	NOTE: Following the steps in this article restricts permissions so that only
	Administrators are able to install or run software on the IIS 5.0 computer.
	After you reset the permissions as specified in this article, it may be
	necessary to perform a Check Server Extensions task for each Web site through
	Internet Service Manager. This step is necessary in order for FrontPage clients
	to be able to connect by using the HTTP protocol.
	
	Using Windows Explorer, follow these steps:
	
	1. Reset the entire hard drive to the following:
	
	  SYSTEM - Full Control
	  ADMINISTRATORS - Full Control
	
	To do this, click Advanced and select Reset permissions on all child objects and
	enable propagation of inheritable permissions.
	
	NOTE: You will receive an error message when you attempt to apply permissions to
	the Pagefile.sys file. Click Continue for this and any similar error messages.
	
	2. For Program Files\Common Files, add Everyone and select Read & Execute,
	  List Folder Contents, and Read.
	
	NOTE: Do not clear the Allow inheritable permissions from parent to propagate to
	this object check box.
	
	3. For Inetpub\Wwwroot, add IUSR_MACHINE and select Read & Execute, List
	  Folder Contents, and Read.
	
	NOTE: Do not clear the Allow inheritable permissions from parent to propagate to
	this object check box.
	
	4. In the Winnt\System32 folder, select all folders except Inetsrv and Certsrv
	  if these are present.
	
	Open the Properties sheet for these folders and clear Allow inheritable
	permissions from parent to propagate to this object. In the dialog box that
	appears, click Copy. Click OK to exit the Properties sheet.
	
	5. In the Winnt folder, select all folders except Downloaded Program Files,
	  Help, IIS Temporary Compressed Files, Offline Web Pages, System32, Tasks,
	  Temp, and Web.
	
	Open the Properties sheet for these folders and clear Allow inheritable
	permissions from parent to propagate to this object. In the dialog box that
	appears, click Copy. Click OK to exit the Properties sheet.
	
	6. For Winnt, add Everyone and select Read & Execute, List Folder Contents,
	  and Read.
	
	NOTE: Do not clear the Allow inheritable permissions from parent to propagate to
	this object check box.
	
	7. For Winnt\Temp (this allows Access databases to be viewed on ASP pages),
	  select the Everyone group (this group should already be present by inheriting
	  from the Winnt folder) and select Modify.
	
	MORE INFORMATION
	================
	
	Although permissions can be specialized to fit each system administrator?s
	needs, it is best that you use the Everyone group instead of the IUSR_MACHINE
	account:
	
	The Everyone group encompasses the Users group, the IUSR_MACHINE account, and the
	IWAM_MACHINE account.
	
	IIS 5.0 uses two separate accounts to execute Web pages. When anonymous
	authentication is used, IIS uses the IUSR_MACHINE account to view those pages.
	However, IWAM_MACHINE is used to start up a separate process called Dllhost.exe.
	All Active Server Pages (ASP), Component Object Model (COM) components, or other
	ISAPI extensions (ASP is considered an ISAPI extension) are run inside the
	Dllhost.exe process. This is primarily for stability purposes. If a custom COM
	component that is called from an ASP page crashes (that is, causes an access
	violation that stops the process), it does not affect Inetinfo.exe, so the Web
	service continues to run.
	
	The two protection levels in IIS 4.0 are as follows:
	
	- Default: IIS 4.0 runs all applications in-process (that is, inside the
	  Inetinfo.exe process), which is started up by the SYSTEM account. When Web
	  pages are viewed, the particular thread that is serving the page is run under
	  the context of the IUSR_MACHINE account. HTM, ASP and any other ISAPI
	  extensions are run inside the Inetinfo.exe process.
	
	- Run in Separate Memory Space (Isolated Process): This is also known as
	  out-of-process. This uses the IWAM_MACHINE account to spawn a separate
	  Mtx.exe process that runs ASP and other ISAPI extensions.
	
	The three protection levels in IIS 5.0 are as follows:
	
	- Low (IIS Process): This setting is similar to the default setting under IIS
	  4.0. All Web pages, whether HTM or ASP, are run inside the Inetinfo.exe
	  process.
	
	- Medium (Pooled): This is the default. As with IIS 4.0, this setting starts a
	  separate process called Dllhost.exe in which all ASP and COM components are
	  run. This process is started by the IWAM_MACHINE account just as in IIS 4.0.
	  Also, this setting is known as pooled because all Web sites that are running
	  in IIS share this single Dllhost.exe for executing ASP pages. Note that
	  Windows 2000 replaces Mtx.exe with Dllhost.exe.
	
	- High (Isolated): This setting starts a dedicated Dllhost.exe process for each
	  Web site or application. If you have 5 Web sites, each set on High
	  protection, you see a total of six Dllhost.exe processes: five Dllhost.exe
	  processes plus one additional Dllhost.exe process that COM+ starts under the
	  System Application.
	
	REFERENCES
	==========
	
	For additional information on how to restore default NTFS permissions for
	Windows 2000, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q266118 How to Restore the Default NTFS Permissions for Windows 2000
	
	Additional query words: iis 5 NTFS permission
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
