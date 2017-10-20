---
layout: page
title: "Q201779: Err Msg: 550 &lt;Filename&gt;: Access Is Denied"
permalink: /kb/201/Q201779/
---

## Q201779: Err Msg: 550 &lt;Filename&gt;: Access Is Denied

{% raw %}

	Article: Q201779
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Windows NT FTP PUT command to put a file onto an FTP
	site, the following error message occurs:
	
	  550 <filename>: Access is denied.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the FTP site folder, and then click Properties.
	
	3. On the Home Directory tab, click to place a check in the Write check box.
	
	4. Click OK to return to the MMC.
	
	Additional query words: kberrmsg errmsg error message akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
