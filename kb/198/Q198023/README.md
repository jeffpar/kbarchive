---
layout: page
title: "Q198023: XWEB: OWA Does Not Include DPA as an Authentication Option"
permalink: /kb/198/Q198023/
---

## Q198023: XWEB: OWA Does Not Include DPA as an Authentication Option

{% raw %}

	Article: Q198023
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Outlook Web Access (OWA) to log on using Distributed Password
	Authentication (DPA) as the authentication method you will get the following
	error:
	
	  You do not have access permissions for this URL.
	  Your membership has been verified, but you do not have permissions to
	  access the URL you requested. Contact the service provider that
	  maintains your membership for this site.
	
	CAUSE
	=====
	
	In Exchange Server 5.5, the support for DPA with OWA was not implemented. The
	hotfix described below also changes the options page so that the change password
	button is not displayed if the user is logged on using DPA.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Outlook Web Access
	
	  File Name      Size     Date
	  --------------------------------
	  Constant.inc    2,940   12/10/98
	  Logon.inc       8,250   12/10/98
	  Set.asp        18,960   12/10/98
	
	The above files need to be installed in the following locations:
	
	- Copy Constant.inc to your server's Exchsrvr\Webdata\USA folder.
	
	- Copy Logon.inc to your server's Exchsrvr\Webdata\USA\Lib folder.
	
	- Copy Set.asp to your server's Exchsrvr\Webdata\USA\Options folder.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5.
	
	Additional query words: OWA DPA
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
