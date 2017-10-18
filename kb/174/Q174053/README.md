---
layout: page
title: "Q174053: Cannot Download Rich Text Format Files Using MSN"
permalink: kb/174/Q174053/
---

## Q174053: Cannot Download Rich Text Format Files Using MSN

	Article: Q174053
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to download a Rich Text Format (RTF) file using MSN, The Microsoft
	Network, the download may not succeed. If you then press CTRL+ALT+DELETE to open
	the Close Program dialog box, Microsoft Word may be listed as not responding.
	
	CAUSE
	=====
	
	This behavior can occur if you have Microsoft Word version 6.x installed.
	
	RESOLUTION
	==========
	
	To work around this issue, associate RTF files with Microsoft WordPad. To do so,
	follow these steps:
	
	1. Double-click My Computer, and then click Options or Folder Options on the
	  View menu.
	
	2. On the File Types tab, click Rich Text Format in the Registered File Types
	  box, and then click Edit.
	
	3. In the Actions box, click Open, and then click Edit.
	
	4. Click Browse, and in the Look In box, click the hard disk that contains the
	  Windows folder (typically drive C).
	
	5. Double-click the Program Files folder, double-click the Accessories folder,
	  and then double-click the Wordpad.exe file.
	
	6. Click OK, click Close, and then click Close.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
