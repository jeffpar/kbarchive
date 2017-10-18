---
layout: page
title: "Q164927: XCLN: Not All Rich Edit Fields Support File Attachments"
permalink: kb/164/Q164927/
---

## Q164927: XCLN: Not All Rich Edit Fields Support File Attachments

	Article: Q164927
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In a Forms Designer Form for Microsoft Exchange Server, when you click Insert on
	the File menu, all Rich Edit fields appear to support attachments. However, only
	the Rich Edit field that has the reference name MAPI_BODY_CUSTOM supports file
	attachments.
	
	Therefore, if a Rich Edit field that is not using the reference name
	MAPI_BODY_CUSTOM has the focus, and you click Insert on the File menu, the file
	attachment will be inserted into the Rich Edit field that has the reference name
	MAPI_BODY_CUSTOM.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Change the reference name to something other than MAPI_BODY_CUSTOM on the
	  form and reinstall the form. This makes the Insert command on the File menu
	  completely unavailable.
	
	- Have only one Rich Edit field and make the rest of the fields as Plain Entry
	  fields. This makes the Insert command available only when the Rich Edit field
	  has the focus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	and 5.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
