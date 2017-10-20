---
layout: page
title: "Q155438: PRB: &quot;Directory Not Found&quot; When Using Macintosh Client 4.00a"
permalink: /kb/155/Q155438/
---

## Q155438: PRB: &quot;Directory Not Found&quot; When Using Macintosh Client 4.00a

{% raw %}

	Article: Q155438
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:4.0a
	Operating System(s): 
	Keyword(s): kbSSafe400
	Last Modified: 21-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Macintosh, version 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users attempt to execute any command, a "Directory not found" message
	appears, and the command is not executed.
	
	CAUSE
	=====
	
	The server installation of SourceSafe is on the root of a server volume, such as
	<Volume>:
	
	RESOLUTION
	==========
	
	To correct this problem, move the server installation of Visual SourceSafe to a
	folder below the server volume, such as <Volume>:<Folder>:.
	Alternatively, you can change the folder level being shared to a higher level
	folder at the server.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper
	Version           : MACINTOSH:4.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
