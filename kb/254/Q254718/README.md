---
layout: page
title: "Q254718: IIS &quot;Bytes Sent&quot; (Sc-bytes) Logging Property is 0 for ASP Files"
permalink: /kb/254/Q254718/
---

## Q254718: IIS &quot;Bytes Sent&quot; (Sc-bytes) Logging Property is 0 for ASP Files

	Article: Q254718
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For ASP files, the Sc-bytes extended logging property is always zero.
	
	CAUSE
	=====
	
	ASP buffering is enabled.
	
	WORKAROUND
	==========
	
	If both the logic of the ASP file and the display of the page allow buffering to
	be disabled, then turn off ASP buffering.
	
	For additional information about turning off buffering in IIS 5.0, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q245198 Response.Buffer is ON by Default in IIS 5.0
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in IIS 5
	------------------------------------
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click a Web site that contains at least one .asp file, and then click
	  Properties on the Context menu.
	
	3. On the Web Site tab, verify that Enable Logging has a check mark, and then
	  click Properties.
	
	4. Click the Extended Properties tab, and then click check the "Bytes Sent (
	  sc-bytes )" check box.
	
	5. Click OK to return to the Properties dialog box, and then click the Home
	  Directory tab.
	
	6. In the Application Settings section, click Configuration.
	
	7. Click the App Options tab, and verify that the Enable buffering check box has
	  a check mark.
	
	8. Click OK twice to return to the IIS snap-in.
	
	9. Browse to a .asp file on the Web site.
	
	10. Open the log file for the Web site (typically located in the
	  %WinDir%\System32\LogFiles directory), and note that the sc-bytes property,
	  shows "0" bytes.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 4 empty not recorded Server - Client bytes active pages akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
