---
layout: page
title: "Q152766: WD: Error Message: &quot;WordMail Initialization Has Failed&quot;"
permalink: kb/152/Q152766/
---

## Q152766: WD: Error Message: &quot;WordMail Initialization Has Failed&quot;

	Article: Q152766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:7.0,7.0a,95,97
	Operating System(s): 
	Keyword(s): kbinterop kbualink97 kbemailkbfaq
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Schedule+ for Windows, versions 7.0, 7.0a 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Exchange, you may receive the following message:
	
	  WordMail initialization has failed. Be sure you have correctly installed
	  Word, or close other applications and try again.
	
	  A disk error occurred during a read operation.
	
	When you click Close, Exchange continues as expected. However, if you click the
	Send button or click New Message on the Compose menu, you will receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	Clicking the Details button presents the following:
	
	  EXCHNG32 caused an invalid page fault in module WORDMAIL.DLL at
	  0137:6e393011.
	
	You will be unable to compose or send e-mail messages in WordMail.
	
	CAUSE
	=====
	
	This problem may be caused by either of the following reasons:
	
	- Your Computer Name contains a '@' character
	
	  -or-
	
	- There was a problem with WordMail installation
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following troubleshooting methods.
	
	Method 1: Remove the @ Sign from the Computer Name
	--------------------------------------------------
	
	To remove the @ sign from the computer name, follow these steps:
	
	1. Right-click the Network Neighborhood icon and click Properties.
	
	2. Click the Identification tab.
	
	3. In the Computer Name box, remove the '@' character from the name of the
	  computer.
	
	4. Click OK and restart the computer.
	
	Method 2: Reinstall WordMail
	----------------------------
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	To reinstall WordMail, follow these steps:
	
	1. Rename or remove the Wordmail folder from the MSOffice\Winword folder for
	  Word 7.0 or the "Program Files\Microsoft Office\Office" folder for Word 97.
	
	2. In Control Panel, click Add/Remove Programs, select Word (or Office) and
	  reinstall Word (or Office if you installed Word using Microsoft Office
	  Setup).
	
	Method 3: Reinstall Microsoft Exchange
	--------------------------------------
	
	Use this method if neither method 1 nor method 2 correct the problem.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	To reinstall Microsoft Exchange, follow these steps:
	
	1. Right-click the Inbox icon on the desktop and click Properties.
	
	  Note all the services listed in the Services tab
	
	2. Check properties for each service and write down the path and server
	  information for each.
	
	3. Close the Properties dialog box.
	
	4. In Control Panel, double-click Add/Remove Programs.
	
	5. Select the Windows Setup tab
	
	6. Remove Microsoft Exchange (Windows 95 CD or disks required).
	
	7. Repeat steps 5 and 6 and add Microsoft Exchange
	
	8. When the Inbox Wizard is started, fill in the information you noted in Steps
	  a and b.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the product versions listed at
	the beginning of this article. This problem was corrected in Microsoft Outlook
	97 for Windows.
	
	
	MORE INFORMATION
	================
	
	WordMail is an optional e-mail editor that can be toggled on and off from in
	Microsoft Exchange. To disable WordMail as your e-mail editor, use the following
	steps:
	
	1. On the Compose Menu, click WordMail Options.
	
	2. Clear the "Enable Word as Email Editor" check box at the bottom of the dialog
	  box.
	
	In most cases, when WordMail is disabled, you will not receive the error message;
	however, disabling WordMail will not correct the problem.
	
	REFERENCES
	==========
	
	For more information about using WordMail, click the Office Assistant (Answer
	Wizard tab in Microsoft Word Help), and type the following text
	
	  WordMail
	
	and then double-click the selected text to go to the desired topic.
	
	Additional query words: word95 initialization email electronic mail
	
	======================================================================
	Keywords          : kbinterop kbualink97 kbemail kbfaq
	Technology        : kbWordSearch kbWin95search kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbWord95 kbWord95a kbSchedule700a
	Version           : WINDOWS:7.0,7.0a,95,97
	
	=============================================================================
	
