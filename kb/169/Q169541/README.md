---
layout: page
title: "Q169541: WD97: Multiple Cover Pages Sent When Using Fax Wizard"
permalink: /kb/169/Q169541/
---

## Q169541: WD97: Multiple Cover Pages Sent When Using Fax Wizard

{% raw %}

	Article: Q169541
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:95,97
	Operating System(s): 
	Keyword(s): kbinterop kbusage winword word97
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a document to a fax recipient from Microsoft Word, the recipient
	may receive multiple fax cover sheets with each faxed document.
	
	CAUSE
	=====
	
	Cover sheets are being sent both from Word and from the fax.
	
	WORKAROUND
	==========
	
	To work around this problem, specify to send the fax cover sheet from only one
	program. Use one of the following methods to turn off the fax cover sheet
	option.
	
	Method 1: To Turn the Fax Cover Sheet Option Off in Microsoft Word
	------------------------------------------------------------------
	
	1. Use either of the following methods to activate the Fax Wizard:
	
	   - On the File menu, point to Send To, and then click Fax Recipient.
	
	  -or-
	
	   - Click New on the File menu, click the Letters & Faxes tab, and
	     double-click the Fax Wizard.
	
	2. In the Fax Wizard, click Next.
	
	3. When you receive the following prompt
	
	  Which document do you want to send?
	
	  click to select the "Without a cover sheet" check box.
	
	4. Click Next to finish the Fax Wizard.
	
	Method 2: To Turn Off the Fax Cover Sheet Option from the Fax Software
	----------------------------------------------------------------------
	
	See the fax software documentation to find out how to disable the fax cover
	sheet. If you are using Microsoft Fax, use the following steps:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click the Mail And Fax icon.
	
	3. On the Services tab, click Microsoft Fax, and then click Properties.
	
	4. In the Default Cover Page section, click to clear the Send Cover Page check
	  box, and then click OK.
	
	
	MORE INFORMATION
	================
	
	When you use the Fax Wizard, if you click to select "With a cover sheet," Word
	will send one fax cover sheet with the document you fax. The fax cover sheet is
	a separate document from the Word document you are faxing. Therefore, in the fax
	session from Word, you are sending two separate documents that will be faxed
	during the fax session. Since the cover sheet and the document are separate
	documents, the Fax wizard will transmit them separately. It will dial, connect
	and transmit the cover sheet, then disconnect, redial and connect again, then
	transmit the document. The Fax Wizard connects to the receiving fax twice. The
	only way to prevent this is to not select "With a cover sheet" from the Fax
	Wizard.
	
	When you use Microsoft Fax or another application as your fax service transport,
	you have an option to include one fax cover page for each document you fax.
	
	Your fax software will send a cover page because you selected the Send Cover Page
	option. It will also send a cover page for each of the documents you are sending
	from Word--the cover sheet specified in the Fax Wizard and a cover page for the
	Word document. You will actually send three fax cover pages with the Word
	document.
	
	Additional query words: winfax satisfaxion coversheet
	
	======================================================================
	Keywords          : kbinterop kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:95,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
