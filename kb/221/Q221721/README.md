---
layout: page
title: "Q221721: FIX: Mismatched Pushjmp/Popjmp With DataToClip( ) On Big Table"
permalink: /kb/221/Q221721/
---

## Q221721: FIX: Mismatched Pushjmp/Popjmp With DataToClip( ) On Big Table

{% raw %}

	Article: Q221721
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbservicepack kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kb
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message:
	
	  Mismatched Pushjmp/Popjmp Call
	
	appears in Visual FoxPro 6.0 when attempting to copy the contents of a large
	table to the clipboard after executing the following command from a form:
	
	  _VFP.DATATOCLIP(,,1)
	
	Visual FoxPro, 5.0a running on Windows NT 4.0, produces the following Dr. Watson
	error:
	
	  An application error has occurred
	  and an application error log is being generated.
	  VFP.exe
	  Exception access violation (0xc0000005), Address: <memory address>
	
	Visual FoxPro 5.0a, running on Windows 95, produces the following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	Clicking the Details button reveals the following:
	
	  VFP caused an invalid page fault in module VFP.EXE at <memory address>
	
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
	
	1. Create a large table (approximately 5Mb in size).
	
	2. Create a new form named Lg_Table.
	
	3. Add the large table to the DataEnvironment of the form.
	
	4. Add a command button to the form.
	
	5. Add the following code in the Click event of the command button:
	
	  _VFP.DATATOCLIP(,,1)
	
	6. Run the form and click the command button. The following error message can
	  appear:
	
	  OLE exception error: Exception code c0000005. OLE object may be corrupt.
	
	  Click the Ignore button and the following message appears:
	
	  Mismatched pushjmp/popjmp call
	
	  A memory protection fault may also occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbservicepack kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
