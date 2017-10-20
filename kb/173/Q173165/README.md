---
layout: page
title: "Q173165: FIX: Modified Resource Files Don't Affect Resources"
permalink: /kb/173/Q173165/
---

## Q173165: FIX: Modified Resource Files Don't Affect Resources

{% raw %}

	Article: Q173165
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT:5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC500 kbVC600 kbVS97 kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have altered a resource script outside of the resource editor (for
	example, by hand or by using a version control system), Developer Studio notices
	the change and asks you if you want to reload.
	
	If you answer yes, the reload seems to succeed and no error message appears.
	However, the resource view does not reflect the changes made to the .RC file
	outside of the resource editor, even if you reload it.
	
	CAUSE
	=====
	
	The resource editor generates and uses a .APS file. This file contains a binary
	format of the resources. This file is not recompiled when the resource script is
	changed outside of Developer Studio. Only replacing the .RC and RESOURCE.H
	resource files is not sufficient if you want the resource view to reflect the
	changes made to the resources.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Make sure that the project is closed. Replace the .APS , .RC and RESOURCE.H
	  files.
	
	-or-
	
	- Make sure that the project is closed. Delete the .APS file and replace both
	  the .RC and RESOURCE.H files. In this case, the project compiles a new .APS
	  file that reflects the changes in the .RC file.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC-SDI project called MYAPP with the AppWizard.
	
	2. In the resource editor, change the resource ID for menu item "File-New" from
	  ID_FILE_NEW to ID_NEW.
	
	3. On the File menu, select Save All.
	
	4. Backup MYAPP.RC and RESOURCE.H from the project directory to another
	  location.
	
	5. Revert the resource ID for "File-New" to ID_FILE_NEW.
	
	6. On the File menu, select Save All.
	
	7. Restore the backup files MYAPP.RC and RESOURCE.H.
	
	8. Developer Studio notices the change and asks you to reload resource. Click
	  "yes".
	
	9. Examine the Properties for menu item "File-New".
	
	10. The resource ID for "File-New" should have been restored to ID_NEW, but it
	  is still ID_FILE_NEW.
	
	11. If you Save All, the MYAPP.RC and RESOURCE.H files will be overwritten with
	  information from the MYAPP.APS file.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135912 PRB: Wrong Resources Loaded by Resource Editor or AppStudio
	
	  Q132340 Common File Extensions Used by Visual C++
	
	Additional query words: resource version kbvc500 kbvc600
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC500 kbVC600 kbVS97 kbGrpDSTools 
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVS97 kbVS97Search kbVC500Search
	Version           : WINDOWS NT:5.0,6.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
