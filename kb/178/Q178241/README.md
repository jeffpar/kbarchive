---
layout: page
title: "Q178241: XCLN: Adobe Acrobat PDFs Encoded in Different Formats"
permalink: /kb/178/Q178241/
---

## Q178241: XCLN: Adobe Acrobat PDFs Encoded in Different Formats

{% raw %}

	Article: Q178241
	Product(s): Microsoft Exchange
	Version(s): 3.1,3.11,4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an Adobe version 1.2 Portable Document Format (PDF) file (created
	by Adobe 3.0 Writer) as an attachment with an Exchange client, the attachment is
	encoded as "quoted printable." However, a version 1.1 PDF file will get encoded
	as "base64."
	
	PDF files (Adobe Portable Document Format) are the format in which documents are
	saved for viewing and transfer by Acrobat Reader and Acrobat Exchange for
	Macintosh and Windows. The encoding from the Microsoft Exchange client is
	determined based on the first 4 KB content of the attachment. Adobe changed the
	format between versions 1.1 and 1.2 PDF files. The 1.1 PDF version is based on
	Base64 encoding; the version 1.2 PDF is based on quoted printable encoding.
	
	If the receiving system is not capable of understanding the "quoted printable"
	encoding, it may cause problems.
	
	WORKAROUND
	==========
	
	If the customer system is incapable of handling "quoted printable" encoding, use
	only version 1.1 PDF files. Another possible solution is to compress the files
	before sending them with a third-party compression utility such as Winzip.
	
	For additional information about workarounds, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q182307 XADM: Text Attachments Appear Corrupted
	
	
	Additional query words: XCLN Adobe PDF Attachments
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : :3.1,3.11,4.0,5.0,8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
