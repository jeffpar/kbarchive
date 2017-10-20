---
layout: page
title: "Q184354: BUG: Working Folder for Subproject Not Inherited from Parent"
permalink: /kb/184/Q184354/
---

## Q184354: BUG: Working Folder for Subproject Not Inherited from Parent

{% raw %}

	Article: Q184354
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600bug
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Subprojects are not inheriting the working folder setting from the parent
	project as expected.
	
	CAUSE
	=====
	
	You have overridden the normal behavior by explicitly setting the working folder
	for subproject(s). This results in a Dir= variable being set under the
	subproject section header in your Ss.ini file.
	
	RESOLUTION
	==========
	
	To restore the working folder inheritance, you need to edit the user's
	..Vss\Users\<username>\Ss.ini file and completely remove the Dir variable
	under the appropriate subproject section header.
	
	For example, you may have something that looks similar to the following in your
	Ss.ini file:
	
	  [$/Project1]
	     Dir(PC) = c:\Project1
	
	     ;Setting the working folder then deleting it from the GUI leaves the Dir
	     variable, but the value will be blank.
	     [$/Project1/Sub1]
	     Dir(PC) =
	
	     [$/Project1/Sub2]
	     Dir(PC) = c:\temp
	
	Default working folder propagation works again only after the "Dir(PC)" lines
	under each subproject section header are completely removed and the Ss.ini file
	saved.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When setting the working folder of a top-level Visual SourceSafe (VSS) project,
	by default all subprojects assume a working folder based on a mirror of the
	project's directory structure on disk.
	
	For example, suppose you have the following project structure in VSS:
	
	  $/Project1
	
	               /Sub1
	                    /SubofSub1
	               /Sub2
	
	Setting the working folder for $/Project1 to C:\Project1 implicitly sets the
	working folder of the subprojects to C:\Project1\Sub1,
	C:\Project1\Sub1\SubofSub1 and C:\Project1\Sub1\Sub2, respectively.
	
	If you explicitly set the working folder of a subproject, you are essentially
	telling VSS, "Don't assume a working folder for this subproject", which in some
	cases may be desired. VSS accomplishes this by adding the Dir variable under the
	subproject's header section in the Ss.ini file.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a project structure in VSS similar to the one above.
	
	2. Explicitly set the working folder for the subproject /Sub1 by highlighting it
	  and choosing Set Working Folder from the File menu.
	
	3. Choose a folder and click OK.
	
	4. Now open the Set Working Folder dialog box again, and delete the chosen
	  folder setting from the Name text box, then click OK. These steps remove the
	  working folder for /Sub1 and create the Dir()=<blank> in your Ss.ini
	  file after you exit the VSS explorer.
	
	5. Now set the working folder for $/Project1. $/Project1/Sub1, or any of its
	  subprojects, will not have its working folder set, but $/Project1 and
	  $/Project1/Sub2 will have the working folder set.
	
	NOTE: To maintain the default behavior of working folder inheritance, avoid
	setting the working folders for subprojects explicitly.
	
	REFERENCES
	==========
	
	Visual SourceSafe Help, search on: "Working Folder", Topic: "Setting the Working
	Folder for SS.INI"
	
	Additional query words: propagate
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
