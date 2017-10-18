---
layout: page
title: "Q234317: FIX: HTML Truncated with VS SP3 WebClass Run Time in VB IDE"
permalink: kb/234/Q234317/
---

## Q234317: FIX: HTML Truncated with VS SP3 WebClass Run Time in VB IDE

	Article: Q234317
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbWebClasses kbGrpDSASP kbVS600sp3bug kbDSupport kbVS600sp4fix
	Last Modified: 06-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use tag replacement within a WebClass template, you may notice that,
	after upgrading to Visual Studio 6.0 Service Pack 3, not all of the tag text and
	HTML template text gets sent back to the browser. To determine if this problem
	is occurring, right-click on the resulting HTML page in your browser and select
	View Source. If you do not see an end </HTML> tag, then most likely you
	are encountering this problem.
	
	This occurs only under one of the following scenarios:
	
	- You are running the WebClass in the Visual Basic 6.0 IDE.
	
	- You are running the WebClass in production if the template cache is turned
	  off (the template cache is turned on by default, so this is not a likely
	  scenario).
	
	This behavior does not occur if you have a pre-existing WebClass site and you
	upgrade the server to the new runtime. This is because the template cache is
	turned on by default. Upgrade to the new run time by installing Visual Studio
	Service Pack 3.
	
	RESOLUTION
	==========
	
	You need to roll back to the previous version of the WebClass run time on
	computers where you use the Visual Basic 6.0 IDE while running your WebClasses.
	Follow these steps to do so:
	
	1. Unregister Mswcrun.dll version 6.00.8450 by running the following command in
	  the Run dialog box on the Start menu:
	
	  regsvr32.exe /u "<driveletter>:\Program Files\Common Files\Designer\mswcrun.dll"
	
	2. Replace Mswcrun.dll version 6.00.8450 with version 6.00.8169. You can find
	  the 6.00.8169 version of the WebClass runtime on Disk 1 in the Os\System
	  folder of your Visual Studio 6.0 or Visual Basic 6.0 CDs.
	
	  NOTE: If you get a sharing violation when replacing the WebClass run time,
	  stop and start the iisadmin service before attempting to replace the file.
	
	3. Register Mswcrun.dll version 6.00.8169 by running the following command in
	  the Run dialog box on the Start menu:
	
	  regsvr32.exe "<driveletter>:\Program Files\Common Files\Designer\mswcrun.dll"
	
	If you aren't running your WebClass application in the Visual Basic 6.0 IDE (on a
	production computer), you do not need to rollback to the previous version of the
	WebClass run time unless you are planning to turn the template cache off. The
	template cache is turned on by default with a default value of 65 (hex) or 101
	(decimal).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	REFERENCES
	==========
	
	Please see the following article in the Microsoft Knowledge Base for more
	information regarding the new WebClass template cache feature:
	
	  Q234344 INFO: Template Cache Added in WebClasses for Visual Studio Service
	  Pack 3
	
	Additional query words: TagContents ProcessTag sp4
	
	======================================================================
	Keywords          : kbVBp600 kbWebClasses kbGrpDSASP kbVS600sp3bug kbDSupport kbVS600sp4fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
