---
layout: page
title: "Q195338: FreeDoc Feature Not Supported In Outlook Web Access"
permalink: /kb/195/Q195338/
---

## Q195338: FreeDoc Feature Not Supported In Outlook Web Access

	Article: Q195338
	Product(s): Microsoft Exchange
	Version(s): 4.0 SP5,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP5, 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can drag and drop a file from a folder directly into a public folder without
	attaching it to a post message through the Outlook client. This type of item is
	called a FreeDoc. When some types of these FreeDoc files are viewed through the
	Outlook Web Access client (OWA), the file may or may not open correctly.
	
	The Microsoft Exchange Server Outlook Web Access component is not currently
	designed to support this type of FreeDoc file, so you may see mixed results
	depending on the type of FreeDoc you are trying to open. Some items such as
	Microsoft Word documents or Microsoft Excel worksheets may open correctly, but
	other attachments may not open successfully from the OWA client.
	
	If you try to open an Adobe Acrobat PDF file or other FreeDocs, you may receive
	an error message and the file may not open successfully. This is currently a
	design limitation of the Outlook Web Access component.
	
	WORKAROUND
	==========
	
	To work around this problem, use an Exchange or Outlook client to view the file,
	or save it to disk before you attempt to open it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you are using the OWA client and you cannot open the FreeDoc from the public
	folder directly, then try to save the file to your local computer and try to
	open the file from the disk. If you cannot save the file to disk, you can try a
	different browser or go to an Outlook client and save the file. Then you can
	open the file with the correct application.
	
	For example, if an Adobe Acrobat PDF file is used in this manner and you
	double-click the file to open it, a new browser window will appear with a small
	red, blue, and yellow icon in the top left corner. If you move your mouse
	pointer over the top of this window, a pop-up Help message will appear prompting
	you to click for more information. When you click on the window, it will open an
	Error Locating Object Handler dialog box displaying the following message:
	
	  There is no viewer available for the type of object you are trying to
	  open. The following information is available about this object:
	
	  Address of object:
	  http://servername/exchange/forms/IPM/DOCUMENT/frmRoot.asp?index=
	  0obj=000000001A447390AA6611CD9B
	
	  Content type: application/octet-stream
	
	  Possible location of viewer: Microsoft ActiveX Gallery
	
	  Do you want to go to this location to download a viewer for this type of
	  object?"
	
	You can then select one of two options; Yes or No.
	
	Additional query words: XCLN XWEB OWA PF
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchange400SP5
	Version           : :4.0 SP5,5.5
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
