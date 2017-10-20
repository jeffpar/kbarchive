---
layout: page
title: "Q188065: BUG: Welcome Screen Continues to Redisplay"
permalink: /kb/188/Q188065/
---

## Q188065: BUG: Welcome Screen Continues to Redisplay

{% raw %}

	Article: Q188065
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Welcome To Visual FoxPro" screen appears on subsequent starts of Visual
	FoxPro even though the "Don't display this Welcome screen again" check box was
	selected in the previous Visual FoxPro session.
	
	CAUSE
	=====
	
	This occurs if you display the Options dialog box from the Tools menu and select
	the "Set as Default" button during the same Visual FoxPro session that you
	select the "Don't display this Welcome screen again" check box.
	
	RESOLUTION
	==========
	
	Here are a few ways to get around this behavior:
	
	- After checking the "Don't display this Welcome screen again" check box, click
	  the "Close this Screen" button, immediately quit Visual FoxPro and then
	  restart Visual FoxPro. Then you can use the "Set as Default" button from the
	  Options dialog box without the Welcome screen appearing again.
	
	- Remember not to select the "Set as Default" button in the Options dialog box
	  in the same session that you select the "Don't display this Welcome screen
	  again" check box. This is almost the same as the first option except this
	  technique presumes that you are working in Visual FoxPro before quitting and
	  restarting the program.
	
	- Before using the "Set as Default" button in the Options dialog box, clear the
	  Startup Program under the File tab. Then if you select "Set as Default", the
	  Startup Program is blank.
	
	- After opening Visual FoxPro and selecting the "Don't display this Welcome
	  screen again" check box, issue the SYS(3056) command and force Visual FoxPro
	  to read the registry settings and update itself with the current registry
	  settings. You can then use the "Set as Default" button in the Options dialog
	  box without the Welcome screen appearing again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The Vfp6strt.app, found in the Visual FoxPro root directory, displays the
	Welcome screen. The system memory variable, _Startup, holds the name and
	location of the Vfp6strt.app. When you install Visual FoxPro or when you select
	the "Set As Default" button to set the default values, the values of the system
	memory variables are stored in the Windows registry. When the "Don't display
	this Welcome screen again" check box is selected, it clears the _Start system
	memory variable and also clears the registry setting. However, it does not clear
	the value of the Startup Program in the Options dialog box. When the "Set as
	Default" button is chosen, it rewrites the name and location of the Vfp6strt.app
	into the _Startup setting in the registry.
	
	The registry settings for the Visual FoxPro options are stored in the following:
	
	  My Computer\HKEY_CURRENT_USER\Software\Microsoft\VisualFoxPro\6.0\Options
	
	WARNING: Changing registry values manually can cause programs or the computer to
	become unstable. Users unfamiliar with the registry should not attempt this.
	
	Steps to Reproduce Behavior
	---------------------------
	
	If Visual FoxPro is being started for the first time:
	
	1. Select the "Don't display this Welcome screen again" check box in the Welcome
	  screen.
	
	2. Click the "Close this screen" button.
	
	3. From the Tools menu, Choose Options.
	
	4. In the Options dialog box, click the "Set as Default" button.
	
	5. Quit Visual FoxPro and then restart Visual FoxPro. The Welcome screen
	  appears.
	
	If you started Visual FoxPro previously and the Welcome screen has not been
	appearing:
	
	1. From the Tools menu, choose Options.
	
	2. In the Options dialog box, click the "File Locations" tab.
	
	3. Modify the Startup Program line to point to the Vfp6strt.app located in the
	  Visual FoxPro home directory. For example:
	
	     File Type         Location
	     --------------------------
	
	     Startup Program   c:\Program Files\Microsoft Visual Studio\vfp98\ 
	                       Vfp6strt.app
	
	4. Click the "Set as Default" button and then click OK.
	
	5. Quit Visual FoxPro and restart the program. The Welcome screen still appears.
	
	6. Select the "Don't display this Welcome screen again" check box and click
	  "Close this screen".
	
	7. Open the Options dialog box, click "Set as Default" and then click OK.
	
	8. Quit Visual FoxPro and then restart the program. The Welcome screen still
	  appears.
	
	Additional query words: kbVFp600bug kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
