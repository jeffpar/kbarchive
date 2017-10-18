---
layout: page
title: "Q147841: Using Microsoft Outlook with MSN Version 2.0"
permalink: kb/147/Q147841/
---

## Q147841: Using Microsoft Outlook with MSN Version 2.0

	Article: Q147841
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,97
	Operating System(s): 
	Keyword(s): kbinteropkbfaq
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook 97 with MSN, The Microsoft Network, version 2.0
	you may, in rare cases, experience incompatibility problems such as:
	
	- Outlook may stop responding (hang) on opening.
	
	- You may get a GP Fault on opening Outlook.
	
	- Sending and receiving mail may not work.
	
	- You may have problems with Remote Mail services.
	
	- You may receive a Fatal Exception Error 06 while in a session with MSN or
	  following a session with MSN.
	
	CAUSE
	=====
	
	Microsoft Outlook 97 is designed to work with MSN version 1.3. MSN version 2.0
	was released after Outlook 97.
	
	RESOLUTION
	==========
	
	In some cases, MSN version 2.0 will work with Outlook if it is installed and
	working properly before installing Outlook. Please see the "More Information"
	section later in this article for instructions on how to remove and reinstall
	both products.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	To remove Outlook 97, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the Add/Remove Programs icon.
	
	3. In the Add/Remove Programs Properties dialog box, click either Microsoft
	  Outlook 97 or Microsoft Office 97.
	
	4. Click the Add/Remove button.
	
	5. If you clicked Outlook, click the Remove All button. If you clicked Office,
	  click the Add/Remove button and click to clear the Microsoft Outlook check
	  box.
	
	6. Click Continue.
	
	7. In the Remove Shared Components box, you can click Keep to retain your
	  current mail settings, or you can click Remove to remove Windows Messaging.
	
	To remove MSN 2.0, follow these steps:
	
	1. From the Help folder on the MSN CD-ROM, run the uninstall program
	  (Uninst.exe) and ignore the Reboot option.
	
	2. In Control Panel, double-click Add/Remove Programs.
	
	3. Remove the MSN components in the following order:
	   - MSN Optional Controls
	
	   - MSN Program Viewer
	
	   - MSN Program Viewer Controls
	
	   - Any other MSN components
	
	4. Restart Windows 95.
	
	Reinstall MSN 2.0 and make sure it is operational. Then reinstall Outlook 97.
	Start Outlook by clicking its icon on the desktop.
	
	If the problem persists, try starting Outlook using the MSN Viewer by clicking
	the MSN icon on the desktop, clicking Communicate, and clicking "start e-mail."
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161656 OL97: Unexpected Logon Screen When Starting Outlook
	
	  Q161973 OL97: Troubleshooting Outlook Configuration Problems
	
	  Q151708 XCLN: Page Fault in Mprexe.exe When Starting Client
	
	  Q155691 "Fatal Exception Error 06" with Sharp Mebius
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbfaq
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook97Search kbZNotKeyword3 kbMSN200
	Version           : WINDOWS:2.0,97
	
	=============================================================================
	
