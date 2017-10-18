---
layout: page
title: "Q191217: XWEB: VBScript Runtime Error 800a03e3 Using Outlook Web Access"
permalink: kb/191/Q191217/
---

## Q191217: XWEB: VBScript Runtime Error 800a03e3 Using Outlook Web Access

	Article: Q191217
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to Microsoft Exchange Server using the Outlook Web
	Access (OWA) client, the following error message may appear:
	
	  Error '800a03e3'
	  Unknown runtime error
	  /exchange/USA/lib/session.inc, line 104
	
	CAUSE
	=====
	
	There are two possible causes. Corrupt components in the installation of OWA on
	the Exchange Server computer may cause this error to occur. Also, if Exchange is
	installed on a member server rather than a Primary Domain Controller (PDC) or
	Backup Domain Controller (BDC), using Windows NT Challenge/Response
	authentication on the Internet Information Server (IIS) computer may cause this
	to occur.
	
	WORKAROUND
	==========
	
	- If the first cause is the problem, reinstall the OWA component from the
	  Exchange Server CD to correct any damaged components.
	
	- If the second cause is the problem, clear (uncheck) Windows NT
	  Challenge/Response authentication on the IIS computer. To do so:
	
	  1. In Internet Information Service Microsoft Management Console (MMC), click
	     the default Web site.
	
	  2. Select the Exchange Server virtual directory, and on the Actions menu,
	     click Properties, and click the Directory Security tab.
	
	  3. Click Edit in the Anonymous Access and Authentication control box. Here
	     you can select or clear the authentication methods used by the virtual
	     directory. Clear the Windows NT Challenge Response check box.
	
	  4. Click OK back to the MMS console.
	
	  5. Stop and restart the WWW service, either through the MMC, or in the
	     Services tool in Control Panel to allow the change to take effect.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
