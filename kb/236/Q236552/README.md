---
layout: page
title: "Q236552: MOD2000: Errors When Clicking Get in Get Object from SourceSafe"
permalink: kb/236/Q236552/
---

## Q236552: MOD2000: Errors When Clicking Get in Get Object from SourceSafe

	Article: Q236552
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta modSSafe
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you click Get in the Get Object from SourceSafe dialog box, you may receive
	the following error message:
	
	  Run-time error '-2147220504 (800403e8)':
	  76: Path not found
	
	NOTE: The numbers in this error message may vary.
	
	This is followed by the error message:
	
	  Automation error
	
	After you see these error messages, you cannot use Visual SourceSafe from within
	the Visual Basic Editor.
	
	When you close the Visual Basic Editor's host application, you receive an error
	message similar to:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  EXCEL caused an invalid page fault in module unknown at 0000:004a6507.
	
	NOTE: The actual memory address may vary.
	
	  -or-
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  EXCEL.exe
	  Exception: access violation (0xc0000005), Address: 0x001ce08f
	
	NOTE: The actual memory address may vary.
	
	CAUSE
	=====
	
	You receive one or more of these error messages when you click Get in the Get
	Object from SourceSafe dialog box while the root directory is selected.
	
	RESOLUTION
	==========
	
	After you receive the error messages, you must restart Windows.
	
	To prevent these error messages, make sure the root folder is not selected when
	you click Get in the Get Object from SourceSafe dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Microsoft Excel.
	
	2. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	3. On the File menu, click Save <projectname>.
	
	4. On the Add-ins menu, point to VBA Source Code Control, and then click Add
	  Project to SourceSafe.
	
	5. If the Visual SourceSafe Login dialog box appears, type a valid user name and
	  password, and then click OK.
	
	6. In the "Create a new project in the folder" box, type "vsserror" (without the
	  quotation marks), and click OK (also click Yes if prompted to create the new
	  project).
	
	7. In the File Type list, click All. Click to select all the files in the "Files
	  to be checked in" list, and then click OK.
	
	8. On the Add-ins menu, point to VBA Source Code Control, and then click Get
	  Object from SourceSafe.
	
	9. In the Get Object from SourceSafe dialog box, select the root folder. Click
	  Get.
	
	Additional query words: pra ipf gpf directory
	
	======================================================================
	Keywords          : kbdta modSSafe 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
