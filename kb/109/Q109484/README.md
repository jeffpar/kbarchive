---
layout: page
title: "Q109484: BUG: Running Macintosh Project in Windows Causes Error"
permalink: /kb/109/Q109484/
---

## Q109484: BUG: Running Macintosh Project in Windows Causes Error

{% raw %}

	Article: Q109484
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are modifying a FoxPro for Macintosh project in FoxPro for Windows, you
	receive the following error:
	
	  Invalid path or filename
	
	CAUSE
	=====
	
	The above error message may be caused by including a File type object in the
	project.
	
	RESOLUTION
	==========
	
	To solve this problem, do ONE of the following:
	
	- Before adding any File type objects to a project on the Macintosh, type the
	  following in the Command window (replace "Macintosh HD:" with the drive name
	  that contains the File object):
	
	  SET VOLUME C TO "Macintosh HD:"
	
	  This command creates a record entry in the .PJX file that points to a path
	  that conforms to the MS-DOS path conventions.
	
	-or-
	
	- If you have already created a project, modify the project by typing "USE
	  <project name>.PJX" (without the quotation marks), and then change the
	  hard disk name in the Name memo field for each record that has a lowercase
	  "x" as its object type so that the hard disk name follows the MS-DOS path
	  conventions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro version 2.5b for
	Macintosh. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In FoxPro for Macintosh, create a project called TEST.PJX.
	
	2. Click the Add button. In the Type popup list box, select File. Double- click
	  the file FOX.PCT in the FoxPro folder.
	
	3. Save the project.
	
	4. Copy the Macintosh project over to an MS-DOS-based machine.
	
	5. In FoxPro for Windows, type "MODIFY PROJECT test" (without the quotation
	  marks) in the Command window.
	
	The error message "Invalid path or filename" is displayed.
	
	Even though the project cannot be modified, the file is still left in an open
	state and must be closed with the CLOSE ALL command.
	
	Additional query words: vFoxMac FoxMac buglist2.50b errmsg err msg
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
