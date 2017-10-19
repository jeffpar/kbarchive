---
layout: page
title: "Q232338: User Prompted for Wrong Version of Windows NT CD"
permalink: /kb/232/Q232338/
---

## Q232338: User Prompted for Wrong Version of Windows NT CD

	Article: Q232338
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server 4.0, Terminal Server Edition Service Pack 4
	and then try to install DHCP, Remote Access Service, PPTP, and other components,
	the following Setup message may be displayed:
	
	  Please insert the disk labeled 'Windows NT Server CD-ROM' into D:
	
	Instead, the following message should be displayed:
	
	  Please insert the disk labeled 'Windows NT Terminal Server CD-ROM' into D:
	
	CAUSE
	=====
	
	This problem occurs because the [Source Media Descriptions] section in the
	following inf files point to 1= "Windows NT Server CD-ROM", TAGFILE =
	cdrom_s.40
	
	- Oemnadma.inf
	
	- Oemnadtk.inf
	
	- Oemnadtm.inf
	
	- Oemnsvdh.inf
	
	- Oemnsvir.inf
	
	- Oemnsvra.inf
	
	- Oemnsvrp.inf
	
	- Oemnxpdl.inf
	
	- Oemnxppp.inf
	
	- Oemnxptc.inf
	
	- Oemnsvin.inf
	
	The [Source Media Descriptions] should point to 1 = "Windows NT Terminal Server
	CD-ROM", TAGFILE = cdrom_ts.40
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, edit the necessary .inf files for the component you
	are trying to install. To do this:
	
	1. Start any plain text editor, such as Notepad (Notepad.exe).
	
	2. Open the files mentioned above, go to the [Source Media Descriptions}
	  section, and change the following information:
	
	  1= "Windows NT Server CD-ROM", TAGFILE = cdrom_s.40
	
	  to
	
	  1 = "Windows NT Terminal Server CD-ROM", TAGFILE = cdrom_ts.40
	
	3. Save, and then close the file.
	
	The component can now be installed from the Windows NT Terminal Server CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	MORE INFORMATION
	================
	
	If the 'Windows NT Server CD-ROM' is inserted instead of the 'Windows NT
	Terminal Server CD-ROM' the component may appear to be successfully installed
	but may not function properly or could break other components functionality.
	
	The server is attempting to copy the appropriate files from the wrong source
	media.
	
	
	Additional query words: terminalsrv, sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
