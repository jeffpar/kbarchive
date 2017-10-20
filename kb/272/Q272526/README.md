---
layout: page
title: "Q272526: XCLN: Administration and Forms Tabs Missing from PST Properties"
permalink: /kb/272/Q272526/
---

## Q272526: XCLN: Administration and Forms Tabs Missing from PST Properties

{% raw %}

	Article: Q272526
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the properties for a folder located in Personal Folders, the
	Administration and Forms tabs are missing.
	
	CAUSE
	=====
	
	This issue may occur if you have either manually changed your settings or run a
	custom Setup program. This action may have turned off the Exchange Extensions
	properties page.
	
	RESOLUTION
	==========
	
	To verify that the Exchange Extensions properties page is turned on, follow
	these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Other tab, click the Advanced Options button, and then click the
	  Add-In Manager button.
	
	3. In the Add-In Manager dialog box, confirm that the "Exchange Extensions
	  properties page" has been selected
	
	If the option for the Exchange Extensions properties page is turned off, click to
	select the "Exchange Extensions properties page" check box to turn the default
	setting on.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
