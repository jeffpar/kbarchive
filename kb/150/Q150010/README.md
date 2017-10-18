---
layout: page
title: "Q150010: XCLN: MS Mail Service May Not be Available for Win3.x Clients"
permalink: kb/150/Q150010/
---

## Q150010: XCLN: MS Mail Service May Not be Available for Win3.x Clients

	Article: Q150010
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Windows 3.x client for Microsoft Exchange is installed, it appears that
	the MS Mail service is unavailable. If a complete installation of the client is
	performed without following the procedures below, the MS Mail service will not
	be available when configuring the Microsoft Exchange client profile.
	
	MORE INFORMATION
	================
	
	The MS Mail service is not selected for installation by default. Use the
	following procedures to specify installation of the MS Mail service:
	
	CD-ROM Installation
	-------------------
	
	1. Select Custom Installation
	
	2. Highlight the Microsoft Exchange component, then select the Change Option
	  button.
	
	3. Highlight the Information Services component, then select the Change Option
	  button.
	
	4. Select the Microsoft Mail component for installation. (This box is cleared by
	  default)
	
	Shared Network Installation
	---------------------------
	
	1. From the Microsoft Exchange Server, select Microsoft Exchange Setup Editor
	  from the Microsoft Exchange program group.
	
	2. From the File menu, select Client Installation Point.
	
	3. Select the drive and directory where the shared installation files are
	  located.
	
	4. From the File menu, select Modify Setup Program Options.
	
	5. From the Setup Program Options dialog, select the Services tab.
	
	6. Select Microsoft Mail from the Available on the Server column, select the Add
	  button, and verify that the Microsoft Mail service is checked in the To be
	  installed on the client column.
	
	7. Subsequent client installations will now include the MS Mail service by
	  default.
	
	For additional information regarding the Setup Editor, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q147500 XCLN: Microsoft Exchange Shared Client Setup
	
	Additional query words: Mail missing profile sfs pcmail faq
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
