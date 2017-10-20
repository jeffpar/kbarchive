---
layout: page
title: "Q131955: BUG: Cannot Set Project Level Rights with SourceSafe's SSADMIN"
permalink: /kb/131/Q131955/
---

## Q131955: BUG: Cannot Set Project Level Rights with SourceSafe's SSADMIN

{% raw %}

	Article: Q131955
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:3.04,3.1
	Operating System(s): 
	Keyword(s): kbSSafe300bug
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting project-level rights fails when you use the SourceSafe SSADMIN tool from
	the command line on the Macintosh.
	
	RESOLUTION
	==========
	
	If working in a multi-platform environment, use the Windows, Windows NT, or
	MS-DOS SSADMIN executable to change the project-level rights.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SourceSafe version
	3.04 and 3.1 for Macintosh. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	>
	
	1. Run SSADMIN.
	
	2. Click "6. Manipulate the project securit(y) system." If you are prompted with
	  "Enable project security system? (Y/N)," choose y.
	
	3. Click "7. (S)et a user's security level in a give project."
	
	4. Enter a valid username, project, and "r---" for rights. Notice that you get
	  no error message and it appears the change has been made.
	
	5. Click "4. Query a (u)ser's security level entries."
	
	6. Enter the project you entered in step 4.
	
	7. Notice that the rights are now "----."
	
	There is no way to set project-level rights from the command line.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe300bug 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304Mac kbSSafe310Mac
	Version           : MACINTOSH:3.04,3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
