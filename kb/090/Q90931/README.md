---
layout: page
title: "Q90931: Corrupt CONNECT.DAT May Cause Invalid Errors in WFWG"
permalink: /kb/090/Q90931/
---

## Q90931: Corrupt CONNECT.DAT May Cause Invalid Errors in WFWG

{% raw %}

	Article: Q90931
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the CONNECT.DAT file (which Windows for Workgroups uses for storing a list of
	previous connections) is corrupt, the following error message may occur when you
	start Windows for Workgroups:
	
	  An error occurred while reconnecting LPT1: to
	  \\Sharename\Printer
	  [SYS0000]
	  Do you want to continue restoring connections?
	
	This error occurs even if the share is actually available and can be printed to
	without errors. It may also occur on connections to disk shares, where an error
	message occurs, but the share is still available.
	
	WORKAROUND
	==========
	
	1. Make a list of persistent connections from the File Manager and the Print
	  Manager.
	
	2. Exit Windows for Workgroups completely.
	
	3. In the WINDOWS directory rename or delete the CONNECT.DAT file.
	
	4. Restart Windows for Workgroups.
	
	5. Run File Manager. From the Disk menu, choose Connect Network Drive and
	  manually restore any previous connections.
	
	6. Run Print Manager. From the Printer menu, choose Connect Network Printer and
	  manually restore any previous connections.
	
	MORE INFORMATION
	================
	
	You cannot rename CONNECT.DAT with File Manager because another CONNECT.DAT with
	0 bytes may immediately be created if there are persistent connections present.
	
	For more information on CONNECT.DAT, query on the following words:
	
	  contents and connect.dat
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
