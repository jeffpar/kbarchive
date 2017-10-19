---
layout: page
title: "Q174488: PRB: App Generates Run-Time Error 3633 When Run on New Machine"
permalink: /kb/174/Q174488/
---

## Q174488: PRB: App Generates Run-Time Error 3633 When Run on New Machine

	Article: Q174488
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building setup disks for a Jet-based database application with the Setup
	Wizard, the Setup Wizard doesn't include the Microsoft Jet database engine
	files. When you install the application and try to run it, you get the following
	error:
	
	  Run-time error '3633':
	  Can't load DLL 'MSJET35.DLL'
	
	CAUSE
	=====
	
	The Setup Wizard doesn't know to add the Microsoft Jet database engine if you
	are using the Microsoft DAO 2.5/3.5 Compatibility Library instead of the
	Microsoft DAO 3.5 Object Library.
	
	RESOLUTION
	==========
	
	Use one of the two following methods to resolve this problem:
	
	Method 1
	--------
	
	1. Open the project and on the Project menu, click References.
	
	2. Clear the Microsoft DAO 2.5/3.5 Compatibility Library and select the
	  Microsoft DAO 3.5 Object Library.
	
	3. Click OK.
	
	4. Save the project.
	
	5. Return to References, switch the object libraries back again (that is, do the
	  reverse of what was instructed in step 2 above), and resave the project.
	
	6. In the Setup Wizard - ActiveX Server Components pane of the Setup Wizard,
	  click Add Local, and add MSJET35.DLL from your Windows\System directory
	  (Windows 95) or Windows\System32 directory (Windows NT). This process adds
	  the Microsoft Jet 3.5 database engine and its supporting files.
	
	NOTE: Adding MSJET35.DLL does not resolve the problem if the project has never
	had a reference to the Microsoft DAO 3.5 Object Library.
	
	Method 2
	--------
	
	Use the Microsoft DAO 3.5 Object Library instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new application and add a reference to the Microsoft DAO 2.5/3.5
	  Compatibility Library.
	
	2. Create setup disks using the Setup Wizard.
	
	3. Install the application on a new machine (that does not already have Jet
	  installed).
	
	4. Run the application and note the error message.
	
	5. Repeat the above steps, but add a reference to the Microsoft DAO 3.5 Object
	  Library. The application should run correctly.
	
	Examine the SETUP.LST file of the second application and note that it includes
	the following required files that the first application does not include:
	
	  MSJET35.DLL
	  VBAJet32.dll
	  VB5DB.dll
	
	Additional query words: distribution
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
