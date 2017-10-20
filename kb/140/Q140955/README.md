---
layout: page
title: "Q140955: XCLN: Error When Opening Attachment in Client for Windows 3.x"
permalink: /kb/140/Q140955/
---

## Q140955: XCLN: Error When Opening Attachment in Client for Windows 3.x

{% raw %}

	Article: Q140955
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open an attachment with a long file name from the Microsoft
	Exchange client for Windows 3.x, you might receive the following error message:
	
	  The application associated with this attachment could not be started. Verify
	  the application is installed on your system with a correct directory path.
	  <drive:\path\longfilename>
	
	CAUSE
	=====
	
	This error may occur when opening an attachment with a long file name from a
	message without Rich Text Formatting (RTF) that was delivered via the Microsoft
	Exchange Internet Mail Connector (IMC).
	
	This error may also occur if there is not enough memory available to open another
	application.
	
	RESOLUTION
	==========
	
	In the case of attachment problems, create an entry in the Personal Address Book
	(PAB) that forces the use of Rich Text Formatting to any Microsoft Exchange
	client for Windows 3.x recipient.
	
	For memory-related issues, try to free up more memory by loading programs in high
	memory (see the AUTOEXEC.BAT and CONFIG.SYS files). If this fails to resolve the
	problem, you may need to try a memory utility such as MemValet to free
	additional memory.
	
	For more information about the MemValet utility, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q124421 WG1137: Memory Valet Utility to Correct "Out of Memory"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client version 4.0. This problem was corrected in Microsoft Exchange Server
	4.0 U.S. Service Pack 2. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	For memory-related issues, Service Pack 2 may not correct this problem.
	
	Additional query words: attachment LFN error opening IMC
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
