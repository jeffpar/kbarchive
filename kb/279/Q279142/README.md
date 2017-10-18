---
layout: page
title: "Q279142: FIX: BUILD EXE Command May Cause &quot;File Is Not Open&quot; Error"
permalink: kb/279/Q279142/
---

## Q279142: FIX: BUILD EXE Command May Cause &quot;File Is Not Open&quot; Error

	Article: Q279142
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbXBase kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile the FoxIS example after you instantiate the Employee class, you
	may receive the following error message:
	
	  File is not open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro.
	
	2. In the Visual FoxPro system menu, click the Tools menu pad, and then click
	  the Options menu bar.
	
	3. In the Options dialog box, click the File Locations tab, and make sure the
	  Samples folder is pointing to the proper folder.
	
	4. Set the folder that contains the FoxIS project as the default folder.
	
	The folder that contains the FoxIS project is normally under the VFP Samples
	folder. For example, the path may be VFPSamples\Servers\Foxisapi\FoxIS.
	
	5. Open the FoxIS project.
	
	6. In the Command window, run the following code:
	
	  X = NEWOBJECT("Employee","Employee")
	  X = 2
	  BUILD EXE FoxIS FROM FoxIS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbXBase kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
