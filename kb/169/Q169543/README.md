---
layout: page
title: "Q169543: WD97: Cover Sheet Missing When Merging to Fax"
permalink: /kb/169/Q169543/
---

## Q169543: WD97: Cover Sheet Missing When Merging to Fax

{% raw %}

	Article: Q169543
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbother kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge to electronic fax using Microsoft Fax or some
	other fax software, a cover page is not sent with each fax.
	
	CAUSE
	=====
	
	Your fax software is not set up to send a cover page.
	
	RESOLUTION
	==========
	
	Before you perform the mail merge in Word, turn on the cover page option in your
	fax software. See your fax software documentation for instructions about how to
	do this.
	
	If you are using Microsoft Fax, use these steps to select the Send Cover Page
	option:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click the Mail And Fax icon.
	
	3. On the Services tab, click Microsoft Fax, and then click Properties.
	
	4. On the Message tab, under Default Cover Page, click to select the Send Cover
	  Page check box, and then click OK.
	
	  NOTE: You can select which cover page you want to include with your fax.
	
	5. Click OK to close the Properties dialog box.
	
	STATUS
	======
	
	This functionality is by design. Microsoft Word cannot provide a cover sheet
	when you perform a mail merge. Microsoft Fax, or any other fax software, must
	provide the fax cover sheet.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q152196 How to Install and Use Microsoft Fax
	
	  Q160746 How to Get Windows 95 Fax Service to Work with Outlook Windows 98
	  Users.
	
	  Q187549 Microsoft Fax Does Not Appear in Add/Remove Programs
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbinterop kbother kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
