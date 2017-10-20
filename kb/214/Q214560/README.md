---
layout: page
title: "Q214560: FIX: Installing Newer MSDN Causes Help to Malfunction"
permalink: /kb/214/Q214560/
---

## Q214560: FIX: Installing Newer MSDN Causes Help to Malfunction

{% raw %}

	Article: Q214560
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbMSDN kbDocs kbvfp600bug kbVS600sp3fix
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Microsoft Developer Network (MSDN) Library October 98
	edition or later, Visual FoxPro 6.0 Help does not function correctly.
	Specifically, the Help menu Content and Index selections no longer display the
	Help viewer. Context-sensitive Help, normally accessed by pressing the F1 key
	within Visual FoxPro, also fails to display the Help viewer.
	
	CAUSE
	=====
	
	Visual FoxPro 6.0 contains hard-coded information for the Help file names.
	
	RESOLUTION
	==========
	
	As a workaround, make copies of the following two files in the \Program
	Files\Microsoft Visual Studio\MSDN98\98OCT\1033\ folder, and place them in the
	same folder with the new names (MSDNVS98.CHW and MSDNVS98.COL):
	
	  \Program Files\Microsoft Visual Studio\MSDN98\98OCT\1033\MSDN830.CHW
	
	  \Program Files\Microsoft Visual Studio\MSDN98\98OCT\1033\MSDN830.COL
	
	NOTE: The \98OCT folder name will be different if a later version of the MSDN
	Library is being installed.
	
	Select MSDNVS98.COL in the 98OCT\1033 directory as the Help File in the File
	Locations tab of the Options dialog box to allow access to the full MSDN Help
	collection. The Options dialog box is located under the Tools menu. Be sure to
	select the Set As Default button within the Options dialog box after making this
	change to ensure the change is saved.
	
	This workaround allows all aspects of Help to function correctly in Visual FoxPro
	6.0, and does not adversely affect MSDN functionality or Help functionality in
	other Visual Studio applications.
	
	NOTE: The directory names above can be used if you accepted the default
	installation directory when you installed the MSDN Library October 98. Your MSDN
	directory name may be different if you selected a different installation
	directory name or installed a version of the MSDN Library later than October 98.
	Please modify the steps to match your MSDN directory if your particular
	directory structure differs from the above directory path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Visual FoxPro.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 6.0.
	
	2. Install the MSDN Library Visual Studio 6.0 edition. Be sure to do a Custom
	  install and select the Visual FoxPro Documentation checkbox in the Options
	  list.
	
	3. Uninstall the MSDN Library Visual Studio 6.0 edition.
	
	4. Install the MSDN Library October 1998 edition. Again, be sure to do a Custom
	  install and select the Visual FoxPro Documentation checkbox in the Options
	  list.
	
	5. Select Help/Index from the menu within Visual FoxPro 6.0.
	
	When the above steps are followed, the Help viewer is not displayed and no error
	is generated.
	
	When the workaround is implemented, the full MSDN collection is displayed in the
	Help viewer. Visual FoxPro 6.0 also allows you to limit the Help content to the
	Visual FoxPro Help file only. This is done by selecting the following file as
	the Help File in the File Locations tab of the Options dialog:
	
	  MSDN98\<install directory>\1033\FOXHELP.CHM
	
	The install directory varies for different versions of the MSDN Library. For the
	October 98 version, for instance, it will be 98oct. Making copies of the COL and
	CHW files as listed in the RESOLUTION section also allows Help to function
	correctly if FOXHELP.CHM is selected as the Help file.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: disabled greyed out grayed
	
	======================================================================
	Keywords          : kbsetup kbMSDN kbDocs kbvfp600bug kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
