---
layout: page
title: "Q301289: BUG: VSS 6.0 Appears to &quot;Hang&quot; When Establishing Working Folder"
permalink: kb/301/Q301289/
---

## Q301289: BUG: VSS 6.0 Appears to &quot;Hang&quot; When Establishing Working Folder

	Article: Q301289
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances Visual SourceSafe appears to stop responding ("hang" or
	"lock up") when establishing a working folder. (There are a variety of ways to
	reproduce this condition.)
	
	RESOLUTION
	==========
	
	Press the "escape" key (ESC) on your keyboard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Scenario 1 - Using the "Get" Command from the History Window:
	
	1. Open or switch to Visual SourceSafe 6.0.
	
	2. Create a new project and add a file to it. Choose not to set a working folder
	  if prompted.
	
	3. Select the file, right-click it, and click Show History from the pop-up menu.
	  Click OK in the History Options dialog box to open the History window.
	
	4. Click the Get button in the History window. A window appears asking if you
	  want to set a working folder. Click OK.
	
	5. Click Create Folder in the Set Working Folder window. A dialog appears
	  stating that the folder already exists. Click OK.
	
	Note that you are now back at the Set Working Folder window but that you cannot
	access any of the controls of that window with either the mouse or the keyboard.
	If you switch to another application, you are not able to switch back to Visual
	SourceSafe by pressing ALT+TAB or using the mouse or Windows Task Manager. The
	only way to return to Visual SourceSafe is by clicking on Visual SourceSafe on
	the task bar. Visual SourceSafe appears to have stopped responding at this
	point.
	
	Scenario 2 - Using the "CheckOut" Command from the History Window:
	
	1. Open or switch to Visual SourceSafe 6.0. Open a database that has Multiple
	  CheckOuts enabled.
	
	2. Create a new project and add a file to it. Choose not to set a working folder
	  if prompted.
	
	3. Select the file, right-click it, and then click Show History from the pop-up
	  menu. Click OK in the History options dialog box to open the History window.
	
	4. Click CheckOut in the History window. A dialog box appears asking if you want
	  to set a working folder. Click OK.
	
	5. Click the Create Folder command button in the Set Working Folder window. A
	  dialog box appears stating that the folder already exists. Click OK.
	
	Note that you are now back at the Set Working Folder window, but that you cannot
	access any of the controls of that window by using either the mouse or the
	keyboard. Note also that if you switch to another application, you cannot return
	to Visual SourceSafe by pressing ALT+TAB or using the Windows Task Manager or
	the mouse. The only way to return to Visual SourceSafe is by clicking Visual
	SourceSafe on the task bar. Visual SourceSafe appears to have stopped
	responding.
	
	Scenario 3 - Using the CheckOut Command from the Visual SourceSafe Explorer:
	
	1. Open or switch to Visual SourceSafe 6.0.
	
	2. Create a new project and add a text file to it.
	
	3. Label the project.
	
	4. Edit the file that you added in step 2, and then check it in.
	
	5. Select the project, right-click it, and then click Show History from the
	  pop-up menu. Select the label and click the Share button. Select $/ in the
	  Share From dialog box and click OK.
	
	6. Type a new project name in the Share dialog box and click OK. Close the
	  History window.
	
	7. Select the file in the new shared project created in step 6. Note that if you
	  did everything correctly this file is now pinned at the same version as the
	  label in step 3.
	
	8. Attempt to check out the file. A dialog appears asking if you want to set a
	  working folder. Click OK.
	
	9. Click Create Folder in the Set Working Folder window. A dialog appears
	  stating that the folder already exists. Click OK.
	
	Note that you are now back at the Set Working Folder window, but that you cannot
	access any of the controls of that window by using either the mouse or the
	keyboard. Note also that if you switch to another application, you cannot return
	to Visual SourceSafe by using ALT+TAB, the Windows Task Manager, or the mouse.
	The only way to return focus to Visual SourceSafe is by clicking on Visual
	SourceSafe on the task bar. Visual SourceSafe appears to have stopped
	responding.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
