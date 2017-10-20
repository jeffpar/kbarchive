---
layout: page
title: "Q236520: MOD2000: Save Project Prompt w/ Close, Add to VSS, or P&amp;D Wizard"
permalink: /kb/236/Q236520/
---

## Q236520: MOD2000: Save Project Prompt w/ Close, Add to VSS, or P&amp;D Wizard

{% raw %}

	Article: Q236520
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you close a project or the program that you started the Visual Basic Editor
	from, you may receive the following message:
	
	  Project <path\projectname >has been modified. Do you wish to save the
	  changes now?
	
	-or-
	
	When you start the "Package and Deployment" Wizard, you receive the following
	message:
	
	  The active project must be saved before it can be packaged and deployed.
	
	-or-
	
	When you try to add a project to Visual SourceSafe, you receive the following
	message:
	
	  Please save your Project, '<projectname>', before using source code
	  control.
	
	You see one of these messages even though you have not made any changes since you
	last saved the project.
	
	CAUSE
	=====
	
	You see one of the messages listed in the "Symptoms" section if you have not
	saved the project since you closed an Addin Class window, a Data Report window,
	or a Data Environment window, or if you still have one of those windows open.
	
	RESOLUTION
	==========
	
	To prevent the messages listed in the "Symptoms" section, close the Addin Class
	window, the Data Report window, or the Data Environment window, and then save
	your project. You can then close the project or program, add to Visual
	SourceSafe, or run the "Package and Deployment" Wizard without seeing these
	messages.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Excel.
	
	2. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	3. On the File menu, click New Project.
	
	4. In the New Project dialog box, click Empty Project, and then click OK.
	
	5. On the Insert menu, click Components.
	
	6. In the Components dialog box, click the Designers tab. Click to select Addin
	  Class check box, and then click OK.
	
	7. On the Insert menu, click Addin Class.
	
	8. On the File menu, click Save <projectname>.
	
	9. In the Save Project As dialog box, click Save.
	
	10. On the File menu, click Close Project.
	
	Note that you are prompted to save the project even though you have not made any
	changes since the last save.
	
	Additional query words: prb
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
