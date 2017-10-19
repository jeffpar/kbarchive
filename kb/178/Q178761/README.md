---
layout: page
title: "Q178761: XWEB: Attachments Produce JavaScript Errors in Browser"
permalink: /kb/178/Q178761/
---

## Q178761: XWEB: Attachments Produce JavaScript Errors in Browser

	Article: Q178761
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to open a Microsoft Excel or Microsoft Word attachment in a
	public folder or in an e-mail message from the Outlook Web Access client using
	Internet Explorer (3.02 or 4.x), Internet Explorer starts Excel or Word within
	the browser. Internet Explorer also inserts the following text in the first cell
	or line of the document:
	
	  <script
	  language="JavaScript">top.location='/exchange/logon.asp'</script>
	
	
	WORKAROUND
	==========
	
	For Internet Explorer 3.02 build 1300, the fix is to install Rfc1867.exe by
	installing the Internet Explorer 3.02 File Upload Add-On from Microsoft's Web
	site at http://www.microsoft.com/ie/download/.
	
	Internet Explorer version 4.0 does not show this problem. For Internet Explorer
	version 4.01, you must be running build 4.72.3110.8.or later, which is Internet
	Explorer 4.01 SP1. This is publicly available from http://www.microsoft.com/ie.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: javascript owa word attachment error logon IE 4.01 exclnfaqold
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
