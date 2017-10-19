---
layout: page
title: "Q182367: Possible to Circumvent ZAK Using Explorer.exe as Embedded Object"
permalink: /kb/182/Q182367/
---

## Q182367: Possible to Circumvent ZAK Using Explorer.exe as Embedded Object

	Article: Q182367
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT using the Zero Administration Kit (ZAK) with a
	desktop setup that does not permit users to launch Windows NT Explorer, you can
	still gain access to Windows NT Explorer when in a Microsoft Office application.
	This is achieved by inserting an object into the document and typing in the path
	and file name from the import box.
	
	CAUSE
	=====
	
	The Explorer.exe file has Read & Execute (RX) special permissions, which
	enable the folder to be opened from within the application. The file is first
	read before it can be run. These permissions are set during the ZAK install when
	Acls.cmd is run.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Read (R) special permission from the Everyone
	Group. If the file cannot be read, it cannot be run. However, you must retain
	the Execute (X) special permission so that Explorer remains as the active
	desktop. Use one of the following methods.
	
	Method One
	----------
	
	1. Start Explorer and locate Explorer.exe in the %SystemRoot% folder.
	
	2. Right-click the executable file and select Properties.
	
	3. Select the Security tab from the Properties window and click the Permissions
	  button.
	
	4. Double-click the Everyone Group and view the Special Access dialog box.
	
	5. Remove (clear) the Read(R) attribute and confirm the changes.
	
	Method Two
	----------
	
	Edit Acls.cmd and change the following line from:
	
	     cacls.exe explorer.exe /t /e /g everyone:r
	
	to:
	
	     xcacls.exe explorer.exe /t /e /p everyone:x
	
	where:
	
	  xcacls is used because special permissions are being set
	  /p is used to replace existing permission
	  x is used to grant execute permission
	
	NOTE: xcacls is a resource kit utility and should be accessible through the path
	or referenced explicitly.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q170400
	  TITLE : Unauthorized Program Can Be Installed and Run on ZAK Workstation
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: Office Word Excel
	======================================================================
	Keywords          :  
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
