---
layout: page
title: "Q267633: &quot;Modification Error&quot; Message Displayed When Creating MAs"
permalink: /kb/267/Q267633/
---

## Q267633: &quot;Modification Error&quot; Message Displayed When Creating MAs

{% raw %}

	Article: Q267633
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a management agent in Microsoft Metadirectory
	Services (MMS), you may receive the following error message:
	
	  Modification request returns 32.
	  [Modify error: 18032]
	
	An error message similar to the following text is also generated in the Genlogs
	file:
	
	  DBG_00 00f5 00/06/30 08:36:22.975 (DS_importtMain) Importt invoked: Fri Jun
	  30 08:36:20 2000
	  DBG_00 00f5 00/06/30 08:36:22.976 (DS_openLogFiles) Mini_Reflector MA []
	  DBG_00 00f5 00/06/30 08:36:22.977 (DS_openLogFiles) working on [all objects]
	
	  ERR_00 00f5 00/06/30 08:36:23.037 (DB5_makeDirectoryUnderBase) Failed to make
	  directory: [E:\zoomserv\Data\ds\00000005]
	
	  ERR_00 00f5 00/06/30 08:36:23.194 (DS_close) Process exited 14052 at Fri Jun
	  30 08:36:23 2000
	
	CAUSE
	=====
	
	This behavior can occur if the Fnumber.dat file contains a value that is less
	than the highest management agent working folder number.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually edit the Fnumber.dat file:
	
	1. Open the Zoomserv\Data\Ds folder and look for the largest folder number in
	  the folder (for example, 00000032).
	
	2. In the same folder, look for a file named Fnumber.dat.
	
	3. Open the Fnumber.dat file with any text editor.
	
	4. Change the number to equal the number you found in step 1.
	
	5. Save and close the file.
	
	MORE INFORMATION
	================
	
	The Fnumber.dat file is a text file that contains a numeric value that should
	reflect the number of management agents that have previously been created. The
	contents of the file are incremented each time a management agent is created. If
	the file is restored from a backup or changed improperly to a value that is less
	than the number of the highest management agent working folder, the error
	message is displayed.
	
	Additional query words: via zoomit
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
