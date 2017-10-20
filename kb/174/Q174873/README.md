---
layout: page
title: "Q174873: FIX: Lost Net Connection Causes Source Code Control to Hang"
permalink: /kb/174/Q174873/
---

## Q174873: FIX: Lost Net Connection Causes Source Code Control to Hang

{% raw %}

	Article: Q174873
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe500bug kbVS97sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors may occur multiple times with long pauses in between when
	you try to open a project:
	
	  Initializing Source Code Control Project
	
	  Invalid DOS Path:<Path to File>
	
	Additionally, you may see similar messages if you are currently connected to a
	source code controlled project and you lose network connectivity.
	
	RESOLUTION
	==========
	
	Install the Visual Studio 97 Service Pack 3.
	
	NOTE: Installing Visual Studio 97 Service Pack 3 will not prevent lost network
	connectivity; it only changes how the SourceSafe integration deals with it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words: hanging invalid handle
	
	======================================================================
	Keywords          : kberrmsg kbSSafe500bug kbVS97sp2fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
