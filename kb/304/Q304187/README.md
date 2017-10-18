---
layout: page
title: "Q304187: Cannot Select Mapped Drives on the Home Directory Tab"
permalink: kb/304/Q304187/
---

## Q304187: Cannot Select Mapped Drives on the Home Directory Tab

	Article: Q304187
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Home Directory tab in the Browse For Folder dialog box, mapped drives
	appear even though they cannot be selected.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce This Behavior:
	
	1. Create a network drive.
	2. Open the Internet Service Manager.
	3. Click Web Sites, click Default Web Site Properties, and then click the Home
	  Directory tab.
	4. Click A directory located on this computer.
	5. Click Browse... to open the Browse For Folder dialog box.
	
	Additional query words: iis 5.1 mapped drive network 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
