---
layout: page
title: "Q130160: PRB: &quot;Convert.app cannot be run as a standalone program&quot; Error"
permalink: /kb/130/Q130160/
---

## Q130160: PRB: &quot;Convert.app cannot be run as a standalone program&quot; Error

{% raw %}

	Article: Q130160
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message:
	
	  "Convert.app cannot be run as a standalone program.
	  To convert files, open them from the File menu."
	
	CAUSE
	=====
	
	You are attempting to run CONVERT.APP as a standalone application either from
	the Command window or a program.
	
	RESOLUTION
	==========
	
	The Converter is not intended to be executed from a command line or in a
	program. Open the file by selecting Open from the File menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following in the Command Window:
	
	     DO (_CONVERTER) WITH "C:\fpw26\sample\catalog\sample.fpc"
	
	You will receive the error message described above. To convert the a version 2.6
	catalog to version 3.0, choose Open from the File menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
