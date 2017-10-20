---
layout: page
title: "Q177059: WD97: Err Msg: &quot;Invalid Page Fault&quot; When Inserting a Symbol"
permalink: /kb/177/Q177059/
---

## Q177059: WD97: Err Msg: &quot;Invalid Page Fault&quot; When Inserting a Symbol

{% raw %}

	Article: Q177059
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click Symbol on the Insert menu, you may receive the following error
	message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  application caused an invalid page fault in ATM32.DLL at address.
	
	NOTE: The actual memory address may vary.
	
	WORKAROUND
	==========
	
	To work around this problem, disable Adobe Type Manager. To do this, follow
	these steps:
	
	1. Quit Microsoft Word and all other programs.
	
	2. In Notepad, open the System.ini file, which is located in the Windows
	  folder.
	
	  NOTE: Make a backup copy of the System.ini file before you attempt to make any
	  changes to the file.
	
	3. In the [Boot] section, find the following lines for ATM:
	
	  SYSTEM.DRV=ATMSYS.DRV
	  ATM.SYSTEM.DRV=SYSTEM.DRV
	
	4. In front of each line, type a semicolon (;).
	
	5. On a new line in the [Boot] section, type the following line:
	
	  "SYSTEM.DRV=SYSTEM.DRV" (without the quotation marks)
	
	  NOTE: The [Boot] section of your System.ini file should look similar to the
	  following:
	
	  [Boot]
	  ;SYSTEM.DRV=ATMSYS.DRV
	  ;ATM.SYSTEM.DRV=SYSTEM.DRV
	  SYSTEM.DRV=SYSTEM.DRV
	
	6. Save and close the System.ini file.
	
	7. Restart Windows for your changes to take effect.
	
	For additional informationabout disabling ATM, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q69692 Disabling Adobe Type Manager from Windows
	
	
	STATUS
	======
	
	This problem has been reported to occur when you use the Microsoft products
	listed at the beginning of this article and Adobe Type Manager versions 2.5,
	2.6, 3.0, and 4.0.
	
	MORE INFORMATION
	================
	
	For more information about how to disable, uninstall, or upgrade Adobe Type
	Manager, please contact Adobe Systems, Inc.
	
	For information about how to contact Adobe Systems, Inc., click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q113444 WD: Courier Text Printed with Underline with ATM 2.5 or Later
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: errmsg gpf ipf
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
