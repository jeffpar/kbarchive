---
layout: page
title: "Q221634: FIX: C0000005 Error With CLOSE ALL in Project Hook BeforeBuild"
permalink: /kb/221/Q221634/
---

## Q221634: FIX: C0000005 Error With CLOSE ALL in Project Hook BeforeBuild

{% raw %}

	Article: Q221634
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a CLOSE ALL command in the BeforeBuild event of the Project Hook object
	causes the following error:
	
	  Mismatched pushjmp/popjmp call
	
	After the error appears, clicking OK in the dialog box causes Visual FoxPro 6.0
	to terminate with a C0000005 error or an application error message under Windows
	NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a PRG.
	
	2. Cut and paste the code below into the PRG:
	
	  oProject=CREATEOBJECT("myprojecthook")
	
	  STRTOFILE("wait window","main.prg")
	  MODIFY PROJECT test NOWAIT
	
	  _VFP.ActiveProject.Files.Add("main.prg")
	  _VFP.ActiveProject.ProjectHook=oProject
	  _VFP.ActiveProject.Build
	
	  DEFINE CLASS myprojecthook As projecthook
	
	     PROCEDURE BeforeBuild
	     LPARAMETERS cOutputName, nBuildAction, lRebuildAll, lShowErrors, lBuildNewGuids
	        CLOSE ALL
	     ENDPROC
	
	  ENDDEFINE
	   
	
	3. Save and run the PRG.
	
	  Note that Visual FoxPro produces a dialog box containing the "Mismatched
	  pushjmp/popjmp call" error. When you click OK, Visual FoxPro terminates with
	  C0000005 error or an application error message under Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
