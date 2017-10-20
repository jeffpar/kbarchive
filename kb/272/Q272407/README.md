---
layout: page
title: "Q272407: PATCH: Access Violation in VB Snap-in Designer Run Time DLL"
permalink: /kb/272/Q272407/
---

## Q272407: PATCH: Access Violation in VB Snap-in Designer Run Time DLL

{% raw %}

	Article: Q272407
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbMMC kbVBp600 kbGrpDSPlatform kbDSupport
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft Visual Basic Snap-in Designer to create a snap-in with
	listpads in the result pane, you may receive the following error message when
	you click from one node to another:
	
	  Runtime Error!
	
	  Program c:\win2000\system32\mmc.exe abnormal program termination.
	
	In addition to this error message, a blank or frozen result pane may be
	displayed, and then the run-time error message or an access violation may be
	reported when the Microsoft Management Console (MMC) file is closed.
	
	MORE INFORMATION
	================
	
	The Mssnapr.exe patch was created to resolve this problem. Please replace the
	Mssnapr.dll file in your platform SDK directory tree with the one supplied with
	this patch.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Mssnapr.exe
	  (http://download.microsoft.com/download/vb60ent/Patch/1/WIN98/EN-US/)
	
	Release Date: Sept. 8, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Mssnapr.exe (or File.hqx) file contains the following file:
	
	+-----------------------+
	| File name   | Size    | 
	+-----------------------+
	| Mssnapr.dll | 717,312 | 
	+-----------------------+
	
	
	Additional query words: Mssnapr snap-in snap in list pads
	
	======================================================================
	Keywords          : kbfile kbMMC kbVBp600 kbGrpDSPlatform kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	
	=============================================================================
	

{% endraw %}
