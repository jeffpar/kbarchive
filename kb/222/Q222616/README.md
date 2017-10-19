---
layout: page
title: "Q222616: Unable to Send Attachments by Fax When Source Program Is Open"
permalink: /kb/222/Q222616/
---

## Q222616: Unable to Send Attachments by Fax When Source Program Is Open

	Article: Q222616
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft BackOffice Small Business Server includes both a fax server and the
	Microsoft Outlook e-mail client. You may send faxes with attachments with the
	Outlook client, however, if there is an attachment associated with this fax, you
	may not be able to send the attachment.
	
	CAUSE
	=====
	
	This behavior can occur if the attachment is a file type that uses dynamic data
	exchange (DDE) to print.
	
	RESOLUTION
	==========
	
	To work around this issue, use the Send Fax Utility wizard to send the
	attachment.
	
	MORE INFORMATION
	================
	
	An example of a file type that uses DDE to print is .xls files in Microsoft
	Excel 97. If Excel 97 is running when a fax containing an Excel 97 spreadsheet
	is being faxed, the Send Fax Utility wizard would appear. If Excel 97 is not
	running and a fax containing an Excel 97 spreadsheet is sent, it would be faxed
	without the Send Fax Utility wizard appearing.
	
	The most common programs that use DDE to print are Microsoft Office 97 and
	Microsoft Office 2000 programs. You can identify other file types that use DDE
	to print:
	
	1. Double-click My Computer, click Options on the View menu, and then click the
	  File Types tab.
	
	2. Double click the file type you want to view, double-click the print or
	  printto action, and then note whether the Use DDE check box is selected or
	  not.
	
	Additional query words: smallbiz bof
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
