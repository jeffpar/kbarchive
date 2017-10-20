---
layout: page
title: "Q316647: PRB: Merge Module (.msm) Files Not Updated by VFP 7.0 SP1"
permalink: /kb/316/Q316647/
---

## Q316647: PRB: Merge Module (.msm) Files Not Updated by VFP 7.0 SP1

{% raw %}

	Article: Q316647
	Product(s): Microsoft FoxPro
	Version(s): 7.0,7.0 SP1
	Operating System(s): 
	Keyword(s): kbAppSetup kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 7.0, 7.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro 7.0 Service Pack 1 (SP1) ships with updated merge module files,
	Vfp7runtime.msm and Vfpoledb.msm. These files facilitate the distribution of
	your Visual FoxPro 7.0 applications. Under certain circumstances, the
	installation of Visual FoxPro 7.0 SP1 may not update these merge modules.
	
	CAUSE
	=====
	
	This problem can occur if the timestamp of a .msm file to be updated is later
	than that of the file shipped with Visual FoxPro 7.0 SP1.
	
	RESOLUTION
	==========
	
	To resolve this problem, delete any .msm files that were not successfully
	updated and install Visual FoxPro SP1 again.
	
	MORE INFORMATION
	================
	
	The Microsoft Windows Installer SDK includes an .msm/.msi database editor named
	Orca. You can use this table-editing tool to edit your .msm files.
	Unfortunately, Orca changes the timestamp on existing .msm files even if no
	changes are made.
	
	Any .msm files installed by Visual FoxPro 7.0 which are edited with Orca may have
	a file date later than that of the files included in Visual FoxPro 7.0 SP1.
	(Other tools, of course, may also update the timestamp.) Because there is no
	version stamping on the .msm files, Visual FoxPro 7.0 SP1 must use the datetime
	stamp as a basis of comparison when updating these files. When Visual FoxPro 7.0
	SP1 sees a later datetime stamp, it does not update the file.
	
	The merge modules are installed by default in the C:\Program Files\Common
	Files\Microsoft Shared\Merge Modules folder. The RTM files are dated 6/14/2001.
	If you updated your installation with the Runtime Hotfix, the files will be
	dated 7/5/2001. The SP1 versions of the files are dated 1/4/2002.
	
	REFERENCES
	==========
	
	  Q255905 HOWTO: Use Orca to Edit Windows Installer Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700 kbVFP700SP1
	Version           : :7.0,7.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
