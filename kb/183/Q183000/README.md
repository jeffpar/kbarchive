---
layout: page
title: "Q183000: WD97: Invalid Page Fault When You Insert Equation Editor Object"
permalink: /kb/183/Q183000/
---

## Q183000: WD97: Invalid Page Fault When You Insert Equation Editor Object

{% raw %}

	Article: Q183000
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbdta word97 kbSysSettings
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a Microsoft Equation Editor object in a Microsoft Word document,
	you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists contact the program vendor.
	
	When you click Details, you receive the following error message:
	
	  Eqnedt32 caused an invalid page fault in module Eqnedt32.exe.
	
	CAUSE
	=====
	
	This problem occurs when you use Microsoft Word 97 with Adobe Type Manager
	Deluxe 4.0.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 Service Release 1 (SR-1) Patch.
	
	To work around this problem until you obtain Word 97 SR-1, temporarily disable
	Adobe Type Manager (ATM) by modifying the System.ini file in the Windows folder.
	To do this, follow these steps:
	
	1. Quit Word and all other active programs.
	
	2. In Microsoft Notepad, open the System.ini file located in the Windows
	  folder.
	
	  NOTE: Make a backup copy of the System.ini file before you attempt to make any
	  changes to the file.
	
	3. In the [Boot] section, find the following lines for ATM:
	
	  SYSTEM.DRV=ATMSYS.DRV
	  ATM.SYSTEM.DRV=SYSTEM.DRV
	
	4. At the start of these lines, type a semicolon (;), so the lines will read:
	
	  ;SYSTEM.DRV=ATMSYS.DRV
	  ;ATM.SYSTEM.DRV=SYSTEM.DRV
	
	5. On a new line in the [Boot] section, type the following line:
	
	  SYSTEM.DRV=SYSTEM.DRV
	
	  NOTE: The [Boot] section of your System.ini should look similar to the
	  following:
	
	  [Boot]
	  ;SYSTEM.DRV=ATMSYS.DRV
	  ;ATM.SYSTEM.DRV=SYSTEM.DRV
	  SYSTEM.DRV=SYSTEM.DRV
	
	6. Save and close the System.ini file.
	
	7. Restart Windows for your changes to take effect.
	
	For additional information about disabling ATM, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q69692 Disabling Adobe Type Manager from Windows
	
	
	MORE INFORMATION
	================
	
	For more information about Adobe Type Manager Deluxe 4.0, please contact Adobe
	Systems Incorporated.
	
	For information about how to contact Adobe Systems Incorporated, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Adobe Type Manager Deluxe 4.0 is manufactured by Adobe Systems Incorporated, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 8.00 ipf equation gp fault general protection
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbdta word97 kbSysSettings 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
