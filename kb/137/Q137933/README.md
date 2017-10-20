---
layout: page
title: "Q137933: &quot;The Port Is Already Open&quot; Starting Microsoft Exchange"
permalink: /kb/137/Q137933/
---

## Q137933: &quot;The Port Is Already Open&quot; Starting Microsoft Exchange

{% raw %}

	Article: Q137933
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Exchange, you may receive the following error message:
	
	  Internet Mail: The port is already open
	
	After you click OK, Microsoft Exchange runs correctly.
	
	You may also receive a "Port already in use" error message when you sign in to
	MSN, The Microsoft Network, and click Yes when you are prompted "You have new
	mail, would you like to read it now?".
	
	CAUSE
	=====
	
	This behavior can occur when you have the Microsoft Fax and Internet Mail
	information services installed in the same profile.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use any one of the following methods:
	
	- Click OK whenever you receive the error message. It may then be necessary to
	  click anywhere in the Microsoft Exchange window to make the Microsoft
	  Exchange window the active window.
	
	- Set up separate profiles for Microsoft Fax and Internet Mail.
	
	- Use the following steps to set the Internet Mail information service so that
	  it does not automatically check for new messages:
	
	  1. In Control Panel, double-click the Mail And Fax icon.
	
	  2. Click Show Profiles.
	
	  3. Click the profile that includes Internet Mail and Microsoft Fax.
	
	  4. Click Internet Mail, and then click Properties.
	
	  5. On the Connection tab, click the "Work offline and use Remote Mail" check
	     box to select it.
	
	  6. Click OK.
	
	  7. If Microsoft Exchange is running, click Exit And Log Off on the File menu.
	
	- If you receive a "Port already in use" error message when you start MSN,
	  remove Microsoft Exchange and Microsoft Fax and then reinstall them with
	  correct settings.
	
	- Move Microsoft Fax to the end of the delivery order. To do so, follow these
	  steps.
	
	  1. In Exchange, click Options on the Tools menu, and then click the Delivery
	     tab.
	
	  2. In the "Recipient addresses are processed by these information services in
	     the following order" box, use the arrow buttons to move Microsoft Fax
	     Transport to the bottom of the list, and then click OK.
	
	  3. Quit and then restart Exchange.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: com service provider ol97 ol98
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
