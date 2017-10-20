---
layout: page
title: "Q250605: MSB Bugs: Program Stops Responding After You Type Your Name"
permalink: /kb/250/Q250605/
---

## Q250605: MSB Bugs: Program Stops Responding After You Type Your Name

{% raw %}

	Article: Q250605
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS|MACINTOS:1.0
	Operating System(s): 
	Keyword(s): kbnetwork mskids kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores Bugs, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Scholastic's Magic School Bus series: Explores Bugs, the program
	may stop responding (hang) when you type your name and then click Go.
	
	CAUSE
	=====
	
	This behavior occurs if you used a Universal Naming Convention (UNC) path name
	to install the program from a network share.
	
	RESOLUTION
	==========
	
	To work around this issue, map a drive letter to the network share from which
	you installed the program.
	
	To map a drive letter to a network share:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. On the Tools menu, click Map Network Drive.
	
	3. In the Drive box, click the drive letter that you want to map to the network
	  share.
	
	4. In the Path box, type the following line
	
	  \\<servername>\<sharename>
	
	  where <servername> is the name of the server from which you installed
	  the program and <sharename> is the name of the network share from which
	  you installed the program.
	
	5. Click to select the "Reconnect at logon" check box.
	
	6. Click OK, and then quit Windows Explorer.
	
	Additional query words: 1.00 mskids msb school bus hangs freeze locks
	
	======================================================================
	Keywords          : kbnetwork mskids kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbKidsSearch kbScholasticBugs kbMSBSearch
	Version           : WINDOWS|MACINTOS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
