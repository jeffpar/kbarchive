---
layout: page
title: "Q140319: FIX: Can't Save 'Assume Project Based on Working Dir' Setting"
permalink: /kb/140/Q140319/
---

## Q140319: FIX: Can't Save 'Assume Project Based on Working Dir' Setting

{% raw %}

	Article: Q140319
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on as Admin, the option "Assume Project based on working directory"
	cannot be saved by using the Command Line Options tab dialog box reached by
	clicking Options on the Tools menu.
	
	CAUSE
	=====
	
	This problem is caused by a conflict in the Ss.ini file settings:
	
	  Force_Dir (CL) = Yes
	
	  Force_Prj = Yes
	
	These two settings conflict because the Force_Dir setting forces the current
	directory to change to the current project's working directory, whereas the
	Force_Prj setting forces the current project to change to the project where the
	working directory matches the current directory.
	
	RESOLUTION
	==========
	
	Set the desired command line option manually in the Ss.ini file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install Visual SourceSafe 4.0, Build 0831, under Windows 95.
	
	2. Run the 32-bit Ssexp.exe program and log on as admin.
	
	3. On the Tools menu, click Options, then click the Command Line Options tab.
	
	4. Select the Assume Project Based on Working Directory check box, and click OK.
	
	5. On the Tools menu, click Options again. You will see that the Assume Project
	  Based on Working Directory check box is clear, but the Assume Working
	  Directory Based on Current Project setting is selected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
