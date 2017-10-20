---
layout: page
title: "Q221712: FIX: FFCs- _XMLTag/_StyleTag in _html.vcx Use Wrong Extension"
permalink: /kb/221/Q221712/
---

## Q221712: FIX: FFCs- _XMLTag/_StyleTag in _html.vcx Use Wrong Extension

{% raw %}

	Article: Q221712
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The _XMLTag and _StyleTag classes of the _html.vcx do not produce the proper
	file extensions. In Visual FoxPro 6.0, no file extension is added to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following code in the Command window:
	
	  x=NEWOBJECT("_xmltag",home()+"ffc\_html")
	  x.tagname="Bob"
	  x.value="test"
	  x.savefile("myfile")
	
	2. In the Command window, type the following command:
	
	  DIR Myfile.*
	
	Notice the file has no extension.
	3. Type the following code in the Command window:
	
	  x=NEWOBJECT("_styletag",home()+"ffc\_html")
	  x.tagname="Bob2"
	  x.value="test2"
	  x.savefile("Myfile2")
	
	4. In the Command window, type the following command:
	
	  DIR Myfile2.*
	
	Again, the file has no extension. In Visual FoxPro 6.0 SP3, the files should have
	the .xml and .css extensions respectively.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
