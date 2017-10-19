---
layout: page
title: "Q162965: ODE97: &quot;Setup Error 993&quot; Reinstalling MS ODE Tools Sampler"
permalink: /kb/162/Q162965/
---

## Q162965: ODE97: &quot;Setup Error 993&quot; Reinstalling MS ODE Tools Sampler

	Article: Q162965
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you reinstall the Microsoft Office Developer Sampler (Microsoft ODE Tools
	Sampler) that ships with Microsoft Office 97 Developer Edition, you may receive
	the following error message:
	
	  Setup Error 993
	  Object 79
	  Your Setup file may be damaged. Try restarting the Setup program.
	
	When Setup is finished, you have a new shortcut called Developer Studio in the
	Microsoft ODE Tools program group, which is a shortcut to My Computer.
	
	CAUSE
	=====
	
	The error occurs when the Setup program tries to recreate the shortcut for
	Microsoft ODE Tools Sampler.
	
	RESOLUTION
	==========
	
	Setup is completed successfully even though you receive an error message;
	therefore, you do not need to take any action. The only way to reinstall the
	Microsoft ODE Tools Sampler without receiving the error message is to run the
	Setup program, click Remove All, and then run Setup again to reinstall Microsoft
	ODE Tools Sampler.
	
	You can remove the Developer Studio icon from the Microsoft ODE Tools program
	group by following these steps:
	
	1. Click the Start button on the taskbar, point to Settings, and then click
	  Taskbar.
	
	2. Click the Start Menu Programs tab in the Taskbar Properties dialog box.
	
	3. Click the Advanced button to start Windows Explorer.
	
	4. Double-click the Programs folder in the "Contents of 'C:\Windows\Start Menu'"
	  window to open it.
	
	5. Double-click the Microsoft ODE Tools folder to open it.
	
	6. Click the Developer Studio shortcut.
	
	7. Press the DELETE key.
	
	8. Close the Windows Explorer window and the Taskbar Properties dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition.
	
	MORE INFORMATION
	================
	
	The Microsoft Office Developer Sampler is a collection of white papers,
	technical articles, and code samples for developers.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install the Microsoft Office Developer Sampler from the Microsoft Office 97
	  Developer Edition Tools compact disc.
	
	2. Run the Setup program again.
	
	3. When the installation maintenance program screen appears, click Reinstall.
	  Note that you receive the error message at the end of the Setup program.
	
	4. Click the Start button on the taskbar, point to Programs, and then click
	  Microsoft ODE Tools. Note the Developer Studio shortcut that opens My
	  Computer.
	
	Additional query words: MSDN
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
