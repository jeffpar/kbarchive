---
layout: page
title: "Q163026: FIX: OLE Automation with MS Project Depletes User Resources"
permalink: /kb/163/Q163026/
---

## Q163026: FIX: OLE Automation with MS Project Depletes User Resources

{% raw %}

	Article: Q163026
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 4.10a 5.00
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp600fix
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing an OLE automation task or tasks from Visual FoxPro using Microsoft
	Project as the server may result in a depletion of the User resource heap under
	Windows 95. The extent of depletion depends on the duration of the automation
	task. During the course of the automation calls, the User heap gradually falls
	by 1 to 2 percent at a time.
	
	If the task completes before the User resources are completely depleted, the
	resources are restored. However, if the duration of the task is sufficiently
	long, the User heap may be completely depleted. At this point, a Windows 95
	dialog box appears, saying, "Ninety percent or more of your system resources are
	in use. To free up system resources, quit any programs that you are not using.
	If you do not, your computer may stop responding." If you do not end the MS
	Project task, Project, Visual FoxPro, or Windows 95 may stop responding.
	
	RESOLUTION
	==========
	
	Depending upon available memory, the OLE automation call from Visual FoxPro to
	MS Project may work successfully under Windows NT. Under the NT operation
	system, resources are dynamically allocated, and if sufficient memory is
	available, the automation call may proceed to completion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create or use a Microsoft Project 4.1a project file. Make sure it contains at
	  least 5000 tasks.
	
	2. Start Resource Meter in Windows 95. If it is installed, click the Start menu,
	  Programs, Accessories, and System Tools. If it is not installed, you can
	  install it by clicking Add/Remove Programs in the Control Panel. Click the
	  Windows Setup tab and select the Resource Meter check box.
	
	3. Run the following code from a program (.prg) file within Visual FoxPro 3.0 or
	  5.0:
	
	        *Beginning of program code
	        abc = CREATEOBJECT('msproject.Application.4_1')
	        abc.fileopen("<MS Project project file name>")
	        abc.displayalerts = .F.
	        abc.displaywizarderrors = .F.
	        abc.displayschedulemessages = .F.
	        abc.calculation = .T.
	        abc.calculateall()
	        abc.LevelingOptions(.F., .F., .T., 0)
	
	        WAIT WINDOW 'Leveling ...' NOWAIT
	
	        abc.levelnow
	        * End of program code
	
	4. Click on Resource Meter in the Windows 95 taskbar to make Resource Meter
	  visible. The User and System resource graphs will gradually dwindle. (System
	  resource shows the same value as the lesser of User and GDI, and as User
	  falls below GDI, System will follow User.)
	
	NOTES:
	
	- If the levelnow automation call completes before the User resource falls
	  below about 10 percent, it completes without a problem.
	
	- If the User resource does fall below 10 percent or so, the error described in
	  SYMPTOMS appears. Using CTRL+ALT+DEL to bring up the Windows 95 task list
	  shows MS Project as "Not responding." If the task is ended, and the error
	  generated upon returning to Visual FoxPro is canceled or ignored, the User
	  and System resources are freed. At this point, the percent free is at or near
	  the level before the automation call was made.
	
	- If the automation call is made from Excel through the following Visual Basic
	  for Applications (VBA) code called from a macro, the resource depletion does
	  not occur:
	
	        'Begin Excel Macro code
	        Dim abc As Object
	        Set abc = CreateObject("msproject.Application.4_1")
	        abc.fileopen "<MS Project project file name>"
	        abc.DisplayAlerts = False
	        abc.displaywizarderrors = False
	        abc.displayschedulemessages = False
	        abc.Calculation = False
	        abc.calculateall
	        abc.LevelingOptions False, False, True, 0
	
	        abc.levelnow
	
	        'End Excel Macro code
	
	Additional query words: 4.10a
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : 3.00 3.00b 4.10a 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
