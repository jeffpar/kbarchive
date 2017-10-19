---
layout: page
title: "Q177351: BUG: 16-bit Executable Resources Gets Corrupted"
permalink: /kb/177/Q177351/
---

## Q177351: BUG: 16-bit Executable Resources Gets Corrupted

	Article: Q177351
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbNoUpd
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a executable resource of a 16-bit file that has been modified and
	saved, the following error message displays:
	
	  <filename>
	  Cannot open resource
	  File is not in the correct format
	
	RESOLUTION
	==========
	
	Use the 16-bit Resource Editor, AppStudio, that shipped with Microsoft Visual
	C++ version 1.52 to edit 16-bit executable and DLL files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two copies of a 16-bit executable resource such as the Apstudio.exe
	  file shipped in Microsoft Visual C version 1.52. Change the file name of one
	  of the copies of the file.
	
	2. Start Developer Studio and open both files in the Resource Editor.
	
	3. In one of the executable files, delete all the resources by completing the
	  following steps:
	
	  a. Open a resource folder.
	
	  b. Press Click+SHIFT to select the first and last items in that folder which
	     selects all items in the list.
	
	  c. Press the Delete key to delete all the items.
	
	  d. Repeat for the rest of the items in the folder.
	
	4. Copy the resources from the second file to the first file.
	
	5. Open one of the resource folders such as the Version folder. Note that the
	  resources are visible. Close the resource folder and save the file.
	
	6. Open the file again and click the Version folder. The error message displays
	  indicating a corrupt file.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
