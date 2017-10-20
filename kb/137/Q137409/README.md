---
layout: page
title: "Q137409: FIX: Group Name w/ More Than 30 Characters Causes Setup Error"
permalink: /kb/137/Q137409/
---

## Q137409: FIX: Group Name w/ More Than 30 Characters Causes Setup Error

{% raw %}

	Article: Q137409
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter a Program Manager Group name that contains more than 30 characters
	in step 5 of the Setup Wizard, you will receive the following error message when
	you try to install your application using the setup program the Setup Wizard
	makes:
	
	  Object ID 243 AddProgmanItem Object: Bad Group Name data field
	
	CAUSE
	=====
	
	Windows 3.x, Windows 95, and Windows NT limit Program Manager Group names to a
	maximum of 30 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	If you are not familiar with creating .exe files or the Setup Wizard, please see
	the Professional Features Guide, Chapters 9 and 10.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new project, and then click the Code tab.
	
	2. Right-click Programs, and then click New.
	
	3. Enter the following in the new program, and save it.
	
	  " =messagebox("This is a test") " (without the quotation marks)
	
	4. Right-click any one of the tabs, and click Build.
	
	5. In the Build Options dialog box, click Build Executable, and click OK.
	
	6. When the .exe file is built, close the project, and run the Setup Wizard.
	
	7. In Step 5 of the Setup Wizard, type the following as the Program Manager
	  Group name:
	
	  " 1234567890123456789012345678901 " (without the quotation marks)
	
	8. Finish running the Setup Wizard, and then exit Visual FoxPro.
	
	9. Run the Setup.exe file that the Setup Wizard made.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
