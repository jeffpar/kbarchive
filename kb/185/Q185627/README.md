---
layout: page
title: "Q185627: FIX:Component Gallery Delete Gives 'Unknown Member oFolder Error"
permalink: /kb/185/Q185627/
---

## Q185627: FIX:Component Gallery Delete Gives 'Unknown Member oFolder Error

	Article: Q185627
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbAppSetup kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro version 6.0, after removing all catalogs from the Component
	Gallery, right-clicking either the right pane or left pane of the Component
	Gallery generates an error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in the updated version of the Setup Wizard Vfp6swiz.exe
	dated 10/08/1998.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	When you right-click the left pane of the Component Gallery, the following error
	is generated:
	
	  Unknown Error OFOLDER.......
	
	When you right-click the right pane of the Component Gallery, the following error
	is generated:
	
	  Unknown Error OITEM........
	
	In the error dialog box, select OK to ignore the errors and continue or select
	Cancel to close down the Component Gallery.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Tools menu, choose Component Gallery.
	
	2. Select the top item in the left pane of the Component Gallery, which is
	  Catalogs, then right-click to open an Options menu.
	
	3. From the Options menu, select Remove to remove all catalogs in the Component
	  Gallery.
	
	4. Once all the catalogs are deleted from the Component Gallery, right-click the
	  left pane of the Component Gallery. The following error is displayed: Unknown
	  Error OFOLDER......
	
	5. Click OK in the Error dialog box.
	
	6. Right-click the right pane of the Component Gallery and note that the error
	  below is displayed:
	
	  Unknown Error OITEM......
	
	  NOTE: Selecting the Cancel button in the Error dialog box, results in the
	  following error. Click the Cancel button to exit the Error dialog box. The
	  error displayed is:
	
	  Unknown member....
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following World
	Wide Web URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbAppSetup kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
