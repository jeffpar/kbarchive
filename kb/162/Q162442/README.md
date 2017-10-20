---
layout: page
title: "Q162442: FIX: Setup Wizard Creates Disk Images That Cannot Be Copied"
permalink: /kb/162/Q162442/
---

## Q162442: FIX: Setup Wizard Creates Disk Images That Cannot Be Copied

{% raw %}

	Article: Q162442
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbvfp500bug
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual FoxPro 5.0 Setup Wizard can create 1.44-megabyte (MB) disk images
	that cannot be copied to a disk on a machine running Windows 95. Windows 95
	allows a maximum of 112 files in the root directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0a for Windows. The problem is also corrected in an updated Setup Wizard
	available for download from the Microsoft Software Library. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q162004 PATCH: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard
	
	RESOLUTION
	==========
	
	Here are three resolutions for this problem:
	
	- Run the Setup Wizard with a copy of Visual FoxPro that is installed on a
	  computer running Windows NT. The Windows NT limit on the number of files is
	  224, instead of the 112 file limit of Windows 95.
	
	- Upgrade to Visual FoxPro 5.0a.
	
	- Obtain the new Setup Wizard from the Microsoft Software Library.
	
	MORE INFORMATION
	================
	
	The following code illustrates the problem by creating a number of files in a
	directory that the Setup Wizard is run against. The subsequent disk images are
	copied to a disk, which causes the error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Save the following program to its own directory as Makefiles.prg. Create a
	  file called Filetest.txt and save it to the same directory. Change directory
	  (CD) to that directory and DO Makefiles.prg:
	
	        SET SAFETY OFF
	        FOR i=1 to 225
	           COPY FILE filetest.txt to padl(ALLTRIM(STR(i)),5,'0')+'ABC.TXT'
	        ENDFOR
	
	2. Run the Visual FoxPro 5.0 Setup Wizard against the above directory and create
	  1.44-MB disk images in another directory.
	
	3. Attempt to copy the disk directory with the 200-plus files to a 1.44-MB disk,
	  and the error occurs.
	
	Additional query words: too many files
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
