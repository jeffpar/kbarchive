---
layout: page
title: "Q297433: ENC2001: &quot;ENC2001 Caused an Invalid Page Fault&quot; Error Message"
permalink: /kb/297/Q297433/
---

## Q297433: ENC2001: &quot;ENC2001 Caused an Invalid Page Fault&quot; Error Message

{% raw %}

	Article: Q297433
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Encarta, you may receive either of the following error
	messages:
	
	  ENC2001 caused an invalid page fault in module SFC10.OCX at 015f:296c6e85.
	
	  -or-
	
	  C:\refdev01\Shared\SharedFind\source\SharedFindCtrl.cpp(484): Failed to
	  Initialize SharedFindMgr : HRESULT 0x80010105 The server threw an exception.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Insert the Encarta CD-ROM while you press and hold down the SHIFT key.
	  Continue holding down the SHIFT key until your computer's CD-ROM (or DVD-ROM)
	  drive light stops flashing (about 10 seconds).
	
	2. Release the SHIFT key, click Start, point to Programs, and then click Windows
	  Explorer.
	
	3. In Windows Explorer, click the plus sign (+) next to the drive letter of the
	  CD-ROM (or DVD-ROM) drive.
	
	4. Click the plus sign next to the Support folder.
	
	5. Click the Suite folder, and then double-click Erssfind.reg.
	
	You receive the following message:
	
	  Are you sure you want to add the information in C:\SUPPORT\SUITE\ERSSFIND.REG
	  to the registry?
	
	6. Click OK twice, and then restart your computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
