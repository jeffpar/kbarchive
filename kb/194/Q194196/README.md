---
layout: page
title: "Q194196: FIX: No Help File With Distributed App"
permalink: /kb/194/Q194196/
---

## Q194196: FIX: No Help File With Distributed App

{% raw %}

	Article: Q194196
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbAppSetup kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No help appears when you press the F1 key or when you select Microsoft Visual
	FoxPro Help Topics from the Help menu. This occurs with distributed applications
	installed on a system that does not have Visual FoxPro installed.
	
	CAUSE
	=====
	
	The Setup Wizard does not copy either the Foxhhelp.exe or the Foxhhelpps.dll
	file when you select the HTML HELP ENGINE in step 2 of the Setup Wizard.
	
	RESOLUTION
	==========
	
	Copy the Foxhhelp.exe file and the Foxhhelpps.dll file from the Visual FoxPro
	directory to the distribution directory from which you run the Setup Wizard.
	During setup, select ActiveX in step 6 for the Foxhhelpps.dll file. Also, in
	step 6, set the target directory to Winsysdir for the Foxhhelp.exe file and the
	Foxhhelpps.dll file.
	
	When you install a distributed application on a system that does not have Visual
	FoxPro, you must manually register the Foxhhelp.exe file. You can do this by
	running the Foxhhelp.exe file with the /REGSERVER option, for example:
	
	  FOXHHELP /REGSERVER
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in the updated version of the Setup Wizard Vfp6swiz.exe
	dated 10/08/1998. This bug was corrected in Visual Studio 6.0 Service Pack 3.
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program and add the following code:
	
	  **** Code starts here
	        SET HELP ON
	        SET HELP TO mbshelp.chm
	
	        ?SET("HELP")
	        ?SET("HELP",1)
	        ?SET("HELP",2)
	        ?ON("key","f1")
	
	        ON KEY LABEL F6 CLEAR EVENTS
	        ON KEY LABEL F7 DO ShowIt
	        READ EVENTS
	
	        PROCEDURE ShowIt
	        ?SET("HELP")
	        ?SET("HELP",1)
	        ?SET("HELP",2)
	        ?ON("key","f1")
	        RETURN
	        **** Code ends here
	
	2. Compile the program into an exe.
	
	3. Create a Mbshelp.chm file or copy a .chm file from the Microsoft Developer
	  Network directories and rename it to Mbshelp.chm.
	
	4. Run the Setup Wizard and select HTML Help Engine in step 2.
	
	5. Run the setup you created in step 4 and install the .exe file on a computer
	  that does not have Visual FoxPro installed.
	
	6. Run the .exe file.
	
	7. Press the F1 key.
	
	8. From the Help menu, choose Microsoft Visual FoxPro Help Topics.
	
	9. Press the F7 key to display the current SET HELP settings.
	
	10. Press the F6 key to exit the program.
	
	The cursor disappears until the mouse moves and no help appears. The drop- down
	menu disappears, but no help appears. The screen shows whether Help is on and to
	where the help is set.
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words: Help File chm Foxhelp.chm
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbAppSetup kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
